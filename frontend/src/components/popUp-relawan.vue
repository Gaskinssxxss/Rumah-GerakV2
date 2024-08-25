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
                                    <div class="pt-3 uppercase tracking-wide">
                                        <h1>Manfaat Bergabung Menjadi Relawan</h1>
                                    </div>
                                    <div class="pr-4">
                                        <div class="bg-black rounded-full">
                                            <button @click="close"
                                                class="transition-transform duration-300 ease-linear transform translate-x-0 translate-y-0 hover:-translate-x-0 hover:-translate-y-1">
                                                <svg xmlns="http://www.w3.org/2000/svg"
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
                        <div class="bg-black rounded-b-md font-Jet text-base font-extrabold">
                            <div
                                class="bg-gray-200 rounded-b-md relative -top-2 -left-2 border-2 border-black py-1 sm:py-4 px-4 text-start">
                                <div class="pt-2 space-y-4">
                                    <div class="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#00000" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                                        </svg>
                                        <h1>Terhubung Langsung Dengan Tim Internal Pemenangan Maupun kandidat.</h1>
                                    </div>
                                    <div class="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#00000" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-10">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                                        </svg>
                                        <h1>Memiliki Ruang Untuk Memberikan Aspirasi atau Pendapat Secara Langsung Pada
                                            Tim Internal Pemenangan.</h1>
                                    </div>
                                    <div class="flex space-x-2 pb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#00000" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                                        </svg>
                                        <h1>Berpartisipasi Langsung Pada Setiap Kegiatan Kandidat.</h1>
                                    </div>
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