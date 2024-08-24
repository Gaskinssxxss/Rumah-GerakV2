<template>
    <div class="pt-8">
        <div class="px-10" v-motion-slide-visible-once-left :delay="200">
            <div class=" bg-black rounded-md">
                <div class="bg-golkar rounded-md border-2 border-black relative -top-1 -left-1">
                    <div class=" font-Karantina font-bold text-3xl pl-2 py-2 text-center">
                        <h1>PROFILE KANDIDAT!!!</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt-16">
            <div class="flex justify-center">
                <img v-show="aji" class="h-72" src="../assets/ajix.png" alt="" v-motion-pop-visible-once :delay=200>
                <img v-show="umi" class="h-72" src="../assets/umi.png" alt="" v-motion-pop-visible-once :delay=200>
            </div>
        </div>
        <div v-motion-slide-visible-once-right :delay="200">
            <div class="flex justify-center space-x-4 font-Jet font-bold text-xl py-6">
                <div class="bg-black rounded-md">
                    <button @click="ajix"
                        class="bg-golkar rounded-md transition-transform duration-300 ease-linear transform -translate-x-0 -translate-y-0 hover:-translate-x-1 hover:-translate-y-1 hover:bg-che hover:text-gray-200 border-2 border-black py-1 px-2 relative -top-1 -left-1">
                        <h1>AJI RUM</h1>
                    </button>
                </div>
                <div class="bg-black rounded-md">
                    <button @click="umiy"
                        class="bg-nasdem rounded-md transition-transform duration-300 ease-linear transform -translate-x-0 -translate-y-0 hover:-translate-x-1 hover:-translate-y-1 hover:bg-che border-2 border-black text-gray-200 py-1 px-2 relative -top-1 -left-1">
                        <h1>UMI INNAH</h1>
                    </button>
                </div>
            </div>
        </div>
        <div v-show="aji" class="pl-20 pt-10 font-Jet font-bold" v-motion-slide-visible-once-right :delay="200">
            <div class="bg-black rounded-l-xl">
                <div class="bg-golkar border-2 border-black rounded-l-xl relative -right-2 -top-2">
                    <div class="py-4 flex justify-center">
                        <div class="border-2 border-black rounded-full">
                            <img class="w-44 h-44" src="../assets/ajiRumGrid.png" alt="">
                        </div>
                    </div>
                    <div class="pt-4">
                        <div class="text-justify pl-4 pr-6 pb-4 text-sm">
                            <h1>
                                H. Muhammad Rum yang merupakan keturunan Suku Mbojo Bima ini lahir di Kota Mataram, 16
                                Maret 1966.Rum mulai bersekolah di SD 1 Cakranegara, SMPN 2 Mataram, dan SMA 1 Mataram.
                                Kemudian melanjutkan Diploma III Jurusan Teknik Sipil Konstruksi di ITS Surabaya, S1
                                Teknik Sipil di Universitas Muhammadiyah Mataram, dan S2 Magister Teknik Sipil di
                                Unissula Semarang.
                            </h1>
                            <h1 class="pt-4">
                                Sebelum diangkat menjadi Pj Wali Kota Bima, saat ini H. Muhammad Rum masih menjadi
                                sebagai kepala Dinas PUPR NTB.
                                Rum merupakan sosok pejabat senior di lingkup Pemprov NTB, dia pernah menduduki jabatan
                                beberapa Organisasi Perangkat Daerah (OPD).
                            </h1>
                            <h1 class="pt-4">
                                Diantaranya sebagai kepala Dinas Penanaman Modal dan PTSP Provinsi NTB. Pria yang akrab
                                dengan nama Pak Rum ini, sempat menempati beberapa jabatan di Dinas PU Provinsi NTB,
                                kemudian di Setda Provinsi NTB (Kepala Biro Administrasi Pembangunan dan
                                Kepala Biro Administrasi Kerja Sama). Rum juga pernah menjadi kepala Pelaksana BPBD
                                Provinsi NTB, Staf Ahli Gubernur Bidang
                                Ekonomi Keuangan Infrastruktur dan Pembangunan, dan Kepala Kesbangpoldagri Provinsi NTB.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative -left-20 -top-10 -mb-[100px]">
                <img class="h-64" src="../assets/ajizx.png" alt="" v-motion-slide-visible-once-left :delay="200">
            </div>
        </div>
        <div v-show="umi" class="pr-20 pt-10 font-Jet font-bold" v-motion-slide-visible-once-left :delay="200">
            <div class="bg-black rounded-r-xl">
                <div class="bg-nasdem text-gray-200 border-2 border-black rounded-r-xl relative -left-2 -top-2">
                    <div class="py-4 flex justify-center">
                        <div class="border-2 border-black rounded-full">
                            <img class="w-44 h-44" src="../assets/umiInnahGrid.png" alt="">
                        </div>
                    </div>
                    <div class="pt-4">
                        <div class="text-justify pl-4 pr-6 pb-4 text-sm">
                            <h1>
                                Mutmainnah lahir di Jakarta 22 Desember 1985, saat ini menjadi anggota DPRD Kota Bima.
                                Saat ini, dia tinggal di jalan Gatot Subroto No. 51 RT.009/005 Kelurahan Santi,
                                Kecamatan Mpunda Kota Bima. Anggota DPRD tiga periode ini menempuh pendidikan dasarnya
                                di SDN Kota Bima tahun 1993, kemudian melanjutkan ke SMPN 2 Kota Bima tahun 1999,
                                danpendidikan menengah atas di SMAN 1 Bima tahun 2002.
                            </h1>
                            <h1 class="pt-4">
                                Pendidikan tinggi Innah ditempuh di Universitas Muhammadiyah Bima tahun 2022.
                                Adapun riwayat pekerjaanya tahun 2014-2019 menjadi anggota DPRD Kota Bima dan saat itu
                                dipercaya menjadi ketua Fraksi. Selanjutnya tahun 2022-2024 kembali menjadi anggota DPRD
                                Kota Bima dan dipercaya menjadi
                                wakil ketua badan kehormatan. Dia kembali dipercaya untuk menjadi anggota DPRD Kota Bima
                                tahun 2024-2029.
                                Innah memiliki pengalaman organisasi dengan menjadi ketua DPD KNPI Kota Bima 2018-2021,
                                hingga Ketua DPD NasDem Kota Bima sejak tahun 2016.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative left-64 -top-10 -mb-[85px]">
                <img class="h-64" src="../assets/umix.png" alt="" v-motion-slide-visible-once-right :delay="200">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aji: true,
            umi: false
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
        ajix() {
            this.aji = true,
                this.umi = false
        },
        umiy() {
            this.aji = false,
                this.umi = true
        }
    },
}
</script>