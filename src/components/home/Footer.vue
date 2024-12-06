<template>
  <footer id="footer" class="footer">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="/img/logo.png" style="width: 150px" alt="" />
            <!-- <span class="sitename">Kyu Media</span> -->
          </a>
          <div class="footer-contact pt-3">
            <p>
              Kyu Media merupakan perusahaan media agensi yang melayani strategi
              pengelolaan konten artikel dan audio visual untuk mendorong
              pertumbuhan bisnis.
            </p>
            <div class="d-flex mt-3 rounded-pill overflow-hidden">
              <!-- Email Input -->
              <input
                type="email"
                v-model="email"
                placeholder="Masukkan isi email"
                class="form-control border-3 rounded-0"
              />

              <!-- Send Email Button -->
              <a
                :href="`mailto:${kontak[2]?.kontak}?subject=Inquiry&body=${email}`"
                class="btn btn-primary rounded-0"
                :disabled="!email"
              >
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <!-- <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div> -->
        </div>

        <div class="col-lg-2 col-md-3 footer-links"></div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Perusahaan</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/syarat">Syarat & Ketentuan</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <div v-if="layanan != null">
            <ul>
              <li v-for="item in layanan" :key="item.id">
                <a href="#">{{ item.header }}</a>
              </li>
            </ul>
          </div>
          <div v-if="layanan == null">
            <ul>
              <li><a href="#">Jasa Press Release</a></li>
              <li><a href="#">Jasa Backlink Media Nasional</a></li>
              <li><a href="#">Jasa Pengelolaan Media Sosial</a></li>
              <li><a href="#">Jasa Penulisan Artikel</a></li>
              <li><a href="#">Media Monitoring</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Contact Us</h4>
          <div v-if="kontak != null">
            <ul>
              <li v-for="item in kontak" :key="item.id">
                <a href="#">{{ item.kontak }}</a>
              </li>
            </ul>
          </div>
          <div v-if="kontak == null">
            <ul>
              <li><a href="#">08123456789</a></li>
              <li><a href="#">Jl.</a></li>
              <li><a href="#">kyumedia@gmail.com</a></li>
              <li><a href="#">kyumedia.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>
        <strong class="px-1 sitename">Kyu Media</strong>
        <span>All Rights Reserved</span>
      </p>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
        <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
      </div>
    </div>
  </footer>
</template>
    
    <script>
import { useRoute } from "vue-router";

export default {
  name: "Header",
  props: {
    layanan: {
      type: Array,
      default: () => [],
    },
    kontak: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      email: "", // To hold the email input value
    };
  },
  setup() {},
};
</script>
  
  <style>
</style>
    