import{r as u,b as n,c,d as a,m as p,n as w,f as m,k as D,C as U,D as C,p as b,v as _,F as f,h as T,e as B,t as g}from"./index-45f3a127.js";import{S,N as q,F as x}from"./Footer-21fbf2ec.js";import{a as h,S as A}from"./sweetalert2.all-dde62a0f.js";import{P as v,D as M}from"./jquery.dataTables-ed51dfb9.js";import{Q as k}from"./quill.snow-f8fdad36.js";const L={id:"wrapper"},O={id:"content-wrapper",class:"d-flex flex-column"},j={id:"content"},H={class:"container-fluid my-4"},I={class:"row m-1"},N={class:"card p-3",style:{"border-radius":"25px"}},V=T('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">Manfaat</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),E={class:"table-responsive"},F={key:0,class:"preloader"},z=a("thead",null,[a("tr",null,[a("th",{scope:"col",style:{width:"50px"}},"No"),a("th",{scope:"col"},"Aksi"),a("th",{scope:"col"},"Header"),a("th",{scope:"col"},"Isi")])],-1),P=["onClick"],K=a("i",{class:"bi bi-pencil-square"},null,-1),J=[K],Q=["onClick"],W=a("i",{class:"bi bi-trash3-fill"},null,-1),G=[W],R=["innerHTML"],X={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},aa=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),ea={class:"modal-body"},ta={class:"form-group"},sa=a("label",{for:"header"},"Header",-1),oa=a("div",{class:"form-group"},[a("label",{for:"isi"},"Isi"),a("div",{id:"isi_create_editor",style:{height:"200px"}})],-1),ia={class:"modal-footer"},ra=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),da={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},na={class:"modal-dialog",role:"document"},la={class:"modal-content"},ca=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),ha={class:"modal-body"},pa={class:"form-group"},ua=a("label",{for:"header"},"Header",-1),ma=a("div",{class:"form-group"},[a("label",{for:"isi"},"Isi"),a("div",{id:"isi_update_editor",style:{height:"200px"}})],-1),ba={class:"modal-footer"},_a=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);v.use(M);const fa={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{header:"",isi:""},dataUpdate:{id:"",header:"",isi:""},ready:!1}},mounted(){this.quillCreate=new k("#isi_create_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillCreate.on("text-change",()=>{this.dataCreate.isi=this.quillCreate.root.innerHTML}),this.quillUpdate=new k("#isi_update_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillUpdate.on("text-change",()=>{this.dataUpdate.isi=this.quillUpdate.root.innerHTML})},methods:{setDataUpdate(e,t,s){this.dataUpdate.id=e,this.dataUpdate.header=t,this.dataUpdate.isi=s,this.quillUpdate.root.innerHTML=this.dataUpdate.isi},async sendUpdateData(){try{const e=new FormData;e.append("header",this.dataUpdate.header),e.append("isi",this.dataUpdate.isi);const t=await h.post(`http://127.0.0.1:8000/api/manfaat/update/${this.dataUpdate.id}`,e,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataUpdate={id:"",header:"",isi:""},this.quillUpdate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(e){if(console.error(e),e.response&&e.response.data&&e.response.data.errors){const t=e.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in t)t.hasOwnProperty(d)&&(s+=`${t[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const e=new FormData;e.append("header",this.dataCreate.header),e.append("isi",this.dataCreate.isi);const t=await h.post("http://127.0.0.1:8000/api/manfaat/create",e,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataCreate={header:"",isi:""},this.quillCreate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(e){if(console.error(e),e.response&&e.response.data&&e.response.data.errors){const t=e.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in t)t.hasOwnProperty(d)&&(s+=`${t[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async fetchData(){this.ready=!1;try{const e=await h.get("http://127.0.0.1:8000/api/manfaat/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=e.data.data,this.ready=!0}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(e,t,s){this.$swal({title:e,text:t,icon:s}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(e,t,s){this.$swal({title:e,text:t,icon:s}).then(()=>{})},async deleteData(e){try{const t=await h.delete(`http://127.0.0.1:8000/api/manfaat/delete/${e}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(e,t){A.fire({title:`Apakah Anda yakin ingin menghapus data ${t}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(s=>{s.isConfirmed&&this.deleteData(e)})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[t,s]=e.split("."),d=JSON.parse(atob(t)),i=atob(s),o=JSON.parse(atob(e.split(".")[1])).exp,l=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",l.toUTCString()),new Date>l?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(t){console.error("Error decoding token:",t),this.$router.push("/login")}else this.$router.push("/login")}},Da=Object.assign(fa,{__name:"ManfaatView",setup(e){const t=u(!1),s=u(""),d=()=>{t.value=!t.value,s.value=t.value?"toggled":""};return(i,r)=>(n(),c(f,null,[a("div",L,[p(S,{class:w(s.value)},null,8,["class"]),a("div",O,[a("div",j,[p(q,{onToggleSidebar:d}),a("div",H,[a("div",I,[a("div",N,[V,a("div",E,[i.ready?m("",!0):(n(),c("div",F)),i.ready?(n(),D(C(v),{key:1,class:"display table table-striped",options:i.tableOptions},{default:U(()=>[z,a("tbody",null,[(n(!0),c(f,null,B(i.dataList,(o,l)=>(n(),c("tr",{key:o.id},[a("td",null,g(l+1),1),a("td",null,[a("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:y=>i.setDataUpdate(o.id,o.header,o.isi)},J,8,P),a("button",{class:"btn btn-danger me-1 mb-1",onClick:y=>i.konfirmasi(o.id,o.header)},G,8,Q)]),a("td",null,g(o.header),1),a("td",null,[a("div",{innerHTML:o.isi},null,8,R)])]))),128))])]),_:1},8,["options"])):m("",!0)])])])])]),p(x)])]),a("div",X,[a("div",Y,[a("div",Z,[aa,a("div",ea,[a("form",null,[a("div",ta,[sa,b(a("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":r[0]||(r[0]=o=>i.dataCreate.header=o),placeholder:"Masukkan header",required:""},null,512),[[_,i.dataCreate.header]])]),oa])]),a("div",ia,[ra,a("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=(...o)=>i.tambahData&&i.tambahData(...o))}," Kirim ")])])])]),a("div",da,[a("div",na,[a("div",la,[ca,a("div",ha,[a("form",null,[a("div",pa,[ua,b(a("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":r[2]||(r[2]=o=>i.dataUpdate.header=o),required:""},null,512),[[_,i.dataUpdate.header]])]),ma])]),a("div",ba,[_a,a("button",{type:"button",class:"btn btn-danger",onClick:r[3]||(r[3]=(...o)=>i.sendUpdateData&&i.sendUpdateData(...o))}," Update ")])])])])],64))}});export{Da as default};