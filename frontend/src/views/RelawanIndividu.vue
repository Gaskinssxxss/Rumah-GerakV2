<template>
    <div class="pb-4 pt-4 ">
        <div class="px-6 font-Karantina font-bold text-3xl uppercase text-center pt-2 pb-2">
            <div class="bg-black" v-motion-pop-visible-once :delay="200">
                <div class="bg-golkar border-2 border-black py-2 relative -top-1 -left-1">
                    <h1>Gerakan Relawan</h1>
                </div>
            </div>
            <div class="pt-2">
                <h1 class="text-xl tracking-wide">AYO BERGABUNG BERSAMA KAMI DEMI KOTA BIMA BARU YANG LEBIH SEJAHTERA
                    !!!</h1>
            </div>
            <form @submit.prevent="submitForm" class="text-start pt-6 text-3xl">
                <div class="space-y-2">
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Nama</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.nama" type="text"
                                class="border-2 border-black bg-gray-200 w-full  rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="Nama">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>NO hp</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.hp" type="tel"
                                class="border-2 border-black bg-gray-200 w-full  rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="No HP">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Kecamatan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <select v-model="form.kecamatan"
                                class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet">
                                <option value="Asakota" selected>Asakota</option>
                                <option value="Rasanae Barat">Rasanae Barat</option>
                                <option value="Rasanae Timur">Rasanae Timur</option>
                                <option value="Raba">Raba</option>
                                <option value="Mpunda">Mpunda</option>
                            </select>
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Kelurahan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <select v-model="form.kelurahan"
                                class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet"
                                placeholder="Kelurahan">
                                <option v-for="option in kelurahanOptions[form.kecamatan]" :key="option"
                                    :value="option">{{ option }}</option>
                            </select>
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Rt</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.rt" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Rt">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Rw</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.rw" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Rw">
                        </div>
                    </div>
                    <div class="pt-4">
                        <div v-motion-pop-visible-once :delay="200">
                            <div class="pb-1">
                                <h1>surat pernyataan dukungan</h1>
                            </div>
                            <div class="bg-black rounded-md">
                                <div
                                    class="border-2 border-black bg-gray-200 rounded-md p-4 text-start text-lg font-bold font-Jet capitalize">
                                    <div class="whitespace-pre-wrap break-words text-start" v-html="formatSurat"></div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-4" v-motion-pop-visible-once :delay="200">
                            <h1 class="text-2xl tracking-wide font-Karantina uppercase pb-2">Upload Foto KTP anda
                            </h1>
                            <label
                                class="block w-full cursor-pointer bg-gray-200 text-black text-xl py-1 px-4 hover:bg-gray-400 rounded outline-dashed outline-2 outline-offset-4 outline-gray-200 hover:outline-gray-400 focus:outline-none focus:shadow-outline">
                                <div class="flex items-center space-x-4 cursor-pointe">
                                    <div>
                                        <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-8">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                    </div>
                                    <h1 class="mr-2 tracking-wide">Pilih file</h1>
                                    <input type="file" class="hidden" @change="handleFileUpload">
                                    <div v-if="fileName" class="pt-2 font-Jet text-xs font-extrabold">
                                        <p>File yang dipilih: {{ fileName }}</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div class="pt-8" v-motion-pop-visible-once :delay="200">
                            <div class="pb-1 text-2xl">
                                <h1>Pilih Lokasi pada Peta</h1>
                            </div>
                            <div class="pb-4">
                                <GMapAutocomplete @place_changed="handlePlaceChanged"
                                    :fields="['geometry', 'formatted_address', 'name']"
                                    style="width: 100%; height: 40px;"
                                    class="border-2 border-black bg-gray-200 rounded-md font-Jet text-sm py-4 px-2"
                                    placeholder="Masukan Alamat" />

                            </div>
                            <GMapMap :center="mapCenter" :zoom="15" style="width: 100%; height: 550px"
                                @click="handleMapClick"
                                :options="{ gestureHandling: 'greedy', fullscreenControl: true, mapTypeId: 'hybrid' }">
                                <GMapMarker :position="markerPosition" :clickable="true" :draggable="true"
                                    @dragend="handleMarkerDrag" />
                            </GMapMap>
                        </div>
                        <div class="flex justify-end uppercase pt-10 pb-4" v-motion-pop-visible-once :delay="200">
                            <button type="submit" class="bg-black rounded-md w-full">
                                <div
                                    class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar hover:bg-che hover:text-gray-200 rounded-md border-2 border-black py-1 px-4 uppercase text-3xl tracking-wider">
                                    <h1>Kirimkan...</h1>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";
import {
    GMapMap, GMapMarker,
    GMapAutocomplete
} from '@fawmi/vue-google-maps';
import { sanitizeInput } from "@/services/inputSanitizer";

