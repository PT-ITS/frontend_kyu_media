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
                Home <i class="bi bi-chevron-right"></i> Paket
              </div>
              <div>
                <h1 class="mb-4">Paket</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->

    <!-- Pricing Section -->
    <section id="prices" class="pricing section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Harga Paket Jasa Press Release</h2>
        <p>
          Kami menyediakan ragam paket jasa press release murah yang bisa
          menunjang kebutuhan publikasi bisnis kamu di media online.
        </p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-4 justify-content-center" v-if="paket != null">
          <!-- Basic Plan -->
          <div
            class="col-lg-4"
            v-for="(item, index) in paket"
            :key="item.id"
            data-aos="fade-up"
            :data-aos-delay="100 + index * 100"
          >
            <div class="pricing-card">
              <h3>{{ item.nama_paket }}</h3>
              <div class="price">
                <span class="currency">Rp. </span>
                <span class="amount">{{ item.harga }}</span>
              </div>
              <h4>Fitur:</h4>
              <ul class="features-list">
                <li
                  v-for="(feature, idx) in parseIsi(item.isi_paket)"
                  :key="idx"
                >
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>

              <a
                :href="'https://wa.me/' + kontak[0]['kontak']"
                class="btn btn-primary"
              >
                Order
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="row g-4 justify-content-center"
          v-if="paket == null || !ready"
        >
          <!-- Basic Plan -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="pricing-card">
              <h3>Starter A</h3>
              <div class="price">
                <span class="currency">Rp. </span>
                <span class="amount">4.000.000</span>
              </div>
              <!-- <p class="description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam.
              </p> -->

              <h4>Fitur:</h4>
              <ul class="features-list">
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  5 Media
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bebas Pilih Media Kelas A
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Gratis Pembuatan 1 Artikel
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Terbit Ulang Berita
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Berita Terbit Permanen
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bonus Tambahan 200ribu
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Jaminan 99% Terbit
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Ganti Media
                </li>
              </ul>

              <a href="#" class="btn btn-primary">
                Order
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Standard Plan -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="pricing-card">
              <h3>Reguler A</h3>
              <div class="price">
                <span class="currency">Rp.</span>
                <span class="amount">8.000.000</span>
              </div>
              <!-- <p class="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum.
              </p> -->

              <h4>Fiter:</h4>
              <ul class="features-list">
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  10 Media
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bebas Pilih Media Kelas A
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Gratis Pembuatan 1 Artikel
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Terbit Ulang Berita
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Berita Terbit Permanen
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bonus Tambahan 200ribu
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Jaminan 99% Terbit
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Ganti Media
                </li>
              </ul>

              <a href="#" class="btn btn-primary">
                Order
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- Premium Plan -->
          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="pricing-card">
              <h3>Premium A</h3>
              <div class="price">
                <span class="currency">Rp.</span>
                <span class="amount">10.000.000</span>
              </div>
              <!-- <p class="description">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse quam nihil molestiae.
              </p> -->

              <h4>Fitur:</h4>
              <ul class="features-list">
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  15 Media
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bebas Pilih Media Kelas A
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Gratis Pembuatan 1 Artikel
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Terbit Ulang Berita
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Berita Terbit Permanen
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Bonus Tambahan 200ribu
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Jaminan 99% Terbit
                </li>
                <li>
                  <i class="bi bi-check-circle-fill"></i>
                  Garansi Ganti Media
                </li>
              </ul>

              <a href="#" class="btn btn-primary">
                Order
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Pricing Section -->

    <!-- Features Cards Section -->
    <section id="terms" class="features-cards section light-background">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Syarat dan Ketentuan</h2>
      </div>
      <!-- End Section Title -->
      <div class="container">
        <div class="row gy-4">
          <div class="col-xl col-md" data-aos="zoom-in" data-aos-delay="100">
            <div class="card" style="background-color: #ee0405">
              <div class="card-header text-white">Ketentuan</div>
              <div v-if="syarat_ketentuan != null">
                <ul
                  class="list-group list-group-flush"
                  v-for="item in syarat_ketentuan"
                  :key="item.id"
                >
                  <li class="list-group-item">{{ item.syarat }}</li>
                </ul>
              </div>
              <div v-if="syarat_ketentuan == null || !ready">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Naskah dapat diedit.</li>
                  <li class="list-group-item">
                    Pemesanan minimal untuk 5 media.
                  </li>
                  <li class="list-group-item">Pembayaran dilakukan di muka.</li>
                  <li class="list-group-item">
                    Waktu pengerjaan maksimal 3 hari.
                  </li>
                  <li class="list-group-item">
                    Bonus tambahan berlaku untuk pesanan ke-3, 4, 5, dan
                    seterusnya.
                  </li>
                  <li class="list-group-item">
                    Garansi penerbitan ulang jika hasil publikasi tidak sesuai
                    dengan perjanjian awal.
                  </li>
                  <li class="list-group-item">
                    Press release yang sudah terbit tidak dapat diedit kecuali
                    ada kesalahan penulisan nama, gelar, alamat, tanggal, atau
                    typo.
                  </li>
                  <li class="list-group-item">
                    Harga publikasi media massa di atas sudah nett, bebas
                    memilih media nasional ternama kelas A.
                  </li>
                  <li class="list-group-item">
                    Layanan distribusi press release tidak digunakan untuk iklan
                    hard-selling. Untuk kebutuhan iklan penuh, gunakan layanan
                    advertorial.
                  </li>
                  <li class="list-group-item">
                    Layanan press release tidak dapat memberikan
                    hyperlink/backlink. Untuk backlink media, gunakan layanan
                    backlink media.
                  </li>
                  <li class="list-group-item">Harga sudah termasuk pajak.</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- End Feature Borx-->
        </div>
      </div>
    </section>
    <!-- /Features Cards Section -->
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
      paket: [],
      syarat_ketentuan: [],
      layanan: [],
      kontak: [],
      ready: false,
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
    },
    parseIsi(isiHTML) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(isiHTML, "text/html");
      const items = doc.querySelectorAll("li");
      return Array.from(items).map((li) => li.textContent.trim());
    },
    async fetchData() {
      this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/all/paket`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.paket = response.data.data.paket; // Update the dataList with data from the server
        this.syarat_ketentuan = response.data.data.syarat_ketentuan; // Update the dataList with data from the server
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

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.features-list li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.features-list li i {
  color: #ee0405;
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.pricing .pricing-card {
  background: color-mix(
    in srgb,
    var(--accent-color),
    transparent 95%
  ) !important;
}
</style>