<template>
    <div class="pb-20 pt-10 px-2 ">
        <div class="text-xs">
            <div>
                <div class="flex justify-center px-2" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-full">
                        <div class="bg-golkar border-2 border-black  px-2 py-1">
                            <h1 class="text-start font-Jet font-extrabold text-lg">{{ gallery.judul }}</h1>
                        </div>
                    </div>
                </div>
                <div class="pl-2" v-motion-slide-visible-once-right :delay="200">
                    <div class="flex space-x-2">
                        <div class="flex pt-4">
                            <div class="bg-black w-20 h-8">
                                <div
                                    class="text-[14px]/[10px] py-1 capitalize font-bold bg-nasdem text-gray-200 border-2 border-black w-20 h-8 px-2 pb-2">
                                    <p class="mt-2">{{ gallery.tanggal }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex pt-4">
                            <div class="bg-black">
                                <div
                                    class="text-[14px]/[16px] py-1 capitalize font-bold bg-nasdem text-gray-200 border-2 border-black px-2">
                                    <p>{{ gallery.deskripsi }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 px-2 font-Jet text-xs">
                <div class="pt-4" v-motion-pop-visible-once :delay="200">
                    <div class="bg-black ml-1 hover:opacity-80">
                        <img :src="getFullImgPath(gallery.img)" alt="Artikel Image"
                            class="w-full h-auto border-2 border-black relative -top-1.5 -left-1.5 cursor-pointer object-cover"
                            @click="openLightbox(0)" />
                    </div>
                </div>
                <p class="mt-4 text-base" v-motion-pop-visible-once :delay="200">{{ gallery.p1 }}</p>
                <p class="mt-8 text-base" v-motion-pop-visible-once :delay="200">{{ gallery.p2 }}</p>
                <div class="grid grid-cols-2 gap-y-6 gap-x-6" v-motion-pop-visible-once :delay="200">
                    <div v-for="(img2x, index) in gallery.img2" :key="img2x">
                        <div class="bg-black w-full h-32 ml-1 hover:opacity-80">
                            <img :src="getFullImgPath2(img2x)" alt="Artikel Images"
                                class="w-full h-32 border-2 border-black relative -top-1.5 -left-1.5 cursor-pointer object-cover"
                                @click="openLightbox(index + 1)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vue-easy-lightbox :visible="lightboxVisible" :imgs="lightboxImages" :index="lightboxIndex"
            @hide="lightboxVisible = false" />
    </div>
</template>

<script>
import galleryService from '../services/galleryApi';
import VueEasyLightbox from 'vue-easy-lightbox';
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
    components: {
        VueEasyLightbox
    },
    data() {
        return {
            gallery: '',
            lightboxVisible: false,
            lightboxImages: [],
            lightboxIndex: 0,
        };
    },
    mounted() {
        this.scrollToTop()
    },
    created() {
        const galleriId = this.$route.params.id;
        galleryService.getById(galleriId)
            .then(response => {
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.gallery = parsedData.data;
                            this.lightboxImages = [
                                this.getFullImgPath(this.gallery.img),
                                ...this.gallery.img2.map(img => this.getFullImgPath2(img))
                            ];
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
                console.error('Error fetching article:', error);
            });
    },
    methods: {
        getFullImgPath(img) {
            return `http://rumahgerak.com/${img}`;
        },
        getFullImgPath2(img2) {
            return `http://rumahgerak.com/${img2}`;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        openLightbox(index) {
            this.lightboxIndex = index;
            this.lightboxVisible = true;
        }
    },
};
</script>