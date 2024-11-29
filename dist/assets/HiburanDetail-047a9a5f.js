import{_ as B,r,b as A,f as T,g as a,i as m,n as U,t as i,j as d,v,D as y,E as K,F as P,x as V,y as E,C as F}from"./index-ff3a5314.js";import{S as L}from"./Sidebar-a0c60a62.js";import{N as H,F as J}from"./Footer-a99f178f.js";import{M as R,T as q}from"./MapsDetail-b7ba3665.js";import{a as f}from"./axios-a342f982.js";import{S as x}from"./sweetalert2.all-ba5903e9.js";import"./jquery.dataTables-5bb2cc9b.js";import"./leaflet.curve-0e7c6766.js";const e=c=>(V("data-v-5c0eef5a"),c=c(),E(),c),z={id:"wrapper"},W={id:"content-wrapper",class:"d-flex flex-column"},O={id:"content"},G={class:"container-fluid mt-4"},Q=e(()=>a("h1",{class:"mb-0 fw-bold customJudul"},"Detail Hiburan",-1)),X=e(()=>a("p",null,"Semangat semoga harimu menyenangkan",-1)),Y={class:"customBox mt-3"},Z={class:"container-fluid"},aa=e(()=>a("h6",{class:"fw-bold pt-3 mb-3"},null,-1)),ea={class:"row"},sa={class:"col-sm-6"},ta={class:"mb-3"},oa=e(()=>a("p",null,"Nama Usaha",-1)),na={class:"box"},la=e(()=>a("div",{class:"col-sm-6"},null,-1)),ia=e(()=>a("div",{class:"col-sm-3"},null,-1)),da={class:"row"},ra={class:"col-sm-6"},ca={class:"mb-3"},ua=e(()=>a("p",null,"Penanggung Jawab",-1)),ma={class:"box"},_a={class:"row"},pa={class:"col-sm-6"},ha={class:"mb-3"},va=e(()=>a("p",null,"Nomor Telpon PJ",-1)),ba={class:"box"},wa={class:"row"},ya={class:"col-sm-4"},fa={class:"mb-3"},ga=e(()=>a("p",null,"NIB",-1)),ka={class:"box"},Ka={class:"col-sm-4"},xa={class:"mb-3"},Sa=e(()=>a("p",null,"Resiko",-1)),Da={class:"box"},Na={class:"col-sm-4"},ja={class:"mb-3"},Ia=e(()=>a("p",null,"Skala Usaha",-1)),Ma={class:"box"},Ca={class:"row"},Ba={class:"col-sm-6"},Aa={class:"mb-3"},Ta=e(()=>a("p",null,"Alamat",-1)),Ua={class:"box1"},Pa={class:"col-x1 col-md-2"},Va=e(()=>a("p",null,"Karyawan",-1)),Ea={class:"card border-left-primary"},Fa={class:"card-body"},La={class:"row no-gutters align-items-center"},Ha={class:"col"},$a=e(()=>a("div",{class:"text-xs font-weight-bold text-primary text-uppercase"}," Laki-Laki ",-1)),Ja={class:"h5 mb-@ font-weight-bold text-gray-80e"},Ra=e(()=>a("div",{class:"col-auto"},[a("i",{class:"fas fa-user fa-2x text-gray-300"})],-1)),qa={class:"col-x1 col-md-2"},za=e(()=>a("p",null,"Karyawan",-1)),Wa={class:"card border-left-primary"},Oa={class:"card-body"},Ga={class:"row no-gutters align-items-center"},Qa={class:"col"},Xa=e(()=>a("div",{class:"text-xs font-weight-bold text-primary text-uppercase"}," Wanita ",-1)),Ya={class:"h5 mb-@ font-weight-bold text-gray-80e"},Za=e(()=>a("div",{class:"col-auto"},[a("i",{class:"fas fa-user fa-2x text-gray-300"})],-1)),ae={class:"row"},ee={class:"col-sm"},se=e(()=>a("button",{class:"btn btnCustomColor mt-3 dropdown-toggle",type:"button","data-toggle":"dropdown","aria-expanded":"false"}," Tambah Karyawan ",-1)),te=e(()=>a("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#importKaryawan"},"Import By Excel",-1)),oe=e(()=>a("a",{class:"btn btnCustomColor ms-2 mt-3",href:"/format_data_karyawan.xlsx",download:""}," Download Contoh Import ",-1)),ne=e(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"importKaryawanLabel"}," Import Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),le=e(()=>a("div",{class:"mb-3"},[a("label",{for:"fileExcel",class:"form-label"},"File Excel"),a("input",{type:"file",class:"form-control placeholder",id:"fileExcel"})],-1)),ie={class:"modal fade",id:"tambahKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"tambahKaryawanLabel","aria-hidden":"true"},de={class:"modal-dialog",role:"document"},re={class:"modal-content"},ce=e(()=>a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"tambahKaryawanLabel"}," Tambah Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1)),ue={class:"modal-body"},me={class:"mb-3"},_e=e(()=>a("label",{for:"namaKaryawan",class:"form-label"},"Nama Karyawan",-1)),pe={class:"mb-3"},he=e(()=>a("label",{for:"pendidikanKaryawan",class:"form-label"},"Pendidikan",-1)),ve=F('<option selected disabled value="Pilih pendidikan" data-v-5c0eef5a> Pilih pendidikan </option><option value="SD/MI" data-v-5c0eef5a>SD/MI</option><option value="SMP/MTS" data-v-5c0eef5a>SMP/MTS</option><option value="SMA/SMK/MA" data-v-5c0eef5a>SMA/SMK/MA</option><option value="D3/S1/D4" data-v-5c0eef5a>D3/S1/D4</option><option value="S2" data-v-5c0eef5a>S2</option><option value="S3" data-v-5c0eef5a>S3</option>',7),be=[ve],we={class:"mb-3"},ye=e(()=>a("label",{for:"jabatanKaryawan",class:"form-label"},"Jabatan Karyawan",-1)),fe={class:"mb-3"},ge=e(()=>a("label",{for:"alamatKaryawan",class:"form-label"},"Alamat Karyawan",-1)),ke={class:"mb-3"},Ke=e(()=>a("label",{for:"sertifikasiKaryawan",class:"form-label"},"Sertifikasi Karyawan",-1)),xe=e(()=>a("option",{selected:"",disabled:""},"Pilih sertifikasi",-1)),Se=e(()=>a("option",{value:"1"},"Tersertifikasi",-1)),De=e(()=>a("option",{value:"0"},"Belum Tersertifikasi",-1)),Ne=[xe,Se,De],je={class:"mb-3"},Ie=e(()=>a("label",{for:"wargaNegara",class:"form-label"},"Kewarganegaraan Karyawan",-1)),Me={class:"form-check"},Ce=e(()=>a("label",{class:"form-check-label",for:"warganegara1"},"WNI",-1)),Be={class:"form-check"},Ae=e(()=>a("label",{class:"form-check-label",for:"warganegara2"},"WNA",-1)),Te={class:"mb-3"},Ue=e(()=>a("label",{for:"jenisKelamin",class:"form-label"},"Jenis Kelamin Karyawan",-1)),Pe=e(()=>a("option",{selected:"",disabled:""},"Pilih jenis kelamin",-1)),Ve=e(()=>a("option",{value:"1"},"Laki-laki",-1)),Ee=e(()=>a("option",{value:"0"},"Perempuan",-1)),Fe=[Pe,Ve,Ee],Le=e(()=>a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1)),He={__name:"HiburanDetail",props:{id:{type:String,required:!0}},setup(c){const b=r(!1),g=r(""),S=()=>{b.value=!b.value,g.value=b.value?"toggled":""},l=r({}),_=r(!1),k=r(""),p=async n=>{_.value=!1;try{const t=await f.get(`https://api.surveiwisatadki.com/api/hiburan/detail-hiburan/${n}`,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log("test data:",t.data.data),l.value=t.data.data,_.value=!0,k.value=l.value.hiburan.koordinat||"-6.2088,106.8456"}catch(t){_.value=!0,console.error(t)}},s=r({namaKaryawan:"",pendidikanKaryawan:"",jabatanKaryawan:"",alamatKaryawan:"",sertifikasiKaryawan:"",wargaNegara:"",jenisKelamin:"",hiburan_id:""}),D=()=>{s.value.namaKaryawan="",s.value.pendidikanKaryawan="",s.value.jabatanKaryawan="",s.value.alamatKaryawan="",s.value.sertifikasiKaryawan="",s.value.wargaNegara="",s.value.jenisKelamin="",s.value.hiburan_id=l.value.hiburan.id},N=async()=>{try{const n=new FormData;n.append("namaKaryawan",s.value.namaKaryawan),n.append("pendidikanKaryawan",s.value.pendidikanKaryawan),n.append("jabatanKaryawan",s.value.jabatanKaryawan),n.append("alamatKaryawan",s.value.alamatKaryawan),n.append("sertifikasiKaryawan",s.value.sertifikasiKaryawan),n.append("wargaNegara",s.value.wargaNegara),n.append("jenisKelamin",s.value.jenisKelamin),n.append("hiburan_id",s.value.hiburan_id);const t=await f.post("https://api.surveiwisatadki.com/api/karyawan/input-karyawan-hiburan",n,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});p(u.id),h("Request Success","Karyawan berhasil ditambahkan","success")}catch(n){h("Request Failed","Karyawan gagal ditambahkan","error"),console.error(n)}},j=async()=>{const t=document.getElementById("fileExcel").files[0];if(!t){x.fire("Error","Please select a file","error");return}try{const o=new FormData;o.append("file",t);const w=await f.post(`https://api.surveiwisatadki.com/api/karyawan/import-karyawan-hiburan/${u.id}`,o,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token"),"Content-Type":"multipart/form-data"}});p(u.id),h("Request Success","Karyawan berhasil ditambahkan","success")}catch(o){h("Request Failed","Karyawan gagal ditambahkan","error"),console.error(o)}},h=(n,t,o)=>{x.fire({title:n,text:t,icon:o}).then(()=>{window.location.reload(),$("#tambahKaryawan").modal("hide"),$("#importKaryawan").modal("hide")})},I=()=>{p(u.id)},M=()=>{const n=sessionStorage.getItem("token");if(!n)return window.location.href="/",!1;try{const[t,o]=n.split("."),w=JSON.parse(atob(o)),C=new Date(w.exp*1e3);return new Date>C?(console.log("Token expired"),sessionStorage.removeItem("token"),window.location.href="/",!1):w.level!=="0"?(window.location.href="/unauthorized",!1):!0}catch(t){return console.error("Error decoding token:",t),window.location.href="/",!1}},u=c;return M()&&p(u.id),(n,t)=>(A(),T(P,null,[a("div",z,[m(L,{class:U(g.value)},null,8,["class"]),a("div",W,[a("div",O,[m(H,{onToggleSidebar:S}),a("div",G,[Q,X,a("div",Y,[a("div",Z,[aa,a("div",ea,[a("div",sa,[a("div",ta,[oa,a("div",na,[a("p",null,i(l.value.hiburan.namaHiburan),1)])])]),la,ia]),a("div",da,[a("div",ra,[a("div",ca,[ua,a("div",ma,[a("p",null,i(l.value.hiburan.namaPj),1)])])])]),a("div",_a,[a("div",pa,[a("div",ha,[va,a("div",ba,[a("p",null,i(l.value.hiburan.teleponPj),1)])])])]),a("div",wa,[a("div",ya,[a("div",fa,[ga,a("div",ka,[a("p",null,i(l.value.hiburan.nib),1)])])]),a("div",Ka,[a("div",xa,[Sa,a("div",Da,[a("p",null,i(l.value.hiburan.resiko),1)])])]),a("div",Na,[a("div",ja,[Ia,a("div",Ma,[a("p",null,i(l.value.hiburan.skalaUsaha),1)])])])]),a("div",Ca,[a("div",Ba,[a("div",Aa,[Ta,a("div",Ua,[a("p",null,i(l.value.hiburan.alamat),1)])])]),a("div",Pa,[Va,a("div",Ea,[a("div",Fa,[a("div",La,[a("div",Ha,[$a,a("div",Ja,i(l.value.lakiLaki),1)]),Ra])])])]),a("div",qa,[za,a("div",Wa,[a("div",Oa,[a("div",Ga,[a("div",Qa,[Xa,a("div",Ya,i(l.value.perempuan),1)]),Za])])])])]),a("div",ae,[a("div",ee,[m(R,{coordinates:k.value},null,8,["coordinates"])])]),a("div",{class:"row"},[a("div",{class:"col-sm-6 d-flex justify-content-start my-3"},[a("div",{class:"dropdown"},[se,a("div",{class:"dropdown-menu"},[te,a("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#tambahKaryawan",onClick:D},"Manual Input")])]),oe])]),m(q,{karyawanList:l.value.karyawan,ready:_.value,onUpdateData:I},null,8,["karyawanList","ready"])])])])]),m(J)])]),a("div",{class:"modal fade",id:"importKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"importKaryawanLabel","aria-hidden":"true"},[a("div",{class:"modal-dialog",role:"document"},[a("div",{class:"modal-content"},[ne,a("div",{class:"modal-body"},[a("form",{id:"karyawanForm"},[le,a("button",{type:"button",class:"btn btnCustomColor",onClick:j}," Import ")])])])])]),a("div",ie,[a("div",de,[a("div",re,[ce,a("div",ue,[a("form",null,[d(a("input",{type:"hidden",id:"hotel_id","onUpdate:modelValue":t[0]||(t[0]=o=>s.value.hotel_id=o),value:"{{ dataHotels.hotel.id }}"},null,512),[[v,s.value.hotel_id]]),a("div",me,[_e,d(a("input",{type:"text",class:"form-control",id:"namaKaryawan",placeholder:"masukkan nama karyawan","onUpdate:modelValue":t[1]||(t[1]=o=>s.value.namaKaryawan=o)},null,512),[[v,s.value.namaKaryawan]])]),a("div",pe,[he,d(a("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=o=>s.value.pendidikanKaryawan=o)},be,512),[[y,s.value.pendidikanKaryawan]])]),a("div",we,[ye,d(a("input",{type:"text",class:"form-control",id:"jabatanKaryawan",placeholder:"masukkan jabatan karyawan","onUpdate:modelValue":t[3]||(t[3]=o=>s.value.jabatanKaryawan=o)},null,512),[[v,s.value.jabatanKaryawan]])]),a("div",fe,[ge,d(a("input",{type:"text",class:"form-control",id:"alamatKaryawan",placeholder:"masukkan alamat karyawan","onUpdate:modelValue":t[4]||(t[4]=o=>s.value.alamatKaryawan=o)},null,512),[[v,s.value.alamatKaryawan]])]),a("div",ke,[Ke,d(a("select",{class:"form-select",id:"sertifikasiKaryawan","onUpdate:modelValue":t[5]||(t[5]=o=>s.value.sertifikasiKaryawan=o)},Ne,512),[[y,s.value.sertifikasiKaryawan]])]),a("div",je,[Ie,a("div",Me,[d(a("input",{class:"form-check-input",type:"radio",id:"warganegara1",value:"WNI","onUpdate:modelValue":t[6]||(t[6]=o=>s.value.wargaNegara=o)},null,512),[[K,s.value.wargaNegara]]),Ce]),a("div",Be,[d(a("input",{class:"form-check-input",type:"radio",id:"warganegara2",value:"WNA","onUpdate:modelValue":t[7]||(t[7]=o=>s.value.wargaNegara=o)},null,512),[[K,s.value.wargaNegara]]),Ae]),a("div",Te,[Ue,d(a("select",{class:"form-select",id:"jenisKelamin","onUpdate:modelValue":t[8]||(t[8]=o=>s.value.jenisKelamin=o)},Fe,512),[[y,s.value.jenisKelamin]])])]),a("div",{class:"modal-footer"},[Le,a("button",{type:"button",class:"btn blueButton",onClick:N}," Simpan ")])])])])])])],64))}},Qe=B(He,[["__scopeId","data-v-5c0eef5a"]]);export{Qe as default};
