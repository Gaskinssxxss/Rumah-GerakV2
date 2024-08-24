<template>
  <div v-if="!isWarBase" class="py-0 lg:py-4 bg-neutral-200">
    <div class="flex justify-center items-center min-h-screen">
      <div
        class="w-full max-w-[812px] lg:max-w-sm siomi:rounded-none shadow-lg rounded-3xl overflow-hidden siomi:border-0">
        <navbar />
        <div>
          <div>
            <div>
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
  },
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