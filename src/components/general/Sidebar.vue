<template>
  <!-- Sidebar -->
  <ul
    class="navbar-nav bg-custom sidebar sidebar-dark accordion"
    id="accordionSidebar"
    :class="{ toggled: sidebarToggled }"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="#"
    >
      <div class="sidebar-brand-text ms-1" style="margin-top: 10px">
        <img src="/img/logo_white.png" alt="Logo" style="width: 180px" />
      </div>
    </a>

    <!-- Nav Item - Halaman Utama -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/dashboard"
        active-class="font-weight-bold"
      >
        <i class="bi bi-columns-gap text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Dashboard</span>
      </router-link>
    </li>

    <!-- Nav Item - Beranda -->
    <!-- <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/beranda"
        active-class="font-weight-bold"
      >
        <i class="bi bi-house text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Beranda</span>
      </router-link>
    </li> -->

    <!-- Nav Item - Foto -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/foto"
        active-class="font-weight-bold"
      >
        <i class="bi bi-camera text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Foto</span>
      </router-link>
    </li>

    <!-- Nav Item - Info -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/info"
        active-class="font-weight-bold"
      >
        <i class="bi bi-info-circle text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Info</span>
      </router-link>
    </li>

    <!-- Nav Item - Manfaat -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/manfaat"
        active-class="font-weight-bold"
      >
        <i class="bi bi-file-text text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Manfaat</span>
      </router-link>
    </li>

    <!-- Nav Item - Keunggulan -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/keunggulan"
        active-class="font-weight-bold"
      >
        <i class="bi bi-file-text text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Keunggulan</span>
      </router-link>
    </li>

    <!-- Nav Item - Tentang Kami -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/tentang-kami"
        active-class="font-weight-bold"
      >
        <i class="bi bi-file-person text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Tentang Kami</span>
      </router-link>
    </li>

    <!-- Nav Item - Tentang Kami -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/harga"
        active-class="font-weight-bold"
      >
        <i class="bi bi-cash text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Harga</span>
      </router-link>
    </li>

    <!-- Nav Item - Syarat Ketentuan -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/syarat-ketentuan"
        active-class="font-weight-bold"
      >
        <i class="bi bi-card-checklist text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Syarat & Ketentuan</span>
      </router-link>
    </li>

    <!-- Nav Item - Syarat Ketentuan -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/syarat-ketentuan-dua"
        active-class="font-weight-bold"
      >
        <i class="bi bi-card-checklist text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Syarat & Ketentuan 2</span>
      </router-link>
    </li>

    <!-- Nav Item - Media Partner -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/media-partner"
        active-class="font-weight-bold"
      >
        <i class="bi bi-people text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Media Partner</span>
      </router-link>
    </li>

    <!-- Nav Item - Cara Order -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/cara-order"
        active-class="font-weight-bold"
      >
        <i class="bi bi-bag text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Cara Order</span>
      </router-link>
    </li>

    <!-- Nav Item - FAQ -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/faq"
        active-class="font-weight-bold"
      >
        <i class="bi bi-question-circle text-white fs-6 me-2"></i>
        <span class="text-white fs-6">FAQ</span>
      </router-link>
    </li>

    <!-- Nav Item - Layanan -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/layanan"
        active-class="font-weight-bold"
      >
        <i class="bi bi-card-list text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Layanan</span>
      </router-link>
    </li>

    <!-- Nav Item - Kontak -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/kontak"
        active-class="font-weight-bold"
      >
        <i class="bi bi-telephone text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Kontak</span>
      </router-link>
    </li>

    <!-- Nav Item - Blog -->
    <li class="nav-item">
      <router-link
        class="nav-link text-white"
        to="/crud-blog"
        active-class="font-weight-bold"
      >
        <i class="bi bi-newspaper text-white fs-6 me-2"></i>
        <span class="text-white fs-6">Blog</span>
      </router-link>
    </li>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  data() {
    return {
      sidebarToggled: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarToggled = !this.sidebarToggled;
    },
  },
};
</script>

<style scoped>
.bg-custom {
  background-color: rgba(238, 4, 5, 0.8);
}

a {
  text-decoration: none !important;
  color: #fff;
}

.sidebar-brand {
  background-color: rgba(
    50,
    115,
    113,
    0
  ); /* Menambahkan sedikit transparansi pada merek sidebar */
  padding: 10px;
}

.nav-item {
  background-color: rgba(
    53,
    130,
    126,
    0
  ); /* Menambahkan transparansi agar cocok dengan background gambar */

  margin: 5px 0;
}

.nav-link {
  display: flex;
  align-items: center;
}

.nav-link .bi {
  margin-right: 10px;
}

.nav-item:hover .nav-link {
  background-image: linear-gradient(to right, #ffffff2a, #ffffff28);
}

.btn-primary {
  background-color: rgba(75, 123, 251, 0.9) !important;
}
</style>
