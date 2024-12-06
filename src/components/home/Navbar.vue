<template>
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div
      class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between"
    >
      <!-- Logo -->
      <router-link
        to="/"
        class="logo d-flex align-items-center me-auto me-xl-0"
      >
        <img src="/img/logo.png" style="width: 150px" alt="Logo" />
      </router-link>

      <!-- Navbar -->
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
          <ul class="navbar-nav mr-auto">
            <!-- Home -->
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link"
                :class="{ active: isActive('/') }"
              >
                Home
              </router-link>
            </li>

            <!-- About Us -->
            <li class="nav-item">
              <router-link
                to="/about-us"
                class="nav-link"
                :class="{ active: isActive('/about-us') }"
              >
                About Us
              </router-link>
            </li>

            <!-- Services Dropdown -->
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                id="servicesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                <li v-for="service in layanan" :key="service.id">
                  <router-link :to="'/'" class="dropdown-item">
                    {{ service.header }}
                  </router-link>
                </li>
              </ul>
            </li>

            <!-- Syarat -->
            <li class="nav-item">
              <router-link
                to="/syarat"
                class="nav-link"
                :class="{ active: isActive('/syarat') }"
              >
                Syarat & Ketentuan
              </router-link>
            </li>

            <!-- Blog -->
            <li class="nav-item">
              <router-link
                to="/blog"
                class="nav-link"
                :class="{ active: isActive('/blog') }"
              >
                Blog
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <a class="btn-getstarted" href="#order"
        >Cara Order <i class="bi bi-arrow-up-right-circle-fill"></i
      ></a>
    </div>
  </header>
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
  },
  setup() {
    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return { isActive };
  },
};
</script>

<style>
.btn-getstarted {
  background: linear-gradient(
    to right,
    #ee0405,
    #ff7f00
  ) !important; /* Gradient from red to orange */
  color: #fff; /* Optional: Set text color */
  border: none; /* Optional: Remove border if needed */
  transition: background-color 0.3s ease; /* Optional: Add smooth transition */
}

.btn-getstarted:hover {
  background: linear-gradient(
    to right,
    #ff7f00,
    #ee0405
  ) !important; /* Reverse the gradient on hover */
}

.nav-link.active {
  font-weight: bold;
  color: #ee0405 !important;
}

.dropdown-item:focus,
.dropdown-item:hover {
  color: #ffffff;
  background-color: #ee0405;
}
</style>
  