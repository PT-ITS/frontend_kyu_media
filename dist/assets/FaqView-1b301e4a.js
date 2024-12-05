import{r as u,b as i,c,d as a,m as h,n as v,f as b,k as D,C as j,D as U,p as m,v as _,F as y,h as C,e as T,t as g}from"./index-45f3a127.js";import{S as q,N as B,F as S}from"./Footer-21fbf2ec.js";import{a as p,S as A}from"./sweetalert2.all-dde62a0f.js";import{P as w,D as x}from"./jquery.dataTables-ed51dfb9.js";import{Q as f}from"./quill.snow-f8fdad36.js";const L={id:"wrapper"},O={id:"content-wrapper",class:"d-flex flex-column"},M={id:"content"},F={class:"container-fluid my-4"},N={class:"row m-1"},P={class:"card p-3",style:{"border-radius":"25px"}},V=C('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">FAQ</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),E={class:"table-responsive"},H={key:0,class:"preloader"},I=a("thead",null,[a("tr",null,[a("th",{scope:"col",style:{width:"50px"}},"No"),a("th",{scope:"col"},"Aksi"),a("th",{scope:"col"},"Pertanyaan"),a("th",{scope:"col"},"Jawaban")])],-1),z=["onClick"],J=a("i",{class:"bi bi-pencil-square"},null,-1),K=[J],Q=["onClick"],W=a("i",{class:"bi bi-trash3-fill"},null,-1),G=[W],R=["innerHTML"],X={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},aa=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),ta={class:"modal-body"},ea={class:"form-group"},sa=a("label",{for:"pertanyaan"},"Pertanyaan",-1),oa=a("div",{class:"form-group"},[a("label",{for:"jawaban"},"Jawaban"),a("div",{id:"jawaban_create_editor",style:{height:"200px"}})],-1),na={class:"modal-footer"},ra=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),da={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},ia={class:"modal-dialog",role:"document"},la={class:"modal-content"},ca=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),pa={class:"modal-body"},ha={class:"form-group"},ua=a("label",{for:"pertanyaan"},"Pertanyaan",-1),ba=a("div",{class:"form-group"},[a("label",{for:"jawaban"},"Jawaban"),a("div",{id:"jawaban_update_editor",style:{height:"200px"}})],-1),ma={class:"modal-footer"},_a=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);w.use(x);const ya={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{pertanyaan:"",jawaban:""},dataUpdate:{id:"",pertanyaan:"",jawaban:""},ready:!1}},mounted(){this.quillCreate=new f("#jawaban_create_editor",{theme:"snow",placeholder:"Masukkan jawaban",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillCreate.on("text-change",()=>{this.dataCreate.jawaban=this.quillCreate.root.innerHTML}),this.quillUpdate=new f("#jawaban_update_editor",{theme:"snow",placeholder:"Masukkan jawaban",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillUpdate.on("text-change",()=>{this.dataUpdate.jawaban=this.quillUpdate.root.innerHTML})},methods:{setDataUpdate(t,e,s){this.dataUpdate.id=t,this.dataUpdate.pertanyaan=e,this.dataUpdate.jawaban=s,this.quillUpdate.root.innerHTML=this.dataUpdate.jawaban},async sendUpdateData(){try{const t=new FormData;t.append("pertanyaan",this.dataUpdate.pertanyaan),t.append("jawaban",this.dataUpdate.jawaban);const e=await p.post(`http://127.0.0.1:8000/api/faq/update/${this.dataUpdate.id}`,t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.dataUpdate={id:"",pertanyaan:"",jawaban:""},this.quillUpdate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const e=t.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in e)e.hasOwnProperty(d)&&(s+=`${e[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const t=new FormData;t.append("pertanyaan",this.dataCreate.pertanyaan),t.append("jawaban",this.dataCreate.jawaban);const e=await p.post("http://127.0.0.1:8000/api/faq/create",t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.dataCreate={pertanyaan:"",jawaban:""},this.quillCreate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const e=t.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in e)e.hasOwnProperty(d)&&(s+=`${e[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async fetchData(){this.ready=!1;try{const t=await p.get("http://127.0.0.1:8000/api/faq/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=t.data.data,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(t,e,s){this.$swal({title:t,text:e,icon:s}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(t,e,s){this.$swal({title:t,text:e,icon:s}).then(()=>{})},async deleteData(t){try{const e=await p.delete(`http://127.0.0.1:8000/api/faq/delete/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(e){console.error(e),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(t,e){A.fire({title:`Apakah Anda yakin ingin menghapus data ${e}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(s=>{s.isConfirmed&&this.deleteData(t)})}},created(){const t=sessionStorage.getItem("token");if(t)try{const[e,s]=t.split("."),d=JSON.parse(atob(e)),n=atob(s),o=JSON.parse(atob(t.split(".")[1])).exp,l=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",l.toUTCString()),new Date>l?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(e){console.error("Error decoding token:",e),this.$router.push("/login")}else this.$router.push("/login")}},Da=Object.assign(ya,{__name:"FaqView",setup(t){const e=u(!1),s=u(""),d=()=>{e.value=!e.value,s.value=e.value?"toggled":""};return(n,r)=>(i(),c(y,null,[a("div",L,[h(q,{class:v(s.value)},null,8,["class"]),a("div",O,[a("div",M,[h(B,{onToggleSidebar:d}),a("div",F,[a("div",N,[a("div",P,[V,a("div",E,[n.ready?b("",!0):(i(),c("div",H)),n.ready?(i(),D(U(w),{key:1,class:"display table table-striped",options:n.tableOptions},{default:j(()=>[I,a("tbody",null,[(i(!0),c(y,null,T(n.dataList,(o,l)=>(i(),c("tr",{key:o.id},[a("td",null,g(l+1),1),a("td",null,[a("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:k=>n.setDataUpdate(o.id,o.pertanyaan,o.jawaban)},K,8,z),a("button",{class:"btn btn-danger me-1 mb-1",onClick:k=>n.konfirmasi(o.id,o.pertanyaan)},G,8,Q)]),a("td",null,g(o.pertanyaan),1),a("td",null,[a("div",{innerHTML:o.jawaban},null,8,R)])]))),128))])]),_:1},8,["options"])):b("",!0)])])])])]),h(S)])]),a("div",X,[a("div",Y,[a("div",Z,[aa,a("div",ta,[a("form",null,[a("div",ea,[sa,m(a("input",{type:"text",class:"form-control",id:"pertanyaan","onUpdate:modelValue":r[0]||(r[0]=o=>n.dataCreate.pertanyaan=o),placeholder:"Masukkan pertanyaan",required:""},null,512),[[_,n.dataCreate.pertanyaan]])]),oa])]),a("div",na,[ra,a("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=(...o)=>n.tambahData&&n.tambahData(...o))}," Kirim ")])])])]),a("div",da,[a("div",ia,[a("div",la,[ca,a("div",pa,[a("form",null,[a("div",ha,[ua,m(a("input",{type:"text",class:"form-control",id:"pertanyaan","onUpdate:modelValue":r[2]||(r[2]=o=>n.dataUpdate.pertanyaan=o),required:""},null,512),[[_,n.dataUpdate.pertanyaan]])]),ba])]),a("div",ma,[_a,a("button",{type:"button",class:"btn btn-danger",onClick:r[3]||(r[3]=(...o)=>n.sendUpdateData&&n.sendUpdateData(...o))}," Update ")])])])])],64))}});export{Da as default};
