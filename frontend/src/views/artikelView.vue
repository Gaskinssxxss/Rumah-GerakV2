<template>
    <div class="px-10 pt-6">
        <div class="bg-black rounded-md uppercase" v-motion-pop :delay="300">
            <div
                class="bg-golkar rounded-md relative -top-1 -left-1 border-2 border-black py-2 px-4 font-Karantina font-bold text-3xl text-center">
                <h1>portal berita amanah</h1>
            </div>
        </div>
    </div>
    <div class="-mt-8 -mb-16">
        <Splide :options="{ type: 'loop', autoplay: 'pause', perPage: 1 }" ref="splideRef" class="-mx-4">
            <SplideSlide>
                <div v-for="artikel in artikels" :key="artikel._id">
                    <div class="pb-20 pt-2 px-2">
                        <div class="text-xs">
                            <div class="bg-black" v-motion-pop-visible-once :delay=200>
                                <div
                                    class="bg-nasdem border-2 border-black text-gray-200 relative -top-1 -left-1 px-4 py-2">
                                    <div>
                                        <h1 class="text-start font-Jet font-extrabold text-base md:text-sm">{{
                                            artikel.judul }}</h1>
                                    </div>
                                </div>
                                <div
                                    class="bg-gray-300 border-2 border-black text-gray-200 relative -top-1 -left-1 p-4">
                                    <div class="font-Jet text-xs m-1">
                                        <div v-motion-pop-visible-once :delay=350>
                                            <div class="bg-black ml-1">
                                                <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                                                    class="object-cover h-48 w-96 border-2 border-black relative -top-1.5 -left-1.5 object-top" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script>
import artikelApi from '@/services/artikelApi';
import CryptoJS from 'crypto-js';
import { Splide, SplideSlide } from "@splidejs/vue-splide";

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
    components: {
        Splide,
        SplideSlide
    },
    data() {
        return {
            artikels: [],
        }
    },
    created() {
        artikelApi.getAll()
            .then(res => {
                const decData = decryptData(res.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.artikels = parsedData.data;
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
    },
    methods: {
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
        toggleAutoplay() {
            this.isPlaying = !this.isPlaying;

            const splide = this.$refs.splideRef.splide;

            if (this.isPlaying) {
                splide.Components.Autoplay.play();
            } else {
                splide.Components.Autoplay.pause();
            }
        },
    }
}
</script>
