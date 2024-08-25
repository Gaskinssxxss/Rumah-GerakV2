<template>
    <div class="pt-6 px-8">
        <div class="space-y-12 px-4">
            <div v-for="artikel in filteredArtikels" :key="artikel._id">
                <div class="bg-black">
                    <div
                        class="bg-nasdem border-black border-2 relative -top-1.5 -left-1.5 font-Jet font-extrabold uppercase text-[18px]/[20px] text-gray-200">
                        <div>
                            <img :src="getFullImgPath(artikel.img)" alt="" class="w-full max-h-64">
                        </div>
                        <div class="pt-2 px-2 capitalize">
                            <h1 class="text-start font-Jet text-base">{{ artikel.judul }}</h1>
                            <h1 class="text-start text-[10px]/[20px] font-normal pt-1">{{ truncateText(artikel.p1) }}
                            </h1>
                        </div>
                        <div class="flex justify-end py-4 pr-6">
                            <button @click="buka(artikel._id)">
                                <h1 class="underline hover:text-black">Buka Artikel</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div class="pt-10 md:pt-5 3xl:pt-10">
            <div v-if="!showAll" class="flex justify-center">
                <div class="w-16 h-16 rounded-full bg-black">
                    <svg @click="toggleShowAll" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor"
                        class="bg-gray-200 hover:bg-nasdem border-2 border-black px-3 py-3 rounded-full w-16 h-16 mx-auto stroke-[3px] stroke-black hover:stroke-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-1 hover:-translate-x-0 hover:-translate-y-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div v-else class="flex justify-center">
                <div class="w-16 h-16 rounded-full bg-black">
                    <svg @click="toggleShowAll" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor"
                        class="bg-gray-200 hover:bg-nasdem border-2 border-black rotate-180 px-3 py-3 rounded-full w-16 h-16 mx-auto stroke-[3px] stroke-black hover:stroke-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-1 hover:-translate-x-0 hover:-translate-y-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import artikelService from '../services/artikelApi'
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
            showAll: false,
        }
    },
    created() {
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
                console.error('Error fetching articles:', error);
            });
    },
    computed: {
        filteredArtikels() {
            if (!Array.isArray(this.artikels) || this.artikels.length === 0) {
                return [];
            }
            return this.showAll ? this.artikels : this.artikels.slice(0, 1);
        }
    },
    methods: {
        getFullImgPath(img) {
            const correctedPath = img.replace(/\\/g, '/');
            return `https://rumahgerak.com/${correctedPath}`;
        },
        async buka(id) {
            await this.$router.push({ name: 'PORTAL', params: { id } });
        },
        truncateText(text) {
            const words = text.split(' ');
            return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : text;
        },
        toggleShowAll() {
            this.showAll = !this.showAll;
        }
    },
}
</script>
