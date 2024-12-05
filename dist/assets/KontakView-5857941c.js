import{r as u,b as i,c,d as a,m as p,n as v,f as k,k as w,C as D,D as C,p as m,v as b,F as _,h as U,e as B,t as g}from"./index-45f3a127.js";import{S,N as T,F as A}from"./Footer-21fbf2ec.js";import{a as h,S as O}from"./sweetalert2.all-dde62a0f.js";import{P as f,D as j}from"./jquery.dataTables-ed51dfb9.js";const x={id:"wrapper"},K={id:"content-wrapper",class:"d-flex flex-column"},N={id:"content"},L={class:"container-fluid my-4"},V={class:"row m-1"},E={class:"card p-3",style:{"border-radius":"25px"}},F=U('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">Kontak</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),I={class:"table-responsive"},z={key:0,class:"preloader"},P=a("thead",null,[a("tr",null,[a("th",{scope:"col",style:{width:"50px"}},"No"),a("th",{scope:"col"},"Aksi"),a("th",{scope:"col"},"Kontak")])],-1),M=["onClick"],q=a("i",{class:"bi bi-pencil-square"},null,-1),H=[q],J=["onClick"],W=a("i",{class:"bi bi-trash3-fill"},null,-1),G=[W],Q={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},R={class:"modal-dialog",role:"document"},X={class:"modal-content"},Y=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),Z={class:"modal-body"},aa={class:"form-group"},ta=a("label",{for:"kontak"},"Kontak",-1),ea={class:"modal-footer"},sa=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),oa={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},na={class:"modal-dialog",role:"document"},ra={class:"modal-content"},da=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),ia={class:"modal-body"},la={class:"form-group"},ca=a("label",{for:"kontak"},"Kontak",-1),ha={class:"modal-footer"},pa=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);f.use(j);const ua={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{kontak:""},dataUpdate:{id:"",kontak:""},ready:!1}},mounted(){},methods:{setDataUpdate(t,e){this.dataUpdate.id=t,this.dataUpdate.kontak=e},async sendUpdateData(){try{const t=new FormData;t.append("kontak",this.dataUpdate.kontak);const e=await h.post(`http://127.0.0.1:8000/api/kontak/update/${this.dataUpdate.id}`,t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.dataUpdate={id:"",kontak:""},this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const e=t.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in e)e.hasOwnProperty(d)&&(s+=`${e[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const t=new FormData;t.append("kontak",this.dataCreate.kontak);const e=await h.post("http://127.0.0.1:8000/api/kontak/create",t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.dataCreate={kontak:""},this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const e=t.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in e)e.hasOwnProperty(d)&&(s+=`${e[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async fetchData(){this.ready=!1;try{const t=await h.get("http://127.0.0.1:8000/api/kontak/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=t.data.data,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(t,e,s){this.$swal({title:t,text:e,icon:s}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(t,e,s){this.$swal({title:t,text:e,icon:s}).then(()=>{})},async deleteData(t){try{const e=await h.delete(`http://127.0.0.1:8000/api/kontak/delete/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(e){console.error(e),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(t,e){O.fire({title:`Apakah Anda yakin ingin menghapus data ${e}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(s=>{s.isConfirmed&&this.deleteData(t)})}},created(){const t=sessionStorage.getItem("token");if(t)try{const[e,s]=t.split("."),d=JSON.parse(atob(e)),n=atob(s),o=JSON.parse(atob(t.split(".")[1])).exp,l=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",l.toUTCString()),new Date>l?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(e){console.error("Error decoding token:",e),this.$router.push("/login")}else this.$router.push("/login")}},ga=Object.assign(ua,{__name:"KontakView",setup(t){const e=u(!1),s=u(""),d=()=>{e.value=!e.value,s.value=e.value?"toggled":""};return(n,r)=>(i(),c(_,null,[a("div",x,[p(S,{class:v(s.value)},null,8,["class"]),a("div",K,[a("div",N,[p(T,{onToggleSidebar:d}),a("div",L,[a("div",V,[a("div",E,[F,a("div",I,[n.ready?k("",!0):(i(),c("div",z)),n.ready?(i(),w(C(f),{key:1,class:"display table table-striped",options:n.tableOptions},{default:D(()=>[P,a("tbody",null,[(i(!0),c(_,null,B(n.dataList,(o,l)=>(i(),c("tr",{key:o.id},[a("td",null,g(l+1),1),a("td",null,[a("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:y=>n.setDataUpdate(o.id,o.kontak)},H,8,M),a("button",{class:"btn btn-danger me-1 mb-1",onClick:y=>n.konfirmasi(o.id,o.kontak)},G,8,J)]),a("td",null,g(o.kontak),1)]))),128))])]),_:1},8,["options"])):k("",!0)])])])])]),p(A)])]),a("div",Q,[a("div",R,[a("div",X,[Y,a("div",Z,[a("form",null,[a("div",aa,[ta,m(a("input",{type:"text",class:"form-control",id:"kontak","onUpdate:modelValue":r[0]||(r[0]=o=>n.dataCreate.kontak=o),placeholder:"Masukkan kontak",required:""},null,512),[[b,n.dataCreate.kontak]])])])]),a("div",ea,[sa,a("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=(...o)=>n.tambahData&&n.tambahData(...o))}," Kirim ")])])])]),a("div",oa,[a("div",na,[a("div",ra,[da,a("div",ia,[a("form",null,[a("div",la,[ca,m(a("input",{type:"text",class:"form-control",id:"kontak","onUpdate:modelValue":r[2]||(r[2]=o=>n.dataUpdate.kontak=o),required:""},null,512),[[b,n.dataUpdate.kontak]])])])]),a("div",ha,[pa,a("button",{type:"button",class:"btn btn-danger",onClick:r[3]||(r[3]=(...o)=>n.sendUpdateData&&n.sendUpdateData(...o))}," Update ")])])])])],64))}});export{ga as default};