export default {
    components: {
        GMapMap,
        GMapMarker,
        GMapAutocomplete
    },
    data() {
        return {
            form: {
                nama: '',
                hp: '',
                kecamatan: '',
                kelurahan: '',
                rt: '',
                rw: '',
                ttd: null,
                latitude: null,
                longitude: null,
            },
            kelurahanOptions: {
                'Asakota': ['Melayu', 'Jatiwangi', 'Jatibaru', 'Jatibaru Timur', 'Kolo', 'Ule'],
                'Rasanae Barat': ['Tanjung', 'Paruga', 'Sarae', 'Nae', 'Pane', 'Dara'],
                'Rasanae Timur': ['Kumbe', 'Lampe', 'Oi Fo’o', 'Kodo', 'Dodu', 'Lelamase', 'Nungga', 'Oimbo'],
                'Raba': ['Rontu', 'Penaraga', 'Penanae', 'Rite', 'Rabangodu Utara', 'Rabangodu Selatan', 'Rabadompu Timur', 'Rabadompu Barat', 'Ntobo', 'Kendo', 'Nitu'],
                'Mpunda': ['Sambinae', 'Panggi', 'Monggonao', 'Manggemaci', 'Penatoi', 'Lewirato', 'Sadia', 'Mande', 'Santi', 'Matakando']
            },
            mapCenter: { lat: -8.4606, lng: 118.7258 },
            markerPosition: { lat: -8.4606, lng: 118.7258 },
            fileName: '',
        };
    },
    computed: {
        formatSurat() {
            return `Dengan ini, saya <strong>${this.form.nama}</strong> dari kecamatan <strong>${this.form.kecamatan}</strong> kelurahan <strong>${this.form.kelurahan}</strong> , menyatakan dukungan penuh pada mr. x dan ms. y sebagai pasangan calon walikota dan wakil walikota bima pada pergelaran pilkada 2024. saya siap berjuang bersama demi kota bima yang maju dan sejahtera.`
        }
    },
    mounted() {
        this.scrollToTop();
    },
    methods: {
        handlePlaceChanged(place) {
            if (place.geometry) {
                this.markerPosition = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };
                this.mapCenter = this.markerPosition;
                this.form.latitude = this.markerPosition.lat;
                this.form.longitude = this.markerPosition.lng;
            }
        },
        validateForm() {
            if (!this.form.nama) {
                alert('Nama belum diisi');
                return false;
            }
            if (!this.form.hp) {
                alert('No HP belum diisi');
                return false;
            }
            if (!this.form.kecamatan) {
                alert('Kecamatan belum diisi');
                return false;
            }
            if (!this.form.kelurahan) {
                alert('Kelurahan belum diisi');
                return false;
            }
            if (!this.form.rt) {
                alert('RT belum diisi');
                return false;
            }
            if (!this.form.rw) {
                alert('RW belum diisi');
                return false;
            }
            if (!this.form.ttd) {
                alert('Foto KTP belum diupload');
                return false;
            }
            return true;
        },
        handlePhoneNumber() {
            this.form.hp = this.form.hp.replace(/\s+/g, '');
            if (this.form.hp.startsWith('+620')) {
                this.form.hp = '62' + this.form.hp.slice(4);
            }
            else if (this.form.hp.startsWith('620')) {
                this.form.hp = '62' + this.form.hp.slice(3);
            }
            else if (this.form.hp.startsWith('0')) {
                this.form.hp = '62' + this.form.hp.slice(1);
            }
            else if (this.form.hp.startsWith('+')) {
                this.form.hp = this.form.hp.slice(1);
            }
        },
        handleMapClick(event) {
            this.markerPosition = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            this.form.latitude = this.markerPosition.lat;
            this.form.longitude = this.markerPosition.lng;
        },
        handleMarkerDrag(event) {
            this.markerPosition = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            this.form.latitude = this.markerPosition.lat;
            this.form.longitude = this.markerPosition.lng;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        handleFileUpload(event) {
            this.form.ttd = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },
        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            try {
                this.form.nama = sanitizeInput(this.form.nama, 'text');
                this.form.hp = sanitizeInput(this.form.hp, 'phone');
                this.form.kecamatan = sanitizeInput(this.form.kecamatan, 'text');
                this.form.kelurahan = sanitizeInput(this.form.kelurahan, 'text');
                this.form.rt = sanitizeInput(this.form.rt, 'number');
                this.form.rw = sanitizeInput(this.form.rw, 'number');
            } catch (error) {
                return;
            }

            this.handlePhoneNumber();

            const formData = new FormData();
            for (let key in this.form) {
                formData.append(key, this.form[key]);
            }
            formData.append('suratPernyataan', this.formatSurat);

            try {
                await Api.post('relawan', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                this.resetForm();
                alert('Tim relawan berhasil ditambahkan!');
            } catch (err) {
                console.error(err);
                alert('Gagal menyimpan data tim relawan');
            }
        },
        resetForm() {
            this.form = {
                namatim: '',
                namaketua: '',
                totalanggota: 0,
                hp: '',
                kecamatan: '',
                kelurahan: '',
                rt: '',
                rw: '',
                ttd: null,
                latitude: this.mapCenter.lat,
                longitude: this.mapCenter.lng,
            };
            this.fileName = '';
        },
    },
}
</script>