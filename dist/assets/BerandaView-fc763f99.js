import{r as f,b as n,c,d as e,m as b,n as w,f as _,k as U,C as D,D as C,p as h,v as p,F as g,h as B,e as T,t as m}from"./index-eb6767bb.js";import{S,N as q,F as A}from"./Footer-a92233b1.js";import{a as u,S as L}from"./sweetalert2.all-d8794e5f.js";import{P as y,D as O}from"./jquery.dataTables-6e53e4b4.js";import{Q as k}from"./quill.snow-07f1e52c.js";const x={id:"wrapper"},M={id:"content-wrapper",class:"d-flex flex-column"},j={id:"content"},H={class:"container-fluid my-4"},V={class:"row m-1"},F={class:"card p-3",style:{"border-radius":"25px"}},I=B('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">Beranda</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),N={class:"table-responsive"},E={key:0,class:"preloader"},z=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col"},"Aksi"),e("th",{scope:"col"},"Header"),e("th",{scope:"col"},"Isi"),e("th",{scope:"col"},"Footer")])],-1),P=["onClick"],K=e("i",{class:"bi bi-pencil-square"},null,-1),J=[K],Q=["onClick"],W=e("i",{class:"bi bi-trash3-fill"},null,-1),G=[W],R=["innerHTML"],X={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},ee=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),te={class:"modal-body"},ae={class:"form-group"},se=e("label",{for:"header"},"Header",-1),oe=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_create_editor",style:{height:"200px"}})],-1),re={class:"form-group"},ie=e("label",{for:"footer"},"Footer",-1),de={class:"modal-footer"},ne=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),le={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},ce={class:"modal-dialog",role:"document"},he={class:"modal-content"},pe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),ue={class:"modal-body"},be={class:"form-group"},me=e("label",{for:"header"},"Header",-1),fe=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_update_editor",style:{height:"200px"}})],-1),_e={class:"form-group"},ge=e("label",{for:"footer"},"Footer",-1),ke={class:"modal-footer"},ye=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);y.use(O);const ve={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{header:"",isi:"",footer:""},dataUpdate:{id:"",header:"",isi:"",footer:""},ready:!1}},mounted(){this.quillCreate=new k("#isi_create_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillCreate.on("text-change",()=>{this.dataCreate.isi=this.quillCreate.root.innerHTML}),this.quillUpdate=new k("#isi_update_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillUpdate.on("text-change",()=>{this.dataUpdate.isi=this.quillUpdate.root.innerHTML})},methods:{setDataUpdate(t,a,r,d){this.dataUpdate.id=t,this.dataUpdate.header=a,this.dataUpdate.isi=r,this.quillUpdate.root.innerHTML=this.dataUpdate.isi,this.dataUpdate.footer=d},async sendUpdateData(){try{const t=new FormData;t.append("header",this.dataUpdate.header),t.append("isi",this.dataUpdate.isi),t.append("footer",this.dataUpdate.footer);const a=await u.post(`https://apikyu.instinctechsolution.com/api/beranda/update/${this.dataUpdate.id}`,t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.dataUpdate={id:"",header:"",isi:"",footer:""},this.quillUpdate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const a=t.response.data.errors;let r=`Terjadi kesalahan:
`;for(let d in a)a.hasOwnProperty(d)&&(r+=`${a[d].join(", ")}
`);this.showError("Opps...",r,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const t=new FormData;t.append("header",this.dataCreate.header),t.append("isi",this.dataCreate.isi),t.append("footer",this.dataCreate.footer);const a=await u.post("https://apikyu.instinctechsolution.com/api/beranda/create",t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.dataCreate={header:"",isi:"",footer:""},this.quillCreate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(t){if(console.error(t),t.response&&t.response.data&&t.response.data.errors){const a=t.response.data.errors;let r=`Terjadi kesalahan:
`;for(let d in a)a.hasOwnProperty(d)&&(r+=`${a[d].join(", ")}
`);this.showError("Opps...",r,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data catpers.","error")}},async fetchData(){this.ready=!1;try{const t=await u.get("https://apikyu.instinctechsolution.com/api/beranda/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=t.data.data,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(t,a,r){this.$swal({title:t,text:a,icon:r}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(t,a,r){this.$swal({title:t,text:a,icon:r}).then(()=>{})},async deleteData(t){try{const a=await u.delete(`https://apikyu.instinctechsolution.com/api/beranda/delete/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(a){console.error(a),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(t,a){L.fire({title:`Apakah Anda yakin ingin menghapus data ${a}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(r=>{r.isConfirmed&&this.deleteData(t)})}},created(){const t=sessionStorage.getItem("token");if(t)try{const[a,r]=t.split("."),d=JSON.parse(atob(a)),o=atob(r),s=JSON.parse(atob(t.split(".")[1])).exp,l=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",l.toUTCString()),new Date>l?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(a){console.error("Error decoding token:",a),this.$router.push("/login")}else this.$router.push("/login")}},Te=Object.assign(ve,{__name:"BerandaView",setup(t){const a=f(!1),r=f(""),d=()=>{a.value=!a.value,r.value=a.value?"toggled":""};return(o,i)=>(n(),c(g,null,[e("div",x,[b(S,{class:w(r.value)},null,8,["class"]),e("div",M,[e("div",j,[b(q,{onToggleSidebar:d}),e("div",H,[e("div",V,[e("div",F,[I,e("div",N,[o.ready?_("",!0):(n(),c("div",E)),o.ready?(n(),U(C(y),{key:1,class:"display table table-striped",options:o.tableOptions},{default:D(()=>[z,e("tbody",null,[(n(!0),c(g,null,T(o.dataList,(s,l)=>(n(),c("tr",{key:s.id},[e("td",null,m(l+1),1),e("td",null,[e("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:v=>o.setDataUpdate(s.id,s.header,s.isi,s.footer)},J,8,P),e("button",{class:"btn btn-danger me-1 mb-1",onClick:v=>o.konfirmasi(s.id,s.header)},G,8,Q)]),e("td",null,m(s.header),1),e("td",null,[e("div",{innerHTML:s.isi},null,8,R)]),e("td",null,m(s.footer),1)]))),128))])]),_:1},8,["options"])):_("",!0)])])])])]),b(A)])]),e("div",X,[e("div",Y,[e("div",Z,[ee,e("div",te,[e("form",null,[e("div",ae,[se,h(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[0]||(i[0]=s=>o.dataCreate.header=s),placeholder:"Masukkan header",required:""},null,512),[[p,o.dataCreate.header]])]),oe,e("div",re,[ie,h(e("input",{type:"text",class:"form-control",id:"footer","onUpdate:modelValue":i[1]||(i[1]=s=>o.dataCreate.footer=s),placeholder:"Masukkan footer",required:""},null,512),[[p,o.dataCreate.footer]])])])]),e("div",de,[ne,e("button",{type:"button",class:"btn btn-primary",onClick:i[2]||(i[2]=(...s)=>o.tambahData&&o.tambahData(...s))}," Kirim ")])])])]),e("div",le,[e("div",ce,[e("div",he,[pe,e("div",ue,[e("form",null,[e("div",be,[me,h(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[3]||(i[3]=s=>o.dataUpdate.header=s),required:""},null,512),[[p,o.dataUpdate.header]])]),fe,e("div",_e,[ge,h(e("input",{type:"text",class:"form-control",id:"footer","onUpdate:modelValue":i[4]||(i[4]=s=>o.dataUpdate.footer=s),required:""},null,512),[[p,o.dataUpdate.footer]])])])]),e("div",ke,[ye,e("button",{type:"button",class:"btn btn-danger",onClick:i[5]||(i[5]=(...s)=>o.sendUpdateData&&o.sendUpdateData(...s))}," Update ")])])])])],64))}});export{Te as default};
