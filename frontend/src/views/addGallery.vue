<template>
    <div class="font-Jet font-medium text-base uppercase">
        <form @submit.prevent="createGallery" class="space-y-4">
            <div class="bg-black mr-6">
                <input v-model="judul" placeholder="Judul" required
                    class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
            </div>
            <div class="pt-2">
                <input type="file" @change="onFileChange" required />
                <h1 class="text-xs pl-2 font-bold">Upload Gambar Utama</h1>
            </div>
            <div>
                <input type="file" @change="onFileChanges" multiple required />
                <h1 class="text-xs pl-2 font-bold">Upload Gambar Lainnya ( max 4 gambar )</h1>
            </div>
            <div class="pt-6">
                <div class="bg-black mr-6">
                    <input v-model="deskripsi" placeholder="Deskripsi Singkat" required
                        class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
                </div>
            </div>
            <div class="pt-4">
                <div class="bg-black mr-6">
                    <input v-model="tanggal" type="date" placeholder="Tanggal" required
                        class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100  px-10" />
                </div>
            </div>
            <div class="flex justify-end pb-4 pt-10">
                <div class="bg-black mr-6">
                    <button type="submit"
                        class="bg-gray-200 hover:bg-gray-400 hover:text-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 border-2 border-black ">
                        <h1 class="font-Karantina font-bold uppercase text-3xl px-12 py-2">
                            Create
                        </h1>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import galleriService from '../services/galleryApi';

export default {
    data() {
        return {
            judul: '',
            img: null,
            img2: [],
            deskripsi: '',
            tanggal: '',
        };
    },
    methods: {
        onFileChange(e) {
            this.img = e.target.files[0];
        },
        onFileChanges(a) {
            this.img2 = Array.from(a.target.files);
        },
        createGallery() {
            const formData = new FormData();
            formData.append('judul', this.judul);
            formData.append('img', this.img);
            this.img2.forEach(file => {
                formData.append('img2', file);
            });
            formData.append('deskripsi', this.deskripsi);
            formData.append('tanggal', this.tanggal);

            galleriService.create(formData)
                .then(() => {
                    alert("success")
                    this.$router.push('/');
                })
                .catch(error => {
                    console.error('Error creating gallery:', error);
                });
        },
    },
};
</script>