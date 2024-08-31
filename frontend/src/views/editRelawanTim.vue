<template>
    <div class="overflow-y-auto h-[33.4rem] w-[72rem] font-Jet font-medium text-base uppercase">
        <h1 class="font-Karantina font-bold text-3xl pb-6">Daftar Relawan</h1>
        <div class="grid grid-cols-4 gap-6 pl-2">
            <div v-for="relawan in relawans" :key="relawan._id">
                <div class="bg-black">
                    <div class="border-2 bg-gray-200 border-black relative -top-2 -left-2 px-4 pt-4">
                        <div>
                            <h1>
                                {{ relawan.status }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Nama Tim : {{ relawan.namatim }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Nama Ketua : {{ relawan.namaketua }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                No Hp : {{ relawan.hp }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Kecamatan : {{ relawan.kecamatan }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Kelurahan : {{ relawan.kelurahan }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Rt : {{ relawan.rt }}
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Rw : {{ relawan.rw }}
                            </h1>
                        </div>
                        <div class="pt-2">
                            <h1 class="font-bold">Tanda Tangan</h1>
                            <div class="pt-4">
                                <img class="w-full h-20 border-2 border-black relative -top-1.5 -left-1.5 cursor-pointer object-cover"
                                    :src="getFullImgPath(relawan.ttd)" alt="">
                            </div>
                        </div>
                        <div class="flex py-5 justify-end">
                            <div class="bg-black">
                                <div class="bg-nasdem hover:bg-che text-gray-200 border-2 border-black px-4 py-1 ">
                                    <button @click="editRelawan(relawan._id)">
                                        <h1 class="font-Karantina font-bold text-2xl uppercase tracking-wider">
                                            Edit
                                        </h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="edit">
            <div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
                <div class="max-w-60">
                    <div class="bg-black">
                        <div v-if="selectedRelawan" class="bg-gray-200 border-2 border-black px-2 py-2 ">
                            <h2>Edit Relawan</h2>
                            <p>Nama: {{ selectedRelawan.namatim }}</p>
                            <p>Nama: {{ selectedRelawan.namaketua }}</p>
                            <p>Status Saat Ini: {{ selectedRelawan.status }}</p>
                            <select v-model="selectedStatus"
                                class="border-2 border-black bg-gray-200 rounded-md w-full pl-2 py-2 text-start text-lg font-bold font-Jet">
                                <option value="success">Success</option>
                                <option value="gagal">Gagal</option>
                            </select>
                            <div class="flex justify-end pt-6">
                                <div class="bg-black">
                                    <div class="bg-nasdem text-gray-200 border-2 border-black ">
                                        <button @click="updateStatus">
                                            <h1 class="py-2 px-6">Update</h1>
                                        </button>
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
import Api from "@/services/api";

export default {
    data() {
        return {
            relawans: [],
            selectedRelawan: null,
            selectedStatus: 'success',
            edit: false
        };
    },
    created() {
        this.fetchRelawans();
    },
    methods: {
        async fetchRelawans() {
            try {
                const response = await Api.get('timrelawan');
                this.relawans = response.data.data;
            } catch (error) {
                console.error('Error fetching relawans:', error);
            }
        },
        async editRelawan(id) {
            this.edit = true;
            try {
                const response = await Api.put(`timrelawan/${id}`);
                this.selectedRelawan = response.data.data;
                this.selectedStatus = this.selectedRelawan.status;
            } catch (error) {
                console.error('Error fetching relawan:', error);
            }
        },
        async updateStatus() {
            if (!this.selectedRelawan) return;
            try {
                const response = await Api.put(`timrelawan/${this.selectedRelawan._id}`, {
                    status: this.selectedStatus,
                });
                console.log(response)
                alert('Status updated success');
                this.fetchRelawans();
                this.selectedRelawan = null;
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            } catch (error) {
                console.error('Error updating status:', error);
            }
        },
        getFullImgPath(img) {
            return `http://192.168.1.7:3000/${img}`;
        },
    },
};
</script>