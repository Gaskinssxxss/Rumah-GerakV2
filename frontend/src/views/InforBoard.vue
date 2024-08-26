<template>
    <div class="font-Karantina text-2xl font-extrabold uppercase px-4 py-8">
        <div>
            <div class="bg-che text-gray-200 border-2 border-black py-1 px-4 text-center">
                <h1 class="tracking-widest">PAPAN INFORMASI</h1>
                <h1 class="text-sm tracking-widest">{ Agenda Kandidat }</h1>
            </div>
            <div class="bg-gray-200 border-2 border-black text-start font-Jet text-sm overflow-y-auto h-96">
                <div v-if="board.length > 0">
                    <div v-for="boardy in board" :key="boardy._id" class="border border-black py-2 px-4">
                        <div class="text-lg">
                            <h1 class="text-black">{{ boardy.judul }}</h1>
                        </div>
                        <div class="text-xs">
                            <h1>Jam : {{ boardy.jam }}</h1>
                            <h1>Tanggal : {{ boardy.tanggal }}</h1>
                            <h1>Tempat : {{ boardy.tempat }}</h1>
                        </div>
                        <div class="flex justify-between pt-4 pb-2">
                            <button @click="buka(boardy._id)" class="bg-black rounded-md">
                                <div
                                    class="bg-gray-200 border-2 rounded-md border-black py-1 px-4 text-lg transition-transform duration-300 ease-linear transform -translate-x-0.5 -translate-y-0.5 hover:-translate-x-1 hover:-translate-y-1 flex items-center justify-center">
                                    <h1>BUKA</h1>
                                </div>
                            </button>
                            <button @click="tanyaAdmin(boardy.judul)" class="bg-black rounded-md">
                                <div
                                    class="bg-gray-200 border-2 rounded-md border-black py-1 px-4 text-lg transition-transform duration-300 ease-linear transform -translate-x-0.5 -translate-y-0.5 hover:-translate-x-1 hover:-translate-y-1 flex items-center justify-center">
                                    <h1>TANYA ADMIN</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else class="flex justify-center items-center h-full">
                    <h1>Papan Informasi Kosong</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'
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
}

export default {
    data() {
        return {
            board: []
        }
    },
    mounted() {
        this.getBoard()
    },
    methods: {
        async getBoard() {
            const res = await api.get('board')
            const decData = decryptData(res.data);

            if (decData) {
                try {
                    const parsedData = JSON.parse(decData);
                    if (Array.isArray(parsedData.data)) {
                        this.board = parsedData.data;
                    } else {
                        return;
                    }
                } catch (error) {
                    return;
                }
            } else {
                return;
            }
        },
        async buka(id) {
            await this.$router.push({ name: 'PapanInformasi', params: { id } });
        },
        async tanyaAdmin(judul) {
            const message = `Saya Ingin Bertanya Terkait kegiatan "${judul}"`;
            await this.$router.push({ path: '/chat/user', query: { message } });
        },
    }
}
</script>