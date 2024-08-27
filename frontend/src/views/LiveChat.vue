<template>
    <div class="p-4">
        <div class="chat-container max-w-md mx-auto border-2 border-black shadow-lg rounded-lg overflow-hidden">
            <div class="border-b-2 border-black bg-nasdem text-gray-200">
                <div class="py-2 font-Karantina uppercase font-extrabold text-2xl text-center">
                    <h1>
                        Live Chat
                    </h1>
                </div>
            </div>
            <div class="messages p-4 h-[25rem] overflow-y-auto font-Jet text-sm">
                <div v-for="(message, index) in messages" :key="index" class="message mb-2">
                    <span v-if="message.sender === 'Pengunjung'" class="font-semibold text-blue-600">{{ message.sender
                        }}:</span>
                    <span v-else class="font-semibold text-che">{{ message.sender }}:</span>
                    <span class="ml-2 text-gray-800">{{ message.text }}</span>
                    <div class="text-xs text-gray-500 mt-1">{{ message.timestamp }}</div>
                </div>
            </div>
            <div v-if="!chatClosed"
                class="input-container p-4 border-t border-gray-200 text-xl font-Karantina font-extrabold uppercase tracking-wider">
                <div class="flex">
                    <input v-model="message" @keyup.enter="sendMessage" placeholder="Ketik Pesan Anda"
                        class="flex-grow p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black border-2 border-gray-500 font-Jet text-sm" />
                    <button @click="sendMessage"
                        class="ml-2 px-4 py-2 bg-nasdem text-white rounded-lg hover:bg-blue-800 uppercase focus:outline-none">
                        Kirim
                    </button>
                </div>
                <div class="pt-2">
                    <button @click="closeChat"
                        class=" px-2 py-2 w-full bg-che border-2 border-black text-white rounded-lg hover:bg-red-700 focus:outline-none uppercase">
                        Tutup Sesi
                    </button>
                </div>
            </div>
            <div v-else class="p-4 text-center text-gray-600">
                <p>Sesi Chat Telah Berakhir.</p>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/services/api';
import io from 'socket.io-client';

export default {
    data() {
        return {
            socket: null,
            visitorID: '',
            message: '',
            messages: [],
            chatClosed: false,
        };
    },
    mounted() {
        this.visitorID = localStorage.getItem('visitorID');

        if (!this.visitorID) {
            this.generateNewVisitorID();
        } else {
            this.initializeChat();
        }
    },

    methods: {
        generateNewVisitorID() {
            this.visitorID = generateVisitorID();
            localStorage.setItem('visitorID', this.visitorID);
            this.initializeChat();
        },
        initializeChat() {
            this.socket = io('http://rumahgerak.com/');

            this.socket.emit('join', { visitorID: this.visitorID });

            api.get(`chat/${this.visitorID}`)
                .then(res => res.data)
                .then(data => {
                    if (data && data.isActive) {
                        this.messages = data.messages;
                    } else {
                        this.generateNewVisitorID();
                    }
                    const queryMessage = this.$route.query.message;
                    if (queryMessage) {
                        this.message = atob(queryMessage);
                        this.sendMessage();
                    }
                })
                .catch(error => {
                    console.error('Error fetching chat:', error.response ? error.response.data : error.message);
                });

            this.socket.on('chatMessage', (msg) => {
                this.messages.push(msg);
            });

            this.socket.on('chatClosed', (msg) => {
                alert(msg.message);
                this.chatClosed = true;
            });
        },
        sendMessage() {
            if (this.message.trim() !== '') {
                const timestamp = new Date().toLocaleString();

                this.socket.emit('chatMessage', {
                    visitorID: this.visitorID,
                    text: this.message,
                    sender: 'Pengunjung',
                    timestamp: timestamp
                });
                this.message = '';
            }
        },
        closeChat() {
            api.post(`chat/${this.visitorID}/close`)
                .then(() => {
                    this.chatClosed = true;
                    this.socket.emit('chatClosed', { visitorID: this.visitorID });

                    localStorage.removeItem('visitorID');
                    this.generateNewVisitorID();
                })
                .catch((error) => {
                    console.error('Error closing chat:', error.response ? error.response.data : error.message);
                });
            this.$router.push('/')
        }
    },
    beforeUnmount() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
};

function generateVisitorID() {
    const now = new Date();
    const datePart = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`;
    const timePart = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();

    return `${datePart}${timePart}${randomPart}`;
}
</script>

<!-- // mounted() {
//     this.visitorID = localStorage.getItem('visitorID');

//     if (!this.visitorID) {
//         // Jika tidak ada visitorID (sesi sebelumnya ditutup), buat ID baru
//         this.generateNewVisitorID();
//     } else {
//         this.initializeChat();
//     }
// }, -->