import{k as u,o as l,c,b as e,a as p,n as w,d as b,q as D,w as C,D as U,h as m,v as _,F as g,g as T,f as B,t as f}from"./index-41c00ed5.js";import{S,N as O,F as q}from"./Footer-9a29b948.js";import{a as h,S as x}from"./sweetalert2.all-10b92cf6.js";import{P as v,D as A}from"./jquery.dataTables-c2b1e719.js";import{Q as k}from"./quill.snow-286c7ad8.js";const L={id:"wrapper"},j={id:"content-wrapper",class:"d-flex flex-column"},M={id:"content"},H={class:"container-fluid my-4"},I={class:"row m-1"},N={class:"card p-3",style:{"border-radius":"25px"}},V=T('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">Cara Order</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),E={class:"table-responsive"},F={key:0,class:"preloader"},z=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col"},"Aksi"),e("th",{scope:"col"},"Header"),e("th",{scope:"col"},"Isi")])],-1),P=["onClick"],K=e("i",{class:"bi bi-pencil-square"},null,-1),J=[K],Q=["onClick"],W=e("i",{class:"bi bi-trash3-fill"},null,-1),G=[W],R=["innerHTML"],X={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},ee=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),ae={class:"modal-body"},te={class:"form-group"},se=e("label",{for:"header"},"Header",-1),oe=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_create_editor",style:{height:"200px"}})],-1),re={class:"modal-footer"},ie=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),de={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},le={class:"modal-dialog",role:"document"},ne={class:"modal-content"},ce=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),he={class:"modal-body"},pe={class:"form-group"},ue=e("label",{for:"header"},"Header",-1),be=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_update_editor",style:{height:"200px"}})],-1),me={class:"modal-footer"},_e=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);v.use(A);const ge={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{header:"",isi:""},dataUpdate:{id:"",header:"",isi:""},ready:!1}},mounted(){this.quillCreate=new k("#isi_create_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillCreate.on("text-change",()=>{this.dataCreate.isi=this.quillCreate.root.innerHTML}),this.quillUpdate=new k("#isi_update_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillUpdate.on("text-change",()=>{this.dataUpdate.isi=this.quillUpdate.root.innerHTML})},methods:{setDataUpdate(a,t,s){this.dataUpdate.id=a,this.dataUpdate.header=t,this.dataUpdate.isi=s,this.quillUpdate.root.innerHTML=this.dataUpdate.isi},async sendUpdateData(){try{const a=new FormData;a.append("header",this.dataUpdate.header),a.append("isi",this.dataUpdate.isi);const t=await h.post(`http://127.0.0.1:8000/api/cara-order/update/${this.dataUpdate.id}`,a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataUpdate={id:"",header:"",isi:""},this.quillUpdate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(a){if(console.error(a),a.response&&a.response.data&&a.response.data.errors){const t=a.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in t)t.hasOwnProperty(d)&&(s+=`${t[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const a=new FormData;a.append("header",this.dataCreate.header),a.append("isi",this.dataCreate.isi);const t=await h.post("http://127.0.0.1:8000/api/cara-order/create",a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataCreate={header:"",isi:""},this.quillCreate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(a){if(console.error(a),a.response&&a.response.data&&a.response.data.errors){const t=a.response.data.errors;let s=`Terjadi kesalahan:
`;for(let d in t)t.hasOwnProperty(d)&&(s+=`${t[d].join(", ")}
`);this.showError("Opps...",s,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async fetchData(){this.ready=!1;try{const a=await h.get("http://127.0.0.1:8000/api/cara-order/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=a.data.data,this.ready=!0}catch(a){console.error(a),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(a,t,s){this.$swal({title:a,text:t,icon:s}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(a,t,s){this.$swal({title:a,text:t,icon:s}).then(()=>{})},async deleteData(a){try{const t=await h.delete(`http://127.0.0.1:8000/api/cara-order/delete/${a}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(a,t){x.fire({title:`Apakah Anda yakin ingin menghapus data ${t}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(s=>{s.isConfirmed&&this.deleteData(a)})}},created(){const a=sessionStorage.getItem("token");if(a)try{const[t,s]=a.split("."),d=JSON.parse(atob(t)),r=atob(s),o=JSON.parse(atob(a.split(".")[1])).exp,n=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",n.toUTCString()),new Date>n?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(t){console.error("Error decoding token:",t),this.$router.push("/login")}else this.$router.push("/login")}},De=Object.assign(ge,{__name:"CaraOrderView",setup(a){const t=u(!1),s=u(""),d=()=>{t.value=!t.value,s.value=t.value?"toggled":""};return(r,i)=>(l(),c(g,null,[e("div",L,[p(S,{class:w(s.value)},null,8,["class"]),e("div",j,[e("div",M,[p(O,{onToggleSidebar:d}),e("div",H,[e("div",I,[e("div",N,[V,e("div",E,[r.ready?b("",!0):(l(),c("div",F)),r.ready?(l(),D(U(v),{key:1,class:"display table table-striped",options:r.tableOptions},{default:C(()=>[z,e("tbody",null,[(l(!0),c(g,null,B(r.dataList,(o,n)=>(l(),c("tr",{key:o.id},[e("td",null,f(n+1),1),e("td",null,[e("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:y=>r.setDataUpdate(o.id,o.header,o.isi)},J,8,P),e("button",{class:"btn btn-danger me-1 mb-1",onClick:y=>r.konfirmasi(o.id,o.header)},G,8,Q)]),e("td",null,f(o.header),1),e("td",null,[e("div",{innerHTML:o.isi},null,8,R)])]))),128))])]),_:1},8,["options"])):b("",!0)])])])])]),p(q)])]),e("div",X,[e("div",Y,[e("div",Z,[ee,e("div",ae,[e("form",null,[e("div",te,[se,m(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[0]||(i[0]=o=>r.dataCreate.header=o),placeholder:"Masukkan header",required:""},null,512),[[_,r.dataCreate.header]])]),oe])]),e("div",re,[ie,e("button",{type:"button",class:"btn btn-primary",onClick:i[1]||(i[1]=(...o)=>r.tambahData&&r.tambahData(...o))}," Kirim ")])])])]),e("div",de,[e("div",le,[e("div",ne,[ce,e("div",he,[e("form",null,[e("div",pe,[ue,m(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[2]||(i[2]=o=>r.dataUpdate.header=o),required:""},null,512),[[_,r.dataUpdate.header]])]),be])]),e("div",me,[_e,e("button",{type:"button",class:"btn btn-danger",onClick:i[3]||(i[3]=(...o)=>r.sendUpdateData&&r.sendUpdateData(...o))}," Update ")])])])])],64))}});export{De as default};
