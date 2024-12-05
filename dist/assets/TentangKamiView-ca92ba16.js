import{r as b,b as c,c as u,d as e,m,n as v,f as g,k as U,C,D as j,p as n,v as l,F as f,h as D,e as T,t as p}from"./index-45f3a127.js";import{S as q,N as S,F as B}from"./Footer-21fbf2ec.js";import{a as _,S as A}from"./sweetalert2.all-dde62a0f.js";import{P as y,D as V}from"./jquery.dataTables-ed51dfb9.js";import{Q as w}from"./quill.snow-f8fdad36.js";const M={id:"wrapper"},H={id:"content-wrapper",class:"d-flex flex-column"},L={id:"content"},O={class:"container-fluid my-4"},I={class:"row m-1"},N={class:"card p-3",style:{"border-radius":"25px"}},P=D('<div class="row mb-3"><div class="col-6"><div class="h5 font-weight-bold text-black">Tentang Kami</div></div><div class="d-flex justify-content-end col-6"><button class="btn btn-primary me-2" data-toggle="modal" data-target="#addData"><i class="bi bi-plus"></i> Tambah </button></div><div class="col-8"></div></div>',1),E={class:"table-responsive"},x={key:0,class:"preloader"},F=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col"},"Aksi"),e("th",{scope:"col"},"Header"),e("th",{scope:"col"},"Isi"),e("th",{scope:"col"},"Project Complete"),e("th",{scope:"col"},"Happy Client"),e("th",{scope:"col"},"Awards Winning"),e("th",{scope:"col"},"Success Rate")])],-1),K=["onClick"],z=e("i",{class:"bi bi-pencil-square"},null,-1),W=[z],R=["onClick"],J=e("i",{class:"bi bi-trash3-fill"},null,-1),Q=[J],G=["innerHTML"],X={class:"modal fade",id:"addData",tabindex:"-1",role:"dialog","aria-labelledby":"addDataLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},ee=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addDataLabel"},"Tambah Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),ae={class:"modal-body"},te={class:"form-group"},se=e("label",{for:"header"},"Header",-1),oe=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_create_editor",style:{height:"200px"}})],-1),ie={class:"form-group"},re=e("label",{for:"project_complete"},"Project Complete",-1),de={class:"form-group"},ne=e("label",{for:"happy_client"},"Happy Client",-1),le={class:"form-group"},pe=e("label",{for:"awards_winning"},"Awards Winning",-1),ce={class:"form-group"},he=e("label",{for:"success_rate"},"Success Rate",-1),ue={class:"modal-footer"},_e=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),me={class:"modal fade",id:"dataUpdate",tabindex:"-1",role:"dialog","aria-labelledby":"dataUpdateLabel","aria-hidden":"true"},be={class:"modal-dialog",role:"document"},ge={class:"modal-content"},fe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"dataUpdateLabel"},"Update Data"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),we={class:"modal-body"},ye={class:"form-group"},ke=e("label",{for:"header"},"Header",-1),ve=e("div",{class:"form-group"},[e("label",{for:"isi"},"Isi"),e("div",{id:"isi_update_editor",style:{height:"200px"}})],-1),Ue={class:"form-group"},Ce=e("label",{for:"project_complete"},"Project Complete",-1),je={class:"form-group"},De=e("label",{for:"happy_client"},"Happy Client",-1),Te={class:"form-group"},qe=e("label",{for:"awards_winning"},"Awards Winning",-1),$e={class:"form-group"},Se=e("label",{for:"success_rate"},"Success Rate",-1),Be={class:"modal-footer"},Ae=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1);y.use(V);const Ve={data(){return{dataList:[],tableOptions:{pagingType:"full_numbers"},dataCreate:{header:"",isi:"",project_complete:"",happy_client:"",awards_winning:"",success_rate:""},dataUpdate:{id:"",header:"",isi:"",project_complete:"",happy_client:"",awards_winning:"",success_rate:""},ready:!1}},mounted(){this.quillCreate=new w("#isi_create_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillCreate.on("text-change",()=>{this.dataCreate.isi=this.quillCreate.root.innerHTML}),this.quillUpdate=new w("#isi_update_editor",{theme:"snow",placeholder:"Masukkan isi",modules:{toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{align:[]}],["bold","italic","underline"],["link"],["blockquote","code-block"],[{color:[]},{background:[]}]]}}),this.quillUpdate.on("text-change",()=>{this.dataUpdate.isi=this.quillUpdate.root.innerHTML})},methods:{setDataUpdate(a,o,r,d,s,i,t){this.dataUpdate.id=a,this.dataUpdate.header=o,this.dataUpdate.isi=r,this.quillUpdate.root.innerHTML=this.dataUpdate.isi,this.dataUpdate.project_complete=d,this.dataUpdate.happy_client=s,this.dataUpdate.awards_winning=i,this.dataUpdate.success_rate=t},async sendUpdateData(){try{const a=new FormData;a.append("header",this.dataUpdate.header),a.append("isi",this.dataUpdate.isi),a.append("project_complete",this.dataUpdate.project_complete),a.append("happy_client",this.dataUpdate.happy_client),a.append("awards_winning",this.dataUpdate.awards_winning),a.append("success_rate",this.dataUpdate.success_rate);const o=await _.post(`http://127.0.0.1:8000/api/tentang-kami/update/${this.dataUpdate.id}`,a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(o.data),this.dataUpdate={id:"",header:"",isi:"",project_complete:"",happy_client:"",awards_winning:"",success_rate:""},this.quillUpdate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil diupdate.","success")}catch(a){if(console.error(a),a.response&&a.response.data&&a.response.data.errors){const o=a.response.data.errors;let r=`Terjadi kesalahan:
`;for(let d in o)o.hasOwnProperty(d)&&(r+=`${o[d].join(", ")}
`);this.showError("Opps...",r,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async tambahData(){try{const a=new FormData;a.append("header",this.dataCreate.header),a.append("isi",this.dataCreate.isi),a.append("project_complete",this.dataCreate.project_complete),a.append("happy_client",this.dataCreate.happy_client),a.append("awards_winning",this.dataCreate.awards_winning),a.append("success_rate",this.dataCreate.success_rate);const o=await _.post("http://127.0.0.1:8000/api/tentang-kami/create",a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(o.data),this.dataCreate={header:"",isi:"",project_complete:"",happy_client:"",awards_winning:"",success_rate:""},this.quillCreate.setContents([]),this.fetchData(),this.showAlert("Berhasil!","Data berhasil ditambahkan.","success")}catch(a){if(console.error(a),a.response&&a.response.data&&a.response.data.errors){const o=a.response.data.errors;let r=`Terjadi kesalahan:
`;for(let d in o)o.hasOwnProperty(d)&&(r+=`${o[d].join(", ")}
`);this.showError("Opps...",r,"error")}else this.showError("Opps...","Terjadi kesalahan saat menambahkan data.","error")}},async fetchData(){this.ready=!1;try{const a=await _.get("http://127.0.0.1:8000/api/tentang-kami/list",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataList=a.data.data,this.ready=!0}catch(a){console.error(a),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(a,o,r){this.$swal({title:a,text:o,icon:r}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},showError(a,o,r){this.$swal({title:a,text:o,icon:r}).then(()=>{})},async deleteData(a){try{const o=await _.delete(`http://127.0.0.1:8000/api/tentang-kami/delete/${a}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(o.data),this.fetchData(),this.showAlert("Success","Data berhasil didelete","success")}catch(o){console.error(o),this.showAlert("Oops...","Terjadi kesalahan saat mendelete data","error")}},konfirmasi(a,o){A.fire({title:`Apakah Anda yakin ingin menghapus data ${o}?`,text:"Data akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ee0405",cancelButtonColor:"#858796",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(r=>{r.isConfirmed&&this.deleteData(a)})}},created(){const a=sessionStorage.getItem("token");if(a)try{const[o,r]=a.split("."),d=JSON.parse(atob(o)),s=atob(r),t=JSON.parse(atob(a.split(".")[1])).exp,h=new Date(t*1e3);console.log("Waktu Kedaluwarsa (UTC):",h.toUTCString()),new Date>h?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman"),this.fetchData()}catch(o){console.error("Error decoding token:",o),this.$router.push("/login")}else this.$router.push("/login")}},Ne=Object.assign(Ve,{__name:"TentangKamiView",setup(a){const o=b(!1),r=b(""),d=()=>{o.value=!o.value,r.value=o.value?"toggled":""};return(s,i)=>(c(),u(f,null,[e("div",M,[m(q,{class:v(r.value)},null,8,["class"]),e("div",H,[e("div",L,[m(S,{onToggleSidebar:d}),e("div",O,[e("div",I,[e("div",N,[P,e("div",E,[s.ready?g("",!0):(c(),u("div",x)),s.ready?(c(),U(j(y),{key:1,class:"display table table-striped",options:s.tableOptions},{default:C(()=>[F,e("tbody",null,[(c(!0),u(f,null,T(s.dataList,(t,h)=>(c(),u("tr",{key:t.id},[e("td",null,p(h+1),1),e("td",null,[e("button",{class:"btn btn-warning me-1 mb-1","data-toggle":"modal","data-target":"#dataUpdate",onClick:k=>s.setDataUpdate(t.id,t.header,t.isi,t.project_complete,t.happy_client,t.awards_winning,t.success_rate)},W,8,K),e("button",{class:"btn btn-danger me-1 mb-1",onClick:k=>s.konfirmasi(t.id,t.header)},Q,8,R)]),e("td",null,p(t.header),1),e("td",null,[e("div",{innerHTML:t.isi},null,8,G)]),e("td",null,p(t.project_complete),1),e("td",null,p(t.happy_client),1),e("td",null,p(t.awards_winning),1),e("td",null,p(t.success_rate),1)]))),128))])]),_:1},8,["options"])):g("",!0)])])])])]),m(B)])]),e("div",X,[e("div",Y,[e("div",Z,[ee,e("div",ae,[e("form",null,[e("div",te,[se,n(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[0]||(i[0]=t=>s.dataCreate.header=t),placeholder:"Masukkan header",required:""},null,512),[[l,s.dataCreate.header]])]),oe,e("div",ie,[re,n(e("input",{type:"text",class:"form-control",id:"project_complete","onUpdate:modelValue":i[1]||(i[1]=t=>s.dataCreate.project_complete=t),placeholder:"Masukkan jumlah project yang sudah terselesaikan",required:""},null,512),[[l,s.dataCreate.project_complete]])]),e("div",de,[ne,n(e("input",{type:"text",class:"form-control",id:"happy_client","onUpdate:modelValue":i[2]||(i[2]=t=>s.dataCreate.happy_client=t),placeholder:"Masukkan jumlah klien yang terpuaskan",required:""},null,512),[[l,s.dataCreate.happy_client]])]),e("div",le,[pe,n(e("input",{type:"text",class:"form-control",id:"awards_winning","onUpdate:modelValue":i[3]||(i[3]=t=>s.dataCreate.awards_winning=t),placeholder:"Masukkan jumlah penghargaan yang dimenangkan",required:""},null,512),[[l,s.dataCreate.awards_winning]])]),e("div",ce,[he,n(e("input",{type:"text",class:"form-control",id:"success_rate","onUpdate:modelValue":i[4]||(i[4]=t=>s.dataCreate.success_rate=t),placeholder:"Masukkan jumlah persentase sukses",required:""},null,512),[[l,s.dataCreate.success_rate]])])])]),e("div",ue,[_e,e("button",{type:"button",class:"btn btn-primary",onClick:i[5]||(i[5]=(...t)=>s.tambahData&&s.tambahData(...t))}," Kirim ")])])])]),e("div",me,[e("div",be,[e("div",ge,[fe,e("div",we,[e("form",null,[e("div",ye,[ke,n(e("input",{type:"text",class:"form-control",id:"header","onUpdate:modelValue":i[6]||(i[6]=t=>s.dataUpdate.header=t),required:""},null,512),[[l,s.dataUpdate.header]])]),ve,e("div",Ue,[Ce,n(e("input",{type:"text",class:"form-control",id:"project_complete","onUpdate:modelValue":i[7]||(i[7]=t=>s.dataUpdate.project_complete=t),required:""},null,512),[[l,s.dataUpdate.project_complete]])]),e("div",je,[De,n(e("input",{type:"text",class:"form-control",id:"happy_client","onUpdate:modelValue":i[8]||(i[8]=t=>s.dataUpdate.happy_client=t),required:""},null,512),[[l,s.dataUpdate.happy_client]])]),e("div",Te,[qe,n(e("input",{type:"text",class:"form-control",id:"awards_winning","onUpdate:modelValue":i[9]||(i[9]=t=>s.dataUpdate.awards_winning=t),required:""},null,512),[[l,s.dataUpdate.awards_winning]])]),e("div",$e,[Se,n(e("input",{type:"text",class:"form-control",id:"success_rate","onUpdate:modelValue":i[10]||(i[10]=t=>s.dataUpdate.success_rate=t),required:""},null,512),[[l,s.dataUpdate.success_rate]])])])]),e("div",Be,[Ae,e("button",{type:"button",class:"btn btn-danger",onClick:i[11]||(i[11]=(...t)=>s.sendUpdateData&&s.sendUpdateData(...t))}," Update ")])])])])],64))}});export{Ne as default};
