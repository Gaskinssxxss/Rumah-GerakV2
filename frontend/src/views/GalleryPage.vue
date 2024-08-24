<template>
    <div class="pb-10 pt-12 h-screen">
        <div class="space-y-6">
            <div class="px-10">
                <div class="bg-black rounded-md" v-motion-pop :delay="200">
                    <div
                        class="bg-golkar rounded-md relative -top-1 -left-1 border-2 border-black py-1 px-4 font-Karantina font-bold text-3xl text-center">
                        <h1>GALLERI RUMAH GERAK!</h1>
                    </div>
                </div>
            </div>
            <div v-motion-pop :delay="250" class="flex justify-center pb-10 pt-4">
                <div class="pt-2 px-2 grid grid-cols-2 gap-4">
                    <div v-for="gallery in gallerys" :key="gallery._id"
                        class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                        <div class="px-4">
                            <div class="bg-black rounded-md w-16 h-8">
                                <div
                                    class="bg-nasdem border-2 border-black rounded-md relative -top-0.5 -left-0.5 w-16 h-8">
                                </div>
                            </div>
                        </div>
                        <div @click="buka(gallery._id)" class="">
                            <div
                                class="bg-black rounded-lg md:w-40 md:h-28 siomi:w-44 iphone-11-pro:w-40 siomi:h-32 iphone-11-pro:h-24">
                                <div
                                    class="bg-golkar hover:bg-nasdem hover:text-gray-200 rounded-lg border-2 border-black -mt-3 md:w-40 md:h-28 siomi:w-44 iphone-11-pro:w-40 siomi:h-32 iphone-11-pro:h-24 flex justify-center items-center transition-transform duration-300 ease-linear transform -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                    <div class="text-start font-Jet font-extrabold text-base md:text-sm uppercase px-2">
                                        <h1>{{ gallery.judul }}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import galleryService from '../services/galleryApi';
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
            gallerys: []
        }
    },
    mounted() {
        this.scrollToTop()
    },
    created() {
        galleryService.getAll()
            .then(response => {
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.gallerys = parsedData.data;
                        } else {
                            console.log('error');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log('error');
                }
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        async buka(id) {
            console.log(id)
            await this.$router.push({ name: 'Gallerys', params: { id } });
        }
    }
}
</script>