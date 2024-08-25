<template>
  <div>
    <popUp v-motion-pop-visible-once :delay=850 />
    <div class="relative pt-10">
      <div class="px-6" v-motion-pop-visible-once :delay=150>
        <div class=" bg-black rounded-md">
          <div class="bg-golkar border-2 border-black rounded-md relative -top-1 -left-1">
            <div class=" font-Karantina font-bold text-2xl py-2">
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
      <div class="pt-14 z-10 relative -top-4 pr-4">
        <div class="flex justify-center space-x-6 ">
          <div v-motion-slide-visible-once-left :delay="200" class="relative">
            <img class="h-[16rem]" src="../assets/ajix.png" alt="">
          </div>
          <div v-motion-slide-visible-once-right :delay="200" class="relative top-3">
            <img class="h-[15.3rem]" src="../assets/umi.png" alt="">
          </div>
        </div>
      </div>
      <div class="relative -top-8">
        <div>
          <img src="../assets/stage.png" alt="">
        </div>
      </div>
    </div>
    <div class="pt-8 pb-8 -mx-2">
      <div v-motion-slide-visible-once-left :delay="200">
        <div class="bg-nasdem border-2 border-black py-2">
          <VueMarqueeSlider :speed="8000" :width="50" :space="35">
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
              <img src="../assets/pkb.jpeg" />
            </div>
            <div class="flex border-2 border-black">
              <img src="../assets/ppp.png" />
            </div>
            <div class="flex border-2 border-black">
              <img src="../assets/Perindo.png" />
            </div>
          </VueMarqueeSlider>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 px-8 gap-6">
      <div class="bg-black rounded-md">
        <div
          class="border-2 border-black relative -top-1 -left-1 bg-nasdem rounded-md flex justify-center items-center">
          <div class="p-2 text-center">
            <div>
              <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="#d6d6d6" class="size-8 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <div v-if="totalRelawan" class="font-Karantina text-gray-300 text-3xl uppercase font-bold">
              <h1 class="text-xl font-normal tracking-wider">Relawan</h1>
              <h1 class="-mt-2 text-2xl">{{ totalRelawan }}</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black rounded-md">
        <div
          class="border-2 border-black relative -top-1 -left-1 bg-nasdem rounded-md flex justify-center items-center">
          <div class="p-2 text-center">
            <div>
              <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="#d6d6d6" class="size-8 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
            </div>
            <div v-if="baliho" class="font-Karantina text-gray-300 text-3xl uppercase font-bold">
              <h1 class="text-xl font-normal tracking-wider">Posko</h1>
              <h1 class="-mt-2 text-2xl">{{ baliho }}</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-if="totalKegiatan !== 0" class="bg-black rounded-md">
          <div
            class="border-2 border-black relative -top-1 -left-1 bg-nasdem rounded-md flex justify-center items-center">
            <div class="p-2 text-center">
              <div>
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="#d6d6d6" class="size-8 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div v-if="totalKegiatan" class="font-Karantina text-gray-300 text-3xl uppercase font-bold">
                <h1 class="text-xl font-normal tracking-wider">Kegiatan</h1>
                <h1 class="-mt-2 text-2xl">{{ totalKegiatan }}</h1>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="bg-black rounded-md">
          <div
            class="border-2 border-black relative -top-1 -left-1 bg-nasdem rounded-md flex justify-center items-center">
            <div class="p-2 text-center">
              <div>
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="#d6d6d6" class="size-8 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div class="font-Karantina text-gray-300 text-3xl uppercase font-bold">
                <h1 class="text-xl font-normal tracking-wider">Kegiatan</h1>
                <h1 class="-mt-2 text-2xl">0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-black rounded-md">
        <div
          class="border-2 border-black relative -top-1 -left-1 bg-nasdem rounded-md flex justify-center items-center">
          <div class="p-2 text-center">
            <div>
              <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                stroke="#d6d6d6" class="size-8 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <div v-if="artiz" class="font-Karantina text-gray-300 text-3xl uppercase font-bold">
              <h1 class="text-xl font-normal tracking-wider">Artikel</h1>
              <h1 class="-mt-2 text-2xl">{{ artiz }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-6">
      <div class="pt-12 -mr-28">
        <div class="grid grid-cols-2 font-Jet font-extrabold text-base">
          <div class="pt-4" v-motion-slide-visible-once-left :delay="200">
            <div class="bg-black">
              <div class="bg-golkar border-2 border-black py-2 relative -top-1.5 -left-1.5 px-2">
                <h1>
                  Hai, saya Aji Rum. Saya maju sebagai calon Walikota Bima dengan tekad membawa perubahan positif.
                  Bersama, kita bisa membangun Bima Baru yang lebih maju dan sejahtera.
                </h1>
              </div>
            </div>
          </div>
          <div v-motion-slide-visible-once-right :delay="200">
            <div class="relative -left-5 top-20">
              <img class="h-48" src="../assets/aji-2.png" alt="">
            </div>
            <div class="relative iphone-11-pro:top-[76px] siomi:top-[75px] top-[102px] right-7">
              <img class="w-32" src="../assets/sd.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="pt-12 -ml-24">
        <div class="grid grid-cols-2 font-Jet font-extrabold text-base">
          <div v-motion-slide-visible-once-left :delay="200"
            class="z-40 relative md:left-2 siomi:left-10 iphone-11-pro:left-2">
            <div>
              <img class="h-48 relative iphone-11-pro:left-24 left-32 top-20" src="../assets/umix-2.png" alt="">
            </div>
            <div class="relative iphone-11-pro:top-[75px] siomi:top-[75px] top-[102px] iphone-11-pro:left-16 left-24">
              <img class="w-32" src="../assets/sd.png" alt="">
            </div>
          </div>
          <div class="pt-4 siomi:pt-8 z-10" v-motion-slide-visible-once-right :delay="200">
            <div class="bg-black">
              <div class="bg-nasdem text-gray-200 border-2 border-black py-2 relative -top-1.5 -left-1.5 px-2">
                <h1>
                  Hai, saya Umi Innah. Saya calon Wakil Walikota Bima. Bersama Aji Rum, kami berkomitmen membawa Bima
                  menuju kemajuan dan kesejahteraan yang lebih baik.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-12 px-4" v-motion-slide-visible-once-right :delay="200">
      <div class=" bg-black rounded-md">
        <div class="bg-nasdem border-2 border-black relative -top-1 -left-1 rounded-md">
          <div class=" font-Karantina font-bold text-2xl py-2">
            <Vue3Marquee>
              <span v-for="(word, index) in txt" :key="index"
                class="font-Karantina text-white font-bold text-3xl tracking-wide uppercase">
                {{ word }}
              </span>
            </Vue3Marquee>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-10 pt-4" v-motion-pop-visible-once :delay=300>
      <gridArtikel />
    </div>
  </div>
</template>

<script>
import popUp from "@/components/popUp.vue"
import gridArtikel from "@/components/gridArtikel.vue"
import { VueMarqueeSlider } from '../../node_modules/vue3-marquee-slider';
import '../../node_modules/vue3-marquee-slider/dist/style.css'
import api from "@/services/api";
import CryptoJS from 'crypto-js';

const secretKey = 'c8h2NdW7oE9kJ4r5bT8vF1gP3yS6wL7n';

const decryptData = (encryptedData) => {
  try {
    const iv = CryptoJS.enc.Hex.parse(encryptedData.iv);
    const encrypted = CryptoJS.enc.Hex.parse(encryptedData.data);
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encrypted },
      CryptoJS.enc.Utf8.parse(secretKey),
      { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
    );
    const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    return decryptedString;
  } catch (error) {
    console.error("Error during decryption:", error);
    return;
  }
};

