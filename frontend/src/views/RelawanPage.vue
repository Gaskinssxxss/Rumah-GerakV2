<template>
    <div class="overflow-y-auto h-[33.4rem] w-[72rem] font-Jet font-medium text-xs uppercase px-4">
        <div class="grid grid-cols-2 gap-x-4">
            <div>
                <div>
                    <h2 class="text-3xl font-Karantina font-bold mb-4">Tim Relawan</h2>
                </div>
                <div class="grid grid-cols-2 gap-10">
                    <div class="bg-black">
                        <div v-for="timrelawan in timrelawans" :key="timrelawan._id"
                            class="border-2 border-black bg-gray-200 relative -top-2 -left-2 px-4 py-4 space-y-1">
                            <h1>
                                Nama Tim : <span class="font-extrabold">{{ timrelawan.namatim }}</span>
                            </h1>
                            <h1>
                                Nama Ketua Tim : <span class="font-extrabold">{{ timrelawan.namaketua }}</span>
                            </h1>
                            <h1>
                                Total Anggota : <span class="font-extrabold">{{ timrelawan.totalanggota }}</span>
                            </h1>
                            <h1>
                                Nomor Hp : <span class="font-extrabold">{{ timrelawan.hp }}</span>
                            </h1>
                            <h1>
                                Kecamatan : <span class="font-extrabold">{{ timrelawan.kecamatan }}</span>
                            </h1>
                            <h1>
                                Kelurahan : <span class="font-extrabold">{{ timrelawan.kelurahan }}</span>
                            </h1>
                            <h1>
                                Status Konfirmasi : <span class="font-extrabold">{{ timrelawan.status }}</span>
                            </h1>
                            <div class="bg-black">
                                <button @click="generatePDF(timrelawan)"
                                    class="bg-golkar hover:bg-che hover:text-gray-200 w-full border-2 border-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                    Buka...
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-Karantina font-bold mb-4">Relawan Individu</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div class="bg-black">
                        <div v-for="relawan in relawans" :key="relawan._id"
                            class="border-2 border-black  bg-gray-200 relative -top-2 -left-2 px-4 py-4 space-y-1">
                            <h1>
                                Nama : <span class="font-extrabold">{{ relawan.nama }}</span>
                            </h1>
                            <h1>
                                Nomor Hp : <span class="font-extrabold">{{ relawan.hp }}</span>
                            </h1>
                            <h1>
                                Kecamatan : <span class="font-extrabold">{{ relawan.kecamatan }}</span>
                            </h1>
                            <h1>
                                Kelurahan : <span class="font-extrabold">{{ relawan.kelurahan }}</span>
                            </h1>
                            <h1>
                                Status Konfirmasi : <span class="font-extrabold">{{ relawan.status }}</span>
                            </h1>
                            <div class="w-full pt-4">
                                <div class="bg-black">
                                    <button @click="generatePDFx(relawan)"
                                        class="bg-golkar hover:bg-che hover:text-gray-200 w-full border-2 border-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                        <h1>Buka...</h1>
                                    </button>
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
import Api from "../services/api"
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
    data() {
        return {
            timrelawans: [],
            relawans: [],
        };
    },
    created() {
        this.GetTimRelawan();
        this.GetRelawan();
    },
    methods: {
        async GetRelawan() {
            try {
                const res = await Api.get('relawan')
                this.relawans = res.data.data
            } catch (error) {
                alert(error)
            }
        },
        async GetTimRelawan() {
            try {
                const rez = await Api.get('timrelawan');
                this.timrelawans = rez.data.data;
            } catch (error) {
                alert(error);
            }
        },
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
        async generatePDF(timrelawan) {
            const pdf = new jsPDF();
            const imageUrl = this.getFullImgPath(timrelawan.ttd);
            const pageHeight = pdf.internal.pageSize.height;
            let yOffset = 10;

            pdf.setFontSize(12);
            pdf.setFont("helvetica", "bold");
            pdf.text(`Surat Pernyataan Dukungan Sebagai Relawan`, 10, yOffset);
            pdf.setFont("helvetica", "normal");
            yOffset += 10;
            pdf.text(`Nama Tim: ${timrelawan.namatim}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Nama Ketua Tim: ${timrelawan.namaketua}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Total Anggota: ${timrelawan.totalanggota}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Nomor HP: ${timrelawan.hp}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Kecamatan: ${timrelawan.kecamatan}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Kelurahan: ${timrelawan.kelurahan}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Rt: ${timrelawan.rt}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Rw: ${timrelawan.rw}`, 10, yOffset);
            yOffset += 10;

            const suratPernyataan = timrelawan.suratPernyataan;

            function parseHTML(html) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const text = doc.body.innerText;
                const htmlText = doc.body.innerHTML;
                return { text, htmlText };
            }

            const { text: suratPernyataanText } = parseHTML(suratPernyataan);

            pdf.text('Surat Pernyataan:', 10, yOffset);
            yOffset += 10;

            const lineHeight = 10;
            const pageMargin = 10;
            const textWidth = pdf.internal.pageSize.width - 2 * pageMargin;

            function splitText(text) {
                const lines = [];
                let currentLine = '';
                const words = text.split(' ');

                for (const word of words) {
                    const testLine = `${currentLine} ${word}`.trim();
                    if (pdf.getTextWidth(testLine) < textWidth) {
                        currentLine = testLine;
                    } else {
                        lines.push(currentLine);
                        currentLine = word;
                    }
                }
                lines.push(currentLine);
                return lines;
            }

            const suratPernyataanLines = splitText(suratPernyataanText);

            for (const line of suratPernyataanLines) {
                if (yOffset + lineHeight > pageHeight) {
                    pdf.addPage();
                    yOffset = 10;
                }
                pdf.text(line, 10, yOffset);
                yOffset += lineHeight;
            }

            const imageHeight = 60;
            const imageX = 10;
            const imageY = yOffset;

            try {
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    pdf.addImage(img, 'JPEG', imageX, imageY, 100, imageHeight);
                    pdf.save(`${timrelawan.namatim}.pdf`);
                };
            } catch (error) {
                console.error('Error loading image:', error);
                pdf.save('Detail-Tim-Relawan.pdf');
            }
        },
        async generatePDFx(relawan) {
            const pdf = new jsPDF();
            const imageUrl = this.getFullImgPath(relawan.ttd);
            const pageHeight = pdf.internal.pageSize.height;
            let yOffset = 10;

            pdf.setFontSize(12);
            pdf.setFont("helvetica", "bold");
            pdf.text(`Surat Pernyataan Dukungan Sebagai Relawan`, 10, yOffset);
            pdf.setFont("helvetica", "normal");
            yOffset += 10;
            pdf.text(`Nama Tim: ${relawan.nama}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Nomor HP: ${relawan.hp}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Kecamatan: ${relawan.kecamatan}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Kelurahan: ${relawan.kelurahan}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Rt: ${relawan.rt}`, 10, yOffset);
            yOffset += 10;
            pdf.text(`Rw: ${relawan.rw}`, 10, yOffset);
            yOffset += 10;

            const suratPernyataan = relawan.suratPernyataan;

            function parseHTML(html) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const text = doc.body.innerText;
                const htmlText = doc.body.innerHTML;
                return { text, htmlText };
            }

            const { text: suratPernyataanText } = parseHTML(suratPernyataan);

            pdf.text('Surat Pernyataan:', 10, yOffset);
            yOffset += 10;

            const lineHeight = 10;
            const pageMargin = 10;
            const textWidth = pdf.internal.pageSize.width - 2 * pageMargin;

            function splitText(text) {
                const lines = [];
                let currentLine = '';
                const words = text.split(' ');

                for (const word of words) {
                    const testLine = `${currentLine} ${word}`.trim();
                    if (pdf.getTextWidth(testLine) < textWidth) {
                        currentLine = testLine;
                    } else {
                        lines.push(currentLine);
                        currentLine = word;
                    }
                }
                lines.push(currentLine);
                return lines;
            }

            const suratPernyataanLines = splitText(suratPernyataanText);

            for (const line of suratPernyataanLines) {
                if (yOffset + lineHeight > pageHeight) {
                    pdf.addPage();
                    yOffset = 10;
                }
                pdf.text(line, 10, yOffset);
                yOffset += lineHeight;
            }

            const imageHeight = 60;
            const imageX = 10;
            const imageY = yOffset;

            try {
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => {
                    pdf.addImage(img, 'JPEG', imageX, imageY, 100, imageHeight);
                    pdf.save(`${relawan.nama}.pdf`);
                };
            } catch (error) {
                console.error('Error loading image:', error);
                pdf.save('Detail-Tim-Relawan.pdf');
            }
        },
    },
};
</script>



