<script setup>
import Sidebar from "../components/general/Sidebar.vue";
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
import { ref } from "vue";

const sidebarToggled = ref(false);
const sidebarClass = ref("");

const toggleSidebar = () => {
  sidebarToggled.value = !sidebarToggled.value;
  sidebarClass.value = sidebarToggled.value ? "toggled" : "";
};
</script>

<template>
  <div id="wrapper">
    <Sidebar :class="sidebarClass" />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <Navbar @toggle-sidebar="toggleSidebar" />

        <!-- Begin Page Content -->
        <div class="container-fluid mt-4">
          <h1 class="mb-0 fw-bold customJudul">Dashboard</h1>
          <p>Semangat semoga harimu menyenangkan</p>
        </div>

        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <Footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataDashboards: [],
      selectedChartType: "weekly",
      ready: false,
    };
  },
  methods: {},
  created() {
    const token = sessionStorage.getItem("token"); // Ambil token dari local storage
    if (token) {
      try {
        const [headerBase64, signatureBase64] = token.split(".");
        const header = JSON.parse(atob(headerBase64));
        const signature = atob(signatureBase64);
        const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Mendekode bagian payload dari token JWT
        const expTimestamp = tokenPayload.exp;
        const expDate = new Date(expTimestamp * 1000); // Konversi Unix Timestamp ke JavaScript Date
        console.log("Waktu Kedaluwarsa (UTC):", expDate.toUTCString()); // Tampilkan waktu kedaluwarsa dalam format UTC
        if (new Date() > expDate) {
          console.log("Keluar");
          sessionStorage.removeItem("token");
          this.$router.push("/login");
        } else {
          console.log("Aman");
        }
        // success
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
        this.$router.push("/login"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/login"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>

<style scoped>
#content-wrapper {
  min-height: 780px !important;
}

.customJudul {
  color: #ee0405;
}
</style>
