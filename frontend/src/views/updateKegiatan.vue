<template>
    <div v-if="!unlockPage">
        <div class="py-12 w-full px-4">
            <div class="font-Karantina font-bold uppercase">
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-20">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
                <div class="pt-8">
                    <h1 class="text-4xl text-center">Masukkan Token Anda</h1>
                    <p class="px-4 text-center">Silahkan Masukan Token Yang Diberikan Melalui Pesan whatsapp Anda.</p>
                </div>
                <div class="pt-12 px-2">
                    <div class="bg-black rounded-md">
                        <input type="text" v-model="token" placeholder="Token"
                            class="border-2 border-black rounded-md text-lg px-2 w-full py-2 font-Jet bg-gray-200 relative -top-1 -left-1">
                    </div>
                </div>
                <div class="flex justify-center pt-6">
                    <div class="bg-black rounded-md">
                        <button @click="verifyToken"
                            class="bg-gray-200 border-black border-2 py-1 px-4 text-3xl rounded-md transition-transform duration-300 ease-linear transform -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                            <h1>
                                Verifikasi Token
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="unlockPage" class="pb-4 pt-4">
        <div class="px-6 font-Karantina font-bold text-3xl uppercase text-center pt-2 pb-10">
            <div class="bg-black" v-motion-pop :delay=200>
                <div class="bg-golkar border-2 border-black py-1 ">
                    <h1>Update Gerakan Relawan</h1>
                </div>
            </div>
            <div class="pt-2" v-motion-pop :delay=200>
                <h1 class="text-xl tracking-wide">AYO BERGABUNG BERSAMA KAMI DEMI KOTA BIMA BARU YANG LEBIH SEJAHTERA!!!
                </h1>
            </div>
            <div class="pt-5">
                <div class="text-start pt-6 text-2xl">
                    <div class="space-y-2 tracking-wide uppercase">
                        <div v-motion-slide-visible-once-left :delay="200">
                            <div class="pb-1">
                                <h1>Nama Kegiatan</h1>
                            </div>
                            <div class="bg-black rounded-md">
                                <select v-model="updateForm.namaKegiatan"
                                    class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase">
                                    <option disabled value="">Pilih Kegiatan</option>
                                    <option v-for="kegiatan in kegiatanList" :key="kegiatan._id"
                                        :value="kegiatan.namaKegiatan">
                                        {{ kegiatan.namaKegiatan }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div v-motion-slide-visible-once-right :delay="200">
                            <div class="pb-1">
                                <h1>Status Kegiatan</h1>
                            </div>
                            <div class="bg-black rounded-md">
                                <select v-model="updateForm.status"
                                    class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet"
                                    placeholder="Status Kegiatan">
                                    <option value="Belum diMulai">Selesai</option>
                                </select>
                            </div>
                        </div>
                        <div class="pt-4" v-motion-slide-visible-once-left :delay="200">
                            <h1 class="text-2xl tracking-wide font-Karantina uppercase pb-2">Upload Video Laporan</h1>
                            <label
                                class="block w-full cursor-pointer bg-gray-200 text-black text-xl py-1 px-4 hover:bg-gray-400 rounded outline-dashed outline-2 outline-offset-4 outline-gray-200 hover:outline-gray-400 focus:outline-none focus:shadow-outline">
                                <div class="flex items-center space-x-4 cursor-pointe">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-8">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                    </div>
                                    <h1 class="mr-2 tracking-wide">Pilih file</h1>
                                    <input type="file" class="hidden" @change="handleUpdateFileUpload">
                                    <div v-if="fileName" class="pt-2 font-Jet text-xs font-extrabold">
                                        <p>File yang dipilih: {{ fileName }}</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div v-if="stats === 'Disetujui'" class="flex justify-end uppercase pt-10 pb-4 w-full">
                            <button @click="updateKegiatan" class="bg-black rounded-md w-full" v-motion-pop-visible-once
                                :delay=200>
                                <div
                                    class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar hover:bg-che hover:text-gray-200 rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider">
                                    <h1>Update...</h1>
                                </div>
                            </button>
                        </div>
                        <div v-else-if="stats === 'Ditolak'" class="flex justify-end uppercase pt-10 pb-4 w-full">
                            <button class="bg-black rounded-md w-full" v-motion-pop-visible-once :delay=200>
                                <div
                                    class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider">
                                    <h1>Belum Bisa Update.</h1>
                                </div>
                            </button>
                        </div>
                        <div v-else-if="stats === 'Menunggu'" class="flex justify-end uppercase pt-10 pb-4 w-full">
                            <button class="bg-black rounded-md w-full" v-motion-pop-visible-once :delay=200>
                                <div
                                    class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider">
                                    <h1>Belum Bisa Update.</h1>
                                </div>
                            </button>
                        </div>
                        <div v-else class="flex justify-end uppercase pt-10 pb-4 w-full">
                            <button class="bg-black rounded-md w-full" v-motion-pop-visible-once :delay=200>
                                <div
                                    class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider">
                                    <h1>Kegiatan Selesai.</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/services/api';

export default {
    data() {
        return {
            kegiatanList: [],
            updateForm: {
                namaKegiatan: '',
                status: '',
                video: null,
            },
            fileName: '',
            token: '',
            unlockPage: false,
            stats: null
        };
    },
    watch: {
        'updateForm.namaKegiatan': function (newVal) {
            const selectedKegiatan = this.kegiatanList.find(kegiatan => kegiatan.namaKegiatan === newVal);
            if (selectedKegiatan) {
                this.stats = selectedKegiatan.status;
                console.log('Updated stats:', this.stats);
            }
        }
    },
    methods: {
        async verifyToken() {
            if (this.token === '') {
                alert('Token belum diisi.');
                return;
            }

            try {
                const response = await Api.post('api/verifyToken', { token: this.token });
                if (response.data.status === 'success') {
                    this.unlockPage = true;
                    this.loadKegiatan();
                } else {
                    alert('Token tidak valid. Silakan coba lagi.');
                    this.unlockPage = false;
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                alert('Terjadi kesalahan saat memverifikasi token.');
            }
        },
        async loadKegiatan() {
            try {
                const response = await Api.get(`kegiatanByToken?token=${this.token}`);
                if (response.data.status === 'success') {
                    this.kegiatanList = response.data.data;
                    this.stats = response.data.data.status;
                    console.log(response.data.data.status); // Cek nilai stats
                } else {
                    alert('Tidak ada kegiatan yang ditemukan.');
                }
            } catch (error) {
                console.error('Error loading activities:', error);
            }
        },
        handleUpdateFileUpload(event) {
            this.updateForm.video = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },
        async updateKegiatan() {
            const formData = new FormData();
            formData.append('status', this.updateForm.status);
            if (this.updateForm.video) {
                formData.append('video', this.updateForm.video);
            }

            try {
                await Api.put(`kegiatan/relawan/${this.updateForm.namaKegiatan}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Status kegiatan berhasil diperbarui!');
            } catch (err) {
                console.error(err);
                alert('Gagal memperbarui status kegiatan');
            }
        },
        resetForm() {
            this.updateForm = {
                nama: '',
                video: null,
                status: null,
            };
            this.fileName = '';
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    },
    mounted() {
        this.scrollToTop();
    },
};
</script>