<!-- <template>
    <div class="overflow-y-auto h-[33.4rem] w-[72rem] font-Jet font-medium text-xs uppercase px-4">
        <div class="grid grid-cols-2 gap-x-4">
            <div>
                <div>
                    <h2 class="text-3xl font-Karantina font-bold mb-4">Tim Relawan</h2>
                </div>
                <div class="grid grid-cols-2 gap-10">
                    <div class="bg-black">
                        <div v-for="timrelawan in timrelawans" :key="timrelawan._id"
                            class="border-2 border-black bg-gray-200 relative -top-2 -left-2 px-4 py-4 space-y-1">
                            <h1>
                                Nama Tim : <span class="font-extrabold">{{ timrelawan.namatim }}</span>
                            </h1>
                            <h1>
                                Nama Ketua Tim : <span class="font-extrabold">{{ timrelawan.namaketua }}</span>
                            </h1>
                            <h1>
                                Total Anggota : <span class="font-extrabold">{{ timrelawan.totalanggota }}</span>
                            </h1>
                            <h1>
                                Nomor Hp : <span class="font-extrabold">{{ timrelawan.hp }}</span>
                            </h1>
                            <h1>
                                Kecamatan : <span class="font-extrabold">{{ timrelawan.kecamatan }}</span>
                            </h1>
                            <h1>
                                Kelurahan : <span class="font-extrabold">{{ timrelawan.kelurahan }}</span>
                            </h1>
                            <h1>
                                Status Konfirmasi : <span class="font-extrabold">{{ timrelawan.status }}</span>
                            </h1>
                            <div class="w-full pt-4">
                                <div class="bg-black">
                                    <button
                                        class="bg-golkar hover:bg-che hover:text-gray-200 w-full border-2 border-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                        <h1>Buka...</h1>
                                    </button>
                                </div>
                            </div> -->
