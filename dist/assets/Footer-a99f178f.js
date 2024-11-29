import{a as d}from"./axios-a342f982.js";import{S as a}from"./sweetalert2.all-ba5903e9.js";import{_ as n,b as i,f as l,g as o,l as c,t as g,q as u}from"./index-ff3a5314.js";const V="/img/logo.png",m="/img/bagus.jpg",p={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:""}},methods:{sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){a.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(e=>{e.isConfirmed&&this.logout()})},logout(){const e=sessionStorage.getItem("token");if(!e){a.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}d.post("https://api.surveiwisatadki.com/api/auth/logout",null,{headers:{Authorization:"Bearer "+e}}).then(t=>{a.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(t=>{console.error(t),a.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){}},f={class:"navbar navbar-expand navbar-light topbar mb-4 static-top shadow"},_=o("i",{class:"fa fa-bars"},null,-1),h=[_],b={class:"navbar-nav ml-auto"},k=o("div",{class:"topbar-divider d-none d-sm-block"},null,-1),w={class:"nav-item dropdown no-arrow"},v={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},x={class:"mr-2 d-none d-lg-inline text-white small"},B=o("img",{src:m,alt:" gambarprofile",class:"img-profile rounded-circle"},null,-1),T={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},$=o("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1);function C(e,t,N,I,j,s){return i(),l("nav",f,[o("form",{class:"form-inline",onSubmit:t[1]||(t[1]=c(()=>{},["prevent"]))},[o("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-dark",onClick:t[0]||(t[0]=(...r)=>s.sidebarToggled&&s.sidebarToggled(...r))},h)],32),o("ul",b,[k,o("li",w,[o("a",v,[o("span",x,g(this.name),1),B]),o("div",T,[o("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:t[2]||(t[2]=r=>s.konfirmasi())},[$,u(" Logout ")])])])])])}const q=n(p,[["render",C]]),y={},S={class:"sticky-footer"},L=o("div",{class:"container my-auto"},[o("div",{class:"copyright text-center my-auto"},[o("strong",null,"Copyright © Kemenparekraf DKI Jakarta 2024")])],-1),A=[L];function D(e,t){return i(),l("footer",S,A)}const z=n(y,[["render",D]]);export{z as F,q as N,V as _};
