<template>
  <div v-if="!isWarBase" class="py-0 lg:py-4 bg-neutral-200">
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="w-full max-w-[812px] lg:max-w-sm siomi:rounded-none shadow-lg rounded-3xl overflow-hidden siomi:border-0">
        <navbar />
        <div>
          <div>
            <div v-if="!isLiveChat">
              <div class="fixed right-0 bottom-[5%] z-50">
                <button @click="through">
                  <div
                    class="bg-gray-200 border-x-2 border-y-2 border-black w-32 siomi:w-36 h-16 siomi:h-20 py-1 rounded-l-lg rounded-y-lg font-Karantina uppercase text-lg siomi:text-2xl font-extrabold flex space-x-2 px-2">
                    <div class="pt-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>
                    </div>
                    <h1 class="text-start">Live Chat Admin.</h1>
                  </div>
                </button>
              </div>
              <router-view />
            </div>
            <div v-else>
              <router-view />
            </div>
          </div>
        </div>
        <foot />
      </div>
    </div>
  </div>
  <div v-else>
    <div>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "../src/components/NavBar.vue";
import foot from "../src/components/fooTer.vue";

export default {
  name: "App",
  components: {
    navbar,
    foot,
  },
  computed: {
    isWarBase() {
      return this.$route.path === "/warbase";
    },
    isLiveChat() {
      return this.$route.path === "/chat/user"
    }
  },
  methods: {
    through() {
      this.$router.push('/chat/user')
    }
  }
};
</script>


<!-- <template>
  <nav class="bg-nasdem w-full border-2 border-black fixed top-0 z-40">
    <navbar />
  </nav>
  <div>
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <orbit-spinner :color="'#000'" :size="60"></orbit-spinner>
    </div>
    <div v-else>
      <div v-if="!isWarBase" class="flex justify-center pt-20">
        <div class="max-w-80">
          <router-view />
        </div>
      </div>
      <div v-else>
        <div>
          <router-view />
        </div>
      </div>
    </div>
  </div>
  <footer class="w-full fixed bottom-0 z-40">
    <foot />
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import navbar from "../src/components/NavBar.vue";
import foot from "../src/components/fooTer.vue";
import { OrbitSpinner } from "epic-spinners";

export default {
  name: "App",
  components: {
    navbar,
    foot,
    OrbitSpinner,
  },
  setup() {
    const loading = ref(false);
    const router = useRouter();

    onMounted(() => {
      router.beforeEach((to, from, next) => {
        loading.value = true;
        next();
      });
      router.afterEach(() => {
        loading.value = false;
      });
    });

    return {
      loading,
    };
  },
  computed: {
    isWarBase() {
      return this.$route.path === "/warbase";
    },
  },
};
</script>
 -->


<!-- <template>
  <nav class="bg-nasdem w-full border-2 border-black fixed top-0 z-40">
    <navbar />
  </nav>
  <div>
    <div v-if="!isWarBase" class="flex justify-center pt-20">
      <div class="max-w-80">
        <loading v-model:active="isLoading" :is-full-page="true" :background-color="'#000000'" :loader="'dots'" />
        <router-view />
      </div>
    </div>
    <div v-else>
      <div>
        <router-view />
      </div>
    </div>
  </div>
  <footer class="w-full fixed bottom-0 z-40">
    <foot />
  </footer>
</template>

<script>
import navbar from "../src/components/NavBar.vue"
import foot from "../src/components/fooTer.vue"
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  name: "App",
  components: {
    navbar,
    foot,
    Loading
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    isWarBase() {
      return this.$route.path === "/warbase";
    }
  },
  methods: {
    startLoading() {
      setTimeout(() => {
        this.isLoading = true;
      }, 2000)
    },
    endLoading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000)
    }
  },
  watch: {
    '$route'() {
      this.isLoading = true;
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.startLoading();
      next();
    });
    this.$router.afterEach(() => {
      this.endLoading();
    });
  }
}
</script> -->