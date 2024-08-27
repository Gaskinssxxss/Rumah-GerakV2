<template>
    <div class="font-Jet font-medium text-base uppercase">
        <div class="overflow-y-auto h-[33.4rem]">
            <div class="grid grid-cols-3 gap-x-8 w-[60rem] p-4">
                <div v-show="bords" v-for="artikel in boards" :key="artikel._id">
                    <div class="bg-black">
                        <div class="border-2 border-black px-4 py-4 bg-gray-200 relative -top-2 -left-2">
                            <h2 class="text-base font-bold font-Jet mb-2 pt-2">{{ artikel.judul }}</h2>
                            <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                                <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                                    class="w-full max-h-40 object-cover" />
                            </div>
                            <p class="mb-2 pt-4">Author: {{ artikel.author }}</p>
                            <p class="mb-2">Tanggal: {{ artikel.tanggal }}</p>
                            <div class="flex justify-end">
                                <div class="bg-black">
                                    <button @click="editArtikel(artikel)"
                                        class="bg-gray-200 hover:bg-gray-400  transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-black  border-2 border-black  px-4 py-2 font-Karantina font-bold text-2xl uppercase">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="select" v-if="selectedBoard">
                <form @submit.prevent="updateArtikel" class="space-y-4">
                    <label class="block mb-2">Judul</label>
                    <div class="bg-black mr-6">
                        <input v-model="selectedBoard.judul" placeholder="Judul" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                    </div>
                    <div>
                        <label class="block mb-2">Gambar 1</label>
                        <img :src="getFullImgPath(selectedBoard.img)" alt="Image 1" class="mb-2 w-72 h-56 object-cover"
                            v-if="selectedBoard.img" />
                        <input type="file" @change="onFileChange" />
                    </div>
                    <div class="bg-black mr-6">
                        <input v-model="selectedBoard.jam" placeholder="Author" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                    </div>
                    <div class="bg-black mr-6">
                        <input v-model="selectedBoard.tempat" placeholder="Author" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                    </div>
                    <div class="bg-black mr-6">
                        <input v-model="selectedBoard.tanggal" type="date" placeholder="Tanggal" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100  px-10" />
                    </div>
                    <div class="flex justify-between py-4">
                        <div class="bg-black mr-6">
                            <button @click="back"
                                class="bg-gray-200 hover:bg-gray-400 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 border-2 border-black ">
                                <h1 class="font-Karantina font-bold uppercase text-3xl px-12 py-2">
                                    kembali
                                </h1>
                            </button>
                        </div>
                        <div class="bg-black mr-6">
                            <button type="submit"
                                class="bg-gray-200 hover:bg-gray-400 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 border-2 border-black ">
                                <h1 class="font-Karantina font-bold uppercase text-3xl px-12 py-2">
                                    Update
                                </h1>
                            </button>
                        </div>
                    </div>
                </form>
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
            boards: [],
            selectedBoard: null,
            img: null,
            bords: true,
            select: false,
        };
    },
    mounted() {
        this.fetchArtikels();
    },
    methods: {
        back() {
            this.bords = true,
                this.select = false;
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
        editArtikel(artikel) {
            this.selectedBoard = { ...artikel };
            this.bords = false;
            this.select = true;
        },
        onFileChange(e) {
            this.img = e.target.files[0];
        },
        updateArtikel() {
            const formData = new FormData();
            formData.append('judul', this.selectedBoard.judul);
            formData.append('jam', this.selectedBoard.jam);
            formData.append('tempat', this.selectedBoard.tempat);
            formData.append('tanggal', this.selectedBoard.tanggal);
            if (this.img) formData.append('img', this.img);

            boardApi.update(this.selectedBoard._id, formData)
                .then(response => {
                    const index = this.boards.findIndex(artikel => artikel._id === response.data.data._id);
                    this.$set(this.boards, index, response.data.data);
                    this.selectedBoard = null;
                    this.img = null;
                    alert('Artikel updated successfully');
                })
                .catch(error => {
                    console.error('Error updating artikel:', error);
                });
        },
        getFullImgPath(img) {
            return `http://rumahgerak.com/${img}`;
        },
    },
};
</script>