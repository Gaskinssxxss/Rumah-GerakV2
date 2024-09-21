<template>
    <div class="font-Karantina text-2xl font-bold space-x-6">
        <label for="kecamatan">Pilih Kecamatan:</label>
        <select id="kecamatan" v-model="selectedKecamatan" @change="fetchDataAndCreateChart"
            class="border-2 border-black">
            <option value="">Semua Kecamatan</option>
            <option v-for="kecamatan in kecamatans" :key="kecamatan" :value="kecamatan">{{ kecamatan }}</option>
        </select>

        <label for="periode">Pilih Periode:</label>
        <select id="periode" v-model="selectedPeriode" @change="fetchDataAndCreateChart" class="border-2 border-black">
            <option value="tanggal">Per Tanggal</option>
            <option value="minggu">Per Minggu</option>
        </select>

        <canvas id="myLineChart"></canvas>
    </div>
</template>


<script>
import api from '@/services/api';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
import CryptoJS from 'crypto-js';

const secretKey = 'c8h2NdW7oE9kJ4r5bT8vF1gP3yS6wL7n';

const decryptData = (encryptedData) => {
    try {
        const iv = CryptoJS.enc.Hex.parse(encryptedData.iv);
        const encrypted = CryptoJS.enc.Hex.parse(encryptedData.data);
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: encrypted },
            CryptoJS.enc.Utf8.parse(secretKey),
            { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
        );
        const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
        return decryptedString;
    } catch (error) {
        console.error("Error during decryption:", error);
        return;
    }
};

export default {
    name: 'RelawanChart',
    data() {
        return {
            chart: null,
            kecamatans: [],
            selectedKecamatan: '',
            selectedPeriode: 'tanggal',
        };
    },
    mounted() {
        this.fetchDataAndCreateChart();
    },
    methods: {
        fetchDataAndCreateChart() {
            api.get('relawan')
                .then(response => {
                    const decData = decryptData(response.data);

                    if (decData) {
                        try {
                            const parsedData = JSON.parse(decData);
                            if (Array.isArray(parsedData.data)) {
                                const data = parsedData.data;
                                if (Array.isArray(data)) {
                                    setTimeout(() => {
                                        this.kecamatans = [...new Set(data.map(relawan => relawan.kecamatan))];
                                    }, 5000);

                                    this.createChart(data);
                                } else {
                                    console.error('Expected an array, but received:', data);
                                    // Handle the case where the data is not an array (e.g., show an error message)
                                }
                            } else {
                                return;
                            }
                        } catch (error) {
                            return;
                        }
                    } else {
                        return;
                    }
                    // const data = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        createChart(data) {
            if (this.selectedKecamatan) {
                data = data.filter(relawan => relawan.kecamatan === this.selectedKecamatan);
            }

            const ctx = document.getElementById('myLineChart').getContext('2d');

            if (this.selectedPeriode === 'minggu') {
                this.createWeeklyChart(ctx, data);
            } else {
                this.createDailyChart(ctx, data);
            }
        },
        createDailyChart(ctx, data) {
            const dailyData = {};
            data.forEach(relawan => {
                const date = new Date(relawan.tanggal).toISOString().split('T')[0];
                if (!dailyData[date]) {
                    dailyData[date] = 0;
                }
                dailyData[date]++;
            });

            const dates = Object.keys(dailyData).sort();
            const counts = dates.map(date => dailyData[date]);

            if (this.chart) {
                this.chart.destroy();
            }

            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Jumlah Relawan per Tanggal',
                        data: counts,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += context.parsed.y;
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Tanggal'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Jumlah Relawan'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        createWeeklyChart(ctx, data) {
            function getStartOfWeek(date) {
                const start = new Date(date);
                const day = start.getDay() || 7;
                if (day !== 1) {
                    start.setHours(-24 * (day - 1));
                }
                return start;
            }

            const weeklyData = {};
            data.forEach(relawan => {
                const date = new Date(relawan.tanggal);
                const weekStart = getStartOfWeek(date).toISOString().split('T')[0];
                if (!weeklyData[weekStart]) {
                    weeklyData[weekStart] = 0;
                }
                weeklyData[weekStart]++;
            });

            const weeks = Object.keys(weeklyData).sort();
            const counts = weeks.map(week => weeklyData[week]);

            if (this.chart) {
                this.chart.destroy();
            }

            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: weeks,
                    datasets: [{
                        label: 'Jumlah Relawan per Minggu',
                        data: counts,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += context.parsed.y;
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Minggu'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Jumlah Relawan'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
};
</script>
