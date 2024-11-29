import{_ as F,r,b as B,f as A,g as a,i as _,n as T,t as i,j as d,v as h,D as w,E as k,F as U,x as V,y as E,C as L}from"./index-ff3a5314.js";import{S as P}from"./Sidebar-a2ee7b5f.js";import{N as R,F as q}from"./Footer-a99f178f.js";import{M as z,T as J}from"./MapsDetail-8d599db8.js";import{a as y}from"./axios-a342f982.js";import{S as x}from"./sweetalert2.all-ba5903e9.js";import"./jquery.dataTables-5bb2cc9b.js";import"./leaflet.curve-0e7c6766.js";const e=c=>(V("data-v-fd8430c9"),c=c(),E(),c),W={id:"wrapper"},H={id:"content-wrapper",class:"d-flex flex-column"},O={id:"content"},G={class:"container-fluid mt-4"},Q=e(()=>a("h1",{class:"mb-0 fw-bold customJudul"},"Detail Makan Minum",-1)),X=e(()=>a("p",null,"Semangat semoga harimu menyenangkan",-1)),Y={class:"customBox mt-3"},Z={class:"container-fluid"},aa=e(()=>a("h6",{class:"fw-bold pt-3 mb-3"},null,-1)),ea={class:"row"},sa={class:"col-sm-6"},ta={class:"mb-3"},oa=e(()=>a("p",null,"Nama Usaha",-1)),na={class:"box"},la=e(()=>a("div",{class:"col-sm-6"},null,-1)),ia=e(()=>a("div",{class:"col-sm-3"},null,-1)),da={class:"row"},ra={class:"col-sm-6"},ca={class:"mb-3"},ma=e(()=>a("p",null,"Penangguang Jawab",-1)),_a={class:"box"},ua={class:"row"},pa={class:"col-sm-6"},va={class:"mb-3"},ha=e(()=>a("p",null,"Nomer Telpon",-1)),ba={class:"box"},fa={class:"row"},wa={class:"col-sm-4"},ya={class:"mb-3"},ga=e(()=>a("p",null,"NIB",-1)),Ka={class:"box"},ka={class:"col-sm-4"},xa={class:"mb-3"},Sa=e(()=>a("p",null,"Resiko",-1)),Da={class:"box"},Na={class:"col-sm-4"},Ia={class:"mb-3"},ja=e(()=>a("p",null,"Skala Usaha",-1)),Ma={class:"box"},Ca={class:"row"},Fa={class:"col-sm-6"},Ba={class:"mb-3"},Aa=e(()=>a("p",null,"Alamat",-1)),Ta={class:"box1"},Ua={class:"col-x1 col-md-2"},Va=e(()=>a("p",null,"Karyawan",-1)),Ea={class:"card border-left-primary"},La={class:"card-body"},Pa={class:"row no-gutters align-items-center"},$a={class:"col"},Ra=e(()=>a("div",{class:"text-xs font-weight-bold text-primary text-uppercase"}," Laki-Laki ",-1)),qa={class:"h5 mb-@ font-weight-bold text-gray-80e"},za=e(()=>a("div",{class:"col-auto"},[a("i",{class:"fas fa-user fa-2x text-gray-300"})],-1)),Ja={class:"col-x1 col-md-2"},Wa=e(()=>a("p",null,"Karyawan",-1)),Ha={class:"card border-left-primary"},Oa={class:"card-body"},Ga={class:"row no-gutters align-items-center"},Qa={class:"col"},Xa=e(()=>a("div",{class:"text-xs font-weight-bold text-primary text-uppercase"}," Wanita ",-1)),Ya={class:"h5 mb-@ font-weight-bold text-gray-80e"},Za=e(()=>a("div",{class:"col-auto"},[a("i",{class:"fas fa-user fa-2x text-gray-300"})],-1)),ae={class:"row"},ee={class:"col-sm"},se=e(()=>a("button",{class:"btn btnCustomColor mt-3 dropdown-toggle",type:"button","data-toggle":"dropdown","aria-expanded":"false"}," Tambah Karyawan ",-1)),te=e(()=>a("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#importKaryawan"},"Import By Excel",-1)),oe=e(()=>a("a",{class:"btn btnCustomColor ms-2 mt-3",href:"/format_data_karyawan.xlsx",download:""}," Download Contoh Import ",-1)),ne=e(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"importKaryawanLabel"}," Import Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),le=e(()=>a("div",{class:"mb-3"},[a("label",{for:"fileExcel",class:"form-label"},"File Excel"),a("input",{type:"file",class:"form-control placeholder",id:"fileExcel"})],-1)),ie={class:"modal fade",id:"tambahKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"tambahKaryawanLabel","aria-hidden":"true"},de={class:"modal-dialog",role:"document"},re={class:"modal-content"},ce=e(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"tambahKaryawanLabel"}," Tambah Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),me={class:"modal-body"},_e={class:"mb-3"},ue=e(()=>a("label",{for:"namaKaryawan",class:"form-label"},"Nama Karyawan",-1)),pe={class:"mb-3"},ve=e(()=>a("label",{for:"pendidikanKaryawan",class:"form-label"},"Pendidikan",-1)),he=L('<option selected disabled value="Pilih pendidikan" data-v-fd8430c9> Pilih pendidikan </option><option value="SD/MI" data-v-fd8430c9>SD/MI</option><option value="SMP/MTS" data-v-fd8430c9>SMP/MTS</option><option value="SMA/SMK/MA" data-v-fd8430c9>SMA/SMK/MA</option><option value="D3/S1/D4" data-v-fd8430c9>D3/S1/D4</option><option value="S2" data-v-fd8430c9>S2</option><option value="S3" data-v-fd8430c9>S3</option>',7),be=[he],fe={class:"mb-3"},we=e(()=>a("label",{for:"jabatanKaryawan",class:"form-label"},"Jabatan Karyawan",-1)),ye={class:"mb-3"},ge=e(()=>a("label",{for:"alamatKaryawan",class:"form-label"},"Alamat Karyawan",-1)),Ke={class:"mb-3"},ke=e(()=>a("label",{for:"sertifikasiKaryawan",class:"form-label"},"Sertifikasi Karyawan",-1)),xe=e(()=>a("option",{value:"1"},"Tersertifikasi",-1)),Se=e(()=>a("option",{value:"0"},"Belum Tersertifikasi",-1)),De=[xe,Se],Ne={class:"mb-3"},Ie=e(()=>a("label",{for:"wargaNegara",class:"form-label"},"Kewarganegaraan Karyawan",-1)),je={class:"form-check"},Me=e(()=>a("label",{class:"form-check-label",for:"warganegara1"},"WNI",-1)),Ce={class:"form-check"},Fe=e(()=>a("label",{class:"form-check-label",for:"warganegara2"},"WNA",-1)),Be={class:"mb-3"},Ae=e(()=>a("label",{for:"jenisKelamin",class:"form-label"},"Jenis Kelamin Karyawan",-1)),Te=e(()=>a("option",{value:"1"},"Laki-laki",-1)),Ue=e(()=>a("option",{value:"0"},"Perempuan",-1)),Ve=[Te,Ue],Ee=e(()=>a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1)),Le={__name:"FnbDetail",props:{id:{type:String,required:!0}},setup(c){const b=r(!1),g=r(""),S=()=>{b.value=!b.value,g.value=b.value?"toggled":""},l=r({}),u=r(!1),K=r(""),p=async n=>{u.value=!1;try{const t=await y.get(`https://api.surveiwisatadki.com/api/fnb/detail-fnb/${n}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log("test data:",t.data.data),l.value=t.data.data,u.value=!0,K.value=l.value.fnb.koordinat||"-6.2088,106.8456"}catch(t){u.value=!0,console.error(t)}},s=r({namaKaryawan:"",pendidikanKaryawan:"",jabatanKaryawan:"",alamatKaryawan:"",sertifikasiKaryawan:"",wargaNegara:"",jenisKelamin:"",fnb_id:""}),D=()=>{s.value.namaKaryawan="",s.value.pendidikanKaryawan="",s.value.jabatanKaryawan="",s.value.alamatKaryawan="",s.value.sertifikasiKaryawan="",s.value.wargaNegara="",s.value.jenisKelamin="",s.value.fnb_id=l.value.fnb.id},N=async()=>{try{const n=new FormData;n.append("namaKaryawan",s.value.namaKaryawan),n.append("pendidikanKaryawan",s.value.pendidikanKaryawan),n.append("jabatanKaryawan",s.value.jabatanKaryawan),n.append("alamatKaryawan",s.value.alamatKaryawan),n.append("sertifikasiKaryawan",s.value.sertifikasiKaryawan),n.append("wargaNegara",s.value.wargaNegara),n.append("jenisKelamin",s.value.jenisKelamin),n.append("fnb_id",s.value.fnb_id);const t=await y.post("https://api.surveiwisatadki.com/api/karyawan/input-karyawan-fnb",n,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});p(m.id),v("Request Success","Karyawan berhasil ditambahkan","success")}catch(n){v("Request Failed","Karyawan gagal ditambahkan","error"),console.error(n)}},I=async()=>{const t=document.getElementById("fileExcel").files[0];if(!t){x.fire("Error","Please select a file","error");return}try{const o=new FormData;o.append("file",t);const f=await y.post(`https://api.surveiwisatadki.com/api/karyawan/import-karyawan-fnb/${m.id}`,o,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"multipart/form-data"}});p(m.id),v("Request Success","Karyawan berhasil ditambahkan","success")}catch(o){v("Request Failed","Karyawan gagal ditambahkan","error"),console.error(o)}},v=(n,t,o)=>{x.fire({title:n,text:t,icon:o}).then(()=>{$("#tambahKaryawan").modal("hide"),$("#importKaryawan").modal("hide")})},j=()=>{p(m.id)},M=()=>{const n=sessionStorage.getItem("token");if(!n)return window.location.href="/",!1;try{const[t,o]=n.split("."),f=JSON.parse(atob(o)),C=new Date(f.exp*1e3);return new Date>C?(console.log("Token expired"),sessionStorage.removeItem("token"),window.location.href="/",!1):f.level!=="2"?(window.location.href="/unauthorized",!1):!0}catch(t){return console.error("Error decoding token:",t),window.location.href="/",!1}},m=c;return M()&&p(m.id),(n,t)=>(B(),A(U,null,[a("div",W,[_(P,{class:T(g.value)},null,8,["class"]),a("div",H,[a("div",O,[_(R,{onToggleSidebar:S}),a("div",G,[Q,X,a("div",Y,[a("div",Z,[aa,a("div",ea,[a("div",sa,[a("div",ta,[oa,a("div",na,[a("p",null,i(l.value.fnb.namaFnb),1)])])]),la,ia]),a("div",da,[a("div",ra,[a("div",ca,[ma,a("div",_a,[a("p",null,i(l.value.fnb.namaPj),1)])])])]),a("div",ua,[a("div",pa,[a("div",va,[ha,a("div",ba,[a("p",null,i(l.value.fnb.teleponPj),1)])])])]),a("div",fa,[a("div",wa,[a("div",ya,[ga,a("div",Ka,[a("p",null,i(l.value.fnb.nib),1)])])]),a("div",ka,[a("div",xa,[Sa,a("div",Da,[a("p",null,i(l.value.fnb.resiko),1)])])]),a("div",Na,[a("div",Ia,[ja,a("div",Ma,[a("p",null,i(l.value.fnb.skalaUsaha),1)])])])]),a("div",Ca,[a("div",Fa,[a("div",Ba,[Aa,a("div",Ta,[a("p",null,i(l.value.fnb.alamat),1)])])]),a("div",Ua,[Va,a("div",Ea,[a("div",La,[a("div",Pa,[a("div",$a,[Ra,a("div",qa,i(l.value.lakiLaki),1)]),za])])])]),a("div",Ja,[Wa,a("div",Ha,[a("div",Oa,[a("div",Ga,[a("div",Qa,[Xa,a("div",Ya,i(l.value.perempuan),1)]),Za])])])])]),a("div",ae,[a("div",ee,[_(z,{coordinates:K.value},null,8,["coordinates"])])]),a("div",{class:"row"},[a("div",{class:"col-sm-6 d-flex justify-content-start my-3"},[a("div",{class:"dropdown"},[se,a("div",{class:"dropdown-menu"},[te,a("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#tambahKaryawan",onClick:D},"Manual Input")])]),oe])]),_(J,{karyawanList:l.value.karyawan,ready:u.value,onUpdateData:j},null,8,["karyawanList","ready"])])])])]),_(q)])]),a("div",{class:"modal fade",id:"importKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"importKaryawanLabel","aria-hidden":"true"},[a("div",{class:"modal-dialog",role:"document"},[a("div",{class:"modal-content"},[ne,a("div",{class:"modal-body"},[a("form",{id:"karyawanForm"},[le,a("button",{type:"button",class:"btn btnCustomColor",onClick:I}," Import ")])])])])]),a("div",ie,[a("div",de,[a("div",re,[ce,a("div",me,[a("form",null,[d(a("input",{type:"hidden",id:"hotel_id","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.hotel_id=o),value:"{{ dataHotels.hotel.id }}"},null,512),[[h,s.value.hotel_id]]),a("div",_e,[ue,d(a("input",{type:"text",class:"form-control",id:"namaKaryawan",placeholder:"masukkan nama karyawan","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.namaKaryawan=o)},null,512),[[h,s.value.namaKaryawan]])]),a("div",pe,[ve,d(a("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.pendidikanKaryawan=o)},be,512),[[w,s.value.pendidikanKaryawan]])]),a("div",fe,[we,d(a("input",{type:"text",class:"form-control",id:"jabatanKaryawan",placeholder:"masukkan jabatan karyawan","onUpdate:modelValue":t[3]||(t[3]=o=>s.value.jabatanKaryawan=o)},null,512),[[h,s.value.jabatanKaryawan]])]),a("div",ye,[ge,d(a("input",{type:"text",class:"form-control",id:"alamatKaryawan",placeholder:"masukkan alamat karyawan","onUpdate:modelValue":t[4]||(t[4]=o=>s.value.alamatKaryawan=o)},null,512),[[h,s.value.alamatKaryawan]])]),a("div",Ke,[ke,d(a("select",{class:"form-select",id:"sertifikasiKaryawan","onUpdate:modelValue":t[5]||(t[5]=o=>s.value.sertifikasiKaryawan=o)},De,512),[[w,s.value.sertifikasiKaryawan]])]),a("div",Ne,[Ie,a("div",je,[d(a("input",{class:"form-check-input",type:"radio",id:"warganegara1",value:"WNI","onUpdate:modelValue":t[6]||(t[6]=o=>s.value.wargaNegara=o)},null,512),[[k,s.value.wargaNegara]]),Me]),a("div",Ce,[d(a("input",{class:"form-check-input",type:"radio",id:"warganegara2",value:"WNA","onUpdate:modelValue":t[7]||(t[7]=o=>s.value.wargaNegara=o)},null,512),[[k,s.value.wargaNegara]]),Fe]),a("div",Be,[Ae,d(a("select",{class:"form-select",id:"jenisKelamin","onUpdate:modelValue":t[8]||(t[8]=o=>s.value.jenisKelamin=o)},Ve,512),[[w,s.value.jenisKelamin]])])]),a("div",{class:"modal-footer"},[Ee,a("button",{type:"button",class:"btn blueButton",onClick:N}," Simpan ")])])])])])])],64))}},Oe=F(Le,[["__scopeId","data-v-fd8430c9"]]);export{Oe as default};