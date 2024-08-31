<template>
    <div class="bg-blue-800 w-full h-full uppercase font-Karantina font-bold text-gray-200 px-12">
        <div class="py-5">
            <div class="text-4xl">
                <div class="flex justify-between">
                    <div>
                        <h1>
                            Dashboard
                        </h1>
                    </div>
                    <div class="flex space-x-8">
                        <div>
                            <h1>Administrator</h1>
                        </div>
                        <div class="bg-black">
                            <div @click="logout"
                                class="bg-gray-200 border-2 border-black text-black px-4 transitio-transform duration-300 ease-linear transform -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                <button class="uppercase">
                                    <h1>Logout</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10">
                <div class="flex text-2xl">
                    <div class="w-[28rem] pr-6 overflow-y-auto h-[38.5rem]">
                        <div class="bg-black">
                            <div @click="livechat"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Live Chat
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="showRelawan"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Relawan
                                </h1>
                            </div>
                            <div @click="showRelawanConfirm"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Konfirmasi Relawan
                                </h1>
                            </div>
                            <div @click="showTimRelawanConfirm"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Konfirmasi Tim Relawan
                                </h1>
                            </div>
                            <div @click="showRelawanDelete"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Hapus Relawan
                                </h1>
                            </div>
                            <div @click="showTimRelawanDelete"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Hapus Tim Relawan
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="Broad"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    BroadCast
                                </h1>
                            </div>
                            <div @click="kunjungan"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Pesan Kunjungan
                                </h1>
                            </div>
                            <div @click="info"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Pesan Informasi Umum
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="balihox"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Monitoring Posko
                                </h1>
                            </div>
                            <div @click="ballReport"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Laporan
                                </h1>
                            </div>
                            <div @click="ballStats"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Cari Posko
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="kegiatan"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Monitoring Kegiatan Relawan
                                </h1>
                            </div>
                            <div @click="reportKegiatanRelawan"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Laporan
                                </h1>
                            </div>
                            <div @click="dataKegiatanRelawan"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Cari Kegiatan Relawan
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="dataStats"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Data Statistik
                                </h1>
                            </div>
                            <div @click="RelawanDatas"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Relawan
                                </h1>
                            </div>
                            <div @click="timRelawanDatas"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Tim Relawan
                                </h1>
                            </div>
                            <div @click="kegRelawanStats"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Kegiatan Relawan
                                </h1>
                            </div>
                            <div @click="balihoStats"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Posko
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="ManageBoard"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Board
                                </h1>
                            </div>
                            <div @click="createBoard"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Buat Board
                                </h1>
                            </div>
                            <div @click="editsBoard"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Edit Board
                                </h1>
                            </div>
                            <div @click="deletesBoard"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Hapus Board
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="manageArtikel"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Artikel
                                </h1>
                            </div>
                            <div @click="createArtikel"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wide">
                                <h1>
                                    Buat Artikel
                                </h1>
                            </div>
                            <div @click="editArtikel"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Edit Artikel
                                </h1>
                            </div>
                            <div @click="deleteArtikel"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Hapus Artikel
                                </h1>
                            </div>
                        </div>
                        <div class="bg-black">
                            <div @click="ManageGallery"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 hover:text-gray-200 bg-gray-200 text-black hover:bg-che p-2">
                                <h1>
                                    Gallery
                                </h1>
                            </div>
                            <div @click="createGallery"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Buat Gallery
                                </h1>
                            </div>
                            <div @click="editsGallery"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Edit Gallery
                                </h1>
                            </div>
                            <div @click="deletesGallery"
                                class="border-2 border-black transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 text-black bg-sun hover:text-gray-200 font-semibold hover:bg-che text-xl px-2 uppercase tracking-wider">
                                <h1>
                                    Hapus Gallery
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="max-w-[65rem] w-full">
                        <div class="bg-gray-200">
                            <div>
                                <div v-if="liveChats" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                    <AdminLiveChat />
                                </div>
                            </div>
                            <div v-if="petaRelawan">
                                <div class="flex justify-between">
                                    <h1 class="px-6 py-2 text-black text-4xl">Peta Relawan</h1>
                                    <div class="text-black px-6 py-4">
                                        <div class="flex space-x-10">
                                            <div class="bg-black">
                                                <div
                                                    class="border-2 border-black px-4 py-0.5 bg-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                    <button @click="tim">
                                                        <h1 class="bg-gray-200">TIM</h1>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="bg-black">
                                                <div
                                                    class="border-2 border-black px-4 py-0.5 bg-gray-200 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                    <button @click="individ">
                                                        <h1 class="bg-gray-200">INDIVIDU</h1>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="relawan" class="pb-6 px-4">
                                    <GMapMap :center="mapCenter" :zoom="15" style="width: 62rem; height: 32.8rem"
                                        :options="{ gestureHandling: 'greedy', fullscreenControl: true, mapTypeId: 'hybrid' }">
                                        <GMapMarker v-for="relawan in relawans" :key="relawan._id"
                                            :position="{ lat: relawan.latitude, lng: relawan.longitude }"
                                            @click="showInfoWindow(relawan, 'relawan')" />
                                        <GMapInfoWindow v-if="infoWindowOpen && infoWindowType === 'relawan'"
                                            :key="infoWindowKey" :position="infoWindowPos"
                                            @closeclick="closeInfoWindow">
                                            <div v-if="selectedRelawan"
                                                class="font-Jet text-xs font-normal tracking-wider text-black">
                                                <h3>Nama: {{ selectedRelawan.nama }}</h3>
                                                <p>HP: {{ selectedRelawan.hp }}</p>
                                                <p>Kecamatan: {{ selectedRelawan.kecamatan }}</p>
                                                <p>Kelurahan: {{ selectedRelawan.kelurahan }}</p>
                                                <p>RT/RW: {{ selectedRelawan.rt }}/{{ selectedRelawan.rw }}</p>
                                                <p>Status: {{ selectedRelawan.status }}</p>
                                            </div>
                                        </GMapInfoWindow>
                                    </GMapMap>
                                </div>
                                <div v-if="tims" class="pb-6 px-4">
                                    <GMapMap :center="mapCenter" :zoom="15" style="width: 62rem; height: 32.8rem"
                                        :options="{ gestureHandling: 'greedy', fullscreenControl: true, mapTypeId: 'hybrid' }">
                                        <GMapMarker v-for="tim in timrelawan" :key="tim._id"
                                            :position="{ lat: tim.latitude, lng: tim.longitude }"
                                            @click="showInfoWindow(tim, 'timrelawan')" />
                                        <GMapInfoWindow v-if="infoWindowOpen && infoWindowType === 'timrelawan'"
                                            :key="infoWindowKey" :position="infoWindowPos"
                                            @closeclick="closeInfoWindow">
                                            <div v-if="selectedRelawan"
                                                class="font-Jet text-xs font-normal tracking-wider text-black">
                                                <h3>Nama Tim: {{ selectedRelawan.namatim }}</h3>
                                                <h3>Nama Ketua: {{ selectedRelawan.namaketua }}</h3>
                                                <p>HP: {{ selectedRelawan.hp }}</p>
                                                <p>Kecamatan: {{ selectedRelawan.kecamatan }}</p>
                                                <p>Kelurahan: {{ selectedRelawan.kelurahan }}</p>
                                                <p>RT/RW: {{ selectedRelawan.rt }}/{{ selectedRelawan.rw }}</p>
                                                <p>Status: {{ selectedRelawan.status }}</p>
                                            </div>
                                        </GMapInfoWindow>
                                    </GMapMap>
                                </div>
                            </div>
                            <div
                                class="bg-none overflow-y-auto font-Jet text-sm font-extrabold text-black max-h-[38.5rem]">
                                <div v-if="relawanConfirm" class="bg-gray-100 p-5 rounded">
                                    <h2 class="text-2xl mb-4 text-black">Konfirmasi
                                        Relawan</h2>
                                    <div class="grid grid-cols-3 gap-4 h-[38.5rem]">
                                        <div v-for="relawan in relawans" :key="relawan._id" class="mb-4">
                                            <div class="bg-white p-4 rounded shadow">
                                                <div class="py-2 flex">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="generatePDFx(relawan)"
                                                            class="bg-gray-200 rounded-md transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:bg-gray-400 hover:text-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                                            <h1>Buka File Lengkap...</h1>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p class="mb-6">Status: {{ relawan.status }}</p>
                                                <p class="mb-2">Nama: {{ relawan.nama }}</p>
                                                <p class="mb-2">HP: {{ relawan.hp }}</p>
                                                <p class="mb-2">Kecamatan: {{ relawan.kecamatan }}</p>
                                                <p class="mb-2">Kelurahan: {{ relawan.kelurahan }}</p>
                                                <p class="mb-2">Rt: {{ relawan.rt }}</p>
                                                <p class="mb-6">Rw: {{ relawan.rw }}</p>
                                                <div class="flex justify-between">
                                                    <div class="bg-black rounded-md">
                                                        <button
                                                            @click="updateRelawanStatus(relawan._id, 'success', relawan.hp)"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Success
                                                        </button>
                                                    </div>
                                                    <div class="bg-black rounded-md">
                                                        <button @click="updateRelawanStatus(relawan._id, 'gagal')"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Gagal
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="timrelawanConfirm" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Konfirmasi Tim Relawan</h2>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div v-for="tim in timrelawan" :key="tim._id" class="mb-4">
                                            <div class="bg-white p-4 rounded shadow">
                                                <div class="py-2 flex">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="generatePDF(tim)"
                                                            class="bg-gray-200 rounded-md transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:bg-gray-400 hover:text-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                                            <h1>Buka File Lengkap...</h1>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p class="mb-6">Status: {{ tim.status }}</p>
                                                <p class="mb-2">Nama Tim: {{ tim.namatim }}</p>
                                                <p class="mb-2">Nama Ketua: {{ tim.namaketua }}</p>
                                                <p class="mb-2">Anggota : {{ tim.totalanggota }} orang</p>
                                                <p class="mb-2">No HP: {{ tim.hp }}</p>
                                                <p class="mb-2">Kecamatan: {{ tim.kecamatan }}</p>
                                                <p class="mb-2">Kelurahan: {{ tim.kelurahan }}</p>
                                                <p class="mb-2">Rt: {{ tim.rt }}</p>
                                                <p class="mb-6">Rw: {{ tim.rw }}</p>
                                                <div class="flex justify-between">
                                                    <div class="bg-black rounded-md">
                                                        <button
                                                            @click="updateTimRelawanStatus(tim._id, 'success', tim.hp)"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Success
                                                        </button>
                                                    </div>
                                                    <div class="bg-black rounded-md">
                                                        <button @click="updateTimRelawanStatus(tim._id, 'gagal')"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Gagal
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="relawanDelete" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Hapus Relawan</h2>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div v-for="relawan in relawans" :key="relawan._id" class="mb-4">
                                            <div class="bg-white p-4 rounded shadow">
                                                <p class="mb-2">Nama: {{ relawan.nama }}</p>
                                                <p class="mb-2">HP: {{ relawan.hp }}</p>
                                                <p class="mb-2">Kecamatan: {{ relawan.kecamatan }}</p>
                                                <p class="mb-2">Kelurahan: {{ relawan.kelurahan }}</p>
                                                <p class="mb-2">Rt: {{ relawan.rt }}</p>
                                                <p class="mb-2">Rw: {{ relawan.rw }}</p>
                                                <div class="flex">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="deleteRelawan(relawan._id)"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="timrelawanDelete" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Hapus Tim Relawan</h2>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div v-for="tim in timrelawan" :key="tim._id" class="mb-4">
                                            <div class="bg-white p-4 rounded shadow">
                                                <p class="mb-2">Nama Tim: {{ tim.namatim }}</p>
                                                <p class="mb-2">Nama Ketua: {{ tim.namaketua }}</p>
                                                <p class="mb-2">Anggota : {{ tim.totalanggota }} orang</p>
                                                <p class="mb-2">No HP: {{ tim.hp }}</p>
                                                <p class="mb-2">Kecamatan: {{ tim.kecamatan }}</p>
                                                <p class="mb-2">Kelurahan: {{ tim.kelurahan }}</p>
                                                <p class="mb-2">Rt: {{ tim.rt }}</p>
                                                <p class="mb-2">Rw: {{ tim.rw }}</p>
                                                <div class="flex">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="deleteTimRelawan(tim._id)"
                                                            class="transition-transform border-2 border-black duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-gray-400 text-balance font-bold py-2 px-4 rounded">
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="broadcast" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                    <div>
                                        <h1>Kamu Berada Di Area Broadcats Direct.</h1>
                                        <div class="text-xl pt-6">
                                            <h1>Terdapat Beberapa Fitur Untuk mengirimkan Pesan Langsung kepada sseluruh
                                                relawan yang terdaftar.</h1>
                                            <div class="pt-6">
                                                <div>
                                                    <h1>* Broadcast Pesan Kunjungan Kandidat</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa mengirimkan pesan otomatis kepada seluruh
                                                            relawan melalui media whatsapp. Untuk memberikan informasi
                                                            terkait kunjungan kandiat pada
                                                            tempat
                                                            dan waktu yang ditentukan.</h1>
                                                    </div>
                                                </div>
                                                <div class="pt-6">
                                                    <h1>* Broadcast Pesan Informasi Umum</h1>
                                                    <div class="pl-6 pt-2">
                                                        <h1>Dimana Tim Bisa mengirimkan pesan otomatis kepada seluruh
                                                            relawan melalui media whatsapp. Untuk memberikan informasi
                                                            terkait adanya item-item baru dan informatif yang baru saja
                                                            dipublikasi</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="pesanKunjungan" class="bg-gray-100 p-5 rounded h-[38.5rem] text-2xl">
                                    <div>
                                        <div class="flex justify-between">
                                            <div>
                                                <h1>Kamu Berada Di Area Broadcats Direct.</h1>
                                            </div>
                                            <div class="bg-black rounded-md">
                                                <button @click="generateQR"
                                                    class="bg-gray-200 border-2 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 border-black rounded-md px-2 py-1">
                                                    <h1>
                                                        Connect Bot.
                                                    </h1>
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="qr">
                                            <div class="fixed inset-0 flex justify-center items-center z-50">
                                                <div class="bg-gray-200 text-black border-2 border-black p-2">
                                                    <div class="flex justify-between">
                                                        <div>
                                                            <h1>QR Code</h1>
                                                        </div>
                                                        <div>
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
                                                    <div v-if="loading" class="flex justify-center items-center">
                                                        <svg class="animate-spin h-10 w-10 text-black"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24">
                                                            <circle class="opacity-25" cx="12" cy="12" r="10"
                                                                stroke="currentColor" stroke-width="4"></circle>
                                                            <path class="opacity-75" fill="currentColor"
                                                                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"></path>
                                                        </svg>
                                                    </div>
                                                    <div v-else>
                                                        <div v-if="!qrCode">
                                                            <h1 class="text-base pt-4">Qr Belum Tersedia</h1>
                                                            <h1 class="text-base">Harap Tunggu Sebentar.</h1>
                                                        </div>
                                                        <div v-else>
                                                            <vue-qrcode :value="qrCode" :size="2000" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-xl pt-6">
                                            <div class="bg-black">
                                                <div
                                                    class="bg-gray-200 relative -top-1 -left-1 border-2 border-black py-1 px-4 font-Karantina font-bold text-3xl text-center">
                                                    <h1>Pesan Kunjungan</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="bg-black">
                                                    <textarea
                                                        class="w-full h-[28rem] capitalize pl-4 border-2 border-black bg-gray-100 pt-4 relative -top-0.5 -left-1"
                                                        v-model="messages"
                                                        placeholder="Tuliskan Pesan Broadcast Terkait Kunjungan Dari Lorem Ipsum"
                                                        required></textarea>
                                                </div>
                                                <div class="flex justify-end pl-2 pr-2 -mt-10">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="sendBroadcast"
                                                            class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-che hover:text-gray-200 rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider font-Karantina">
                                                            <h1>Kirim Pesan</h1>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="pesanGeneral" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                    <div>
                                        <h1>Kamu Berada Di Area Broadcats Direct.</h1>
                                        <div class="text-xl pt-6">
                                            <div class="bg-black">
                                                <div
                                                    class="bg-gray-200 relative -top-1 -left-1 border-2 border-black py-1 px-4 font-Karantina font-bold text-3xl text-center">
                                                    <h1>Pesan Informasi Umum</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="bg-black">
                                                    <textarea
                                                        class="w-full h-[28rem] capitalize pl-4 border-2 border-black bg-gray-100 pt-4 relative -top-0.5 -left-1"
                                                        v-model="messagesx"
                                                        placeholder="Tuliskan Pesan Broadcast Terkait Informasi Umum Dari Lorem Ipsum"
                                                        required></textarea>
                                                </div>
                                                <div class="flex justify-end pr-2 -mt-10">
                                                    <div class="bg-black rounded-md">
                                                        <button @click="sendBroadcastsx"
                                                            class="transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2 bg-gray-200 hover:bg-che hover:text-gray-200 rounded-md border-2 border-black py-2 px-6 relative uppercase text-4xl tracking-wider font-Karantina">
                                                            <h1>Kirim Pesan</h1>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="bali">
                                    <h1 class="px-6 py-2 text-black text-4xl font-Karantina">Peta Posko</h1>
                                    <div v-if="balihow" class="pb-6 px-4">
                                        <GMapMap :center="mapCenter" :zoom="15" style="width: 62rem; height: 32.8rem"
                                            :options="{ gestureHandling: 'greedy', fullscreenControl: true, mapTypeId: 'hybrid' }">
                                            <GMapMarker v-for="ball in baliho" :key="ball._id"
                                                :position="{ lat: ball.latitude, lng: ball.longitude }"
                                                @click="showInfoWindow(ball, 'baliho')" />
                                            <GMapInfoWindow v-if="infoWindowOpen && infoWindowType === 'baliho'"
                                                :key="infoWindowKey" :position="infoWindowPos"
                                                @closeclick="closeInfoWindow">
                                                <div v-if="selectedRelawan"
                                                    class="font-Jet text-xs font-normal tracking-wider text-black">
                                                    <h3>Nama : {{ selectedRelawan.nama }}</h3>
                                                    <h3>Tanggal: {{ selectedRelawan.tanggal }}</h3>
                                                    <p>Kecamatan: {{ selectedRelawan.kecamatan }}</p>
                                                    <p>Kelurahan: {{ selectedRelawan.kelurahan }}</p>
                                                    <p>RT/RW: {{ selectedRelawan.rt }}/{{ selectedRelawan.rw }}</p>
                                                    <div class="flex justify-center py-2">
                                                        <img :src="getFullImgPath(selectedRelawan.foto)" alt=""
                                                            class="w-44 h-36 border-2 border-black">
                                                    </div>
                                                </div>
                                            </GMapInfoWindow>
                                        </GMapMap>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="laporanBaliho" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                        <h1 class="px-6 py-2 text-black text-3xl font-Karantina">Laporan Posko</h1>
                                        <div class="grid grid-cols-3 gap-4">
                                            <div v-for="ball in baliho" :key="ball._id" class="mb-4">
                                                <div class="bg-white p-4 rounded shadow">
                                                    <p class="mb-2">Nama : {{ ball.nama }}</p>
                                                    <p class="mb-2">tanggal: {{ ball.tanggal }}</p>
                                                    <p class="mb-2">Kecamatan: {{ ball.kecamatan }}</p>
                                                    <p class="mb-2">Kelurahan: {{ ball.kelurahan }}</p>
                                                    <p class="mb-2">Rt : {{ ball.rt }} - Rw : {{ ball.rw }}</p>
                                                    <div class="py-2">
                                                        <img :src="getFullImgPath(ball.foto)" alt=""
                                                            class="w-full h-64 border-2 border-black">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="statsBaliho"
                                        class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl font-Karantina">
                                        <h2 class="text-3xl mb-4">Data Sebaran Posko</h2>
                                        <div class="flex space-x-8">
                                            <div>
                                                <label for="kecamatan">Kecamatan : </label>
                                                <select id="kecamatan" v-model="selectedKecamatan"
                                                    @change="fetchKelurahanOptions" class="border-2 border-black">
                                                    <option v-for="(kelurahanList, kecamatan) in kelurahanOptions"
                                                        :key="kecamatan" :value="kecamatan">{{ kecamatan }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="kelurahan">Kelurahan : </label>
                                                <select id="kelurahan" v-model="selectedKelurahan"
                                                    class="border-2 border-black">
                                                    <option v-for="kelurahan in kelurahanOptions[selectedKecamatan]"
                                                        :key="kelurahan" :value="kelurahan">{{ kelurahan }}</option>
                                                </select>
                                            </div>
                                            <div class="bg-black rounded-md">
                                                <button @click="searchBaliho"
                                                    class="py-1 rounded-md bg-gray-200 border-2 border-black px-4 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                    <h1>Cari...</h1>
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="searchResults.length">
                                            <h3 class="mt-4">Hasil Pencarian</h3>
                                            <ul>
                                                <li v-for="kegiatan in searchResults" :key="kegiatan._id">
                                                    {{ kegiatan.namaKegiatan }} - {{ kegiatan.kecamatan }} - {{
                                                        kegiatan.kelurahan }}
                                                </li>
                                            </ul>
                                        </div>
                                        <div v-else class="mt-4">
                                            <p>Tidak ada Posko yang ditemukan.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="kegRelawan" class="pb-6 px-4">
                                        <h1 class="px-6 py-2 text-black text-4xl font-Karantina">Peta Kegiatan Relawan
                                        </h1>
                                        <GMapMap :center="mapCenter" :zoom="15" style="width: 62rem; height: 32.8rem"
                                            :options="{ gestureHandling: 'greedy', fullscreenControl: true, mapTypeId: 'hybrid' }">
                                            <GMapMarker v-for="kegx in kegiatanRelawan" :key="kegx._id"
                                                :position="{ lat: kegx.latitude, lng: kegx.longitude }"
                                                @click="showInfoWindow(kegx, 'kegiatanRelawan')" />
                                            <GMapInfoWindow
                                                v-if="infoWindowOpen && infoWindowType === 'kegiatanRelawan'"
                                                :key="infoWindowKey" :position="infoWindowPos"
                                                @closeclick="closeInfoWindow">
                                                <div v-if="selectedRelawan"
                                                    class="font-Jet text-xs font-normal tracking-wider text-black">
                                                    <p class="mb-2">Nama Kegiatan : {{ selectedRelawan.namaKegiatan }}
                                                    </p>
                                                    <h3 class="mb-2">Nama : {{ selectedRelawan.nama }}</h3>
                                                    <h3 class="mb-2">Tanggal : {{ selectedRelawan.tanggal }}</h3>
                                                    <p class="mb-2">Jam Mulai : {{ selectedRelawan.jamMulai }}</p>
                                                    <p class="mb-2">Jam Selesai : {{ selectedRelawan.jamSelesai }}</p>
                                                    <p class="mb-2">Kecamatan : {{ selectedRelawan.kecamatan }}</p>
                                                    <p class="mb-2">Kelurahan : {{ selectedRelawan.kelurahan }}</p>
                                                    <p class="mb-2">RT/RW : {{ selectedRelawan.rt }}/{{
                                                        selectedRelawan.rw }}</p>
                                                    <p class="mb-2">Alamat Lengkap : {{ selectedRelawan.alamatLengkap }}
                                                    </p>
                                                    <p class="mb-2">Status Kegiatan : {{ selectedRelawan.statusKegiatan
                                                        }}
                                                    </p>
                                                </div>
                                            </GMapInfoWindow>
                                        </GMapMap>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="laporanKegiatanRelawan" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                        <h1 class="px-6 py-2 text-black text-3xl font-Karantina">Laporan Kegiatan
                                            Relawan</h1>
                                        <div class="grid grid-cols-3 gap-4">
                                            <div v-for="kegs in kegiatanRelawan" :key="kegs._id" class="mb-4">
                                                <div class="bg-white p-4 rounded shadow">
                                                    <p class="pb-4"><span>
                                                            <p v-if="kegs.status === 'Menunggu'"
                                                                class="bg-gray-300 text-black border-2 border-black rounded-md py-1 text-center">
                                                                {{
                                                                    kegs.status }}</p>
                                                            <p v-else-if="kegs.status === 'Disetujui'"
                                                                class="bg-iceBlue border-2 border-black rounded-md py-1 text-center text-gray-200">
                                                                {{
                                                                    kegs.status }}</p>
                                                            <p v-else-if="kegs.status === 'Ditolak'"
                                                                class="bg-che border-2 border-black rounded-md py-1 text-center">
                                                                {{
                                                                    kegs.status }}</p>
                                                            <p v-else
                                                                class="bg-tentraF border-2 border-black rounded-md py-1 text-center">
                                                                {{
                                                                    kegs.status }}</p>
                                                        </span></p>
                                                    <p>Nama Kegiatan : {{ kegs.namaKegiatan }}</p>
                                                    <p>Nama : {{ kegs.nama }}</p>
                                                    <p>tanggal: {{ kegs.tanggal }}</p>
                                                    <p>Jam Mulai: {{ kegs.jamMulai }}</p>
                                                    <p>Jam Selesai: {{ kegs.jamSelesai }}</p>
                                                    <p>Kecamatan: {{ kegs.kecamatan }}</p>
                                                    <p>Kelurahan: {{ kegs.kelurahan }}</p>
                                                    <p>Rt: {{ kegs.rt }}</p>
                                                    <p>Rw: {{ kegs.rw }}</p>
                                                    <p>Alamat Lengkap: {{ kegs.alamatLengkap }}</p>
                                                    <div class="py-2">
                                                        <div class="player-container">
                                                            <vue3-video-player @play="your_method"
                                                                :src="getFullImgPath(kegs.video)"></vue3-video-player>
                                                        </div>
                                                    </div>
                                                    <div class="flex justify-end space-x-4 pt-4">
                                                        <div @click="updateKegiatan(kegs.namaKegiatan, 'Disetujui')"
                                                            class="bg-black rounded-md">
                                                            <button
                                                                class="bg-gray-300 border-2 border-black px-2 py-1 rounded-md transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                                <h1 class="font-extrabold">Disetujui</h1>
                                                            </button>
                                                        </div>
                                                        <div @click="updateKegiatan(kegs.namaKegiatan, 'Ditolak')"
                                                            class="bg-black rounded-md">
                                                            <button
                                                                class="bg-gray-300 border-2 border-black px-2 py-1 rounded-md transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                                <h1 class="font-extrabold">Ditolak</h1>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="statsKegiatanRelawan"
                                        class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl font-Karantina">
                                        <h2 class="text-2xl mb-4">Data Kegiatan Relawan</h2>
                                        <div class="flex space-x-8">
                                            <div>
                                                <label for="kecamatan">Kecamatan : </label>
                                                <select id="kecamatan" v-model="selectedKecamatan"
                                                    @change="fetchKelurahanOptions" class="border-2 border-black">
                                                    <option v-for="(kelurahanList, kecamatan) in kelurahanOptions"
                                                        :key="kecamatan" :value="kecamatan">{{ kecamatan }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="kelurahan">Kelurahan : </label>
                                                <select id="kelurahan" v-model="selectedKelurahan"
                                                    class="border-2 border-black">
                                                    <option v-for="kelurahan in kelurahanOptions[selectedKecamatan]"
                                                        :key="kelurahan" :value="kelurahan">{{ kelurahan }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label for="tanggal">Tanggal : </label>
                                                <input type="date" id="tanggal" v-model="selectedDate"
                                                    class="border-2 border-black">
                                            </div>
                                        </div>
                                        <div class="flex pt-4">
                                            <div class="bg-black rounded-md">
                                                <button @click="searchKegiatan"
                                                    class="py-1 rounded-md bg-gray-200 border-2 border-black px-4 transition-transform duration-300 ease-linear transform hover:scale-[1.02] -translate-x-1 -translate-y-1 hover:-translate-x-2 hover:-translate-y-2">
                                                    <h1>Cari...</h1>
                                                </button>
                                            </div>
                                        </div>
                                        <div v-if="searchResults.length">
                                            <h3 class="mt-4">Hasil Pencarian</h3>
                                            <ul>
                                                <li v-for="kegiatan in searchResults" :key="kegiatan._id">
                                                    {{ kegiatan.namaKegiatan }} - {{ kegiatan.kecamatan }} - {{
                                                        kegiatan.kelurahan }} - {{ kegiatan.tanggal }}
                                                </li>
                                            </ul>
                                        </div>
                                        <div v-else class="mt-4">
                                            <p>Tidak ada kegiatan yang ditemukan.</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="generalStats" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h1>Kamu Berada Di Area Data Statistik.</h1>
                                        <div class="text-xl pt-6">
                                            <h1>Terdapat Beberapa Fitur Untuk untuk melihat Perkembangan Relawan, Tim
                                                Relawan, Posko, dan Kegiatan Relawan.</h1>
                                            <h1>Berdasarkan kecamatan, kelurahan, dan tanggal tertentu.</h1>
                                            <div class="pt-6">
                                                <div>
                                                    <h1>* Data Statistik Relawan</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Melihat Perkembangan dan Penyebaran relawan
                                                            dari kecamatan
                                                            dan kelurahan tertentu</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Data Statistik Tim Relawan</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Melihat Perkembangan dan Penyebaran Tim
                                                            relawan dari
                                                            kecamatan
                                                            dan kelurahan tertentu</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Data Statistik Posko</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Melihat Perkembangan dan Penyebaran Posko
                                                            dari
                                                            kecamatan
                                                            dan kelurahan tertentu</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Data Statistik Kegiatan Relawan</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Melihat Perkembangan dan Penyebaran kegiatan
                                                            Relawan
                                                            dari
                                                            kecamatan
                                                            dan kelurahan tertentu</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="dataStatsRelawan" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h2 class="text-2xl mb-4">Statistik Perkembangan Relawan</h2>
                                        <dataRelawan chartId="customChartId" />
                                    </div>
                                </div>
                                <div>
                                    <div v-if="dataStatsTimRelawan"
                                        class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h2 class="text-2xl mb-4">Statistik Perkembangan Tim Relawan</h2>
                                        <dataTimRelawan />
                                    </div>
                                </div>
                                <div>
                                    <div v-if="dataStatsBaliho" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h2 class="text-2xl mb-4">Statistik Peyebaran Posko</h2>
                                        <balihoMap />
                                    </div>
                                </div>
                                <div>
                                    <div v-if="dataStatsKegRelawan"
                                        class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h2 class="text-2xl mb-4">Statistik Perkembangan Kegiatan Relawan</h2>
                                        <kegRelawanMap />
                                    </div>
                                </div>
                                <div>
                                    <div v-if="generalArtikel" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h1>Kamu Berada Di Area Managemen Artikel.</h1>
                                        <div class="text-xl pt-6">
                                            <h1>Terdapat Beberapa Fitur Untuk untuk Mengolah Artikel yang Tersedia.</h1>
                                            <div class="pt-6">
                                                <div>
                                                    <h1>* Buat Artikel</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Membuat Artikel-Artikel Terkait Kandidat
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Edit Artikel</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa melakukan modifikasi terhadap artikel yang
                                                            telah terpublish.</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Hapus Artikel</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa menghapus artikel yang telah terpublish.
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div v-if="generalGallery" class="bg-gray-100 p-5 rounded h-[38.5rem] text-3xl">
                                        <h1>Kamu Berada Di Area Managemen Gallery.</h1>
                                        <div class="text-xl pt-6">
                                            <h1>Terdapat Beberapa Fitur Untuk untuk Mengolah Gallery yang Tersedia.</h1>
                                            <div class="pt-6">
                                                <div>
                                                    <h1>* Buat Gallery</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa Membuat Gallery-Gallery Terkait Kandidat
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Edit Gallery</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa melakukan modifikasi terhadap artikel yang
                                                            telah terpublish.</h1>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h1>* Hapus Gallery</h1>
                                                    <div class="pl-6 pb-2">
                                                        <h1>Dimana Tim Bisa menghapus artikel yang telah terpublish.
                                                        </h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showCreateBoard" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h1 class="text-3xl">Kamu Berada Di Area Managemen Papan Informasi.</h1>
                                    <div class="text-xl pt-6">
                                        <h1>Terdapat Beberapa Fitur Untuk untuk Mengelola Papan Informasi yang Tersedia.
                                        </h1>
                                        <div class="pt-6">
                                            <div>
                                                <h1>* Buat Informasi</h1>
                                                <div class="pl-6 pb-2">
                                                    <h1>Dimana Tim Bisa Membuat Informasi-Informasi Terkait Agenda
                                                        Kandidat dan lain lain.
                                                    </h1>
                                                </div>
                                            </div>
                                            <div>
                                                <h1>* Edit Informasi</h1>
                                                <div class="pl-6 pb-2">
                                                    <h1>Dimana Tim Bisa melakukan modifikasi terhadap
                                                        Informasi-Informasi Terkait Agenda Kandidat dan lain lain yang
                                                        telah terpublish.</h1>
                                                </div>
                                            </div>
                                            <div>
                                                <h1>* Hapus Informasi</h1>
                                                <div class="pl-6 pb-2">
                                                    <h1>Dimana Tim Bisa menghapus informasi terkait agenda kandidat dan
                                                        lain-lain yang telah terpublish.
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showCreateInfor" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Buat Informasi</h2>
                                    <addBoard />
                                </div>
                                <div v-if="showEditInfor" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Edit Informasi</h2>
                                    <editBoard />
                                </div>
                                <div v-if="showDeleteInfor" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Delete Informasi</h2>
                                    <deleteBoard />
                                </div>
                                <div v-if="showCreateArtikel" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Buat Artikel</h2>
                                    <addArtikel />
                                </div>
                                <div v-if="showEditArtikel" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Edit Artikel</h2>
                                    <editArtikel />
                                </div>
                                <div v-if="showDeleteArtikel" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Hapus Artikel</h2>
                                    <deleteArtikel />
                                </div>
                                <div v-if="showCreateGallery" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Buat Galeri</h2>
                                    <addGallery />
                                </div>
                                <div v-if="showEditGallery" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Edit Galeri</h2>
                                    <editGallery />
                                </div>
                                <div v-if="showDeleteGallery" class="bg-gray-100 p-5 rounded h-[38.5rem]">
                                    <h2 class="text-2xl mb-4">Hapus Galeri</h2>
                                    <deleteGallery />
                                </div>
                                <div v-if="showMessagePopup"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                                        <h2 class="text-xl font-bold mb-4">Masukkan Pesan untuk Relawan</h2>
                                        <textarea v-model="message" placeholder="Masukkan pesan untuk relawan..."
                                            class="w-full h-32 mb-4 border border-gray-300 rounded-lg p-2"></textarea>
                                        <div class="pb-6 space-y-2">
                                            <h1>Link Group Relawan : https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                                            </h1>
                                            <h1>Link Group Tim Relawan :
                                                https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                                            </h1>
                                        </div>
                                        <div class="flex justify-end space-x-4">
                                            <button @click="sendMessage"
                                                class="bg-blue-500 text-white px-4 py-2 rounded-lg">Kirim</button>
                                            <button @click="closePopup"
                                                class="bg-gray-500 text-white px-4 py-2 rounded-lg">Batal</button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="showMessagePopups"
                                    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
                                        <h2 class="text-xl font-bold mb-4">Masukkan Pesan untuk Relawan</h2>
                                        <textarea v-model="messagex" placeholder="Masukkan pesan untuk relawan..."
                                            class="w-full h-32 mb-4 border border-gray-300 rounded-lg p-2"></textarea>
                                        <div class="pb-6 space-y-2">
                                            <h1>Link Group Relawan : https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                                            </h1>
                                            <h1>Link Group Tim Relawan :
                                                https://chat.whatsapp.com/DuOy4iikLCzAXeR2XovBMO
                                            </h1>
                                        </div>
                                        <div class="flex justify-end space-x-4">
                                            <button @click="sendMessagex"
                                                class="bg-blue-500 text-white px-4 py-2 rounded-lg">Kirim</button>
                                            <button @click="closePopup"
                                                class="bg-gray-500 text-white px-4 py-2 rounded-lg">Batal</button>
                                        </div>
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
import { GMapMap, GMapMarker, GMapInfoWindow } from '@fawmi/vue-google-maps';
import Api from '@/services/api';
import dataRelawan from "@/views/mapIndividuPage"
import dataTimRelawan from "@/views/mapPage"
import balihoMap from "@/views/BalihoMap"
import kegRelawanMap from "@/views/kegiatanRelawanMap"
import editArtikel from './editArtikel.vue';
import deleteArtikel from './deleteArtikel.vue';
import addArtikel from './addArtikel.vue';
import addBoard from './addBoard.vue';
import editBoard from './editBoard.vue';
import deleteBoard from './deleteBoard.vue';
import addGallery from './addGallery.vue';
import editGallery from './editGallery.vue';
import deleteGallery from './deleteGallery.vue';
import AdminLiveChat from './AdminLiveChat.vue';
import 'jspdf-autotable';
import VueQrcode from "@chenfengyuan/vue-qrcode";
import api from '@/services/api';
import CryptoJS from 'crypto-js';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
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
    components: {
        GMapMap,
        GMapMarker,
        GMapInfoWindow,
        dataRelawan,
        dataTimRelawan,
        balihoMap,
        kegRelawanMap,
        editArtikel,
        deleteArtikel,
        addArtikel,
        addGallery,
        editGallery,
        VueQrcode,
        deleteGallery,
        AdminLiveChat,
        addBoard,
        editBoard,
        deleteBoard
    },
    data() {
        return {
            mapCenter: { lat: -8.4606, lng: 118.7258 },
            relawans: [],
            timrelawan: [],
            baliho: [],
            kegiatanRelawan: [],
            infoWindowPos: { lat: null, lng: null },
            infoWindowOpen: false,
            infoWindowType: null,
            selectedRelawan: null,
            tims: true,
            relawan: false,
            balihow: false,
            infoWindowKey: 0,
            petaRelawan: true,
            relawanConfirm: false,
            timrelawanConfirm: false,
            relawanDelete: false,
            timrelawanDelete: false,
            broadcast: false,
            laporanBaliho: false,
            statsBaliho: false,
            laporanKegiatanRelawan: false,
            kegRelawan: false,
            statsKegiatanRelawan: false,
            selectedKecamatan: '',
            selectedKelurahan: '',
            selectedDate: '',
            searchResults: [],
            kelurahanOptions: {
                'Asakota': ['Melayu', 'Jatiwangi', 'Jatibaru', 'Jatibaru Timur', 'Kolo', 'Ule'],
                'Rasanae Barat': ['Tanjung', 'Paruga', 'Sarae', 'Nae', 'Pane', 'Dara'],
                'Rasanae Timur': ['Kumbe', 'Lampe', 'Oi Fo’o', 'Kodo', 'Dodu', 'Lelamase', 'Nungga', 'Oimbo'],
                'Raba': ['Rontu', 'Penaraga', 'Penanae', 'Rite', 'Rabangodu Utara', 'Rabangodu Selatan', 'Rabadompu Timur', 'Rabadompu Barat', 'Ntobo', 'Kendo', 'Nitu'],
                'Mpunda': ['Sambinae', 'Panggi', 'Monggonao', 'Manggemaci', 'Penatoi', 'Lewirato', 'Sadia', 'Mande', 'Santi', 'Matakando']
            },
            pesanKunjungan: false,
            dataStatsRelawan: false,
            dataStatsTimRelawan: false,
            dataStatsBaliho: false,
            dataStatsKegRelawan: false,
            generalStats: false,
            pesanGeneral: false,
            showEditArtikel: false,
            showDeleteArtikel: false,
            showCreateArtikel: false,
            showEditGallery: false,
            showDeleteGallery: false,
            showCreateGallery: false,
            generalArtikel: false,
            generalGallery: false,
            showMessagePopup: false,
            showMessagePopups: false,
            message: '',
            messagex: '',
            selectedRelawanId: '',
            selectedRelawanHp: '',
            qrCode: "",
            qr: false,
            loading: false,
            token: '',
            bali: false,
            pdfGeneratedStatus: {},
            pdfGeneratedTimStatus: {},
            liveChats: false,
            showCreateBoard: false,
            showCreateInfor: false,
            showEditInfor: false,
            showDeleteInfor: false,
            messages: `Nama Kegiatan: [Nama Kegiatan]
Tempat: [Nama Tempat/Alamat Lengkap]
Tanggal: [Hari, Tanggal]
Waktu: [Jam Mulai] - [Jam Selesai]
Kecamatan: [Nama Kecamatan]
Kelurahan: [Nama Kelurahan]

Deskripsi Kegiatan:
[Deskripsi singkat mengenai kegiatan yang akan dilaksanakan, tujuan, dan topik yang akan dibahas.]

Kontak Informasi:
[Nama Kontak]
[No. Telepon]
[Email]

Catatan Tambahan:
[Informasi tambahan yang perlu diketahui oleh peserta atau tamu undangan.]`,
            messagesx: `hello World`,
        };
    },
    methods: {
        async updateKegiatan(namaKegiatan, status) {
            try {
                await Api.put(`kegiatan/relawan/status/${namaKegiatan}`, { status });
                alert('Status kegiatan berhasil diperbarui!');
            } catch (err) {
                console.error(err);
                alert('Gagal memperbarui status kegiatan');
            }
        },
        async logout() {
            try {
                await this.$store.dispatch("logout");
                this.$toast.success("Successfully logged out.", { position: "bottom-left", duration: 1000 });
                await this.$router.push("/login");
            } catch (e) {
                console.log(e);
                this.$toast.error("Couldn't log out.", { position: "bottom-left", duration: 1000 });
            }
        },
        resetViews() {
            this.petaRelawan = false;
            this.relawanConfirm = false;
            this.timrelawanConfirm = false;
            this.relawanDelete = false;
            this.timrelawanDelete = false;
            this.broadcast = false;
            this.pesanKunjungan = false;
            this.pesanGeneral = false;
            this.bali = false;
            this.laporanBaliho = false;
            this.statsBaliho = false;
            this.kegRelawan = false;
            this.laporanKegiatanRelawan = false;
            this.dataStatsRelawan = false;
            this.dataStatsTimRelawan = false;
            this.generalArtikel = false;
            this.generalGallery = false;
            this.generalStats = false;
            this.showDeleteGallery = false;
            this.showCreateGallery = false;
            this.showEditGallery = false;
            this.showDeleteArtikel = false
            this.showEditArtikel = false;
            this.showCreateArtikel = false;
            this.dataStatsBaliho = false;
            this.dataStatsKegRelawan = false;
            this.statsKegiatanRelawan = false;
            this.liveChats = false;
            this.showCreateBoard = false;
            this.showCreateInfor = false;
            this.showEditInfor = false;
            this.showDeleteInfor = false
        },
        async fetchRelawanToken(id) {
            try {
                const response = await Api.get(`/relawan/${id}`);
                const decData = decryptData(response.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            const relawan = parsedData.data;
                            if (relawan) {
                                this.token = relawan.token;
                                this.message = `Selamat Anda Telah Terverifikasi Sebagai Relawan. Silahkan Bergabung pada Grup Ini : . Catatan "Tolong Simpan Baik-Baik token anda : *${this.token}*, Karena Akan Digunakan Untuk Beberapa Fitur Terkait Relawan.`;
                            }
                        } else {
                            console.log('error');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        },
        async fetchTimToken(id) {
            try {
                const res = await Api.get(`/timrelawan/${id}`);
                const decData = decryptData(res.data);
                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (parsedData.data) {
                            const timrelawan = parsedData.data;
                            if (timrelawan) {
                                this.token = timrelawan.token;
                                this.messagex = `Selamat Anda Telah Terverifikasi Sebagai Relawan. Silahkan Bergabung pada Grup Ini : . Catatan "Tolong Simpan Baik-Baik token anda : *${this.token}*, Karena Akan Digunakan Untuk Beberapa Fitur Terkait Relawan.`;
                            }
                        } else {
                            console.log('error');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                } else {
                    console.log('error');
                }
            } catch (error) {
                console.error('Error fetching token:', error);
            }
        },
        async generateQR() {
            this.loading = true;
            this.qr = true;

            try {
                const response = await api.get("qr");
                const data = response.data;

                await new Promise(resolve => setTimeout(resolve, 2000));

                if (data.message === "success") {
                    this.qrCode = data.data;
                } else {
                    console.error("Failed to fetch QR code.");
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                this.loading = false;
            }
        },
        close() {
            this.qr = false;
            this.qrCode = null;
        }
        ,
        async generatePDF(timrelawan) {
            try {
                // Load the existing PDF template
                const url = '/templaterelawanTim.pdf'; // Path to your PDF template
                const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

                // Load PDF
                const pdfDoc = await PDFDocument.load(existingPdfBytes);
                const pages = pdfDoc.getPages();
                const imageUrl = this.getFullImgPath(timrelawan.ttd);

                // Fetch image and add it to the PDF
                const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());

                // Determine the correct image embedding method
                const imageExtension = imageUrl.split('.').pop().toLowerCase();
                const imageUrlsAnggota = timrelawan.ttdAnggota.map(ttd => this.getFullImgPath(ttd));
                const imagePromises = imageUrlsAnggota.map(async (imgUrl) => {
                    const imgBytes = await fetch(imgUrl).then(res => res.arrayBuffer());
                    const imgExtension = imgUrl.split('.').pop().toLowerCase();
                    let image;
                    if (imgExtension === 'png') {
                        image = await pdfDoc.embedPng(imgBytes);
                    } else if (imgExtension === 'jpg' || imgExtension === 'jpeg') {
                        image = await pdfDoc.embedJpg(imgBytes);
                    } else if (imgExtension === 'svg') {
                        image = await pdfDoc.embedSvg(imgBytes);
                    } else {
                        throw new Error('Unsupported image format');
                    }
                    return image;
                });

                if (pages.length < 2) {
                    console.error('PDF does not have enough pages.');
                    return;
                }

                const page = pages[0];
                //const secondPage = pages[1];

                // Define text settings
                const fontSize = 12;
                const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

                // Add text at specific positions
                page.drawText(timrelawan.namatim.toUpperCase(), { x: 230, y: 606, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.namaketua.toUpperCase(), { x: 230, y: 584, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.totalanggota.toString(), { x: 230, y: 564, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.kecamatan.toUpperCase(), { x: 230, y: 542, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.kelurahan, { x: 230, y: 522, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.rw, { x: 230, y: 502, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.rt, { x: 230, y: 482, size: fontSize, font: font, color: rgb(0, 0, 0) });
                page.drawText(timrelawan.hp, { x: 230, y: 460, size: fontSize, font: font, color: rgb(0, 0, 0) });

                let image;
                if (imageExtension === 'png') {
                    image = await pdfDoc.embedPng(imageBytes);
                } else if (imageExtension === 'jpg' || imageExtension === 'jpeg') {
                    image = await pdfDoc.embedJpg(imageBytes);
                } else if (imageExtension === 'svg') {
                    image = await pdfDoc.embedSvg(imageBytes);
                } else {
                    throw new Error('Unsupported image format');
                }

                // Draw image on the first page
                page.drawImage(image, { x: 330, y: 140, width: 200, height: 100 });

                const bulan = [
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
                ];

                // Parse tanggal dari string
                const date = new Date(timrelawan.tanggal);

                // Ambil komponen tanggal
                const tanggal = date.getUTCDate();
                const bulanIndex = date.getUTCMonth();
                const tahun = date.getUTCFullYear();

                page.drawText(`Kota Bima, ${tanggal} ${bulan[bulanIndex]} ${tahun}`, { x: 348, y: 270, size: fontSize, font: font, color: rgb(0, 0, 0) });

                // Function to duplicate a page
                const duplicatePage = async (pageIndex) => {
                    const [copiedPage] = await pdfDoc.copyPages(pdfDoc, [pageIndex]);
                    pdfDoc.addPage(copiedPage); // Add the duplicated page to the document
                    return copiedPage;
                };

                // Add images to a page
                const addImagesToPage = async (page, images, startIndex) => {
                    let imageY = page.getHeight() - 150;
                    const imagesPerPage = 5;
                    const endIndex = Math.min(startIndex + imagesPerPage, images.length);

                    for (let i = startIndex; i < endIndex; i++) {
                        const image = images[i];
                        const height = 100;
                        page.drawImage(image, {
                            x: 200,
                            y: imageY - height,
                            width: 200,
                            height: height,
                        });
                        page.drawText(`Foto KTP Anggota Ke : ${i + 1}`, {
                            x: 200,
                            y: imageY + 5,
                            size: fontSize,
                            font: font,
                            color: rgb(0, 0, 0),
                        });
                        imageY -= height + 25;
                    }
                };

                // Get all images
                const images = await Promise.all(imagePromises);
                const imagesPerPage = 5;
                const totalImages = images.length;
                const totalPages = Math.ceil(totalImages / imagesPerPage);

                // Add images to the initial duplicated page
                let currentPage = await duplicatePage(1); // Duplicates the second page
                await addImagesToPage(currentPage, images, 0);

                // Add additional pages and distribute images
                for (let pageIndex = 1; pageIndex < totalPages; pageIndex++) {
                    currentPage = await duplicatePage(1); // Duplicates the second page again
                    const startIndex = pageIndex * imagesPerPage;
                    await addImagesToPage(currentPage, images, startIndex);
                }
                pdfDoc.removePage(1);
                // Serialize the PDF to bytes
                const pdfBytes = await pdfDoc.save();

                // Create a Blob and trigger a download
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const urlBlob = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = urlBlob;
                link.download = `Surat_Pernyataan_RelawanTim_${timrelawan.namatim}.pdf`;
                link.click();

                this.pdfGeneratedTimStatus = {
                    ...this.pdfGeneratedTimStatus,
                    [timrelawan._id]: true
                };
                alert('PDF Tim berhasil diunduh!');
            } catch (error) {
                console.error('Error generating PDF:', error);
            }
        }
        ,
        async generatePDFx(relawan) {
            try {
                // Load the existing PDF template
                const url = '/templaterelawan.pdf'  // Ganti dengan path ke file PDF template Anda
                const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

                // Load PDF
                const pdfDoc = await PDFDocument.load(existingPdfBytes);
                const page = pdfDoc.getPages()[0];

                // Define text settings
                const fontSize = 12;
                const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

                // Add text at specific positions
                page.drawText(relawan.nama.toUpperCase(), {
                    x: 230,   // Koordinat X
                    y: 606,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                page.drawText(relawan.kecamatan.toUpperCase(), {
                    x: 230,   // Koordinat X
                    y: 584,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                page.drawText(relawan.kelurahan.toUpperCase(), {
                    x: 230,   // Koordinat X
                    y: 562,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                page.drawText(relawan.rw, {
                    x: 230,   // Koordinat X
                    y: 542,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                page.drawText(relawan.rt, {
                    x: 230,   // Koordinat X
                    y: 522,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                page.drawText(relawan.hp, {
                    x: 230,   // Koordinat X
                    y: 501,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                const imageUrl = this.getFullImgPath(relawan.ttd);
                // Fetch image and add it to the PDF
                const imageBytes = await fetch(imageUrl).then(res => res.arrayBuffer());

                // Determine the correct image embedding method
                const imageExtension = imageUrl.split('.').pop().toLowerCase();
                let image;
                if (imageExtension === 'png') {
                    image = await pdfDoc.embedPng(imageBytes);
                } else if (imageExtension === 'jpg' || imageExtension === 'jpeg') {
                    image = await pdfDoc.embedJpg(imageBytes);
                } else if (imageExtension === 'svg') {
                    image = await pdfDoc.embedSvg(imageBytes);
                } else {
                    throw new Error('Unsupported image format');
                }
                // Draw image on the first page
                page.drawImage(image, {
                    x: 350,
                    y: 200,
                    width: 200, // Adjust width
                    height: 100, // Adjust height
                });

                const bulan = [
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
                ];

                // Parse tanggal dari string
                const date = new Date(relawan.tanggal);

                // Ambil komponen tanggal
                const tanggal = date.getUTCDate();
                const bulanIndex = date.getUTCMonth(); // Januari = 0, Agustus = 7, dll
                const tahun = date.getUTCFullYear();

                page.drawText(`Kota Bima, ${tanggal} ${bulan[bulanIndex]} ${tahun}`, {
                    x: 390,   // Koordinat X
                    y: 340,  // Koordinat Y
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                // Serialize the PDF to bytes
                const pdfBytes = await pdfDoc.save();

                // Create a Blob and trigger a download
                const blob = new Blob([pdfBytes], { type: 'application/pdf' });
                const urlBlob = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = urlBlob;
                link.download = `Surat_Pernyataan_Relawan_${relawan.nama}.pdf`;
                link.click();

                this.pdfGeneratedStatus = {
                    ...this.pdfGeneratedStatus,
                    [relawan._id]: true
                };
                alert('PDF Relawan berhasil diunduh!');
            } catch (error) {
                console.error('Error generating PDF:', error);
            }
        },
        sendMessage() {
            this.sendBroadcastRelawan(this.selectedRelawanHp, this.message);
            //this.sendBroadcastMessage(this.selectedRelawanHp, this.messagex);
            this.closePopup();
        },
        sendMessagex() {
            //this.sendBroadcastRelawan(this.selectedRelawanHp, this.message);
            this.sendBroadcastMessage(this.selectedRelawanHp, this.messagex);
            this.closePopup();
        },
        closePopup() {
            this.showMessagePopup = false;
            this.showMessagePopups = false;
        },
        async sendBroadcast() {
            if (!this.messages) {
                alert('Please enter a message');
                return;
            }
            try {
                const verifikasi = await api.get('verifikasiqr');
                if (verifikasi.data.message == "connected") {
                    let newMessage = this.messages.replace(/(\r\n|\n|\r)/gm, '<br>');
                    const response = await Api.post('broadcast', { message: newMessage });
                    console.log(response);
                    alert("Pesan Berhasil DiKirim!");
                    this.messages = '';
                } else {
                    alert("Harap Connect Bot Terlebih Dahulu!");
                }

            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        async sendBroadcastRelawan(hp, message) {
            try {
                const verifikasi = await api.get('verifikasiqr');
                if (verifikasi.data.message == "connected") {
                    const response = await Api.post(`confirm/relawan/${hp}`, { message });
                    console.log(response);
                    alert("Pesan Berhasil DiKirim!");
                    this.message = '';
                } else {
                    alert("Harap Connect Bot Terlebih Dahulu!");
                }
            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        async sendBroadcastMessage(hp, message) {
            try {
                const verifikasi = await api.get('verifikasiqr');
                if (verifikasi.data.message == "connected") {
                    const response = await Api.post(`confirm/timrelawan/${hp}`, { message });
                    console.log(response);
                    alert("Pesan Berhasil DiKirim!");
                    this.message = '';
                } else {
                    alert("Harap Connect Bot Terlebih Dahulu!");
                }
            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        async sendBroadcastsx() {
            if (!this.messagesx) {
                alert('Please enter a message');
                return;
            }

            try {
                let newMessage = this.messagesx.replace(/(\r\n|\n|\r)/gm, '<br>');
                const response = await Api.post('broadcast', { message: newMessage });
                console.log(response);
                alert("Pesan Berhasil DiKirim!");
                this.messagesx = '';
            } catch (error) {
                console.error('Error sending broadcast:', error);
                alert('Failed to send broadcast');
            }
        },
        async updateRelawanStatus(id, status, hp) {
            if (!this.pdfGeneratedStatus[id]) {
                alert('Harap unduh PDF terlebih dahulu sebelum mengubah status.');
                return;
            }

            try {
                const response = await Api.put(`/relawan/${id}`, { status });
                console.log(response);
                this.fetchRelawans();

                if (status === 'success') {
                    await this.fetchRelawanToken(id);
                    this.showMessagePopup = true;
                    this.selectedRelawanId = id;
                    this.selectedRelawanHp = hp;
                }

            } catch (err) {
                console.error('Error updating relawan status', err);
            }
        },
        async updateTimRelawanStatus(id, status, hp) {
            if (!this.pdfGeneratedTimStatus[id]) {
                alert('Harap unduh PDF terlebih dahulu sebelum mengubah status.');
                return;
            }

            try {
                const response = await Api.put(`/timrelawan/${id}`, { status });
                console.log(response);
                this.fetchRelawans();

                if (status === 'success') {
                    await this.fetchTimToken(id);
                    this.showMessagePopups = true;
                    this.selectedRelawanId = id;
                    this.selectedRelawanHp = hp;
                }

            } catch (err) {
                console.error('Error updating tim relawan status', err);
            }
        },
        async deleteRelawan(id) {
            try {
                await Api.delete(`/relawan/${id}`);
                this.fetchRelawans();
            } catch (err) {
                console.error('Error deleting relawan', err);
            }
        },
        async deleteTimRelawan(id) {
            try {
                await Api.delete(`/timrelawan/${id}`);
                this.fetchRelawans();
            } catch (err) {
                console.error('Error deleting tim relawan', err);
            }
        },
        async fetchRelawans() {
            try {
                const response = await Api.get('relawan');
                const res = await Api.get('timrelawan');
                const rez = await Api.get('posko');
                const rex = await Api.get('kegiatan/relawan');

                const resData = decryptData(response.data);
                const ressData = decryptData(res.data);
                const rezData = decryptData(rez.data);
                const rexData = decryptData(rex.data);

                try {
                    const parsedData = JSON.parse(resData).data.map(item => item);
                    const parsedDatas = JSON.parse(ressData).data.map(item => item);
                    const parsedDatass = JSON.parse(rezData).data.map(item => item);
                    const parsedDatasss = JSON.parse(rexData).data.map(item => item);

                    // Assigning the mapped data to your variables
                    this.kegiatanRelawan = parsedDatasss;
                    this.baliho = parsedDatass;
                    this.timrelawan = parsedDatas;
                    this.relawans = parsedData;
                } catch (error) {
                    console.error('Error processing data:', error);
                }
            } catch (err) {
                console.error('Error fetching relawan data', err);
            }
        },
        async searchKegiatan() {
            try {
                const response = await Api.get('kegiatan/relawan', {
                    params: {
                        kelurahan: this.selectedKelurahan,
                        kecamatan: this.selectedKecamatan,
                        tanggal: this.selectedDate
                    }
                });

                const decData = decryptData(response.data);

                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (Array.isArray(parsedData.data)) {
                            this.searchResults = parsedData.data.filter(kegiatan =>
                                (!this.selectedKelurahan || kegiatan.kelurahan === this.selectedKelurahan) &&
                                (!this.selectedKecamatan || kegiatan.kecamatan === this.selectedKecamatan) &&
                                (!this.selectedDate || kegiatan.tanggal === this.selectedDate)
                            );
                        } else {
                            return;
                        }
                    } catch (error) {
                        return;
                    }
                } else {
                    return;
                }
            } catch (err) {
                console.error('Error searching kegiatan', err);
            }
        },
        async searchBaliho() {
            try {
                const response = await Api.get('posko', {
                    params: {
                        kelurahan: this.selectedKelurahan,
                        kecamatan: this.selectedKecamatan,
                    }
                });

                const decData = decryptData(response.data);

                if (decData) {
                    try {
                        const parsedData = JSON.parse(decData);
                        if (Array.isArray(parsedData.data)) {
                            this.searchResults = parsedData.data.filter(kegiatan =>
                                (!this.selectedKelurahan || kegiatan.kelurahan === this.selectedKelurahan) &&
                                (!this.selectedKecamatan || kegiatan.kecamatan === this.selectedKecamatan)
                            );
                        } else {
                            return;
                        }
                    } catch (error) {
                        return;
                    }
                } else {
                    return;
                }
            } catch (err) {
                console.error('Error searching kegiatan', err);
            }
        },
        showInfoWindow(relawan, type) {
            this.selectedRelawan = relawan;
            this.infoWindowType = type;
            this.infoWindowPos = {
                lat: parseFloat(relawan.latitude),
                lng: parseFloat(relawan.longitude),
            };
            this.infoWindowOpen = false;
            this.$nextTick(() => {
                this.infoWindowKey += 1;
                this.infoWindowOpen = true;
            });
        },
        closeInfoWindow() {
            this.infoWindowOpen = false;
            this.selectedRelawan = null;
            this.infoWindowType = '';
        },
        tim() {
            this.relawan = false;
            // this.resetViews();
            this.tims = true;
            this.closeInfoWindow();
        },
        individ() {
            this.tims = false;
            // this.resetViews();
            this.relawan = true;
            this.closeInfoWindow();
        },
        balihox() {
            this.resetViews();
            this.bali = true;
            this.balihow = true;
            this.closeInfoWindow();
        },
        editsBoard() {
            this.resetViews();
            this.showEditInfor = true
        },
        createBoard() {
            this.resetViews();
            this.showCreateInfor = true;
        },
        ManageBoard() {
            this.resetViews();
            this.showCreateBoard = true;
        },
        deletesBoard() {
            this.resetViews();
            this.showDeleteInfor = true;
        },
        ManageGallery() {
            this.resetViews();
            this.generalGallery = true;
        },
        livechat() {
            this.resetViews();
            this.liveChats = true;
        },
        manageArtikel() {
            this.resetViews();
            this.generalArtikel = true;
        },
        deletesGallery() {
            this.resetViews();
            this.showDeleteGallery = true;
        },
        editsGallery() {
            this.resetViews();
            this.showEditGallery = true;
        },
        createGallery() {
            this.resetViews();
            this.showCreateGallery = true;
        },
        deleteArtikel() {
            this.resetViews();
            this.showDeleteArtikel = true;
        },
        editArtikel() {
            this.resetViews();
            this.showEditArtikel = true;
        },
        createArtikel() {
            this.resetViews();
            this.showCreateArtikel = true;
        },
        info() {
            this.resetViews();
            this.pesanGeneral = true;
        },
        dataStats() {
            this.resetViews();
            this.generalStats = true;
        },
        kegRelawanStats() {
            this.resetViews();
            this.dataStatsKegRelawan = true;
        },
        balihoStats() {
            this.resetViews();
            this.dataStatsBaliho = true;
        },
        timRelawanDatas() {
            this.resetViews();
            this.dataStatsTimRelawan = true;
        },
        RelawanDatas() {
            this.resetViews();
            this.dataStatsRelawan = true;
        },
        kunjungan() {
            this.resetViews();
            this.pesanKunjungan = true;
        },
        dataKegiatanRelawan() {
            this.resetViews();
            this.statsKegiatanRelawan = true;
        },
        kegiatan() {
            this.resetViews();
            this.kegRelawan = true;
        },
        reportKegiatanRelawan() {
            this.resetViews();
            this.laporanKegiatanRelawan = true;
        },
        ballStats() {
            this.resetViews();
            this.statsBaliho = true;
        },
        ballReport() {
            this.resetViews();
            this.laporanBaliho = true;
        },
        Broad() {
            this.resetViews();
            this.broadcast = true;
        },
        showRelawan() {
            this.resetViews();
            this.petaRelawan = true;
        },
        showRelawanConfirm() {
            this.resetViews();
            this.relawanConfirm = true;
        },
        showTimRelawanConfirm() {
            this.resetViews();
            this.timrelawanConfirm = true;
        },
        showRelawanDelete() {
            this.resetViews();
            this.relawanDelete = true;
        },
        showTimRelawanDelete() {
            this.resetViews();
            this.timrelawanDelete = true;
        },
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
    },
    mounted() {
        this.fetchRelawans();
    },
};
</script>