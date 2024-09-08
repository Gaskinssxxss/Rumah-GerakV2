<template>
    <div class="overflow-y-auto h-[33.4rem] w-[60rem] font-Jet font-medium text-base uppercase">
        <div class="grid grid-cols-3 gap-x-10 pl-2">
            <div v-for="board in boards" :key="board._id" class="pt-4">
                <div class="bg-black">
                    <div class="border-2 border-black bg-gray-200 relative -top-2 -left-2 px-4 py-4">
                        <h2 class="text-base font-extrabold font-Jet pt-2">Agenda : {{ board.judul }}</h2>
                        <h2 class="text-base font-extrabold font-Jet">Tanggal : {{ board.tanggal }}</h2>
                        <h2 class="text-base font-extrabold font-Jet mb-2">Jam : {{ board.jam }}</h2>
                        <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                            <img :src="getFullImgPath(board.img)" alt="Artikel Image"
                                class="w-full max-h-44 object-cover" />
                        </div>
                        <div class="flex justify-center space-x-4 pt-4">
                            <div class="bg-black rounded-md">
                                <button @click="selectBoard(board); sendBroadcast()"
                                    class="bg-gray-200 rounded-md hover:bg-gray-400 text-black  transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 border-2 font-Karantina font-bold text-2xl uppercase border-black px-4 py-2">
                                    Broadcast Informasi
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';
import boardApi from '@/services/boardApi';
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
            boards: [],
            selectedBoard: null,
            img: null,
        };
    },
    mounted() {
        this.fetchArtikels();
    },
    methods: {
        async sendBroadcast() {
            if (!this.selectedBoard) {
                alert('Pilih board terlebih dahulu!');
                return;
            }
            try {
                const verifikasi = await api.get('verifikasiqr');
                if (verifikasi.data.message == "connected") {
                    const newMessage = `
Salam Perjuangan Semua Relawan.

Agenda Terkini:
*${this.selectedBoard.judul}*
Tanggal: ${this.selectedBoard.tanggal}
Jam: ${this.selectedBoard.jam}
Lokasi: ${this.selectedBoard.tempat}

Dukung Dan Ramaiakan, Demi Kota Baru Yang Lebih Sejahtera 
                `.replace(/(\r\n|\n|\r)/gm, '<br>');

                    const response = await api.post('broadcast', { message: newMessage });
                    console.log(response);
                    alert("Pesan Berhasil DiKirim!");
                } else {
                    alert("Harap Connect Bot Terlebih Dahulu!");
                }
            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        // Metode ini dapat digunakan untuk memilih board
        selectBoard(board) {
            this.selectedBoard = board;
        },
        fetchArtikels() {
            boardApi.getAll()
                .then(response => {
                    const decData = decryptData(response.data);

                    if (decData) {
                        try {
                            const parsedData = JSON.parse(decData);
                            if (Array.isArray(parsedData.data)) {
                                this.boards = parsedData.data;
                            } else {
                                return;
                            }
                        } catch (error) {
                            return;
                        }
                    } else {
                        return;
                    }
                })
                .catch(error => {
                    console.error('Error fetching boards:', error);
                });
        },
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
    },
};
</script>