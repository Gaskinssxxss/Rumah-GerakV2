<template>
    <div v-show="pops" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
        <div>
            <div class="flex justify-center items-center" v-motion-pop-visible-once :delay=300>
                <div>
                    <div class="pl-8 pr-6 px-0 sm:px-36 lg:px-[30rem] py-10">
                        <div class="bg-black rounded-t-md">
                            <div
                                class="bg-golkar rounded-md relative -top-2 -left-2 border-2 border-black py-2 font-Karantina font-bold text-3xl text-center">
                                <div class="flex justify-between">
                                    <div class="pl-4 pt-3">
                                        <h1>GERAKAN RELAWAN</h1>
                                    </div>
                                    <div class="pr-4">
                                        <div class="bg-black rounded-full">
                                            <button @click="close"
                                                class="transition-transform duration-300 ease-linear transform translate-x-0 translate-y-0 hover:-translate-x-0 hover:-translate-y-1">
                                                <svg xmlns="https://www.w3.org/2000/svg"
                                                    class="w-10 h-10 p-2 border-2 border-black rounded-full bg-gray-200 "
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-black rounded-b-md font-Jet text-base font-bold">
                            <div
                                class="bg-gray-200 rounded-b-md relative -top-2 -left-2 border-2 border-black py-1 sm:py-2 px-4 sm:px-8 text-justify">
                                <div class="pt-2">
                                    <h1>Bergabunglah sebagai relawan Aji Rum &
                                        Umi Innah ,ambil bagian
                                        dalam membangun
                                        masa depan kota Bima kita! Kami mengundang Anda untuk berperan aktif dalam
                                        kampanye, mendukung visi Aji Rum & umi innah untuk perubahan yang lebih baik
                                        menuju kota
                                        bima baru.</h1>
                                </div>
                                <div class="flex justify-center pb-4 pt-10 sm:pt-6">
                                    <router-link to="/relawan">
                                        <button type="submit">
                                            <div class="bg-black rounded-md">
                                                <div
                                                    class="transition-transform rounded-md duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-nasdem hover:text-gray-200 text-black border-2 border-black px-10 py-2 font-Karantina font-bold text-3xl text-center">
                                                    <h1>GABUNG RELAWAN</h1>
                                                </div>
                                            </div>
                                        </button>
                                    </router-link>
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
export default {
    data() {
        return {
            pops: true,
        }
    },
    methods: {
        close() {
            this.pops = false;
        }
    }
}
</script>