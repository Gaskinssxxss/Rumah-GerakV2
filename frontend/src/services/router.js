import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import profile from "@/views/ProfilePage";
import vm from "@/views/VisiMisi";
import koalisi from "@/views/KoalisiPage";
import tr from "@/views/TrackRecord";
import relawan from "@/views/GerRelawan";
import tim from "@/views/RelawanTim";
import individu from "@/views/RelawanIndividu";
import kotak from "@/views/KotakSaran";
import galleri from "@/views/GalleryPage";
import store from "@/services/store";
import artikel from "@/views/ArtikelPage";
import content from "@/views/GalleryContain";
import admin from "@/views/adminDashboard";
import baliho from "@/views/balihoPage";
import kegiatanRelawan from "@/views/kegiatanRelawan.vue";
import NotFound from "@/views/404Page";
import Forbidden from "@/views/403Page";
import updateKegiatan from "@/views/updateKegiatan.vue";
import laporanIsu from "@/views/laporanIsu.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "BERANDA",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/laporan/isu",
    name: "Laporan",
    component: laporanIsu,
    meta: {
      title: "Laporan",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/relawan/kegiatan/update",
    name: "Update Kegiatan Relawan",
    component: updateKegiatan,
    meta: {
      title: "Update Kegiatan Relawan",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/relawan/kegiatan",
    name: "Kegiatan Relawan",
    component: kegiatanRelawan,
    meta: {
      title: "Kegiatan Relawan",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/baliho",
    name: "Baliho",
    component: baliho,
    meta: {
      title: "BALIHO",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/warbase",
    name: "War Base",
    component: admin,
    meta: {
      title: "War Base",
      authRequired: true,
      authForbidden: false,
    },
  },
  {
    path: "/gallery/:id",
    name: "Gallerys",
    component: content,
    meta: {
      title: "Gallerys",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/artikel/:id",
    name: "PORTAL",
    component: artikel,
    meta: {
      title: "PORTAL",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/profile-kandidat",
    name: "PROFILE KANDIDAT",
    component: profile,
    meta: {
      title: "PROFILE KANDIDAT",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/visi-misi",
    name: "VISI & MISI",
    component: vm,
    meta: {
      title: "VISI & MISI",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/koalisi",
    name: "KOALISI",
    component: koalisi,
    meta: {
      title: "KOALISI",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/track-record",
    name: "TRACK RECORD",
    component: tr,
    meta: {
      title: "TRACK RECORD",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/relawan",
    name: "RELAWAN",
    component: relawan,
    meta: {
      title: "RELAWAN",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/relawan/tim",
    name: "TIM RELAWAN",
    component: tim,
    meta: {
      title: "TIM RELAWAN",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/relawan/individu",
    name: "RELAWANS",
    component: individu,
    meta: {
      title: "RELAWANS",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/aspirasi",
    name: "Kotak Aspirasi",
    component: kotak,
    meta: {
      title: "Kotak Aspirasi",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/galleri",
    name: "Galleri",
    component: galleri,
    meta: {
      title: "Galleri",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      title: "Register",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/403",
    name: "Forbidden",
    component: Forbidden,
    meta: {
      title: "403 Forbidden",
      authRequired: false,
      authForbidden: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Not Found",
      authRequired: false,
      authForbidden: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// routes protection
router.beforeEach(async (to, from, next) => {
  // update store if needed
  if (!store.state.isStoreUpdated) {
    await store.dispatch("updateStore");
  }

  // control routes
  const isAuthenticated = store.state.userLoggedIn;
  if (!isAuthenticated && to.meta.authRequired) {
    next({ name: "login" });
  } else if (isAuthenticated && to.meta.authForbidden) {
    next({ name: "Forbidden" }); // Redirect to 403 if authenticated but route is forbidden
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