export default {
  name: 'HomePage',
  components: {
    popUp,
    VueMarqueeSlider,
    gridArtikel,
  },
  data() {
    return {
      totalRelawan: 0,
      totalKegiatan: 0,
      baliho: 0,
      artiz: 0,
    }
  },
  mounted() {
    this.scrollToTop();
    this.getTotalRelawan();
  },
  methods: {
    async getTotalRelawan() {
      try {
        const res = await api.get('relawan');
        const rez = await api.get('totalanggota');
        const ball = await api.get('posko');
        const keg = await api.get('kegiatan/relawan');
        const arti = await api.get('artikel');

        const lenData = decryptData(res.data);
        const lenzData = decryptData(rez.data);
        const ballData = decryptData(ball.data);
        const kegData = decryptData(keg.data);
        const artiData = decryptData(arti.data);

        if (lenData && lenzData && ballData && kegData && artiData) {
          const parsedLenData = JSON.parse(lenData);
          const parsedLenzData = JSON.parse(lenzData);
          const parsedBallData = JSON.parse(ballData);
          const parsedKegData = JSON.parse(kegData);
          const parsedArtiData = JSON.parse(artiData);
          console.log(parsedLenzData)

          if (Array.isArray(parsedLenData.data)) {
            const len = parsedLenData.data.length ? parseInt(parsedLenData.data.length, 10) : 0;
            const lenz = parseInt(parsedLenzData.data)
            const ballz = parsedBallData.data.length;
            const kegs = parsedKegData.data.length;
            const artix = parsedArtiData.data.length;

            this.totalRelawan = len + lenz;
            this.baliho = ballz;
            this.totalKegiatan = kegs;
            this.artiz = artix;
          } else {
            console.error('Data is not an array:', parsedLenData.data);
          }
        } else {
          console.error('Error: Decryption failed');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  setup() {
    return {
      helloArray: ['Selamat Datang di kota bima baru yang memiliki sdm unggul, infrastruktur maju, dan sejahtera '],
      txt: ['Portal Artikel Lorem Ipsum. Terkait kondisi terkini yang aktual dan informatif.']
    };
  },
}
</script>