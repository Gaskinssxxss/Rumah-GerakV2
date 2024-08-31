<template>
    <div class="pb-20 pt-10 px-2 mx-2">
        <div class="text-xs">
            <div>
                <div class="pl-2">
                    <div class="bg-black" v-motion-pop-visible-once :delay=200>
                        <div class="bg-golkar border-2 border-black relative -top-1 -left-1 pl-2 py-1">
                            <h1 class="text-start font-Jet font-extrabold text-lg">{{ artikel.judul }}</h1>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex pt-4" v-motion-pop-visible-once :delay=250>
                            <div class="bg-black">
                                <div
                                    class="text-[14px]/[10px] py-1 capitalize font-bold bg-nasdem relative -top-1 -left-1 text-gray-200 border-2 border-black  px-2 pb-2">
                                    <p class="mt-2">{{ artikel.author }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex pt-4" v-motion-pop-visible-once :delay=300>
                            <div class="bg-black">
                                <div
                                    class="text-[14px]/[10px] py-1 capitalize font-bold bg-nasdem relative -top-1 -left-1 text-gray-200 border-2 border-black  px-2 pb-2">
                                    <p class="mt-2">{{ artikel.tanggal }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 px-2 font-Jet text-xs">
                <div class="pt-4" v-motion-pop-visible-once :delay=350>
                    <div class="bg-black ml-1">
                        <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                            class="w-full h-auto border-2 border-black relative -top-1.5 -left-1.5" />
                    </div>
                </div>
                <p class="mt-4 text-base pl-2" v-motion-pop-visible-once :delay=200>{{ artikel.p1 }}</p>
                <p class="mt-8 pb-4 text-base pl-2" v-motion-pop-visible-once :delay=250>{{ artikel.p2 }}</p>
                <div class="pt-6" v-motion-pop-visible-once :delay=300>
                    <div class="bg-black ml-1">
                        <img :src="getFullImgPath2(artikel.img2)" alt="Artikel Image"
                            class="w-full h-auto border-2 border-black relative -top-1.5 -left-1.5" />
                    </div>
                </div>
                <p class="mt-4 text-base pl-2" v-motion-pop-visible-once :delay=200>{{ artikel.p3 }}</p>
                <p class="mt-8 text-base pl-2" v-motion-pop-visible-once :delay=250>{{ artikel.p4 }}</p>
                <p class="mt-8 text-base pl-2" v-motion-pop-visible-once :delay=300>{{ artikel.p5 }}</p>
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
            artikel: '',
        };
    },
    mounted() {
        this.scrollToTop()
    },
    created() {
        const artikelId = this.$route.params.id;
        artikelService.getById(artikelId)
            .then(response => {
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.artikel = parsedData.data;
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
            return `https://rumahgerak.com/${img}`;
        },
        getFullImgPath2(img2) {
            return `https://rumahgerak.com/${img2}`;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
};
</script>