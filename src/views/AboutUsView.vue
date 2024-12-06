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
                Home <i class="bi bi-chevron-right"></i> About Us
              </div>
              <div>
                <h1 class="mb-4">About Us</h1>
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
            <div v-if="tentang_kami != null">
              <h2 class="about-title">{{ tentang_kami["header"] }}</h2>
              <div class="about-description" v-html="tentang_kami['isi']"></div>
              <h2 class="about-title">Layanan Utama</h2>
              <div v-if="layanan != null">
                <ul class="features-list">
                  <li v-for="item in layanan" :key="item.id">
                    <i class="bi bi-check-circle-fill"></i> {{ item.header }}
                  </li>
                </ul>
              </div>
              <h2 class="about-title">Visi</h2>
              <div
                class="about-description"
                v-html="tentang_kami['visi']"
              ></div>
              <h2 class="about-title">Misi</h2>
              <ul class="features-list">
                <li v-for="(misi, id) in parseIsi(tentang_kami.misi)" :key="id">
                  <i class="bi bi-check-circle-fill"></i>
                  {{ misi }}
                </li>
              </ul>
              <h2 class="about-title">Nilai Perusahaan</h2>
              <ul class="features-list">
                <li
                  v-for="(nilai_perusahaan, id) in parseIsi(
                    tentang_kami.nilai_perusahaan
                  )"
                  :key="id"
                >
                  <i class="bi bi-check-circle-fill"></i>
                  {{ nilai_perusahaan }}
                </li>
              </ul>
            </div>
            <div v-if="tentang_kami == null || !ready">
              <h2 class="about-title">Tentang Kyu Media</h2>
              <p class="about-description">
                Kyu Media merupakan perusahaan media agensi yang melayani
                strategi pengelolaan konten artikel dan audio visual untuk
                mendorong pertumbuhan bisnis melalui pengelolaan media sosial,
                optimasi SEO, backlink media nasional, pembuatan website, media
                monitoring, strategi media, dan layanan konten berkualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->

    <!-- Faq Section -->
    <section class="faq-9 faq section light-background" id="faq">
      <div class="container">
        <div class="row">
          <div class="col-lg-5" data-aos="fade-up">
            <h2 class="faq-title">Have a question? Check out the FAQ</h2>
            <p class="faq-description">Pertanyaan Seputar Jasa Press Release</p>
            <div
              class="faq-arrow d-none d-lg-block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <svg
                class="faq-arrow"
                width="200"
                height="211"
                viewBox="0 0 200 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>

          <div class="col-lg-7" data-aos="fade-up" data-aos-delay="300">
            <div v-if="faq != null">
              <div class="faq-container">
                <div
                  class="faq-item"
                  v-for="(faq, index) in faq"
                  :key="faq.id"
                  :class="{ 'faq-active': activeFaqIndex === index }"
                  @click="toggleFaq(index)"
                >
                  <h3>{{ faq.pertanyaan }}</h3>
                  <div class="faq-content" v-html="faq.jawaban"></div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
            <div v-if="faq == null || !ready">
              <div class="faq-container">
                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 0 }"
                  @click="toggleFaq(0)"
                >
                  <h3>Mengapa memilih Jasa Press Release Murah dari Kami?</h3>
                  <div class="faq-content">
                    <p>
                      Kami berpengalaman dalam penerbitan artikel, khususnya
                      press release untuk perusahaan dan individu.
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 1 }"
                  @click="toggleFaq(1)"
                >
                  <h3>Siapa yang Membutuhkan Jasa Press Release?</h3>
                  <div class="faq-content">
                    <p>
                      1. Perusahaan<br />
                      Menyiarkan kegiatan perusahaan, perubahan struktur
                      organisasi, menanggapi krisis, meningkatkan reputasi.<br /><br />

                      2. Startup<br />
                      Meningkatkan visibilitas agar masyarakat luas mengetahui
                      keberadaan startup di pasar Indonesia.<br /><br />

                      3. UMKM (Usaha Mikro, Kecil, dan Menengah)<br />
                      Membangun dan meningkatkan kesadaran di tingkat lokal,
                      menyiarkan produk, merespons perubahan signifikan dalam
                      bisnis.<br /><br />

                      4. Pemerintah / BUMN<br />
                      Menyiarkan berita tentang kebijakan dan program pemerintah
                      atau BUMN agar diketahui masyarakat luas.<br /><br />

                      5. Influencer<br />
                      Meningkatkan engagement, memperoleh popularitas, dan
                      meningkatkan peluang untuk verifikasi centang biru di
                      media sosial.<br /><br />

                      6. Artis/Seniman<br />
                      Memperkenalkan karya terbaru, penampilan di acara besar,
                      dan proyek yang sedang dikerjakan.<br /><br />

                      7. Tokoh Masyarakat<br />
                      Berbagi pesan atau informasi yang dianggap penting untuk
                      masyarakat.<br /><br />

                      8. Organisasi Nirlaba<br />
                      Meningkatkan dukungan dan kesadaran masyarakat tentang
                      kegiatan amal dan kampanye sosial yang sedang
                      dijalankan.<br /><br />

                      9. Event Organizer<br />
                      Memasarkan acara untuk meningkatkan partisipasi dan
                      eksposur event.<br /><br />

                      10. Profesional dan Ahli<br />
                      Membangun reputasi profesional dengan mengumumkan
                      keberhasilan atau memberikan pandangan ahli melalui media
                      nasional.<br /><br />

                      11. Lembaga Pendidikan<br />
                      Sekolah, universitas, lembaga pelatihan, yang ingin
                      menyampaikan informasi terkait program pendidikan dan
                      prestasi mereka.<br /><br />
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 2 }"
                  @click="toggleFaq(2)"
                >
                  <h3>Berapa Hari Artikel Press Release Terbit?</h3>
                  <div class="faq-content">
                    <p>
                      Proses tayang press release memerlukan waktu 3x24 jam
                      tanpa pengerjaan artikel. Bahkan, bisa lebih cepat dari
                      waktu tersebut.
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 3 }"
                  @click="toggleFaq(3)"
                >
                  <h3>Apakah Artikel Press Release Tayang Permanen?</h3>
                  <div class="faq-content">
                    <p>
                      Selama konten press release tidak melanggar kebijakan
                      media, artikel press release akan tetap tayang di media
                      yang bersangkutan.
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 4 }"
                  @click="toggleFaq(4)"
                >
                  <h3>Bisa Sebar Rilis di Media Online Mana Saja?</h3>
                  <div class="faq-content">
                    <p>
                      Kami dapat menyebarkan press release klien ke berbagai
                      media online nasional, lokal, atau daerah, hingga media
                      non-tier yang sudah terindeks di Google.
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 5 }"
                  @click="toggleFaq(5)"
                >
                  <h3>
                    Topik Apa Saja yang Diperbolehkan untuk Press Release?
                  </h3>
                  <div class="faq-content">
                    <p>
                      Kami menerima semua topik, kecuali:<br />
                      1. Judi<br />
                      2. Porno<br />
                      3. Ujaran Kebencian<br />
                      4. Provokasi<br />
                      5. Perbandingan Agama<br />
                      6. Organisasi Ilegal<br />
                      7. Obat dan Makanan yang belum resmi
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->

                <div
                  class="faq-item"
                  :class="{ 'faq-active': activeFaqIndex === 6 }"
                  @click="toggleFaq(6)"
                >
                  <h3>Bagaimana Sistem Pembayaran Jasa Press Release?</h3>
                  <div class="faq-content">
                    <p>
                      Pengguna layanan dapat melakukan pembayaran penuh di awal
                      atau memberikan uang muka sebesar 50% (syarat dan
                      ketentuan berlaku).
                    </p>
                  </div>
                  <i class="faq-toggle bi bi-chevron-right"></i>
                </div>
                <!-- End Faq item-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Faq Section -->
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
      tentang_kami: [],
      faq: [],
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
          `${import.meta.env.VITE_API_ENDPOINT}/all/about`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.tentang_kami = response.data.data.tentang_kami; // Update the dataList with data from the server
        this.faq = response.data.data.faq; // Update the dataList with data from the server
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

.faq-item {
  margin-bottom: 15px;
  cursor: pointer;
}

.faq-content {
  overflow: hidden;
  max-height: 0; /* Collapsed by default */
  transition: max-height 0.3s ease-out;
}

.faq-item.faq-active .faq-content {
  max-height: 1000px; /* Or a large enough value to fit the answer */
}

.faq-toggle {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

.faq-item.faq-active .faq-toggle {
  transform: rotate(90deg); /* Rotate the icon when active */
}
</style>