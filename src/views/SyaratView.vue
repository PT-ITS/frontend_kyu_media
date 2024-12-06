<script setup>
import Navbar from "../components/home/Navbar.vue";
import Footer from "../components/home/Footer.vue";
</script>
<template>
  <Navbar :layanan="layanan" />
  <main class="main">
    <!-- Hero Section -->
    <section id="home" class="hero section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center">
          <div class="col-lg d-flex justify-content-center">
            <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div class="company-badge mb-4">
                <i class="bi bi-gear-fill me-2"></i>
                Home <i class="bi bi-chevron-right"></i> Syarat & Ketentuan
              </div>
              <div>
                <h1 class="mb-4">Syarat & Ketentuan</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section">
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="row gy-4 align-items-center justify-content-center">
          <div class="col-xl-9" data-aos="fade-up" data-aos-delay="200">
            <div v-if="syarat != null">
              <div v-for="item in syarat" :key="item.id">
                <h2 class="about-title">{{ item.header }}</h2>
                <div class="about-description" v-html="item.isi"></div>
              </div>
            </div>
            <div v-if="syarat == null || !ready">
              <h2 class="about-title">
                Pastikan Membaca Syarat dan Ketentuan Layanan
              </h2>
              <p class="about-description">
                Dengan menggunakan layanan Jasa Press Release Murah di
                kyumedia.com artinya klien MENYETUJUI dengan Syarat dan
                Ketentuan yang berlaku pada halaman ini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->
  </main>

  <Footer :layanan="layanan" :kontak="kontak" />
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  data() {
    return {
      activeFaqIndex: null, // Track the currently active FAQ
      syarat: [],
      layanan: [],
      kontak: [],
      ready: false,
    };
  },
  methods: {
    async fetchData() {
      this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/all/syarat`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.syarat = response.data.data.syarat; // Update the dataList with data from the server
        this.layanan = response.data.data.layanan; // Update the dataList with data from the server
        this.kontak = response.data.data.kontak; // Update the dataList with data from the server
        this.ready = true;
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengambil data.",
          "error"
        );
      }
    },
    showAlert(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        $("#addData").modal("hide");
        $("#dataUpdate").modal("hide");
      });
    },
  },
  setup() {},
  mounted() {},
  created() {
    this.fetchData();
  },
};
</script>

<style>
.btn-primary {
  background: linear-gradient(
    to right,
    #ee0405,
    #ff7f00
  ) !important; /* Gradient from red to orange */
  color: #fff; /* Optional: Set text color */
  border: none; /* Optional: Remove border if needed */
  transition: background-color 0.3s ease; /* Optional: Add smooth transition */
}

.btn-primary:hover {
  background: linear-gradient(
    to right,
    #ff7f00,
    #ee0405
  ) !important; /* Reverse the gradient on hover */
}

.about-description {
  font-size: 1rem;
  text-align: justify; /* Adjusts the text alignment within paragraphs */
  margin-bottom: 1rem;
}
</style>