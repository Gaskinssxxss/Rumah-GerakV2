<template>
  <div class="flex items-center justify-center h-[30rem]">
    <div class="bg-neutral-200 p-8 rounded shadow-md w-full max-w-md">
      <h1 class="text-2xl font-semibold mb-6 text-center">Login</h1>
      <form @submit.prevent="login">
        <div class="form-part mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="email" id="email" placeholder="Email" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="form-part mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" v-model="password" id="password" placeholder="Password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <button
          class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  computed: {
    isUserLoggedIn() {
      return this.$store.state.userLoggedIn;
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
    async login() {
      try {
        await this.$store.dispatch("login", { email: this.email, password: this.password });
        if (this.isUserLoggedIn) {
          this.$toast.success("Authentication succeeded.", { position: "bottom-left", duration: 1000 });
          await this.$router.push("/warbase");
        }
      } catch (err) {
        console.log(err);
        this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
      }
    }
  }
}
</script>

<style scoped>
@import "../assets/form.css";
</style>
