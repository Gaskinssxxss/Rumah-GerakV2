<template>
    <div class="px-4">
        <div class="pt-14 pb-2">
            <div class="-mx-6" v-motion-pop :delay="250">
                <div class="bg-nasdem border-2 border-black py-2">
                    <VueMarqueeSlider :speed="8000" :width="50" :space="30">
                        <div class="flex border-2 border-black bg-golkar">
                            <img src="../assets/golkar.png" />
                        </div>
                        <div class="flex border-2 border-black bg-gray-300">
                            <img src="../assets/gerindra.png" />
                        </div>
                        <div class="flex border-2 border-black">
                            <img src="../assets/nasdem.png" />
                        </div>
                        <div class="flex border-2 border-black">
                            <img src="../assets/Gelora.png" />
                        </div>
                        <div class="flex border-2 border-black">
                            <img src="../assets/hanura.png" />
                        </div>
                        <div class="flex border-2 border-black">
                            <img src="../assets/pdip.png" />
                        </div>
                        <div class="flex border-2 border-black">
                            <img src="../assets/Perindo.png" />
                        </div>
                    </VueMarqueeSlider>
                </div>
            </div>
            <div class="py-20 space-y-8 font-Karantina font-bold uppercase text-3xl tracking-wide px-2">
                <div class="flex space-x-4">
                    <div class="bg-black w-36 h-32" v-motion-slide-visible-once-left :delay="200">
                        <div class="bg-golkar border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/golkar.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI GOLKAR</h1>
                        <div class="text-lg -mt-2">
                            <h1>*</h1>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-36 h-32">
                        <div class="bg-gray-200 border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/gerindra.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI GERINDRA</h1>
                        <div class="text-sm -mt-2">
                            <h1>BERGABUNG PADA 1 AGUSTUS 2024
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-36 h-32">
                        <div class="bg-golkar border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/nasdem.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI NASDEM</h1>
                        <div class="text-sm -mt-2">
                            <h1>BERGABUNG PADA 14 AGUSTUS 2024
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-36 h-32">
                        <div class="bg-golkar border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/hanura.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI HANURA</h1>
                        <div class="text-lg -mt-2">
                            <h1>*</h1>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-36 h-32">
                        <div class="bg-gray-200 border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/pdip.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI PDIP</h1>
                        <div class="text-lg -mt-2">
                            <h1>*</h1>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4" v-motion-slide-visible-once-left :delay="200">
                    <div class="bg-black w-36 h-32">
                        <div class="bg-gray-200 border-2 border-black w-36 h-32 ">
                            <div>
                                <img class="w-36 h-32" src="../assets/Perindo.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pt-2" v-motion-slide-visible-once-right :delay="200">
                        <h1>PARTAI PERINDO</h1>
                        <div class="text-lg -mt-2">
                            <h1>*</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center space-x-6 -mb-5">
            <div v-motion-slide-visible-once-left :delay="300">
                <img class="h-48" src="../assets/aji-2.png" alt="">
            </div>
            <div v-motion-slide-visible-once-right :delay="300">
                <img class="h-48" src="../assets/umix.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { VueMarqueeSlider } from '../../node_modules/vue3-marquee-slider';
import '../../node_modules/vue3-marquee-slider/dist/style.css'
export default {
    components: {
        VueMarqueeSlider
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
    }
}
</script>