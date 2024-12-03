<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
    >
      <a href="#" class="logo d-flex align-items-center me-auto me-xl-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <img src="/img/logo.png" style="width: 150px" alt="" />
        <!-- <h1 class="sitename">Kyu Media</h1> -->
      </a>

      <!-- Bootstrap Navbar -->
      <nav class="navbar navbar-expand-xl navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="link in links" :key="link.id">
              <a
                class="nav-link"
                :class="{ active: activeSection === link.id }"
                :href="`#${link.id}`"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <a class="btn-getstarted" href="#order">Cara Order</a>
    </div>
  </header>

  <main class="main">
    <!-- Hero Section -->
    <section id="home" class="hero section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div class="company-badge mb-4">
                <i class="bi bi-gear-fill me-2"></i>
                KYU MEDIA
              </div>
              <div v-if="beranda != null">
                <h1 class="mb-4">{{ beranda["header"] }}</h1>

                <div class="mb-4" v-html="beranda['isi']"></div>

                <h4 class="mb-4 mb-md-5">
                  <b>{{ beranda["footer"] }}</b>
                </h4>
              </div>
              <div v-if="beranda == null">
                <h1 class="mb-4">Jasa Press Release Murah</h1>

                <p class="mb-4">
                  Tingkatkan reputasi bisnis kamu dengan Jasa Press Release
                  Murah dari kami! Dapatkan kesempatan untuk melakukan publikasi
                  media online secara masif yang akan membantu meningkatkan
                  brand awareness kamu.
                </p>

                <h4 class="mb-4 mb-md-5"><b>Garansi 100% Berita Tayang</b></h4>
              </div>

              <div class="hero-buttons">
                <a href="#" class="btn btn-primary me-0 me-sm-2 mx-1"
                  >Free Konsultasi</a
                >
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="hero-image" data-aos="zoom-out" data-aos-delay="300">
              <img
                src="/assets/img/illustration-1.webp"
                alt="Hero Image"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->

    <!-- Features Section -->
    <section id="info" class="features section light-background">
      <div class="container">
        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div class="tab-pane fade active show" id="features-tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 text-center">
                <img
                  src="/assets/img/features-illustration-1.webp"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div
                class="col-lg-6 order-1 order-lg-2 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
              >
                <div v-if="info != null">
                  <h3>{{ info["header"] }}</h3>
                  <div v-html="info['isi']"></div>
                </div>
                <div v-if="info == null">
                  <h3>Inilah yang Wajib Anda Tahu</h3>
                  <p>
                    Menggunakan press release sebagai alat untuk menyebarkan
                    informasi ke berbagai platform media online masih menjadi
                    tolak ukur dalam membangun opini publik sekaligus sebagai
                    sarana penyebaran informasi yang cepat karena tidak terbatas
                    oleh ruang dan waktu. <br /><br />
                    Dengan menggunakan jasa press release murah, penyebaran
                    informasi ke berbagai media online akan menjadi lebih
                    terukur. Selain itu, potensi pembaca media online bisa
                    mencapai ratusan ribu hingga jutaan per bulan.
                    <br /><br />Melalui jasa press release, perusahaan
                    berkesempatan membangun opini publik dengan tujuan
                    menyampaikan informasi penting kepada masyarakat melalui
                    pemberitaan yang bernilai.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- End tab content item -->
        </div>
      </div>
    </section>
    <!-- /Features Section -->

    <!-- Features 2 Section -->
    <section id="benefits" class="features-2 section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Manfaat Menggunakan Jasa Press Release</h2>
        <p>
          Press release memegang peranan penting dalam strategi pemasaran yang
          efektif bagi perusahaan.
        </p>
      </div>
      <!-- End Section Title -->
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div v-if="manfaat != null">
              <div
                v-for="(item, index) in manfaat"
                :key="item.id"
                class="feature-item text-end mb-5"
                data-aos="fade-right"
                :data-aos-delay="200 + index * 100"
              >
                <div
                  class="d-flex align-items-center justify-content-end gap-4"
                >
                  <div class="feature-content">
                    <h3>{{ item.header }}</h3>
                    <div v-html="item.isi"></div>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-clipboard-data"></i>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="manfaat == null">
              <div
                class="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div
                  class="d-flex align-items-center justify-content-end gap-4"
                >
                  <div class="feature-content">
                    <h3>Social Proof yang Kuat</h3>
                    <p>
                      Press release tidak sekadar prestise. Aktivitas publikasi
                      dapat dijadikan kendaraan tercepat dalam membangun
                      kepercayaan publik terhadap bisnis perusahaan karena
                      status bisnis yang pernah diberitakan di media online.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-clipboard-data"></i>
                  </div>
                </div>
              </div>
              <!-- End .feature-item -->

              <div
                class="feature-item text-end mb-5"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div
                  class="d-flex align-items-center justify-content-end gap-4"
                >
                  <div class="feature-content">
                    <h3>Visibilitas Optimal</h3>
                    <p>
                      Distribusi aktivitas press release yang berkelanjutan
                      dapat membantu meningkatkan eksposur bisnis secara
                      signifikan.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-clipboard-data"></i>
                  </div>
                </div>
              </div>
              <!-- End .feature-item -->

              <div
                class="feature-item text-end"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div
                  class="d-flex align-items-center justify-content-end gap-4"
                >
                  <div class="feature-content">
                    <h3>Harga Lebih Terjangkau</h3>
                    <p>
                      Membangun otoritas melalui aktivitas publikasi menggunakan
                      jasa press release murah adalah strategi pemasaran terbaik
                      dibandingkan strategi pemasaran lainnya.
                    </p>
                  </div>
                  <div class="feature-icon flex-shrink-0">
                    <i class="bi bi-clipboard-data"></i>
                  </div>
                </div>
              </div>
              <!-- End .feature-item -->
            </div>
          </div>

          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-center">
              <img
                src="/assets/img/features-illustration-3.webp"
                alt="Feature 2"
                class="img-fluid"
              />
            </div>
          </div>
          <!-- End Phone Mockup -->
        </div>
      </div>
    </section>
    <!-- /Features 2 Section -->

    <!-- Services Section -->
    <section id="advantages" class="services section light-background">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Keunggulan Jasa Press Release Kami</h2>
        <p>Kami berkomitmen memberikan yang terbaik untuk klien kami.</p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-4" v-if="keunggulan != null">
          <div
            v-for="(item, index) in keunggulan"
            :key="item.id"
            class="col-lg-6"
            data-aos="fade-up"
            :data-aos-delay="100 + index * 100"
          >
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>{{ item.header }}</h3>
                <div v-html="item.isi"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-4" v-if="keunggulan == null">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Harga Transparan</h3>
                <p>
                  Kami bekerja sama dengan media nasional ternama dan
                  menyediakan informasi harga dari masing-masing media.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Transaksi Aman</h3>
                <p>
                  Kami bertanggung jawab penuh kepada klien yang telah
                  mengirimkan dana untuk keperluan publikasi di media online
                  nasional.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Termasuk Artikel</h3>
                <p>
                  Kami memastikan bahwa setiap layanan jasa press release murah
                  sudah dilengkapi dengan artikel minimal 500 kata, yang dikemas
                  sesuai dengan gaya masing-masing media.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Kualitas Terbaik</h3>
                <p>
                  Setiap media online dalam daftar kami rata-rata sudah
                  terafiliasi dengan Google News. Dampaknya, pemberitaan tentang
                  bisnis Anda mudah dicari melalui mesin pencari seperti Google.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Bebas Menentukan Media Online</h3>
                <p>
                  Pengguna layanan jasa press release media online bebas
                  menentukan media untuk keperluan publikasi artikel sesuai
                  dengan anggaran yang dimiliki.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="service-card d-flex">
              <div class="icon flex-shrink-0">
                <i class="bi bi-clipboard-data"></i>
              </div>
              <div>
                <h3>Proses Publikasi Cepat</h3>
                <p>
                  Setiap media online dalam daftar kami rata-rata sudah
                  terafiliasi dengan Google News. Dampaknya, pemberitaan tentang
                  bisnis Anda mudah dicari melalui mesin pencari seperti Google.
                </p>
              </div>
            </div>
          </div>
          <!-- End Service Card -->
        </div>
      </div>
    </section>
    <!-- /Services Section -->

    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 align-items-center justify-content-between">
          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="200">
            <span class="about-meta">ABOUT US</span>
            <div v-if="tentang_kami != null">
              <h2 class="about-title">{{ tentang_kami["header"] }}</h2>
              <div class="about-description" v-html="tentang_kami['isi']"></div>
            </div>
            <div v-if="tentang_kami == null">
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

          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="300">
            <div v-if="tentang_kami != null">
              <div class="row text-center">
                <div class="col-xl-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">
                        <b>{{ tentang_kami["project_complete"] }}</b>
                      </h1>
                      <p class="card-text">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">
                        <b>{{ tentang_kami["happy_client"] }}</b>
                      </h1>
                      <p class="card-text">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-xl-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">
                        <b>{{ tentang_kami["awards_winning"] }}</b>
                      </h1>
                      <p class="card-text">Awards Winning</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title">
                        <b>{{ tentang_kami["success_rate"] }}</b>
                      </h1>
                      <p class="card-text">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="tentang_kami == null">
              <div class="row mb-4 text-center">
                <div class="col-xl-6">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title"><b>13K</b></h1>
                      <p class="card-text">Project Complete</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title"><b>12K</b></h1>
                      <p class="card-text">Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-xl-6">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title"><b>49+</b></h1>
                      <p class="card-text">Awards Winning</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="card">
                    <div class="card-body">
                      <h1 class="card-title"><b>98%</b></h1>
                      <p class="card-text">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->

    <!-- Pricing Section -->
    <section id="prices" class="pricing section light-background">
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
        <div class="row g-4 justify-content-center" v-if="harga != null">
          <!-- Basic Plan -->
          <div
            class="col-lg-4"
            v-for="(item, index) in harga"
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
                  v-for="(feature, idx) in parseIsiPaket(item.isi_paket)"
                  :key="idx"
                >
                  <i class="bi bi-check-circle-fill"></i>
                  {{ feature }}
                </li>
              </ul>

              <a href="#" class="btn btn-primary">
                Order
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row g-4 justify-content-center" v-if="harga == null">
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
    <section id="terms" class="features-cards section">
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
              <div v-if="syarat_ketentuan == null">
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

    <!-- Clients Section -->
    <section id="clients" class="clients section light-background">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="swiper init-swiper">
          <div class="swiper-wrapper align-items-center">
            <div
              v-if="media_partner != null"
              v-for="item in media_partner"
              :key="item.id"
              class="swiper-slide"
            >
              <img
                :src="getImageUrl(item.logo)"
                class="img-fluid"
                :alt="item.nama"
              />
            </div>
            <!-- Default content for when media_partner is not ready -->
            <div v-if="media_partner == null" class="swiper-slide">
              <img
                src="https://via.placeholder.com/150"
                class="img-fluid"
                alt="Default Logo"
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
    <!-- /Clients Section -->

    <!-- Features 3 Section -->
    <section id="order" class="features-3 section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Cara Order Layanan di Kyu Media</h2>
      </div>
      <!-- End Section Title -->
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center">
          <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="text-center">
              <img
                src="/assets/img/features-illustration-2.webp"
                alt="Feature 2"
                class="img-fluid"
              />
            </div>
          </div>
          <!-- End Phone Mockup -->
          <div class="col-lg-6">
            <div
              class="feature-item mb-5"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div
                class="card mb-3"
                style="
                  background-color: color-mix(
                    in srgb,
                    var(--accent-color),
                    transparent 95%
                  );
                "
              >
                <div>
                  <div class="card-body" v-if="cara_order != null">
                    <div class="card-text">
                      <div v-for="item in cara_order" :key="item.id">
                        <b>{{ item.header }}</b
                        ><br />
                        <span v-html="item.isi"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="cara_order == null">
                  <div class="card-body">
                    <div class="card-text">
                      <b>1. Konsultasi</b><br />
                      Konsultasikan kebutuhan Anda agar kami dapat memberikan
                      layanan yang tepat sesuai dengan anggaran Anda.<br /><br />

                      <b>2. Pengiriman Invoice</b><br />
                      Anda akan menerima invoice dari tim Kyu Media.<br /><br />

                      <b>3. Pembayaran</b><br />
                      Lakukan pembayaran sesuai layanan yang disepakati dalam
                      waktu 1x24 jam setelah invoice dikirimkan.<br /><br />

                      <b>4. Proses Pengerjaan</b><br />
                      Setelah pembayaran diterima oleh bagian keuangan kami,
                      layanan yang Anda pilih akan mulai dikerjakan sehari
                      setelahnya.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End .feature-item -->
          </div>
        </div>
      </div>
    </section>
    <!-- /Features 3 Section -->

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
            <div v-if="faq == null">
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
              PublikaLabs merupakan perusahaan media agensi yang melayani
              strategi pengelolaan konten artikel dan audio visual untuk
              mendorong pertumbuhan bisnis.
            </p>
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
            <li><a href="#home">Home</a></li>
            <li><a href="#info">Info</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#advantages">Advantages</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#prices">Prices</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Our Services</h4>
          <div v-if="layanan != null">
            <ul>
              <li v-for="item in layanan" :key="item.id">
                <a href="#">{{ item.layanan }}</a>
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
import axios from "axios";
import Swal from "sweetalert2";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  data() {
    return {
      activeFaqIndex: null, // Track the currently active FAQ
      beranda: [],
      info: [],
      manfaat: [],
      keunggulan: [],
      tentang_kami: [],
      harga: [],
      syarat_ketentuan: [],
      media_partner: [],
      cara_order: [],
      faq: [],
      layanan: [],
      kontak: [],
      // ready: false,
    };
  },
  methods: {
    toggleFaq(index) {
      this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
    },
    parseIsiPaket(isiPaketHTML) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(isiPaketHTML, "text/html");
      const items = doc.querySelectorAll("li");
      return Array.from(items).map((li) => li.textContent.trim());
    },
    async fetchData() {
      // this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/all/list`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.beranda = response.data.data.beranda; // Update the dataList with data from the server
        this.info = response.data.data.info; // Update the dataList with data from the server
        this.manfaat = response.data.data.manfaat; // Update the dataList with data from the server
        this.keunggulan = response.data.data.keunggulan; // Update the dataList with data from the server
        this.tentang_kami = response.data.data.tentang_kami; // Update the dataList with data from the server
        this.harga = response.data.data.harga; // Update the dataList with data from the server
        this.syarat_ketentuan = response.data.data.syarat_ketentuan; // Update the dataList with data from the server
        this.media_partner = response.data.data.media_partner; // Update the dataList with data from the server
        this.cara_order = response.data.data.cara_order; // Update the dataList with data from the server
        this.faq = response.data.data.faq; // Update the dataList with data from the server
        this.layanan = response.data.data.layanan; // Update the dataList with data from the server
        this.kontak = response.data.data.kontak; // Update the dataList with data from the server
        // console.log(this.beranda);
        // console.log(this.info);
        // console.log(this.manfaat);
        // console.log(this.keunggulan);
        // console.log(this.tentang_kami);
        // console.log(this.harga);
        // console.log(this.syarat_ketentuan);
        // console.log(this.media_partner);
        // console.log(this.cara_order);
        // console.log(this.faq);
        // console.log(this.layanan);
        // console.log(this.kontak);
        // this.ready = true;
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
  setup() {
    const links = ref([
      { id: "home", name: "Home" },
      { id: "info", name: "Info" },
      { id: "benefits", name: "Benefits" },
      { id: "advantages", name: "Advantages" },
      { id: "about", name: "About" },
      { id: "prices", name: "Prices" },
      { id: "terms", name: "Terms" },
      { id: "faq", name: "FAQ" },
    ]);

    const activeSection = ref("hero");

    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY + 200; // Offset to account for the fixed header

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          activeSection.value = sectionId;
        }
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", updateActiveSection);
      updateActiveSection(); // Call on load to set initial active state
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateActiveSection);
    });

    return {
      links,
      activeSection,
    };
  },
  mounted() {
    const swiperConfig = {
      loop: false,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 40 },
        480: { slidesPerView: 3, spaceBetween: 60 },
        640: { slidesPerView: 4, spaceBetween: 80 },
        992: { slidesPerView: 6, spaceBetween: 120 },
      },
    };

    new Swiper(".init-swiper", swiperConfig);
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.nav-link.active {
  font-weight: bold;
  color: #ee0405 !important;
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