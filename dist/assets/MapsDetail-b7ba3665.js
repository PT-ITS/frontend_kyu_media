import{_ as g,b as d,f as p,g as a,l as k,j as i,v as c,D as _,E as b,c as w,A as v,F as D,z as K,t as l,B,s as S,x as N,y as T,L as u}from"./index-ff3a5314.js";import{P as f,D as j}from"./jquery.dataTables-5bb2cc9b.js";import{a as y}from"./axios-a342f982.js";import{S as r}from"./sweetalert2.all-ba5903e9.js";import"./leaflet.curve-0e7c6766.js";const n=s=>(N("data-v-af444ccd"),s=s(),T(),s),C={class:"modal fade",id:"updateModal",tabindex:"-1",role:"dialog","aria-labelledby":"updateModalLabel","aria-hidden":"true"},M={class:"modal-dialog",role:"document"},L={class:"modal-content"},V=n(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"updateModalLabel"}," Update Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),A={class:"modal-body"},I={class:"mb-3"},U=n(()=>a("label",{for:"namaLengkap",class:"form-label"},"Nama Lengkap",-1)),P={class:"mb-3"},z=n(()=>a("label",{for:"pendidikan",class:"form-label"},"Pendidikan",-1)),E={class:"row"},J={class:"col-sm-6"},W={class:"mb-3"},q=n(()=>a("label",{for:"kelamin",class:"form-label"},"Jenis Kelamin",-1)),H=n(()=>a("option",{value:"1"},"Laki-laki",-1)),F=n(()=>a("option",{value:"0"},"Perempuan",-1)),O=[H,F],R={class:"col-sm-6"},G={class:"mb-3"},Q=n(()=>a("label",{for:"sertifikasi",class:"form-label"},"Sertifikasi",-1)),X=n(()=>a("option",{value:"1"},"Tersertifikasi",-1)),Y=n(()=>a("option",{value:"0"},"Belum Tersertifikasi",-1)),Z=[X,Y],x={class:"mb-3"},aa=n(()=>a("label",{for:"jabatan",class:"form-label"},"Jabatan",-1)),ea={class:"mb-3"},ta=n(()=>a("label",{for:"alamat",class:"form-label"},"Alamat",-1)),sa={class:"mb-3"},oa=n(()=>a("label",{class:"form-label"},"Kewarganegaraan",-1)),na={class:"form-check"},ia=n(()=>a("label",{class:"form-check-label",for:"warganegara1"},"WNI",-1)),la={class:"form-check"},ra=n(()=>a("label",{class:"form-check-label",for:"warganegara2"},"WNA",-1)),da={class:"modal-footer"},ca=n(()=>a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1)),pa={class:"table-responsive"},ma=n(()=>a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Aksi"),a("th",{scope:"col"},"Nama"),a("th",{scope:"col"},"Jabatan"),a("th",{scope:"col"},"Alamat"),a("th",{scope:"col"},"Jenis Kelamin"),a("th",{scope:"col"},"Kewarganegaraan"),a("th",{scope:"col"},"Sertifikasi")])],-1)),ua={scope:"row"},ha={class:"btn-group",role:"group"},_a=["onClick"],ba=n(()=>a("i",{class:"bi bi-pencil-square"},null,-1)),fa=[ba],ya=["onClick"],ga=n(()=>a("i",{class:"bi bi-trash3"},null,-1)),ka=[ga],wa={props:{ready:{type:Boolean,required:!0},karyawanList:{type:Array,default:()=>[]}},data(){return{selectedData:{namaKaryawan:"",nikKaryawan:"",pendidikanKaryawan:"",jenisKelamin:"",sertifikasiKaryawan:"",jabatanKaryawan:"",alamatKaryawan:"",wargaNegara:""}}},methods:{selectData(s){this.selectedData={...s}},async simpanData(){try{const s=await y.post(`https://api.surveiwisatadki.com/api/karyawan/update-karyawan/${this.selectedData.id}`,this.selectedData,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log(s.data),r.fire("Success","Data karyawan berhasil diperbarui!","success"),this.$emit("updateData"),$("#updateModal").modal("hide")}catch(s){console.error(s),r.fire("Error","Terjadi kesalahan saat menyimpan data.","error")}},konfirmasiHapus(s){r.fire({title:"Konfirmasi Penghapusan",text:`Apakah Anda yakin ingin menghapus karyawan ${s.namaKaryawan}?`,icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(e=>{e.isConfirmed&&this.hapusData(s)})},async hapusData(s){try{const e=await y.delete(`https://api.surveiwisatadki.com/api/karyawan/delete-karyawan/${s.id}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log(e.data),r.fire("Success","Data karyawan berhasil dihapus!","success"),this.$emit("updateData")}catch(e){console.error(e),r.fire("Error","Terjadi kesalahan saat menghapus data.","error")}}}},va=Object.assign(wa,{__name:"TabelKaryawanDetail",setup(s){return f.use(j),(e,o)=>(d(),p("div",null,[a("div",C,[a("div",M,[a("div",L,[V,a("div",A,[a("form",{onSubmit:o[8]||(o[8]=k((...t)=>e.simpanData&&e.simpanData(...t),["prevent"]))},[a("div",I,[U,i(a("input",{type:"text",class:"form-control",id:"namaLengkap","onUpdate:modelValue":o[0]||(o[0]=t=>e.selectedData.namaKaryawan=t)},null,512),[[c,e.selectedData.namaKaryawan]])]),a("div",P,[z,i(a("input",{type:"text",class:"form-control",id:"pendidikan","onUpdate:modelValue":o[1]||(o[1]=t=>e.selectedData.pendidikanKaryawan=t)},null,512),[[c,e.selectedData.pendidikanKaryawan]])]),a("div",E,[a("div",J,[a("div",W,[q,i(a("select",{class:"form-select",id:"kelamin","onUpdate:modelValue":o[2]||(o[2]=t=>e.selectedData.jenisKelamin=t)},O,512),[[_,e.selectedData.jenisKelamin]])])]),a("div",R,[a("div",G,[Q,i(a("select",{class:"form-select",id:"sertifikasi","onUpdate:modelValue":o[3]||(o[3]=t=>e.selectedData.sertifikasiKaryawan=t)},Z,512),[[_,e.selectedData.sertifikasiKaryawan]])])])]),a("div",x,[aa,i(a("input",{type:"text",class:"form-control",id:"jabatan","onUpdate:modelValue":o[4]||(o[4]=t=>e.selectedData.jabatanKaryawan=t)},null,512),[[c,e.selectedData.jabatanKaryawan]])]),a("div",ea,[ta,i(a("textarea",{class:"form-control",id:"alamat",rows:"3","onUpdate:modelValue":o[5]||(o[5]=t=>e.selectedData.alamatKaryawan=t)},null,512),[[c,e.selectedData.alamatKaryawan]])]),a("div",sa,[oa,a("div",na,[i(a("input",{class:"form-check-input",type:"radio",id:"warganegara1",value:"WNI","onUpdate:modelValue":o[6]||(o[6]=t=>e.selectedData.wargaNegara=t)},null,512),[[b,e.selectedData.wargaNegara]]),ia]),a("div",la,[i(a("input",{class:"form-check-input",type:"radio",id:"warganegara2",value:"WNA","onUpdate:modelValue":o[7]||(o[7]=t=>e.selectedData.wargaNegara=t)},null,512),[[b,e.selectedData.wargaNegara]]),ra])])],32)]),a("div",da,[ca,a("button",{type:"button",class:"btn blueButton",onClick:o[9]||(o[9]=(...t)=>e.simpanData&&e.simpanData(...t))}," Simpan ")])])])]),a("div",pa,[s.ready?(d(),w(B(f),{key:0,class:"table"},{default:v(()=>[ma,a("tbody",null,[(d(!0),p(D,null,K(s.karyawanList,(t,m)=>(d(),p("tr",{key:m},[a("th",ua,l(m+1),1),a("td",null,[a("div",ha,[a("button",{type:"button",class:"btn btn-warning",onClick:h=>e.selectData(t),"data-toggle":"modal","data-target":"#updateModal"},fa,8,_a),a("button",{type:"button",class:"btn btn-danger",onClick:h=>e.konfirmasiHapus(t)},ka,8,ya)])]),a("td",null,l(t.namaKaryawan),1),a("td",null,l(t.jabatanKaryawan),1),a("td",null,l(t.alamatKaryawan),1),a("td",null,l(t.jenisKelamin==="1"?"Laki-laki":"Perempuan"),1),a("td",null,l(t.wargaNegara),1),a("td",null,l(t.sertifikasiKaryawan==="1"?"Iya":"Tidak"),1)]))),128))])]),_:1})):S("",!0)])]))}}),Ca=g(va,[["__scopeId","data-v-af444ccd"]]);const Da={name:"LeafletMap",props:{coordinates:{type:String,required:!0}},data(){return{map:null,marker:null}},mounted(){this.map=u.map("mapContainerDetail"),u.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map);const[s,e]=this.coordinates.split(",").map(Number);this.map.setView([s,e],13),this.marker=u.marker([s,e]).addTo(this.map)},beforeUnmount(){this.map&&this.map.remove()}},Ka={id:"mapContainerDetail"};function Ba(s,e,o,t,m,h){return d(),p("div",Ka)}const Ma=g(Da,[["render",Ba],["__scopeId","data-v-045a855a"]]);export{Ma as M,Ca as T};
