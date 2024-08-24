<template>
    <div class="font-Karantina text-2xl font-bold space-x-6">
        <label for="kecamatan">Pilih Kecamatan : </label>
        <select id="kecamatan" v-model="selectedKecamatan" @change="fetchDataAndCreateChart"
            class="border-2 border-black">
            <option value="">Semua Kecamatan</option>
            <option v-for="kecamatan in kecamatans" :key="kecamatan" :value="kecamatan">{{ kecamatan }}</option>
        </select>

        <label for="periode">Pilih Periode : </label>
        <select id="periode" v-model="selectedPeriode" @change="fetchDataAndCreateChart" class="border-2 border-black">
            <option value="tanggal">Per Tanggal</option>
            <option value="minggu">Per Minggu</option>
        </select>

        <canvas id="myLineCharts"></canvas>
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
            selectedPeriode: 'tanggal', // Default periode adalah per tanggal
        };
    },
    mounted() {
        this.fetchDataAndCreateChart();
    },
    methods: {
        fetchDataAndCreateChart() {
            api.get('timrelawan')
                .then(response => {
                    const decData = decryptData(response.data);

                    if (decData) {
                        try {
                            const parsedData = JSON.parse(decData);
                            if (Array.isArray(parsedData.data)) {
                                const data = parsedData.data;
                                // Check if the data is an array
                                if (Array.isArray(data)) {
                                    setTimeout(() => {
                                        this.kecamatans = [...new Set(data.map(relawan => relawan.kecamatan))];
                                    }, 3000);

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
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }

            if (this.selectedKecamatan) {
                data = data.filter(relawan => relawan.kecamatan === this.selectedKecamatan);
            }

            const ctx = document.getElementById('myLineCharts').getContext('2d');

            if (this.selectedPeriode === 'minggu') {
                this.createWeeklyChart(ctx, data);
            } else {
                this.createDailyChart(ctx, data);
            }
        },
        createDailyChart(ctx, data) {
            const dailyData = {};
            data.forEach(relawan => {
                const date = new Date(relawan.tanggal);
                if (!isNaN(date)) { // Memastikan bahwa tanggal valid
                    const formattedDate = date.toISOString().split('T')[0];
                    if (!dailyData[formattedDate]) {
                        dailyData[formattedDate] = {
                            count: 0,
                            details: []
                        };
                    }
                    dailyData[formattedDate].count += relawan.totalanggota;
                    dailyData[formattedDate].details.push({
                        namatim: relawan.namatim,
                        namaketua: relawan.namaketua,
                        hp: relawan.hp,
                        kecamatan: relawan.kecamatan,
                        kelurahan: relawan.kelurahan,
                    });
                } else {
                    console.error(`Invalid date encountered: ${relawan.tanggal}`);
                }
            });

            const dates = Object.keys(dailyData).sort();
            const counts = dates.map(date => dailyData[date].count);
            const details = dates.map(date => dailyData[date].details);

            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Jumlah Anggota Relawan per Tanggal',
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
                                },
                                afterLabel: function (context) {
                                    const dateIndex = context.dataIndex;
                                    const detailList = details[dateIndex];
                                    return detailList.map(detail => `Nama Tim: ${detail.namatim}\nNama Ketua: ${detail.namaketua}\nHP: ${detail.hp}\nKecamatan: ${detail.kecamatan}\nKelurahan: ${detail.kelurahan}`).join('\n');
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
                                text: 'Jumlah Anggota Relawan'
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
                const day = start.getDay();
                const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is sunday
                start.setDate(diff);
                start.setHours(0, 0, 0, 0); // Set time to 00:00:00
                return start;
            }

            const weeklyData = {};
            data.forEach(relawan => {
                const date = new Date(relawan.tanggal);
                if (!isNaN(date)) { // Memastikan bahwa tanggal valid
                    const weekStart = getStartOfWeek(date).toISOString().split('T')[0];
                    if (!weeklyData[weekStart]) {
                        weeklyData[weekStart] = {
                            count: 0,
                            details: []
                        };
                    }
                    weeklyData[weekStart].count += relawan.totalanggota;
                    weeklyData[weekStart].details.push({
                        namatim: relawan.namatim,
                        namaketua: relawan.namaketua,
                        hp: relawan.hp,
                        kecamatan: relawan.kecamatan,
                        kelurahan: relawan.kelurahan,
                    });
                } else {
                    console.error(`Invalid date encountered: ${relawan.tanggal}`);
                }
            });

            const weeks = Object.keys(weeklyData).sort();
            const counts = weeks.map(week => weeklyData[week].count);
            const details = weeks.map(week => weeklyData[week].details);

            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: weeks,
                    datasets: [{
                        label: 'Jumlah Anggota Relawan per Minggu',
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
                                },
                                afterLabel: function (context) {
                                    const weekIndex = context.dataIndex;
                                    const detailList = details[weekIndex];
                                    return detailList.map(detail => `Nama Tim: ${detail.namatim}\nNama Ketua: ${detail.namaketua}\nHP: ${detail.hp}\nKecamatan: ${detail.kecamatan}\nKelurahan: ${detail.kelurahan}`).join('\n');
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
                                text: 'Jumlah Anggota Relawan'
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