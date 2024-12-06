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
                Home <i class="bi bi-chevron-right"></i> Our Blog
              </div>
              <div>
                <h1 class="mb-4">Our Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->

    <!-- Blog Section -->
    <section id="about" class="about section">
      <div
        class="container d-flex flex-column align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="row gy-4 align-items-center justify-content-center">
          <div class="col-xl-9" data-aos="fade-up" data-aos-delay="200">
            <div v-if="blog != null">
              <img
                :src="getImageUrl(blog['foto'])"
                class="card-img-top"
                :alt="blog['header']"
                style="height: 500px; object-fit: cover"
              />
              <div class="mt-3 d-flex align-items-center">
                <button class="btn btn-primary me-3">
                  {{ blog.kategori }}
                </button>
                <h6 class="mb-0 ps-3 border-start">
                  <b><i class="bi bi-calendar3 me-2"></i> {{ blog.tanggal }}</b>
                </h6>
              </div>
              <div class="mt-3">
                <h2>
                  <b>{{ blog.header }}</b>
                </h2>
              </div>
              <div class="about-description" v-html="blog.isi"></div>
            </div>
            <div v-if="blog == null || !ready">
              <h2 class="about-title">Our Blog</h2>
              <p class="about-description">
                Jasa Press Release Murah: Solusi Cerdas Untuk Bisnis Kamu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Blog Section -->

    <!-- Latest Blog Section -->
    <section id="about" class="about section light-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Our Latest Articles & Blog</h2>
      </div>
      <div
        class="container d-flex flex-column align-items-start justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="row gy-4 align-items-start justify-content-start">
          <div class="col-xl-12" data-aos="fade-up" data-aos-delay="200">
            <div v-if="latest_blog != null" class="d-flex flex-wrap gap-3">
              <div
                v-for="item in latest_blog"
                :key="item.id"
                class="card"
                style="width: 18rem; flex-grow: 1; flex-shrink: 1"
              >
                <img
                  :src="getImageUrl(item.foto)"
                  class="card-img-top"
                  :alt="item.header"
                  style="height: 200px; object-fit: cover"
                />
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">{{ item.header }}</h5>
                  <router-link
                    :to="`/blog/${item.id}`"
                    class="btn btn-primary mt-auto"
                  >
                    Read More <i class="bi bi-arrow-up-right-circle-fill"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div v-if="latest_blog == null || !ready">
              <h2 class="about-title">Our Blog</h2>
              <p class="about-description">
                Jasa Press Release Murah: Solusi Cerdas Untuk Bisnis Kamu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Latest Blog Section -->
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
      blog: [],
      latest_blog: [],
      layanan: [],
      kontak: [],
      id: null,
      ready: false,
    };
  },
  methods: {
    async fetchData() {
      this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/all/detail-blog/${this.id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.blog = response.data.data.blog; // Update the dataList with data from the server
        this.latest_blog = response.data.data.latest_blog; // Update the dataList with data from the server
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
    getImageUrl(image) {
      if (image != null) {
        return `${import.meta.env.VITE_STORAGE_ENDPOINT}/${image}`;
      }
      return "https://via.placeholder.com/150";
    },
  },
  setup() {},
  mounted() {},
  watch: {
    // Watch for changes to the route's ID parameter and re-fetch the data
    "$route.params.id"(newId) {
      this.id = newId; // Update the blog ID
      this.fetchData(); // Re-fetch the data based on the new ID
    },
  },
  created() {
    this.id = this.$route.params.id;
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