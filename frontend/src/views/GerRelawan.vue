<template>
    <div>
        <pops v-motion-pop-visible-once :delay=850 />
        <div class="pt-4">
            <div class="font-Karantina font-bold text-base uppercase text-center pb-2 px-4">
                <div class="pt-4 sm:pt-10" v-motion-pop-visible-once :delay=120>
                    <div class="bg-black rounded-md">
                        <div class="bg-golkar rounded-md border-2 border-black py-1 relative -top-1 -left-1">
                            <div class=" font-Karantina font-bold text-3xl py-1">
                                <Vue3Marquee>
                                    <span v-for="(word, index) in helloArray" :key="index" class="uppercase">
                                        {{ word }}
                                    </span>
                                </Vue3Marquee>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-2 sm:pt-4" v-motion-pop-visible-once :delay=190>
                    <h1 class="text-[14px]/[20px] font-Jet font-bold text-justify tracking-wide">Bergabunglah sebagai
                        relawan untuk mendukung Aji Rum dan Umi Innah sebagai calon Walikota dan Wakil Walikota Bima.
                        Dengan
                        semangat dan dedikasi, mari kita wujudkan visi kita untuk kemajuan dan kesejahteraan Kota Bima.
                        Daftarkan diri Anda sekarang dan jadilah bagian dari perubahan positif untuk kota kita!</h1>
                </div>
                <div class="pt-8 sm:pt-6" v-motion-pop-visible-once :delay=210>
                    <h1 class="text-3xl tracking-wide text-start">pilih : </h1>
                </div>
                <div class="pt-2 sm:pt-6 text-3xl" v-motion-pop-visible-once :delay=250>
                    <div class="flex justify-center items-center space-x-4 pb-4">
                        <div>
                            <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-16">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h1>
                                TIM
                            </h1>
                        </div>
                    </div>
                    <div class="px-4">
                        <router-link to="/relawan/tim">
                            <button class="bg-black w-full rounded-lg">
                                <div
                                    class="rounded-lg transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-nasdem hover:bg-che text-gray-200 border-2 border-black py-2  px-4 text-3xl">
                                    <h1>GABUNG</h1>
                                </div>
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="pt-16 pb-10 text-3xl" v-motion-pop-visible-once :delay=265>
                    <div class="flex justify-center items-center space-x-4 pb-4">
                        <div>
                            <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-16">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div>
                            <h1>
                                Individu
                            </h1>
                        </div>
                    </div>
                    <div class="px-4">
                        <router-link to="/relawan/individu">
                            <button class="bg-black w-full rounded-lg">
                                <div
                                    class="rounded-lg transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-nasdem hover:bg-che text-gray-200 border-2 border-black py-2  px-4 text-3xl">
                                    <h1>GABUNG</h1>
                                </div>
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex justify-center space-x-6 -mb-5">
                <div v-motion-slide-visible-once-left :delay=150>
                    <img class="h-48" src="../assets/aji-2.png" alt="">
                </div>
                <div v-motion-slide-visible-once-right :delay=150>
                    <img class="h-48" src="../assets/umix.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pops from "../components/popUp-relawan.vue"

export default {
    components: {
        pops
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
        }
    },
    setup() {
        return {
            helloArray: ['AYO BERGABUNG BERSAMA KAMI DEMI KOTA BIMA BARU YANG LEBIH SEJAHTERA!!! ']
        };
    },
}
</script>