<script setup>
import Sidebar from "../../components/pusat/Sidebar.vue";
import Navbar from "../../components/pusat/Navbar.vue";
import Footer from "../../components/general/Footer.vue";
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
        <div class="container-fluid my-4">
          <!-- <h1 class="h3 mb-0 text-gray-800 text-center">Pengguna</h1> -->
          <div class="row m-1">
            <div class="card p-3" style="border-radius: 25px">
              <div class="row mb-3">
                <div class="col-6">
                  <div class="h5 font-weight-bold text-black">
                    Pengguna Pangkalan Udara
                  </div>
                </div>
                <div class="d-flex justify-content-end col-6">
                  <button
                    class="btn btn-primary me-2"
                    data-toggle="modal"
                    data-target="#addPengguna"
                  >
                    <i class="bi bi-plus"></i> Tambah
                  </button>
                </div>
                <div class="col-8"></div>
              </div>
              <div class="table-responsive">
                <div v-if="!ready" class="preloader"></div>
                <DataTable
                  class="display table table-striped"
                  v-if="ready"
                  :options="tableOptions"
                >
                  <thead>
                    <tr>
                      <th scope="col" style="width: 50px">No</th>
                      <th scope="col">Aksi</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Nama Satuan</th>
                      <th scope="col">Lokasi Satuan</th>
                      <th scope="col">Nama Kepala Satuan</th>
                      <th scope="col">Nama Admin</th>
                      <th scope="col">Jabatan Admin</th>
                      <th scope="col">No. HP Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in penggunaList" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <button
                          class="btn btn-warning me-1 mb-1"
                          data-toggle="modal"
                          data-target="#updatePengguna"
                          @click="
                            setDataUpdate(
                              item.id,
                              item.name,
                              item.email,
                              item.password,
                              item.nama_satuan,
                              item.lokasi_satuan,
                              item.nama_kepala_satuan,
                              item.nama_admin,
                              item.jabatan_admin,
                              item.hp_admin
                            )
                          "
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          class="btn btn-danger me-1 mb-1"
                          @click="konfirmasi(item.id, item.name)"
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.nama_satuan }}</td>
                      <td>{{ item.lokasi_satuan }}</td>
                      <td>{{ item.nama_kepala_satuan }}</td>
                      <td>{{ item.nama_admin }}</td>
                      <td>{{ item.jabatan_admin }}</td>
                      <td>{{ item.hp_admin }}</td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
          </div>
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

  <!-- add pengajuan -->
  <div
    class="modal fade"
    id="addPengguna"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addPenggunaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addPenggunaLabel">Tambah Pengguna</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Username</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="dataPengguna.name"
                placeholder="Masukkan username"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="dataPengguna.email"
                placeholder="Masukkan email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="dataPengguna.password"
                placeholder="Masukkan password"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_satuan">Nama Satuan</label>
              <input
                type="text"
                class="form-control"
                id="nama_satuan"
                v-model="dataPengguna.nama_satuan"
                placeholder="Masukkan nama satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="lokasi_satuan">Lokasi Satuan</label>
              <input
                type="text"
                class="form-control"
                id="lokasi_satuan"
                v-model="dataPengguna.lokasi_satuan"
                placeholder="Masukkan lokasi satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_kepala_satuan">Nama Kepala Satuan</label>
              <input
                type="text"
                class="form-control"
                id="nama_kepala_satuan"
                v-model="dataPengguna.nama_kepala_satuan"
                placeholder="Masukkan nama kepala satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_admin">Nama Admin</label>
              <input
                type="text"
                class="form-control"
                id="nama_admin"
                v-model="dataPengguna.nama_admin"
                placeholder="Masukkan nama admin"
                required
              />
            </div>
            <div class="form-group">
              <label for="jabatan_admin">Jabatan Admin</label>
              <input
                type="text"
                class="form-control"
                id="jabatan_admin"
                v-model="dataPengguna.jabatan_admin"
                placeholder="Masukkan jabatan admin"
                required
              />
            </div>
            <div class="form-group">
              <label for="hp_admin">No. HP Admin</label>
              <input
                type="text"
                class="form-control"
                id="hp_admin"
                v-model="dataPengguna.hp_admin"
                placeholder="Masukkan no. hp admin"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn btn-primary" @click="tambahPengguna">
            Kirim
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add pengajuan -->

  <!-- update pengajuan -->
  <div
    class="modal fade"
    id="updatePengguna"
    tabindex="-1"
    role="dialog"
    aria-labelledby="updatePenggunaLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updatePenggunaLabel">Update Pengguna</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="name">Username</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="updatePengguna.name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="updatePengguna.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="updatePengguna.password"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_satuan">Nama Satuan</label>
              <input
                type="text"
                class="form-control"
                id="nama_satuan"
                v-model="updatePengguna.nama_satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="lokasi_satuan">Lokasi Satuan</label>
              <input
                type="text"
                class="form-control"
                id="lokasi_satuan"
                v-model="updatePengguna.lokasi_satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_kepala_satuan">Nama Kepala Satuan</label>
              <input
                type="text"
                class="form-control"
                id="nama_kepala_satuan"
                v-model="updatePengguna.nama_kepala_satuan"
                required
              />
            </div>
            <div class="form-group">
              <label for="nama_admin">Nama Admin</label>
              <input
                type="text"
                class="form-control"
                id="nama_admin"
                v-model="updatePengguna.nama_admin"
                required
              />
            </div>
            <div class="form-group">
              <label for="jabatan_admin">Jabatan Admin</label>
              <input
                type="text"
                class="form-control"
                id="jabatan_admin"
                v-model="updatePengguna.jabatan_admin"
                required
              />
            </div>
            <div class="form-group">
              <label for="hp_admin">No. HP Admin</label>
              <input
                type="text"
                class="form-control"
                id="hp_admin"
                v-model="updatePengguna.hp_admin"
                required
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="sendUpdatePengguna"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- end update pengajuan -->
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import CryptoJS from "crypto-js";
import * as XLSX from "xlsx";
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);

