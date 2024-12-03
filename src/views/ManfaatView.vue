<script setup>
import Sidebar from "../components/general/Sidebar.vue";
import Navbar from "../components/general/Navbar.vue";
import Footer from "../components/general/Footer.vue";
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
          <!-- <h1 class="h3 mb-0 text-gray-800 text-center">Data</h1> -->
          <div class="row m-1">
            <div class="card p-3" style="border-radius: 25px">
              <div class="row mb-3">
                <div class="col-6">
                  <div class="h5 font-weight-bold text-black">Manfaat</div>
                </div>
                <div class="d-flex justify-content-end col-6">
                  <button
                    class="btn btn-primary me-2"
                    data-toggle="modal"
                    data-target="#addData"
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
                      <th scope="col">Header</th>
                      <th scope="col">Isi</th>
                      <!-- <th scope="col">Footer</th> -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in dataList" :key="item.id">
                      <td>{{ index + 1 }}</td>
                      <td>
                        <button
                          class="btn btn-warning me-1 mb-1"
                          data-toggle="modal"
                          data-target="#dataUpdate"
                          @click="
                            setDataUpdate(
                              item.id,
                              item.header,
                              item.isi
                              // item.footer
                            )
                          "
                        >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button
                          class="btn btn-danger me-1 mb-1"
                          @click="konfirmasi(item.id, item.header)"
                        >
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                      <td>{{ item.header }}</td>
                      <td><div v-html="item.isi"></div></td>
                      <!-- <td>{{ item.footer }}</td> -->
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
    id="addData"
    tabindex="-1"
    role="dialog"
    aria-labelledby="addDataLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addDataLabel">Tambah Data</h5>
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
              <label for="header">Header</label>
              <input
                type="text"
                class="form-control"
                id="header"
                v-model="dataCreate.header"
                placeholder="Masukkan header"
                required
              />
            </div>
            <div class="form-group">
              <label for="isi">Isi</label>
              <div id="isi_create_editor" style="height: 200px"></div>
            </div>
            <!-- <div class="form-group">
              <label for="footer">Footer</label>
              <input
                type="text"
                class="form-control"
                id="footer"
                v-model="dataCreate.footer"
                placeholder="Masukkan footer"
                required
              />
            </div> -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn btn-primary" @click="tambahData">
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
    id="dataUpdate"
    tabindex="-1"
    role="dialog"
    aria-labelledby="dataUpdateLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="dataUpdateLabel">Update Data</h5>
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
              <label for="header">Header</label>
              <input
                type="text"
                class="form-control"
                id="header"
                v-model="dataUpdate.header"
                required
              />
            </div>
            <div class="form-group">
              <label for="isi">Isi</label>
              <div id="isi_update_editor" style="height: 200px"></div>
            </div>
            <!-- <div class="form-group">
              <label for="footer">Footer</label>
              <input
                type="text"
                class="form-control"
                id="footer"
                v-model="dataUpdate.footer"
                required
              />
            </div> -->
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Batal
          </button>
          <button type="button" class="btn btn-danger" @click="sendUpdateData">
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
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
DataTable.use(DataTablesCore);
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  data() {
    return {
      dataList: [],
      tableOptions: {
        pagingType: "full_numbers", // Or "full_numbers", "simple_numbers", etc.
        // Other DataTables options
      },
      dataCreate: {
        header: "",
        isi: "",
        // footer: "",
      },
      dataUpdate: {
        id: "",
        header: "",
        isi: "",
        // footer: "",
      },
      ready: false,
    };
  },
  mounted() {
    // Create
    this.quillCreate = new Quill("#isi_create_editor", {
      theme: "snow",
      placeholder: "Masukkan isi",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          ["bold", "italic", "underline"],
          ["link"],
          ["blockquote", "code-block"],
          [{ color: [] }, { background: [] }],
          // ["image"],
        ],
      },
    });

    this.quillCreate.on("text-change", () => {
      this.dataCreate.isi = this.quillCreate.root.innerHTML;
    });

    // Update
    this.quillUpdate = new Quill("#isi_update_editor", {
      theme: "snow",
      placeholder: "Masukkan isi",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          ["bold", "italic", "underline"],
          ["link"],
          ["blockquote", "code-block"],
          [{ color: [] }, { background: [] }],
          // ["image"],
        ],
      },
    });

    this.quillUpdate.on("text-change", () => {
      this.dataUpdate.isi = this.quillUpdate.root.innerHTML;
    });
  },
  methods: {
    setDataUpdate(
      id,
      header,
      isi
      // footer
    ) {
      this.dataUpdate.id = id;
      this.dataUpdate.header = header;
      this.dataUpdate.isi = isi;
      this.quillUpdate.root.innerHTML = this.dataUpdate.isi;
      // this.dataUpdate.footer = footer;
    },
    async sendUpdateData() {
      try {
        const formData = new FormData();
        formData.append("header", this.dataUpdate.header);
        formData.append("isi", this.dataUpdate.isi);
        // formData.append("footer", this.dataUpdate.footer);
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/manfaat/update/${
            this.dataUpdate.id
          }`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.dataUpdate = {
          id: "",
          header: "",
          isi: "",
          // footer: "",
        }; // Clear input field after successful submission
        this.quillUpdate.setContents([]);
        this.fetchData(); // Reload the about data after adding a new one
        this.showAlert("Berhasil!", "Data berhasil diupdate.", "success");
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
            "Terjadi kesalahan saat menambahkan data.",
            "error"
          );
        }
      }
    },
    async tambahData() {
      try {
        const formData = new FormData();
        formData.append("header", this.dataCreate.header);
        formData.append("isi", this.dataCreate.isi);
        // formData.append("footer", this.dataCreate.footer);
        const response = await axios.post(
          `${import.meta.env.VITE_API_ENDPOINT}/manfaat/create`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.dataCreate = {
          header: "",
          isi: "",
          // footer: "",
        }; // Clear input field after successful submission
        this.quillCreate.setContents([]);
        this.fetchData(); // Reload the about data after adding a new one
        this.showAlert("Berhasil!", "Data berhasil ditambahkan.", "success");
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
            "Terjadi kesalahan saat menambahkan data.",
            "error"
          );
        }
      }
    },
    async fetchData() {
      this.ready = false;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_ENDPOINT}/manfaat/list`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        this.dataList = response.data.data; // Update the dataList with data from the server
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
    showError(title, text, icon) {
      this.$swal({
        title: title,
        text: text,
        icon: icon, // Atau gunakan icon lain sesuai kebutuhan
      }).then(() => {
        // $("#addData").modal("hide");
      });
    },
    async deleteData(id) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_ENDPOINT}/manfaat/delete/${id}`,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data); // Handle response from server
        this.fetchData(); // Reload the misi data after adding a new one
        this.showAlert("Success", "Data berhasil didelete", "success");
      } catch (error) {
        console.error(error); // Handle error if any
        this.showAlert(
          "Oops...",
          "Terjadi kesalahan saat mendelete data",
          "error"
        );
      }
    },
    konfirmasi(id, header) {
      Swal.fire({
        title: `Apakah Anda yakin ingin menghapus data ${header}?`,
        text: "Data akan dihapus jika anda menekan tombol Hapus.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ee0405",
        cancelButtonColor: "#858796",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteData(id);
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
          this.$router.push("/login");
        } else {
          console.log("Aman");
        }
        // success
        this.fetchData();
        // akhir
      } catch (error) {
        console.error("Error decoding token:", error);
        this.$router.push("/login"); // Tindakan jika terjadi kesalahan dekode
      }
    } else {
      this.$router.push("/login"); // Tindakan jika token tidak ada (pengguna belum terautentikasi)
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
  background-color: rgba(238, 4, 5, 0.9) !important;
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
  background-color: rgba(238, 4, 5, 0.9);
  border-color: rgba(238, 4, 5, 0.9);
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover {
  color: #000;
  background-color: #fff;
  border-color: rgba(238, 4, 5, 0.9);
}
</style>
