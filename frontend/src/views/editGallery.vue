<template>
    <div class="font-Jet font-medium text-base uppercase">
        <div class="overflow-y-auto h-[33.4rem] p-4">
            <div class="grid grid-cols-3 gap-x-10 w-[60rem]">
                <div v-show="galleric" v-for="gallery in gallerys" :key="gallery._id">
                    <div class="bg-black">
                        <div class="border-2 border-black px-4 py-4 bg-gray-200 relative -top-2 -left-2">
                            <h2 class="text-base font-bold font-Jet mb-2 pt-2">{{ gallery.judul }}</h2>
                            <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                                <img :src="getFullImgPath(gallery.img)" alt="Artikel Image"
                                    class="w-full max-h-48 object-cover" />
                            </div>
                            <p class="mb-2 pt-4">Deskripsi: {{ gallery.deskripsi }}</p>
                            <p class="mb-2">Tanggal: {{ gallery.tanggal }}</p>
                            <div class="flex justify-end">
                                <div class="bg-black">
                                    <button @click="editArtikel(gallery)"
                                        class="bg-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:bg-gray-400 hover:text-black border-2 border-black font-Karantina font-bold text-2xl uppercase px-4 py-2 relative -left-1 -top-1">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="select" v-if="selectedGalerry">
                <form @submit.prevent="updateGallery" class="space-y-4">
                    <div class="bg-black mr-6">
                        <input v-model="selectedGalerry.judul" placeholder="Judul" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                    </div>
                    <div>
                        <label class="block mb-2">Gambar 1</label>
                        <img :src="getFullImgPath(selectedGalerry.img)" alt="Image 1"
                            class="mb-2 w-72 h-56 object-cover" v-if="selectedGalerry.img" />
                        <input type="file" @change="onFileChange" />
                    </div>
                    <div v-for="img2x in selectedGalerry.img2" :key="img2x">
                        <label class="block mb-2">Gambar 2</label>
                        <img :src="getFullImgPath2(img2x)" alt="Image 2" class="mb-2 w-72 h-56 object-cover" />
                        <input type="file" @change="onFileChanges" />
                    </div>
                    <div class="bg-black mr-6">
                        <input v-model="selectedGalerry.deskripsi" placeholder="Author" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                    </div>
                    <div class="bg-black mr-6">
                        <input v-model="selectedGalerry.tanggal" type="date" placeholder="Tanggal" required
                            class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100  px-10" />
                    </div>
                    <div class="flex justify-between py-4">
                        <div class="bg-black mr-6">
                            <button @click="back"
                                class="bg-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:bg-gray-400 hover:text-black border-2 border-black ">
                                <h1 class="font-Karantina font-bold uppercase text-3xl px-12 py-2">
                                    kembali
                                </h1>
                            </button>
                        </div>
                        <div class="bg-black mr-6">
                            <button type="submit"
                                class="bg-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:bg-gray-400 hover:text-black border-2 border-black ">
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
            gallerys: [],
            selectedGalerry: null,
            img: null,
            img2: null,
            galleric: true,
            select: false,
        };
    },
    mounted() {
        this.fetchArtikels();
    },
    methods: {
        back() {
            this.galleric = true,
                this.select = false;
        },
        fetchArtikels() {
            galleryService.getAll()
                .then(response => {
                    const decData = decryptData(response.data);

                    if (decData) {
                        try {
                            const parsedData = JSON.parse(decData);
                            if (Array.isArray(parsedData.data)) {
                                this.gallerys = parsedData.data;
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
                    console.error('Error fetching gallerys:', error);
                });
        },
        editArtikel(gallery) {
            this.selectedGalerry = { ...gallery };
            this.galleric = false;
            this.select = true;
        },
        onFileChange(e) {
            this.img = e.target.files[0];
        },
        onFileChanges(e) {
            this.img2 = e.target.files[0];
        },
        updateGallery() {
            const formData = new FormData();
            formData.append('judul', this.selectedGalerry.judul);
            formData.append('deskripsi', this.selectedGalerry.deskripsi);
            formData.append('tanggal', this.selectedGalerry.tanggal);
            if (this.img) formData.append('img', this.img);
            if (this.img2) formData.append('img2', this.img2);

            galleryService.update(this.selectedGalerry._id, formData)
                .then(response => {
                    const index = this.gallerys.findIndex(gallery => gallery._id === response.data.data._id);
                    this.$set(this.gallerys, index, response.data.data);
                    this.selectedGalerry = null;
                    this.img = null;
                    this.img2 = null;
                    alert('Gallery updated success');
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error updating gallery:', error);
                });
        },
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
        getFullImgPath2(img2) {
            return `https://rumahgerak.com/${img2}`;
        },
    },
};
</script>