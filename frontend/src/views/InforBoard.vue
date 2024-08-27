<template>
    <div class="font-Karantina text-2xl font-extrabold uppercase px-4 py-8">
        <div>
            <div class="bg-che text-gray-200 border-2 border-black py-1 px-4 text-center">
                <h1 class="tracking-widest">PAPAN INFORMASI</h1>
                <h1 class="text-sm tracking-widest">{ Agenda Kandidat }</h1>
            </div>
            <div class="bg-gray-200 border-2 border-black text-start font-Jet text-sm overflow-y-auto h-96 px-4 py-4">
                <div v-if="board.length > 0">
                    <div v-for="boardy in board" :key="boardy._id" class="border border-black py-2 px-4">
                        <div class="text-lg">
                            <h1 class="text-black">{{ boardy.judul }}</h1>
                        </div>
                        <div class="text-xs space-y-2 pt-2">
                            <div class="flex space-x-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <h1>{{ boardy.jam }}</h1>
                            </div>
                            <div class="flex space-x-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                </div>
                                <h1>{{ boardy.tanggal }}</h1>
                            </div>
                            <div class="flex space-x-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <h1>{{ boardy.tempat }}</h1>
                            </div>
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
            const encodedMessage = btoa(message); // Encode the message to Base64
            await this.$router.push({ path: '/chat/user', query: { message: encodedMessage } });
        }
    }
}
</script>