<template>
    <div v-for="vs in visimisi" :key="vs._id" class="pl-4 pr-2">
        <div class="pt-10" v-motion-slide-visible-once-left :delay="300">
            <div class="bg-black rounded-t-md">
                <div
                    class="bg-golkar rounded-t-md relative -top-1 -left-1 border-2 border-black py-1 px-4 font-Karantina font-bold text-3xl text-center">
                    <h1>VISI & MISI</h1>
                </div>
            </div>
            <div class="bg-black rounded-b-md font-Jet text-base font-bold">
                <div
                    class="bg-golkar rounded-b-md relative -top-1 -left-1 border-2 border-black py-2 px-4 text-justify h-80 overflow-y-auto">
                    <h1 class="pt-2">{{ vs.visi }}</h1>
                    <div>
                        <div v-for="misi in vs.misi" :key="misi.judul" class="pb-4">
                            <div class="text-base pt-2">
                                <div class="space-y-4">
                                    <div v-for="program in misi.program" :key="program" class="flex space-x-2">
                                        <div class="pt-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" class="size-2">
                                                <path
                                                    d="M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17h9.5A2.25 2.25 0 0 0 17 14.75v-9.5A2.25 2.25 0 0 0 14.75 3h-9.5Z" />
                                            </svg>
                                        </div>
                                        <div class="space-y-2">
                                            {{ program }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="relative -top-6 -left-2 siomi:left-10">
                <img class="h-40" src="../assets/aji-2x.png" alt="" v-motion-slide-visible-once-left :delay="200">
            </div>
            <div class="relative -top-8 -left-10 siomi:left-2">
                <img class="w-32" src="../assets/sd.png" alt="">
            </div>
        </div>

        <div class="pb-10 text-gray-200" v-motion-slide-visible-once-right :delay="300">
            <div class="bg-black rounded-t-md">
                <div
                    class="bg-nasdem rounded-t-md relative -top-1 -left-1 border-2 border-black py-1 px-4 font-Karantina font-bold text-3xl text-center">
                    <h1>PROGRAM KERJA</h1>
                </div>
            </div>
            <div class="bg-black rounded-b-md font-Jet text-base font-bold">
                <div
                    class="bg-nasdem rounded-b-md relative -top-1 -left-1 border-2 border-black py-2 px-4 text-justify h-80 overflow-y-auto">
                    <div v-for="misi in vs.programKerja" :key="misi._id" class="pb-4">
                        <div class="text-sm pt-2">
                            <div class="space-y-4">
                                <div v-for="program in misi.program" :key="program" class="flex space-x-2">
                                    <div class="pt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="size-2">
                                            <path
                                                d="M5.25 3A2.25 2.25 0 0 0 3 5.25v9.5A2.25 2.25 0 0 0 5.25 17h9.5A2.25 2.25 0 0 0 17 14.75v-9.5A2.25 2.25 0 0 0 14.75 3h-9.5Z" />
                                        </svg>
                                    </div>
                                    <div class="space-y-2">
                                        {{ program }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pb-10">
            <div class="relative -top-20 -mb-[105px] left-64 siomi:left-60">
                <img class="h-40" src="../assets/umix.png" alt="" v-motion-slide-visible-once-right :delay="200">
            </div>
            <div class="relative -top-[15px] siomi:top-4 left-[14.5rem] siomi:left-[13.8rem]">
                <img class="w-32" src="../assets/sd.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';

export default {
    data() {
        return {
            visimisi: ''
        }
    },
    mounted() {
        this.scrollToTop()
        this.getVisiMIsi()
    },
    methods: {
        async getVisiMIsi() {
            const res = await api.get('visi-misi')
            this.visimisi = res.data.data
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