<!-- <div class="pt-4">
                                <h1>
                                    Surat Pernyataan :
                                </h1>
                                <h1 v-html="timrelawan.suratPernyataan" class="font-extrabold">
                                </h1>
                            </div>
                            <div class="pt-2">
                                <h1 class="font-extrabold pt-2">Tanda Tangan</h1>
                                <div class="pt-4">
                                    <img class="w-full h-32 border-2 border-black relative -top-1.5 -left-1.5 cursor-pointer object-cover"
                                        :src="getFullImgPath(timrelawan.ttd)" alt="">
                                </div>
                            </div> -->
<!-- </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="text-3xl font-Karantina font-bold mb-4">Relawan Individu</h2>
                <div class="grid grid-cols-2 gap-6">
                    <div class="bg-black">
                        <div v-for="relawan in relawans" :key="relawan._id"
                            class="border-2 border-black  bg-gray-200 relative -top-2 -left-2 px-4 py-4 space-y-1">
                            <h1>
                                Nama : <span class="font-extrabold">{{ relawan.nama }}</span>
                            </h1>
                            <h1>
                                Nomor Hp : <span class="font-extrabold">{{ relawan.hp }}</span>
                            </h1>
                            <h1>
                                Kecamatan : <span class="font-extrabold">{{ relawan.kecamatan }}</span>
                            </h1>
                            <h1>
                                Kelurahan : <span class="font-extrabold">{{ relawan.kelurahan }}</span>
                            </h1>
                            <h1>
                                Status Konfirmasi : <span class="font-extrabold">{{ relawan.status }}</span>
                            </h1>
                            <div class="w-full pt-4">
                                <div class="bg-black">
                                    <button
                                        class="bg-golkar hover:bg-che hover:text-gray-200 w-full border-2 border-black px-2 py-1  font-Karantina font-bold text-lg uppercase">
                                        <h1>Buka...</h1>
                                    </button>
                                </div>
                            </div> -->
<!-- <div class="font-extrabold pt-4">
                                <h1>Surat Pernyataan : </h1>
                                <h1 v-html="relawan.suratPernyataan">
                                </h1>
                            </div>
                            <div class="pt-2">
                                <h1 class="font-extrabold pt-2">Tanda Tangan</h1>
                                <div class="pt-4">
                                    <img class="w-full h-40 border-2 border-black relative -top-1.5 -left-1.5 cursor-pointer object-cover"
                                        :src="getFullImgPath(relawan.ttd)" alt="">
                                </div>
                            </div> -->
<!-- </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> -->

<!-- <script>
import Api from "@/services/api";

export default {
    data() {
        return {
            relawans: [],
            timrelawans: [],
        }
    },
    created() {
        this.GetRelawan()
    },
    methods: {
        async GetRelawan() {
            try {
                const res = await Api.get('relawan')
                const rez = await Api.get('timrelawan')
                this.timrelawans = rez.data.data
                this.relawans = res.data.data
            } catch (error) {
                alert(error)
            }
        },
        getFullImgPath(img) {
            return `https://rumahgerak.com/${img}`;
        },
    }
}
</script> -->