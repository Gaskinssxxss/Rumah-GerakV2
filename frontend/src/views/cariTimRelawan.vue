<template>
    <div class="max-w-4xl mx-auto p-4">
        <h1 class="text-4xl font-bold mb-4 font-Karantina uppercase">Cari Tim Relawan</h1>
        <form @submit.prevent="searchTimRelawan" class="mb-6">
            <div class="mb-4">
                <label for="kecamatan" class="block text-sm font-medium text-gray-700">Kecamatan:</label>
                <select id="kecamatan" v-model="selectedKecamatan" @change="updateKelurahanOptions"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option disabled value="">Pilih Kecamatan</option>
                    <option v-for="(options, kecamatan) in kelurahanOptions" :key="kecamatan" :value="kecamatan">
                        {{ kecamatan }}
                    </option>
                </select>
            </div>
            <div class="mb-4">
                <label for="kelurahan" class="block text-sm font-medium text-gray-700">Kelurahan:</label>
                <select id="kelurahan" v-model="selectedKelurahan"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option disabled value="">Pilih Kelurahan</option>
                    <option v-for="kelurahan in currentKelurahanOptions" :key="kelurahan" :value="kelurahan">
                        {{ kelurahan }}
                    </option>
                </select>
            </div>
            <div class="flex justify-end pl-2">
                <div class="bg-black rounded-md">
                    <button type="submit"
                        class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                        Cari
                    </button>
                </div>
            </div>
        </form>

        <div v-if="results.length > 0" class="bg-white shadow overflow-hidden sm:rounded-md">
            <p class="mt-4 text-lg pl-4">Total Relawan: <strong>{{ totalRelawan }}</strong></p>
            <div v-for="tim in results" :key="tim._id"
                class="flex justify-between font-Karantina uppercase text-2xl space-y-4 border-y-2 py-2">
                <div class="px-4 py-2 border-gray-200">
                    <span class="font-semibold">Nama Tim : {{ tim.namatim }}</span> - <span>{{ tim.kecamatan }}, {{
                        tim.kelurahan
                    }} <span> - {{ tim.totalanggota + 1 }}</span></span>
                </div>
                <div class="pr-6">
                    <div class="bg-black rounded-md">
                        <button @click="datas(tim._id)"
                            class="bg-gray-200 hover:bg-gray-400 border-2 border-black rounded-md px-2 py-1 transition-transform duration-300 ease-linear transform -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                            <h1 class="uppercase">Data Lengkap</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="mt-4">
            <p class="text-sm text-gray-500">Tidak ada hasil yang ditemukan.</p>
        </div>
        <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
            <div class="relative top-20 mx-auto p-2 border w-96 shadow-lg rounded-md bg-white">
                <div class="mt-3 text-start">
                    <div class="mt-2 px-4 py-3">
                        <p><strong>Nama Tim:</strong> {{ selectedTimData.namatim }}</p>
                        <p><strong>No Hp Ketua:</strong> {{ selectedTimData.hp }}</p>
                        <p><strong>Kecamatan:</strong> {{ selectedTimData.kecamatan }}</p>
                        <p><strong>Kelurahan:</strong> {{ selectedTimData.kelurahan }}</p>
                        <p><strong>Total Anggota:</strong> {{ selectedTimData.totalanggota + 1 }}</p>
                        <div class="mt-4">
                            <h4 class="font-bold">Daftar Anggota:</h4>
                            <div v-for="anggota in selectedTimData.anggota" :key="anggota._id">
                                <div>
                                    Nama : {{ anggota.namaAnggota }}
                                </div>
                                <div>
                                    No HP : {{ anggota.noHp }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between px-4 pt-2 pb-4">
                        <div class="flex justify-between">
                            <div class="bg-black rounded-md">
                                <button @click="showModal = false"
                                    class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                    Tutup
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="bg-black rounded-md">
                                <button
                                    @click="updateTimRelawanStatus(selectedTimData._id, 'success', selectedTimData.hp)"
                                    class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                    Konfirmasi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showMessagePopups" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 class="text-xl font-bold mb-4">Masukkan Pesan untuk Relawan</h2>
            <textarea v-model="messagex" placeholder="Masukkan pesan untuk relawan..."
                class="w-full h-32 mb-4 border border-gray-300 rounded-lg p-2"></textarea>
            <div class="pb-6 space-y-2">
                <h1>Link Group Relawan : https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                </h1>
                <h1>Link Group Tim Relawan :
                    https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                </h1>
            </div>
            <div class="flex justify-end space-x-4">
                <button @click="sendMessagex"
                    class="bg-nasdem hover:bg-blue-500 text-white px-4 py-2 rounded-lg">Kirim</button>
                <button @click="closePopup" class="bg-gray-500 text-white px-4 py-2 rounded-lg">Batal</button>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';
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
    data() {
        return {
            kelurahanOptions: {
                'Asakota': ['Melayu', 'Jatiwangi', 'Jatibaru', 'Jatibaru Timur', 'Kolo', 'Ule'],
                'Rasanae Barat': ['Tanjung', 'Paruga', 'Sarae', 'Nae', 'Pane', 'Dara'],
                'Rasanae Timur': ['Kumbe', 'Lampe', 'Oi Fo’o', 'Kodo', 'Dodu', 'Lelamase', 'Nungga', 'Oimbo'],
                'Raba': ['Rontu', 'Penaraga', 'Penanae', 'Rite', 'Rabangodu Utara', 'Rabangodu Selatan', 'Rabadompu Timur', 'Rabadompu Barat', 'Ntobo', 'Kendo', 'Nitu'],
                'Mpunda': ['Sambinae', 'Panggi', 'Monggonao', 'Manggemaci', 'Penatoi', 'Lewirato', 'Sadia', 'Mande', 'Santi', 'Matakando']
            },
            selectedKecamatan: '',
            selectedKelurahan: '',
            currentKelurahanOptions: [],
            results: [],
            totalRelawan: 0,
            showModal: false,
            selectedTimId: null,
            selectedTimData: null,
            token: '',
            showMessagePopups: false,
            selectedRelawanId: '',
            selectedRelawanHp: '',
            messagex: '',
            timrelawan: ''
        };
    },
    methods: {
        closePopup() {
            this.showMessagePopups = false
        },
        async fetchRelawans() {
            try {
                const res = await api.get('timrelawan');
                const ressData = decryptData(res.data);

                try {
                    const parsedDatas = JSON.parse(ressData).data.map(item => item);

                    this.timrelawan = parsedDatas;
                } catch (error) {
                    console.error('Error processing data:', error);
                }
            } catch (err) {
                console.error('Error fetching relawan data', err);
            }
        },
        async fetchTimToken(id) {
            try {
                const res = await api.get(`/timrelawan/${id}`);
                const decData = decryptData(res.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            const timrelawan = parsedData.data;
                            if (timrelawan) {
                                this.token = timrelawan.token;
                                this.messagex = `Selamat Anda Telah Terverifikasi Sebagai Relawan. Silahkan Bergabung pada Grup Ini : . Catatan "Tolong Simpan Baik-Baik token anda : *${this.token}*, Karena Akan Digunakan Untuk Beberapa Fitur Terkait Relawan.`;
                            }
                        } else {
                            console.log('error');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        },
        async updateTimRelawanStatus(id, status, hp) {
            try {
                const response = await api.put(`/timrelawan/${id}`, { status });
                console.log(response);
                this.fetchRelawans();

                if (status === 'success') {
                    await this.fetchTimToken(id);
                    this.showMessagePopups = true;
                    this.selectedTimData._id = id;
                    this.selectedTimData.hp = hp;
                }

            } catch (err) {
                console.error('Error updating tim relawan status', err);
            }
        },
        async sendBroadcastMessage(hp, message) {
            try {
                const verifikasi = await api.get('verifikasiqr');
                if (verifikasi.data.message == "connected") {
                    const response = await api.post(`confirm/timrelawan/${hp}`, { message });
                    console.log(response);
                    alert("Pesan Berhasil DiKirim!");
                    this.message = '';
                } else {
                    alert("Harap Connect Bot Terlebih Dahulu!");
                }
            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        sendMessagex() {
            this.sendBroadcastMessage(this.selectedTimData.hp, this.messagex);
            this.closePopup();
        },
        async datas(timId) {
            this.showModal = true;
            this.selectedTimId = timId;
            await this.fetchTimData(timId);
        },
        async fetchTimData(timId) {
            try {
                const response = await api.get(`timrelawan/${timId}`);
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.selectedTimData = parsedData.data;
                        } else {
                            console.log('error');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error fetching team data:', error);
                this.selectedTimData = null;
            }
        },
        updateKelurahanOptions() {
            this.currentKelurahanOptions = this.kelurahanOptions[this.selectedKecamatan] || [];
            this.selectedKelurahan = '';
        },
        async searchTimRelawan() {
            try {
                const response = await api.get('/search', {
                    params: {
                        kecamatan: this.selectedKecamatan,
                        kelurahan: this.selectedKelurahan
                    }
                });
                this.results = response.data;
                await this.fetchTotalRelawan();
            } catch (error) {
                console.error('Error:', error);
                this.results = [];
                this.totalRelawan = 0;
            }
        },
        async fetchTotalRelawan() {
            try {
                const response = await api.get('/search/total', {
                    params: {
                        kecamatan: this.selectedKecamatan,
                        kelurahan: this.selectedKelurahan
                    }
                });
                this.totalRelawan = response.data.total;
            } catch (error) {
                console.error('Error fetching total:', error);
                this.totalRelawan = 0;
            }
        }
    }
};
</script>