export default {
  data() {
    return {
      penggunaList: [],
      tableOptions: {
        pagingType: "full_numbers", // Or "full_numbers", "simple_numbers", etc.
        // Other DataTables options
      },
      dataPengguna: {
        name: "",
        email: "",
        password: "",
        nama_satuan: "",
        lokasi_satuan: "",
        nama_kepala_satuan: "",
        nama_admin: "",
        jabatan_admin: "",
        hp_admin: "",
      },
      updatePengguna: {
        id: "",
        name: "",
        email: "",
        password: "",
        nama_satuan: "",
        lokasi_satuan: "",
        nama_kepala_satuan: "",
        nama_admin: "",
        jabatan_admin: "",
        hp_admin: "",
      },
      user_id: "",
      ready: false,
      remainingTime: "Loading",
    };
  },
  methods: {
    setDataUpdate(
      id,
      name,
      email,
      password,
      nama_satuan,
      lokasi_satuan,
      nama_kepala_satuan,
      nama_admin,
      jabatan_admin,
      hp_admin
    ) {
      this.updatePengguna.id = id;
      this.updatePengguna.name = name;
      this.updatePengguna.email = email;
      this.updatePengguna.password = password;
      this.updatePengguna.nama_satuan = nama_satuan;
      this.updatePengguna.lokasi_satuan = lokasi_satuan;
      this.updatePengguna.nama_kepala_satuan = nama_kepala_satuan;
      this.updatePengguna.nama_admin = nama_admin;
      this.updatePengguna.jabatan_admin = jabatan_admin;
      this.updatePengguna.hp_admin = hp_admin;
    },
    async sendUpdatePengguna() {
      try {
        // Get current date for the signature
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, "0");

        // Retrieve credentials from .env file
        const username = import.meta.env.VITE_USERNAME_AUTH;
        const password = import.meta.env.VITE_PASSWORD_AUTH;

        // Construct the signature format: year.username.month.password.day
        const signatureString = `${year}${username}${month}${password}${day}`;

        // Encrypt the signature string with SHA1
        const signatureHash = CryptoJS.SHA1(signatureString).toString();

        const formData = new FormData();
        formData.append("name", this.updatePengguna.name);
        formData.append("email", this.updatePengguna.email);
        formData.append("password", this.updatePengguna.password);
        formData.append("nama_satuan", this.updatePengguna.nama_satuan);
        formData.append("lokasi_satuan", this.updatePengguna.lokasi_satuan);
        formData.append(
          "nama_kepala_satuan",
          this.updatePengguna.nama_kepala_satuan
        );
        formData.append("nama_admin", this.updatePengguna.nama_admin);
        formData.append("jabatan_admin", this.updatePengguna.jabatan_admin);
        formData.append("hp_admin", this.updatePengguna.hp_admin);
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/admin-lanud/update/${
            this.updatePengguna.id
          }`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              signature: signatureHash,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.updatePengguna = {
          id: "",
          name: "",
          email: "",
          password: "",
          nama_satuan: "",
          lokasi_satuan: "",
          nama_kepala_satuan: "",
          nama_admin: "",
          jabatan_admin: "",
          hp_admin: "",
        }; // Clear input field after successful submission
        this.fetchPengguna(); // Reload the about data after adding a new one
        this.showAlert(
          "Berhasil!",
          "Data pengguna berhasil diupdate.",
          "success"
        );
      } catch (error) {
        console.error(error); // Log the error for debugging
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          // Handle validation errors
          const errors = error.response.data.errors;
          let errorMessage = "Terjadi kesalahan:\n";
          for (let field in errors) {
            if (errors.hasOwnProperty(field)) {
              errorMessage += `${errors[field].join(", ")}\n`; // Combine all messages for each field
            }
          }
          this.showError("Opps...", errorMessage, "error");
        } else {
          // Generic error handling if the response doesn't contain validation errors
          this.showError(
            "Opps...",
            "Terjadi kesalahan saat menambahkan data catpers.",
            "error"
          );
        }
      }
    },
    async tambahPengguna() {
      try {
        // Get current date for the signature
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, "0");

        // Retrieve credentials from .env file
        const username = import.meta.env.VITE_USERNAME_AUTH;
        const password = import.meta.env.VITE_PASSWORD_AUTH;

        // Construct the signature format: year.username.month.password.day
        const signatureString = `${year}${username}${month}${password}${day}`;

        // Encrypt the signature string with SHA1
        const signatureHash = CryptoJS.SHA1(signatureString).toString();

        const formData = new FormData();
        formData.append("name", this.dataPengguna.name);
        formData.append("email", this.dataPengguna.email);
        formData.append("password", this.dataPengguna.password);
        formData.append("nama_satuan", this.dataPengguna.nama_satuan);
        formData.append("lokasi_satuan", this.dataPengguna.lokasi_satuan);
        formData.append(
          "nama_kepala_satuan",
          this.dataPengguna.nama_kepala_satuan
        );
        formData.append("nama_admin", this.dataPengguna.nama_admin);
        formData.append("jabatan_admin", this.dataPengguna.jabatan_admin);
        formData.append("hp_admin", this.dataPengguna.hp_admin);
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/admin-lanud/input`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              signature: signatureHash,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.dataPengguna = {
          name: "",
          email: "",
          password: "",
          nama_satuan: "",
          lokasi_satuan: "",
          nama_kepala_satuan: "",
          nama_admin: "",
          jabatan_admin: "",
          hp_admin: "",
        }; // Clear input field after successful submission
        this.fetchPengguna(); // Reload the about data after adding a new one
        this.showAlert(
          "Berhasil!",
          "Data pengguna berhasil ditambahkan.",
          "success"
        );
      } catch (error) {
        console.error(error); // Log the error for debugging
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          // Handle validation errors
          const errors = error.response.data.errors;
          let errorMessage = "Terjadi kesalahan:\n";
          for (let field in errors) {
            if (errors.hasOwnProperty(field)) {
              errorMessage += `${errors[field].join(", ")}\n`; // Combine all messages for each field
            }
          }
          this.showError("Opps...", errorMessage, "error");
        } else {
          // Generic error handling if the response doesn't contain validation errors
          this.showError(
            "Opps...",
            "Terjadi kesalahan saat menambahkan data catpers.",
            "error"
          );
        }
      }
    },
    async fetchPengguna() {
      this.ready = false;
      try {
        // Get current date for the signature
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, "0");

        // Retrieve credentials from .env file
        const username = import.meta.env.VITE_USERNAME_AUTH;
        const password = import.meta.env.VITE_PASSWORD_AUTH;

        // Construct the signature format: year.username.month.password.day
        const signatureString = `${year}${username}${month}${password}${day}`;

        // Encrypt the signature string with SHA1
        const signatureHash = CryptoJS.SHA1(signatureString).toString();

        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/admin-lanud/list`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              signature: signatureHash,
            },
          }
        );
        this.penggunaList = response.data.data; // Update the penggunaList with data from the server
        this.ready = true;
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Opps...",
          "Terjadi kesalahan saat mengambil data pengguna.",
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
        $("#addPengguna").modal("hide");
        $("#updatePengguna").modal("hide");
      });
    },
    showError(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        // $("#addCatpers").modal("hide");
        // $("#updateCatpers").modal("hide");
        // $("#previewCatpers").modal("hide");
      });
    },
    async deletePengguna(id) {
      try {
        // Get current date for the signature
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, "0");

        // Retrieve credentials from .env file
        const username = import.meta.env.VITE_USERNAME_AUTH;
        const password = import.meta.env.VITE_PASSWORD_AUTH;

        // Construct the signature format: year.username.month.password.day
        const signatureString = `${year}${username}${month}${password}${day}`;

        // Encrypt the signature string with SHA1
        const signatureHash = CryptoJS.SHA1(signatureString).toString();

        const response = await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/admin-lanud/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              signature: signatureHash,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.fetchPengguna(); // Reload the misi data after adding a new one
        this.showAlert("Success", "Pengguna berhasil didelete", "success");
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Oops...",
          "Terjadi kesalahan saat mendelete pengguna",
          "error"
        );
      }
    },
    konfirmasi(id, name) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus pengguna dengan username ${name}?`,
        text: "Pengguna akan dihapus jika anda menekan tombol Hapus.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#858796",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deletePengguna(id);
        }
      });
    },
  },
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
          this.$router.push("/");
        } else {
          console.log("Aman");
        }
        const role = tokenPayload.role; // Ambil role pengguna dari payload
        this.user_id = tokenPayload.id;
        if (role !== "admin_pamsut") {
          this.$router.push("/unauthorized");
        } else if (!header || !signature) {
          this.$router.push("/");
        }
        // success
        this.fetchPengguna();
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
        this.$router.push("/"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
    }
  },
};
</script>


<style>
#content-wrapper {
  min-height: 780px !important;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.lightbox img {
  max-width: 90%;
  max-height: 90%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.btn-primary {
  background-color: rgba(75, 123, 251, 0.9) !important;
}

/* Style pagination buttons */
.dataTables_wrapper .dataTables_paginate .paginate_button {
  border-radius: 0.35rem;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0.1rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(75, 123, 251, 0.9);
  border-color: rgba(75, 123, 251, 0.9);
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #000;
  background-color: #fff;
  border-color: rgba(75, 123, 251, 0.9);
}
</style>
