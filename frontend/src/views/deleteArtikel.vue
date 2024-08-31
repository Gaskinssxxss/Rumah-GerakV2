<template>
    <div class="overflow-y-auto h-[33.4rem] w-[60rem] font-Jet font-medium text-base uppercase">
        <div class="grid grid-cols-3 gap-x-10 pl-2">
            <div v-for="artikel in artikels" :key="artikel._id">
                <div class="bg-black">
                    <div class="border-2 border-black bg-gray-200 relative -top-2 -left-2 px-4 py-4">
                        <h2 class="text-base font-bold font-Jet mb-2 pt-2">{{ artikel.judul }}</h2>
                        <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                            <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                                class="w-full max-h-44 object-cover" />
                        </div>
                        <p class="mb-2 pt-4">Author: {{ artikel.author }}</p>
                        <p class="mb-2">Tanggal: {{ artikel.tanggal }}</p>
                        <div class="flex justify-end space-x-4">
                            <div class="bg-black">
                                <button @click="deleteArtikel(artikel._id)"
                                    class="bg-gray-200 hover:bg-gray-400 text-black  transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 border-2 font-Karantina font-bold text-2xl uppercase  border-black px-4 py-2">
                                    Delete
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
import artikelService from '../services/artikelApi';
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
            artikels: [],
            selectedArtikel: null,
            img: null,
            img2: null,
        };
    },
    mounted() {
        this.fetchArtikels();
    },
    methods: {
        fetchArtikels() {
            artikelService.getAll()
                .then(response => {
                    const decData = decryptData(response.data);

                    if (decData) {
                        try {
                            const parsedData = JSON.parse(decData);
                            if (Array.isArray(parsedData.data)) {
                                this.artikels = parsedData.data;
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
                    console.error('Error fetching artikels:', error);
                });
        },
        deleteArtikel(id) {
            artikelService.delete(id)
                .then(() => {
                    this.artikels = this.artikels.filter(artikel => artikel._id !== id);
                    alert('Artikel Berhasil Di hapus')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error deleting artikel:', error);
                });
        },
        getFullImgPath(img) {
            return `http://192.168.1.7:3000/${img}`;
        },
    },
};
</script>