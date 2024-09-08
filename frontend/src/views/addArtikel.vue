<template>
    <div class="font-Jet font-medium text-base uppercase">
        <form @submit.prevent="createArtikel" class="space-y-4">
            <div class="bg-black mr-6">
                <input v-model="judul" placeholder="Judul" required
                    class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
            </div>
            <div>
                <h1 class="font-Karantina font-bold text-2xl">File I</h1>
                <input type="file" @change="onFileChange" required />
            </div>
            <div>
                <div class="bg-black mr-6">
                    <textarea class="w-[60rem] h-[8rem] py-2 capitalize pl-2 border border-black bg-gray-100 "
                        v-model="p1" placeholder="Content I" required></textarea>
                </div>
                <div class="mt-4 bg-black mr-6">
                    <textarea class="w-[60rem] h-[8rem] py-2 capitalize pl-2 border border-black bg-gray-100 "
                        v-model="p2" placeholder="Content II" required></textarea>
                </div>
            </div>
            <div>
                <h1 class="font-Karantina font-bold text-2xl">File II</h1>
                <input type="file" @change="onFileChanges" required />
            </div>
            <div>
                <div class="bg-black mr-6">
                    <textarea class="w-[60rem] h-[8rem] py-2 capitalize pl-2 border border-black bg-gray-100 "
                        v-model="p3" placeholder="Content III" required></textarea>
                </div>
                <div class="bg-black mr-6 mt-4">
                    <textarea class="w-[60rem] h-[8rem] py-2 capitalize pl-2 border border-black bg-gray-100 "
                        v-model="p4" placeholder="Content IV" required></textarea>
                </div>
                <div class="bg-black mr-6 mt-4">
                    <textarea class="w-[60rem] h-[8rem] py-2 capitalize pl-2 border border-black bg-gray-100 "
                        v-model="p5" placeholder="Content V" required></textarea>
                </div>
            </div>
            <div class="bg-black mr-6">
                <input v-model="author" placeholder="Author" required
                    class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
            </div>
            <div class="bg-black mr-6">
                <input v-model="tanggal" type="date" placeholder="Tanggal" required
                    class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100  px-10" />
            </div>
            <div class="flex justify-end py-4">
                <div class="bg-black mr-6">
                    <button type="submit"
                        class="bg-gray-200 hover:bg-gray-400 hover:text-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 border-2 border-black ">
                        <h1 class="font-Karantina font-bold uppercase text-3xl px-12 py-2">
                            Buat Berita
                        </h1>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import artikelService from '../services/artikelApi';

export default {
    data() {
        return {
            judul: '',
            img: null,
            p1: '',
            p2: '',
            img2: null,
            p3: '',
            p4: '',
            p5: '',
            author: '',
            tanggal: '',
        };
    },
    methods: {
        onFileChange(e) {
            this.img = e.target.files[0];
        },
        onFileChanges(e) {
            this.img2 = e.target.files[0];
        },
        createArtikel() {
            const formData = new FormData();
            formData.append('judul', this.judul);
            formData.append('img', this.img);
            formData.append('p1', this.p1);
            formData.append('p2', this.p2);
            formData.append('img2', this.img2);
            formData.append('p3', this.p3);
            formData.append('p4', this.p4);
            formData.append('p5', this.p5);
            formData.append('author', this.author);
            formData.append('tanggal', this.tanggal);

            artikelService.create(formData)
                .then(() => {
                    alert('success')
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                })
                .catch(error => {
                    console.error('Error creating artikel:', error);
                });
        },
    },
};
</script>