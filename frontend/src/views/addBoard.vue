<template>
    <div class="font-Jet font-medium text-base uppercase">
        <form @submit.prevent="createArtikel" class="space-y-4">
            <div class="bg-black mr-6">
                <input v-model="judul" placeholder="Judul" required
                    class="w-[60rem] py-2 capitalize pl-2 border border-black bg-gray-100 " />
            </div>
            <div>
                <h1 class="font-Karantina font-bold text-2xl">File</h1>
                <input type="file" @change="onFileChange" required />
            </div>
            <div>
                <div class="mr-6 mt-4">
                    <textarea class="w-[60rem] h-[3rem] capitalize pl-2 border border-black bg-gray-100 " v-model="jam"
                        placeholder="Jam" required></textarea>
                </div>
                <div class="mr-6 mt-4">
                    <textarea class="w-[60rem] h-[3rem] capitalize pl-2 border border-black bg-gray-100 "
                        v-model="tempat" placeholder="Tempat" required></textarea>
                </div>
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
                            Buat.
                        </h1>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import boardApi from '@/services/boardApi';

export default {
    data() {
        return {
            judul: '',
            img: null,
            tempat: '',
            jam: '',
            tanggal: '',
        };
    },
    methods: {
        onFileChange(e) {
            this.img = e.target.files[0];
        },
        createArtikel() {
            const formData = new FormData();
            formData.append('judul', this.judul);
            formData.append('img', this.img);
            formData.append('tempat', this.tempat)
            formData.append('jam', this.jam)
            formData.append('tanggal', this.tanggal);

            boardApi.create(formData)
                .then(() => {
                    alert('success')
                    this.$router.push('/warbase');
                })
                .catch(error => {
                    console.error('Error creating artikel:', error);
                });
        },
    },
};
</script>