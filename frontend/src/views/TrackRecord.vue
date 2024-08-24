<template>
    <div class="pb-10">
        <div>
            <div class="px-8 pt-12" v-motion-slide-visible-once-right :delay="200">
                <div class="bg-black rounded-md">
                    <div
                        class="bg-golkar rounded-md tracking-wide border-2 border-black py-1 relative -left-1 -top-1 pl-2 font-Karantina font-bold text-3xl uppercase">
                        <h1 class="text-center">Track record Aji Rum</h1>
                    </div>
                </div>
            </div>
            <div class="pl-6 font-Jet font-bold text-base">
                <div v-for="tr in trackrecord" :key="tr._id" class="pt-4" v-motion-slide-visible-once-left :delay="200">
                    <div v-for="(icon, index) in tr.x" :key="index" class="flex items-center mb-4">
                        <div>
                            <svg class="w-10 h-10 stroke-[3px] stroke-che" id="Layer_1" version="1.1"
                                viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        d="M30.114,54.14h13.727v21.694h3.4V54.14h13.725c0.939,0,1.701-0.761,1.701-1.7v-4.755c0-3.464-2.615-6.325-5.973-6.726L55.2,28.348h1.506c0.939,0,1.701-0.761,1.701-1.7v-3.583c0-3.049-2.482-5.53-5.533-5.53h-14.67c-3.051,0-5.531,2.481-5.531,5.53v3.583c0,0.939,0.762,1.7,1.699,1.7h1.506l-1.494,12.611c-3.357,0.401-5.971,3.262-5.971,6.726v4.755C28.413,53.379,29.175,54.14,30.114,54.14z M36.073,23.064c0-1.174,0.955-2.129,2.131-2.129h14.67c1.176,0,2.133,0.955,2.133,2.129v1.883H53.63c-0.111-0.023-0.229-0.039-0.348-0.039H37.796c-0.119,0-0.236,0.015-0.348,0.039h-1.375V23.064z M51.776,28.348l1.488,12.559H37.813l1.488-12.559H51.776z M31.813,47.685c0-1.862,1.516-3.378,3.377-3.378h0.697c0.004,0,0.008,0.001,0.014,0.001h19.275c0.006,0,0.01-0.001,0.014-0.001h0.697c1.863,0,3.379,1.516,3.379,3.378v3.055H31.813V47.685z"
                                        fill="#B20600" />
                                </g>
                            </svg>
                        </div>
                        <div class="ml-4">
                            <h1 class="text-base">{{ tr.x[index] }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="px-6 pt-12" v-motion-slide-visible-once-right :delay="200">
                <div class="bg-black rounded-md">
                    <div
                        class="bg-nasdem text-gray-200 rounded-md tracking-wide border-2 border-black py-1 relative -left-1 -top-1 pl-2 font-Karantina font-bold text-3xl uppercase">
                        <h1 class="text-center">Track record Umi Innah</h1>
                    </div>
                </div>
            </div>
            <div class="pl-6 font-Jet font-bold text-base pb-10">
                <div v-for="tr in trackrecord" :key="tr._id" class="pt-4" v-motion-slide-visible-once-left :delay="200">
                    <div v-for="(icon, index) in tr.y" :key="index" class="flex items-center mb-4">
                        <div>
                            <svg class="w-10 h-10 stroke-[3px] stroke-che" id="Layer_1" version="1.1"
                                viewBox="0 0 91 91" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g>
                                    <path
                                        d="M30.114,54.14h13.727v21.694h3.4V54.14h13.725c0.939,0,1.701-0.761,1.701-1.7v-4.755c0-3.464-2.615-6.325-5.973-6.726L55.2,28.348h1.506c0.939,0,1.701-0.761,1.701-1.7v-3.583c0-3.049-2.482-5.53-5.533-5.53h-14.67c-3.051,0-5.531,2.481-5.531,5.53v3.583c0,0.939,0.762,1.7,1.699,1.7h1.506l-1.494,12.611c-3.357,0.401-5.971,3.262-5.971,6.726v4.755C28.413,53.379,29.175,54.14,30.114,54.14z M36.073,23.064c0-1.174,0.955-2.129,2.131-2.129h14.67c1.176,0,2.133,0.955,2.133,2.129v1.883H53.63c-0.111-0.023-0.229-0.039-0.348-0.039H37.796c-0.119,0-0.236,0.015-0.348,0.039h-1.375V23.064z M51.776,28.348l1.488,12.559H37.813l1.488-12.559H51.776z M31.813,47.685c0-1.862,1.516-3.378,3.377-3.378h0.697c0.004,0,0.008,0.001,0.014,0.001h19.275c0.006,0,0.01-0.001,0.014-0.001h0.697c1.863,0,3.379,1.516,3.379,3.378v3.055H31.813V47.685z"
                                        fill="#B20600" />
                                </g>
                            </svg>
                        </div>
                        <div class="ml-4">
                            <h1 class="text-base">{{ tr.y[index] }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api'

export default {
    data() {
        return {
            trackrecord: []
        }
    },
    mounted() {
        this.scrollToTop()
        this.getTr()
    },
    methods: {
        async getTr() {
            const res = await api.get('track-record')
            this.trackrecord = res.data.data
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    }
}
</script>