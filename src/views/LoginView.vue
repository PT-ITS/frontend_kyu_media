<script setup>
import Captcha from "../components/Captcha.vue";
</script>
<template>
  <div class="login-page">
    <div class="login-card">
      <img src="/img/logo.png" class="mb-3" alt="Logo" style="width: 200px" />
      <form @submit.prevent="login">
        <div class="input-group">
          <div class="row">
            <label for="email">Email</label>
            <div class="col-12">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Masukkan Email"
                v-model="form.email"
              />
            </div>
          </div>
        </div>
        <div class="input-group">
          <!-- <label for="password">Password</label>
          <input type="password" id="password" v-model="password" /> -->
          <div class="row">
            <label for="password">Password</label>
            <div class="col-9">
              <input
                :type="showPassword ? 'text' : 'password'"
                class="form-control"
                id="exampleInputPassword"
                placeholder="Masukkan Password"
                v-model="form.password"
              />
            </div>
            <div class="col">
              <i
                class="bi bi-eye-slash-fill btn btn-dark"
                @click="togglePasswordVisibility"
                v-if="!showPassword"
              ></i>
              <i
                class="bi bi-eye-fill btn btn-dark"
                @click="togglePasswordVisibility"
                v-if="showPassword"
              ></i>
            </div>
          </div>
        </div>
        <div class="form-group d-flex">
          <div class="custom-control custom-checkbox small">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck"
              v-model="checked"
            />
            <label class="custom-control-label" for="customCheck"
              >Ingat Saya</label
            >
          </div>
        </div>

        <div class="confirmHuman text-white" v-if="captchaValidate === false">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/checked.png"
            alt="checked"
          />
          You are human
        </div>

        <Captcha @emitCaptcha="captchaCode" v-if="captchaValidate === true" />
        <div></div>
        <button class="btn btn-dark" type="submit" :disabled="captchaValidate">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      checked: false,
      captchaValidate: true,
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    captchaCode(data) {
      this.captchaValidate = data;
    },
    login() {
      const formData = new FormData();
      formData.append("email", this.form.email);
      formData.append("password", this.form.password);

      axios
        .post(`${import.meta.env.VITE_API_ENDPOINT}/auth/login`, formData)
        .then((response) => {
          if (this.checked === true) {
            const login = JSON.stringify(this.form);
            localStorage.setItem("login", login);
          } else {
            const login = localStorage.getItem("login");
            if (login) {
              localStorage.removeItem("login");
            }
          }

          const token = response.data.access_token;
          sessionStorage.setItem("token", token);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          console.error(error);
          this.captchaValidate = true;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login gagal. Periksa kembali email dan password Anda.",
          });
        });
    },
  },
  created() {
    const login = localStorage.getItem("login");
    if (login) {
      this.form = JSON.parse(login);
      this.checked = true;
    }

    const token = sessionStorage.getItem("token"); // Ambil token dari local storage
    if (token) {
      this.$router.push("/dashboard");
    } else {
      this.$router.push("/login"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>

<style scoped>
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom right, #ee0405, #ffffff);
}

.login-card {
  width: 350px;
  padding: 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25); /* Transparansi */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px); /* Efek blur ala glassmorphism */
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-align: center;
}

h4 {
  color: #fff;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
  font-size: 10pt;
}

label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
}
</style>
