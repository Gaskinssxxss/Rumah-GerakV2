<template>
    <div class="pb-20 pt-10 px-2 mx-2">
        <div class="text-xs">
            <div>
                <div class="pl-2">
                    <div class="bg-black" v-motion-pop-visible-once :delay=200>
                        <div class="bg-golkar border-2 border-black relative -top-1 -left-1 pl-2 py-1 uppercase">
                            <h1 class="text-start font-Jet font-extrabold text-lg">{{ board.judul }}</h1>
                        </div>
                    </div>
                    <div class="flex pt-4" v-motion-pop-visible-once :delay=300>
                        <div class="bg-black w-full">
                            <div
                                class="text-sm capitalize font-bold bg-nasdem relative -top-1 -left-1 text-gray-200 border-2 border-black  px-2">
                                <p class="py-2">{{ board.tempat }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex space-x-4 text w-full">
                        <div class="flex pt-4" v-motion-pop-visible-once :delay=250>
                            <div class="bg-black">
                                <div
                                    class="text-sm capitalize font-bold bg-nasdem relative -top-1 -left-1 text-gray-200 border-2 border-black  px-2">
                                    <p class="py-1">{{ board.tanggal }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex pt-4" v-motion-pop-visible-once :delay=300>
                            <div class="bg-black">
                                <div
                                    class="text-sm capitalize font-bold bg-nasdem relative -top-1 -left-1 text-gray-200 border-2 border-black  px-2">
                                    <p class="py-1">{{ board.jam }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-4" v-motion-pop-visible-once :delay=350>
                        <div class="bg-black ml-1">
                            <img :src="getFullImgPath(board.img)" alt="Artikel Image"
                                class="w-full h-auto border-2 border-black relative -top-1.5 -left-1.5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            board: '',
        };
    },
    mounted() {
        this.scrollToTop()
    },
    created() {
        const boardId = this.$route.params.id;
        boardApi.getById(boardId)
            .then(response => {
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            this.board = parsedData.data;
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
            return `http://192.168.1.7:3000/${img}`;
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