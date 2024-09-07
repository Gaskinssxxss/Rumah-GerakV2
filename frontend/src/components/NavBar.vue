<template>
    <nav class="border-b-2 border-neutral-300">
        <div class="container mx-auto flex justify-between items-center px-4 pt-4 pb-2 shadow-2xl">
            <div class="flex space-x-2 pb-1">
                <div>
                    <h1 class="text-4xl font-semibold font-Karantina uppercase pt-3 flex tracking-wide italic">RUM
                        <span><img class="w-10 h-12 fill-gray-300 -mt-4 ml-1" src="../assets/fist.png" alt=""></span>H
                        <span class="pl-2">GERAK!</span>
                    </h1>
                    <h1
                        class="text-lg font-semibold font-Karantina uppercase -mt-2 text-che tracking-wide underline italic">
                        <span class="text-black underline decoration-black">Rum-Innah</span>
                        Gerakan
                        Rakyat!
                    </h1>
                </div>
            </div>
            <div class="pt-4">
                <button @click="open"
                    class="transition-transform duration-300 ease-linear transform -translate-x-0 -translate-y-0 hover:-translate-x-1 hover:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
                        class="size-12 stroke-black active:stroke-gray-600 hover:stroke-gray-600">
                        <path stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
        <div>
            <div v-show="navbar" v-click-outside="handleOutsideClick"
                class="font-Karantina text-2xl font-bold w-full shadow-2xl">
                <div class="bg-black">
                    <router-link to="/" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Home</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/relawan" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Relawan</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/board" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Papan Informasi</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="">
                    <div class="bg-black">
                        <router-link to="/portal-berita" @click="closeNavbar">
                            <div
                                class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                                <button>
                                    <h1 class="uppercase text-3xl py-1 sm:py-0">Portal Berita</h1>
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="bg-black">
                    <router-link to="/profile-kandidat" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Profile</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/visi-misi" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Visi & Misi</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/koalisi" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Koalisi</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/galleri" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Galleri</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/track-record" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Track Record</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="bg-black">
                    <router-link to="/struktur-tim" @click="closeNavbar">
                        <div
                            class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                            <button>
                                <h1 class="uppercase text-3xl py-1 sm:py-0">Struktur Tim</h1>
                            </button>
                        </div>
                    </router-link>
                </div>
                <div class="">
                    <div class="bg-black">
                        <router-link to="/aspirasi" @click="closeNavbar">
                            <div
                                class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                                <button>
                                    <h1 class="uppercase text-3xl py-1 sm:py-0">Aspirasi</h1>
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="">
                    <div class="bg-black">
                        <router-link to="/baliho" @click="closeNavbar">
                            <div
                                class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                                <button>
                                    <h1 class="uppercase text-3xl py-1 sm:py-0">Posko</h1>
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div class="">
                    <div class="bg-black">
                        <router-link to="/relawan/kegiatan" @click="closeNavbar">
                            <div
                                class=" transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-0 -translate-y-0 hover:-translate-x-2 hover:-translate-y-2 text-center py-1 px-2 md:py-2 bg-neutral-200 hover:bg-che hover:text-neutral-300 border-y-[1px] border-black ">
                                <button>
                                    <h1 class="uppercase text-3xl py-1 sm:py-0">Kegiatan Relawan</h1>
                                </button>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import clickOutside from 'vue-click-outside'

export default {
    directives: {
        clickOutside
    },
    data() {
        return {
            navbar: false
        }
    },
    methods: {
        open() {
            this.navbar = !this.navbar;
        },
        closeNavbar() {
            this.navbar = false;
        },
        handleOutsideClick() {
            if (this.navbar) {
                this.closeNavbar();
            }
        }
    }
}
</script>