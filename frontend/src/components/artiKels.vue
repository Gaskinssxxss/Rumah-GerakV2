<template>
    <div>
        <div v-if="!isWarBase">
            <div class="pt-10">
                <div class="bg-nasdem text-gray-200 border-2 border-black py-1.5">
                    <h1 class="text-center font-Jet font-extrabold">ARTIKEL TERBARU</h1>
                </div>
            </div>
            <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :navigation="true" :modules="modules"
                class="mySwiper font-Karantina font-bold text-lg text-center border-2 border-black">
                <swiper-slide v-for="artikel in artikels" :key="artikel._id">
                    <div>
                        <div class="bg-black">
                            <div class="bg-gray-200 border-2 border-black px-2 py-2 ">
                                <div class="px-2 py-2">
                                    <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                                        <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                                            class="w-full max-h-[150px] lg:max-h-[200px] object-cover" />
                                    </div>
                                </div>
                                <h1 class="uppercase pt-2 tracking-wider text-lg font-semibold px-4">{{ artikel.judul }}
                                </h1>
                                <button
                                    class="pl-1 py-4 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                    <div @click="buka(artikel._id)" class="bg-black">
                                        <div
                                            class="bg-golkar border-2 hover:bg-che hover:text-gray-200 border-black w-40 text-2xl ">
                                            <h1>BUKA</h1>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div v-else class="overflow-y-auto h-[33.4rem] w-[72rem] font-Karantina font-bold text-3xl">
            <div class="pt-2 pl-4">
                <h1 class="font-Karantina font-bold text-3xl pb-6 uppercase">Daftar Artikel</h1>
                <div class="grid grid-cols-3 gap-x-10 gap-y-10">
                    <div v-for="artikel in artikels" :key="artikel._id">
                        <div class="bg-black">
                            <div class="bg-gray-200 border-2 border-black px-2 py-2  ">
                                <div class="px-2 py-2">
                                    <div class="bg-gray-300 w-auto h-auto border-2 border-black mx-auto">
                                        <img :src="getFullImgPath(artikel.img)" alt="Artikel Image"
                                            class="w-full max-h-[250px] object-cover" />
                                    </div>
                                </div>
                                <h1 class="uppercase pt-2 tracking-wider text-lg font-semibold px-4 text-center">{{
                                    artikel.judul }}
                                </h1>
                                <div class="flex justify-center">
                                    <button
                                        class="pl-1 py-4 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                        <div @click="buka(artikel._id)" class="bg-black">
                                            <div
                                                class="bg-golkar border-2 hover:bg-che hover:text-gray-200 border-black w-40 text-2xl ">
                                                <h1>BUKA</h1>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import artikelService from '../services/artikelApi'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            artikels: [],
            modules: [Autoplay],
        };
    },
    created() {
        artikelService.getAll()
            .then(response => {
                this.artikels = response.data.data;
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    },
    methods: {
        getFullImgPath(img) {
            return `http://rumahgerak.com/${img}`;
        },
        async buka(id) {
            console.log(id)
            await this.$router.push({ name: 'PORTAL', params: { id } });
        }
    },
    computed: {
        isWarBase() {
            return this.$route.path === "/warbase";
        }
    }
};
</script>