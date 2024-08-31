<template>
    <div id="map" style="width: 100%; height: 500px"></div>
</template>

<script>
/* global google */
import customIcon from '@/assets/pointer-icon.png';
import timRelawanIcon from '@/assets/pointer-icon.png'; // Jika Anda memiliki ikon khusus untuk tim relawan
import Api from '@/services/api';
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
    name: "HeatmapView",
    data() {
        return {
            map: null,
            heatmap: null,
            heatmapData: [],
            markers: [],
            relawans: [],
            timrelawans: []
        };
    },
    methods: {
        handleMapLoad() {
            this.initMap();
            this.fetchRelawans();
        },
        initMap() {
            this.map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -8.4606, lng: 118.7258 },
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.SATELLITE,
            });
        },
        async fetchRelawans() {
            try {
                const response = await Api.get('relawan');
                const res = await Api.get('timrelawan');

                const resData = decryptData(response.data);
                const resDatas = decryptData(res.data);

                try {
                    const parsedData = JSON.parse(resData).data.map(item => item);
                    const parsedDatas = JSON.parse(resDatas).data.map(item => item);

                    this.relawans = parsedData;
                    this.timrelawans = parsedDatas;
                    this.loadRelawanData();
                } catch (error) {
                    console.error('Error processing data:', error);
                }
            } catch (err) {
                console.error('Error fetching relawan data', err);
            }
        },
        decryptData(encryptedData) {
            return encryptedData;
        },
        loadRelawanData() {
            this.heatmapData = [
                ...this.relawans.map((relawan) => ({
                    location: new google.maps.LatLng(relawan.latitude, relawan.longitude),
                    weight: 100 // Ganti dengan salah satu opsi di atas
                })),
                ...this.timrelawans.map((timrelawan) => ({
                    location: new google.maps.LatLng(timrelawan.latitude, timrelawan.longitude),
                    weight: timrelawan.totalanggota * 100 // Ganti sesuai kebutuhan
                }))
            ];

            this.markers = [
                ...this.relawans.map((relawan) => {
                    return new google.maps.Marker({
                        position: { lat: relawan.latitude, lng: relawan.longitude },
                        map: this.map,
                        icon: {
                            url: customIcon,
                            scaledSize: new google.maps.Size(20, 30),
                        },
                    });
                }),
                ...this.timrelawans.map((timrelawan) => {
                    return new google.maps.Marker({
                        position: { lat: timrelawan.latitude, lng: timrelawan.longitude },
                        map: this.map,
                        icon: {
                            url: timRelawanIcon,
                            scaledSize: new google.maps.Size(20, 30),
                        },
                    });
                })
            ];

            this.createHeatmap();
        },
        createHeatmap() {
            // Membuat lapisan heatmap dengan gabungan data relawan dan timrelawan
            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.heatmapData.map(option => ({
                    location: option.location,
                    weight: option.weight
                })),
                map: this.map,
                radius: 20, // Radius dasar untuk heatmap
                opacity: 1,
            });
        },
    },
    mounted() {
        window.initMap = this.handleMapLoad;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAT4zmWT5vLpBlmwwFXVD-gXxGVgR4caSc&libraries=visualization&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },
};
</script>




<!-- <template>
    <div id="map" style="width: 100%; height: 500px"></div>
</template>

<script>
/* global google */
import customIcon from '@/assets/pointer-icon.png';
import Api from '@/services/api';
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
    name: "HeatmapView",
    data() {
        return {
            map: null,
            heatmap: null,
            heatmapData: [],
            markers: [],
            relawans: [],
        };
    },
    methods: {
        handleMapLoad() {
            this.initMap();
            this.fetchRelawans();
        },
        initMap() {
            this.map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: -8.4606, lng: 118.7258 },
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.SATELLITE,
            });
        },
        async fetchRelawans() {
            try {
                const response = await Api.get('relawan');

                const resData = decryptData(response.data);

                try {
                    const parsedData = JSON.parse(resData).data.map(item => item);

                    this.relawans = parsedData;
                    this.loadRelawanData();
                } catch (error) {
                    console.error('Error processing data:', error);
                }
            } catch (err) {
                console.error('Error fetching relawan data', err);
            }
        },
        decryptData(encryptedData) {
            return encryptedData;
        },
        loadRelawanData() {
            this.heatmapData = this.relawans.map((relawan) =>
                new google.maps.LatLng(relawan.latitude, relawan.longitude)
            );

            this.markers = this.relawans.map((relawan) => {
                return new google.maps.Marker({
                    position: { lat: relawan.latitude, lng: relawan.longitude },
                    map: this.map,
                    icon: {
                        url: customIcon,
                        scaledSize: new google.maps.Size(20, 30),
                    },
                });
            });

            this.createHeatmap();
        },
        createHeatmap() {

            this.heatmap = new google.maps.visualization.HeatmapLayer({
                data: this.heatmapData,
                map: this.map,
                radius: 20,
                opacity: 1,
            });
        },
    },
    mounted() {
        window.initMap = this.handleMapLoad;
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAT4zmWT5vLpBlmwwFXVD-gXxGVgR4caSc&libraries=visualization&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    },
};
</script> -->