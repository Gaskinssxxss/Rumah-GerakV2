<template>
    <div class="pb-10 px-4 pt-8">
        <div class="font-Karantina font-bold text-2xl uppercase text-center pb-10">
            <div class="" v-motion-pop-visible-once :delay="200">
                <div class=" bg-black rounded-md">
                    <div class="bg-golkar border-2 border-black rounded-md ">
                        <div class=" font-Karantina font-bold text-2xl px-2 py-2">
                            <Vue3Marquee>
                                <span v-for="(word, index) in helloArray" :key="index"
                                    class="font-Karantina font-bold text-3xl tracking-wide uppercase">
                                    {{ word }}
                                </span>
                            </Vue3Marquee>
                        </div>
                    </div>
                </div>
            </div>
            <form @submit.prevent="submitForm" class="text-start pt-6 text-3xl">
                <div class="space-y-4">
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Nama</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="nama" type="text"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="Nama">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>No HP</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="hp" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="No HP">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>Kecamatan</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <select v-model="kecamatan"
                                class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet">
                                <option value="Asakota">Asakota</option>
                                <option value="Rasanae Barat">Rasanae Barat</option>
                                <option value="Rasanae Timur">Rasanae Timur</option>
                                <option value="Raba">Raba</option>
                                <option value="Mpunda">Mpunda</option>
                            </select>
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div>
                            <div>
                                <h1 class="text-start pb-2">Kelurahan</h1>
                                <select v-model="kelurahan" v-if="kecamatan"
                                    class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-2xl font-bold font-Jet">
                                    <option v-for="kelurahanOption in kelurahanOptions[kecamatan]"
                                        :key="kelurahanOption" :value="kelurahanOption">{{ kelurahanOption }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>RT</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="rt" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="RT">
                        </div>
                    </div>
                    <div v-motion-slide-visible-once-left :delay="200">
                        <div class="pb-1">
                            <h1>RW</h1>
                        </div>
                        <div class="bg-black rounded-md">
                            <input v-model="rw" type="tel"
                                class="border-2 border-black bg-gray-200 w-full rounded-md pl-2 font-Jet font-bold text-2xl py-2 capitalize"
                                placeholder="RW">
                        </div>
                    </div>
                    <div class="pt-10 pl-2.5" v-motion-pop-visible-once :delay="200">
                        <div class="bg-black">
                            <div
                                class="bg-golkar relative -top-2 -left-2 border-2 border-black py-1 px-2 font-Karantina font-bold text-3xl text-center">
                                <h1>Kotak Aspirasi</h1>
                            </div>
                        </div>
                        <div class="bg-black font-Jet text-sm font-bold">
                            <div class="relative -top-2 -left-2">
                                <textarea v-model="aspirasi"
                                    class="w-full bg-gray-200 border-2 border-black h-48 px-2 py-2"
                                    placeholder="Your message..."></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end -mt-6">
                            <button type="submit"
                                class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                <div class="bg-black">
                                    <div
                                        class="bg-golkar hover:bg-che hover:text-gray-200 relative -top-1.5 -left-1.5 border-2 border-black py-1 px-6 font-Karantina font-bold text-3xl text-center">
                                        <h1>Kirim...</h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="pt-10 pl-2.5 pb-6" v-motion-pop-visible-once :delay="200">
                        <div class="bg-black">
                            <div
                                class="bg-nasdem text-gray-200 relative -top-2 -left-2 border-2 border-black py-1 px-2 font-Karantina font-bold text-3xl text-center">
                                <h1>Kotak Kritik & Saran</h1>
                            </div>
                        </div>
                        <div class="bg-black font-Jet text-sm font-bold">
                            <div class="relative -top-2 -left-2">
                                <textarea v-model="sarankritik"
                                    class="w-full bg-gray-200 border-2 border-black h-44 px-2 py-2"
                                    placeholder="Your message..."></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end -mt-6">
                            <button type="submit"
                                class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                <div class="bg-black">
                                    <div
                                        class="bg-nasdem hover:bg-che text-gray-200 hover:text-gray-200 relative -top-1.5 -left-1.5 border-2 border-black py-1 px-6 font-Karantina font-bold text-3xl text-center">
                                        <h1>Kirim...</h1>
                                    </div>
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

export default {
    data() {
        return {
            nama: "",
            hp: "",
            kelurahan: "",
            kecamatan: "",
            rt: "",
            rw: "",
            aspirasi: "",
            sarankritik: "",
            kelurahanOptions: {
                'Asakota': ['Melayu', 'Jatiwangi', 'Jatibaru', 'Jatibaru Timur', 'Kolo', 'Ule'],
                'Rasanae Barat': ['Tanjung', 'Paruga', 'Sarae', 'Nae', 'Pane', 'Dara'],
                'Rasanae Timur': ['Kumbe', 'Lampe', 'Oi Fo’o', 'Kodo', 'Dodu', 'Lelamase', 'Nungga', 'Oimbo'],
                'Raba': ['Rontu', 'Penaraga', 'Penanae', 'Rite', 'Rabangodu Utara', 'Rabangodu Selatan', 'Rabadompu Timur', 'Rabadompu Barat', 'Ntobo', 'Kendo', 'Nitu'],
                'Mpunda': ['Sambinae', 'Panggi', 'Monggonao', 'Manggemaci', 'Penatoi', 'Lewirato', 'Sadia', 'Mande', 'Santi', 'Matakando']
            },
        }
    },
    mounted() {
        this.scrollToTop()
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        async submitForm() {
            try {
                const response = await Api.post('aspirasi', {
                    nama: this.nama,
                    hp: this.hp,
                    kelurahan: this.kelurahan,
                    kecamatan: this.kecamatan,
                    rt: this.rt,
                    rw: this.rw,
                    aspirasi: this.aspirasi,
                    sarankritik: this.sarankritik,
                });
                alert("success")
                console.log(response);
            } catch (err) {
                alert("Failed to submit form")
                console.log(err)
            }
        }
    },
    setup() {
        return {
            helloArray: ['Sampaikan Aspirasi, Kritik, dan saran anda untuk membangun kota bima baru yang lebih sejahtera '],
        };
    },
}
</script>