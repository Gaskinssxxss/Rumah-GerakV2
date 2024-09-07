<template>
    <div class="pb-4 pt-4">
        <div class="px-6 font-Karantina font-bold text-3xl uppercase text-center pt-2 pb-10">
            <div class="bg-black" v-motion-pop-visible-once :delay="200">
                <div class="bg-golkar border-2 border-black py-1 relative -top-1 -left-1">
                    <h1>Gerakan Relawan</h1>
                </div>
            </div>
            <div class="pt-2">
                <h1 class="text-xl tracking-wide">AYO BERGABUNG BERSAMA KAMI DEMI KOTA BIMA BARU YANG LEBIH SEJAHTERA!!!
                </h1>
            </div>
            <form @submit.prevent="submitForm" class="text-start pt-6 text-2xl">
                <div class="space-y-2 tracking-wide uppercase">
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Nama tim relawan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.namatim" type="text"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Tim Relawan">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Nama ketua tim relawan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.namaketua" type="text"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Ketua Tim">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>NO hp ketua tim</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.hp" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="No HP">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Total Anggota tim</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="form.totalanggota" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Total Anggota">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200" v-for="(anggota, index) in anggotaList"
                        :key="index">
                        <div class="pb-1">
                            <h1>Nama Anggota {{ index + 1 }}</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="anggotaList[index].namaAnggota" type="text"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="Nama Anggota">
                        </div>
                        <div class="pb-1">
                            <h1>No HP Anggota {{ index + 1 }}</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="anggotaList[index].noHp" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-1 uppercase"
                                placeholder="No HP">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Kecamatan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <select v-model="form.kecamatan"
                                class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet"
                                placeholder="Kecamatan">
                                <option value="Asakota">Asakota</option>
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
                            <div class="pb-1 text-2xl">
                                <h1>Surat Pernyataan Dukungan</h1>
                            </div>
                            <div class="bg-black rounded-md">
                                <div
                                    class="border-2 border-black bg-gray-200 rounded-md p-4 text-start text-lg font-bold font-Jet capitalize">
                                    <div class="whitespace-pre-wrap" v-html="formatSurat"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8" v-motion-pop-visible-once :delay="200">
                        <div class="pb-1">
                            <h1>Pilih Lokasi pada Peta</h1>
                        </div>
                        <div class="pb-4">
                            <GMapAutocomplete @place_changed="handlePlaceChanged"
                                :fields="['geometry', 'formatted_address', 'name']" style="width: 100%; height: 40px;"
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
                    <div class="flex justify-end uppercase pt-10 pb-4 w-full" v-motion-pop-visible-once :delay="200">
                        <button type="submit" class="bg-black rounded-md w-full">
                            <div
                                class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-golkar hover:bg-che hover:text-gray-200 rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider">
                                <h1>Simpan...</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {
    GMapMap, GMapMarker,
    GMapAutocomplete
} from '@fawmi/vue-google-maps';
import Api from '@/services/api';
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
                namatim: '',
                namaketua: '',
                totalanggota: 0,
                hp: '',
                kecamatan: '',
                kelurahan: '',
                rt: '',
                rw: '',
                ttd: null,
                latitude: null,
                longitude: null,
                ttdAngggota: []
            },
            anggotaList: [],
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
            fileNames: ''
        };
    },
    watch: {
        'form.totalanggota': function (newVal) {
            this.generateAnggotaFields(newVal);
        }
    },
    computed: {
        formatSurat() {
            return `Dengan ini, kami dari tim relawan <strong>${this.form.namatim}</strong> dari kecamatan <strong>${this.form.kecamatan}</strong> kelurahan <strong>${this.form.kelurahan}</strong> dan saya <strong>${this.form.namaketua}</strong> sebagai ketua tim relawan <strong>${this.form.namatim}</strong> dengan total anggota tim <strong>${this.form.totalanggota}</strong>, menyatakan dukungan penuh pada mr. x dan ms. y sebagai pasangan calon walikota dan wakil walikota bima pada pergelaran pilkada 2024. kami siap berjuang bersama demi kota bima yang maju dan sejahtera.`;
        },
        fileNamesArray() {
            return this.form.ttdAngggota.map(file => file.name);
        }
    },
    methods: {
        generateAnggotaFields(total) {
            this.anggotaList = [];
            for (let i = 0; i < total; i++) {
                this.anggotaList.push({
                    namaAnggota: '',
                    noHp: ''
                });
            }
        },
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
            if (!this.form.namatim) {
                alert('Nama tim belum diisi');
                return false;
            }
            if (!this.form.namaketua) {
                alert('Nama ketua belum diisi');
                return false;
            }
            if (!this.form.totalanggota || this.form.totalanggota <= 0) {
                alert('Total anggota belum diisi atau tidak valid');
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
            return true;
        },
        handlePhoneNumber() {
            if (this.form.hp.startsWith('0')) {
                this.form.hp = '62' + this.form.hp.slice(1);
            } else if (this.form.hp.startsWith('+')) {
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
        handleFileUpload(event) {
            this.form.ttd = event.target.files[0];
            this.fileName = event.target.files[0].name;
        },
        onFileChanges(a) {
            this.form.ttdAngggota = Array.from(a.target.files);
            this.fileNames = this.form.ttdAngggota.map(file => file.name).join(', ');
        },
        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            try {
                this.form.namatim = sanitizeInput(this.form.namatim, 'text');
                this.form.namaketua = sanitizeInput(this.form.namaketua, 'text');
                this.form.totalanggota = sanitizeInput(this.form.totalanggota, 'number');
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

            this.anggotaList.forEach((anggota, index) => {
                formData.append(`namaAnggota[${index}]`, anggota.namaAnggota);
                formData.append(`noHp[${index}]`, anggota.noHp);
            });

            if (Array.isArray(this.form.ttdAngggota)) {
                this.form.ttdAngggota.forEach(file => {
                    formData.append('ttdAnggota', file);
                });
            } else {
                console.error('ttdAngggota is not an array');
                return;
            }

            try {
                await Api.post('timrelawan', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Tim relawan berhasil ditambahkan!');
                setTimeout(() => {
                    window.location.reload()
                    this.resetForm()
                }, 1000);
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

<style>
#map {
    height: 400px;
    width: 100%;
}
</style>