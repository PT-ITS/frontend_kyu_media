import{_ as K,b as _,f,g as a,F as S,z as j,t as h,C as w,r as g,i as b,n as N,l as P,j as d,v as p,D as x,E as k,x as D,y as I}from"./index-ff3a5314.js";import{S as V}from"./Sidebar-f27aa015.js";import{N as C,F as U}from"./Footer-a99f178f.js";/* empty css                                                     */import{r as L}from"./readXlsxFileBrowser-e2c7cc3d.js";import{M as H}from"./MapsView-7ea90c9d.js";import{a as M}from"./axios-a342f982.js";import{S as y}from"./sweetalert2.all-ba5903e9.js";import"./leaflet.curve-0e7c6766.js";const A={data(){return{karyawanList:[]}},mounted(){this.loadKaryawanData()},methods:{loadKaryawanData(){const t=localStorage.getItem("dataKaryawan");t&&(this.karyawanList=JSON.parse(t))},simpanData(){const t=document.getElementById("karyawanForm"),i={namaKaryawan:t.namaKaryawan.value,pendidikanKaryawan:t.pendidikanKaryawan.value,jenisKelamin:t.jenisKelamin.value,sertifikasiKaryawan:t.sertifikasiKaryawan.value,jabatanKaryawan:t.jabatanKaryawan.value,alamatKaryawan:t.alamatKaryawan.value,wargaNegara:t.wargaNegara1.checked?"WNI":"WNA"};let n=localStorage.getItem("dataKaryawan");n?n=JSON.parse(n):n=[],n.push(i),localStorage.setItem("dataKaryawan",JSON.stringify(n)),t.reset(),$("#tambahKaryawan").modal("hide"),this.loadKaryawanData()},hapusKaryawan(t){this.karyawanList.splice(t,1),localStorage.setItem("dataKaryawan",JSON.stringify(this.karyawanList))},onFileChange(t){let i=t.target.files?t.target.files[0]:null;i&&L(i).then(n=>{console.log("rows:",n);const e=n[0],v=n.slice(1).map(m=>{let r={};return e.forEach((u,c)=>{let s=m[c];u.toLowerCase()==="jeniskelamin"&&(s=s.toLowerCase()==="laki-laki"?"1":"0"),u.toLowerCase()==="sertifikasikaryawan"&&(s=s.toLowerCase()==="yes"?"1":"0"),r[u]=s}),r});console.log("Formatted Data:",v),localStorage.setItem("dataKaryawan",JSON.stringify(v)),this.loadKaryawanData(),$("#importKaryawan").modal("hide")}).catch(n=>{console.error("Error reading the Excel file:",n)})}}},J={class:"modal fade",id:"tambahKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"tambahKaryawanLabel","aria-hidden":"true"},T={class:"modal-dialog",role:"document"},W={class:"modal-content"},B=w('<div class="modal-header"><h5 class="modal-title" id="tambahKaryawanLabel"> Tambah Data Karyawan </h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><form id="karyawanForm"><div class="mb-3"><label for="namaKaryawan" class="form-label">Nama Lengkap</label><input type="text" class="form-control placeholder" id="namaKaryawan" placeholder="masukkan nama lengkap"></div><div class="col-sm-6"><div class="mb-3"><label for="pendidikanKaryawan" class="form-label">Pendidikan</label><input type="text" class="form-control placeholder" id="pendidikanKaryawan" placeholder="masukkan pendidikanKaryawan"></div></div><div class="row"><div class="col-sm-6"><div class="mb-3"><label for="jenisKelamin" class="form-label">Jenis Kelamin</label><select class="form-select" id="jenisKelamin" aria-label="Default select example"><option selected>Pilih Jenis Kelamin</option><option value="1">Laki-laki</option><option value="0">Perempuan</option></select></div></div><div class="col-sm-6"><div class="mb-3"><label for="sertifikasiKaryawan" class="form-label">Sertifikasi</label><select class="form-select" id="sertifikasiKaryawan" aria-label="Default select example"><option selected>Pilih Status Sertifikasi</option><option value="1">Tersertifikasi</option><option value="0">Belum Tersertifikasi</option></select></div></div></div><div class="mb-3"><label for="jabatanKaryawan" class="form-label">Jabatan</label><input type="text" class="form-control placeholder" id="jabatanKaryawan" placeholder="masukkan jabatanKaryawan"></div><div class="mb-3"><label for="alamatKaryawan" class="form-label">Alamat</label><textarea class="form-control" id="alamatKaryawan" rows="3"></textarea></div><div class="mb-3"><label for="wargaNegara" class="form-label">Kewarganegaraan</label><div class="row ms-3"><div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="radio" name="wargaNegara" id="wargaNegara1" value="WNI"><label class="form-check-label" for="wargaNegara1"> WNI </label></div></div><div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="radio" name="wargaNegara" id="wargaNegara2" value="WNA"><label class="form-check-label" for="wargaNegara2"> WNA </label></div></div></div></div></form></div>',2),E={class:"modal-footer"},F=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),O={class:"modal fade",id:"importKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"importKaryawanLabel","aria-hidden":"true"},z={class:"modal-dialog",role:"document"},R={class:"modal-content"},X=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"importKaryawanLabel"}," Import Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),q={class:"modal-body"},G={id:"karyawanForm"},Q={class:"mb-3"},Y=a("label",{for:"fileExcel",class:"form-label"},"File Excel",-1),Z={class:"table-responsive"},aa={class:"table"},ea=a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Nama"),a("th",{scope:"col"},"Jabatan"),a("th",{scope:"col"},"Alamat"),a("th",{scope:"col"},"Jenis Kelamin"),a("th",{scope:"col"},"Kewarganegaraan"),a("th",{scope:"col"},"Sertifikasi"),a("th",{scope:"col"},"Aksi")])],-1),sa={scope:"row"},oa=["onClick"];function ta(t,i,n,e,v,m){return _(),f("div",null,[a("div",J,[a("div",T,[a("div",W,[B,a("div",E,[F,a("button",{type:"button",class:"btn blueButton",onClick:i[0]||(i[0]=(...r)=>m.simpanData&&m.simpanData(...r))}," Simpan ")])])])]),a("div",O,[a("div",z,[a("div",R,[X,a("div",q,[a("form",G,[a("div",Q,[Y,a("input",{type:"file",class:"form-control placeholder",id:"fileExcel",onChange:i[1]||(i[1]=(...r)=>m.onFileChange&&m.onFileChange(...r))},null,32)])])])])])]),a("div",Z,[a("table",aa,[ea,a("tbody",null,[(_(!0),f(S,null,j(v.karyawanList,(r,u)=>(_(),f("tr",{key:u},[a("th",sa,h(u+1),1),a("td",null,h(r.namaKaryawan),1),a("td",null,h(r.jabatanKaryawan),1),a("td",null,h(r.alamatKaryawan),1),a("td",null,h(r.jenisKelamin=="1"?"Laki-laki":"Perempuan"),1),a("td",null,h(r.wargaNegara),1),a("td",null,h(r.sertifikasiKaryawan=="1"?"Iya":"Tidak"),1),a("td",null,[a("button",{class:"btn btn-danger",type:"button",onClick:c=>m.hapusKaryawan(u)}," Hapus ",8,oa)])]))),128))])])])])}const la=K(A,[["render",ta]]);const l=t=>(D("data-v-0f3a3998"),t=t(),I(),t),na={id:"wrapper"},ia={id:"content-wrapper",class:"d-flex flex-column"},ra={id:"content"},da={class:"container-fluid mt-4"},ca=l(()=>a("h1",{class:"mb-0 fw-bold customJudul"},"Selamat Datang!",-1)),ma=l(()=>a("p",null,"Semangat semoga harimu menyenangkan",-1)),pa={class:"customBox mt-3"},ua={class:"container-fluid"},va=l(()=>a("h6",{class:"fw-bold pt-3 mb-3",style:{"font-size":"20px"}}," Input Data Hotel ",-1)),ha={class:"row"},ba={class:"col-sm-6"},_a={class:"mb-3"},fa=l(()=>a("label",{for:"namaHotel",class:"form-label"},"Nama Hotel",-1)),ga={class:"col-sm-6"},wa={class:"mb-3"},ka=l(()=>a("label",{for:"jenisHotel",class:"form-label"},"Bintang Hotel",-1)),ya={class:"row"},Ka={class:"col-sm-6"},Sa={class:"mb-3"},ja=l(()=>a("label",{for:"penanggungJawab",class:"form-label"},"Penanggung Jawab",-1)),Na={class:"col-sm-6"},Pa={class:"mb-3"},xa=l(()=>a("label",{for:"nomorhp",class:"form-label"},"Nomor Telepon",-1)),Da={class:"row"},Ia={class:"col-sm-6"},Va={class:"mb-3"},$a=l(()=>a("label",{for:"emailPj",class:"form-label"},"Email",-1)),Ca={class:"col-sm-6"},Ua={class:"mb-3"},La=l(()=>a("label",{for:"passwordPj",class:"form-label"},"Password",-1)),Ha={class:"row"},Ma={class:"col-sm-6"},Aa={class:"mb-3"},Ja=l(()=>a("label",{for:"vip",class:"form-label"},"Kamar VIP",-1)),Ta={class:"col-sm-6"},Wa={class:"mb-3"},Ba=l(()=>a("label",{for:"std",class:"form-label"},"Kamar Standard",-1)),Ea={class:"row"},Fa={class:"col-sm-3"},Oa={class:"mb-3"},za=l(()=>a("label",{for:"nik",class:"form-label"},"NIK",-1)),Ra={class:"col-sm-3"},Xa={class:"mb-3"},qa=l(()=>a("label",{for:"pendidikanPj",class:"form-label"},"Pendidikan",-1)),Ga=w('<option selected disabled value="Pilih pendidikan" data-v-0f3a3998> Pilih pendidikan </option><option value="SD/MI" data-v-0f3a3998>SD/MI</option><option value="SMP/MTS" data-v-0f3a3998>SMP/MTS</option><option value="SMA/SMK/MA" data-v-0f3a3998>SMA/SMK/MA</option><option value="D3/S1/D4" data-v-0f3a3998>D3/S1/D4</option><option value="S2" data-v-0f3a3998>S2</option><option value="S3" data-v-0f3a3998>S3</option>',7),Qa=[Ga],Ya={class:"col-sm-6"},Za=l(()=>a("label",{for:"wargaNegaraPj",class:"form-label"},"Kewarganegaraan",-1)),ae={class:"row"},ee={class:"col-sm-6"},se={class:"form-check"},oe=l(()=>a("label",{class:"form-check-label",for:"wargaNegaraPjWNI"}," Warga Negara Indonesia ",-1)),te={class:"col-sm-6"},le={class:"form-check"},ne=l(()=>a("label",{class:"form-check-label",for:"wargaNegaraPjWNA"}," Warga Negara Asing ",-1)),ie={class:"row"},re={class:"col-sm-4"},de={class:"mb-3"},ce=l(()=>a("label",{for:"nib",class:"form-label"},"NIB",-1)),me={class:"col-sm-4"},pe={class:"mb-3"},ue=l(()=>a("label",{for:"resiko",class:"form-label"},"Resiko",-1)),ve={class:"col-sm-4"},he={class:"mb-3"},be=l(()=>a("label",{for:"skalaUsaha",class:"form-label"},"Skala Usaha",-1)),_e={class:"row"},fe={class:"col-sm-6"},ge={class:"mb-3"},we=l(()=>a("label",{for:"alamat",class:"form-label"},"Alamat",-1)),ke={class:"col-sm-6"},ye=w('<div class="dropdown" data-v-0f3a3998><button class="btn btnCustomColor mt-3 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" data-v-0f3a3998> Tambah Karyawan </button><div class="dropdown-menu" data-v-0f3a3998><a class="dropdown-item" href="#" data-toggle="modal" data-target="#importKaryawan" data-v-0f3a3998>Import By Excel</a><a class="dropdown-item" href="#" data-toggle="modal" data-target="#tambahKaryawan" data-v-0f3a3998>Manual Input</a></div></div><a class="btn btnCustomColor ms-2 mt-3" href="/format_data_karyawan.xlsx" download data-v-0f3a3998> Download Contoh Import </a>',2),Ke=l(()=>a("button",{type:"submit",class:"btn btnCustomColor ps-5 pe-5 pt-2 pb-2"}," Simpan Data ",-1)),Se={created(){const t=sessionStorage.getItem("token");if(this.myToken=t,t)try{const[i,n]=t.split("."),e=JSON.parse(atob(i)),v=atob(n),m=JSON.parse(atob(t.split(".")[1])),r=m.exp,u=new Date(r*1e3);console.log("Waktu Kedaluwarsa (UTC):",u.toUTCString()),new Date>u?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const c=m.level;this.user_id=m.id,console.log("ini idddd:",this.user_id),c!=="1"?this.$router.push("/unauthorized"):(!e||!v)&&this.$router.push("/")}catch(i){console.error("Error decoding token:",i),this.$router.push("/")}else this.$router.push("/")}},je=Object.assign(Se,{__name:"HotelView",setup(t){const i=g(!1),n=g(""),e=g({namaHotel:"",bintangHotel:"",kamarVip:"",kamarStandart:"",alamat:"",koordinat:"",namaPj:"",emailPj:"",passwordPj:"",nikPj:"",pendidikanPj:"",teleponPj:"",wargaNegaraPj:"WNI",surveyor_id:"1",nib:"",resiko:"",skalaUsaha:""}),v=()=>{i.value=!i.value,n.value=i.value?"toggled":""},m=c=>{console.log("Location selected:",c),e.value.koordinat=c},r=()=>{const c=localStorage.getItem("dataKaryawan");return c?JSON.parse(c):[]},u=async()=>{try{const c={hotel:e.value,karyawan:r()},s=await M.post("https://api.surveiwisatadki.com/api/hotel/input-hotel",c,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log(s.data),y.fire("Success","Data berhasil disimpan!","success"),Object.keys(e.value).forEach(o=>{e.value[o]=""}),localStorage.removeItem("dataKaryawan")}catch(c){console.error(c),y.fire("Error","Terjadi kesalahan saat menyimpan data.","error")}};return(c,s)=>(_(),f("div",na,[b(V,{class:N(n.value)},null,8,["class"]),a("div",ia,[a("div",ra,[b(C,{onToggleSidebar:v}),a("div",da,[ca,ma,a("div",pa,[a("div",ua,[va,a("form",{onSubmit:P(u,["prevent"])},[a("div",ha,[a("div",ba,[a("div",_a,[fa,d(a("input",{type:"text",class:"form-control custom-input",id:"namaHotel",placeholder:"masukkan nama hotel","onUpdate:modelValue":s[0]||(s[0]=o=>e.value.namaHotel=o)},null,512),[[p,e.value.namaHotel]])])]),a("div",ga,[a("div",wa,[ka,d(a("input",{type:"text",class:"form-control custom-input",id:"jenisHotel",placeholder:"masukkan bintang hotel","onUpdate:modelValue":s[1]||(s[1]=o=>e.value.bintangHotel=o)},null,512),[[p,e.value.bintangHotel]])])])]),a("div",ya,[a("div",Ka,[a("div",Sa,[ja,d(a("input",{type:"text",class:"form-control custom-input",id:"penanggungJawab",placeholder:"masukkan nama penanggung jawab","onUpdate:modelValue":s[2]||(s[2]=o=>e.value.namaPj=o)},null,512),[[p,e.value.namaPj]])])]),a("div",Na,[a("div",Pa,[xa,d(a("input",{type:"text",class:"form-control custom-input",id:"nomorhp",placeholder:"masukkan nomor telepon","onUpdate:modelValue":s[3]||(s[3]=o=>e.value.teleponPj=o)},null,512),[[p,e.value.teleponPj]])])])]),a("div",Da,[a("div",Ia,[a("div",Va,[$a,d(a("input",{type:"email",class:"form-control custom-input",id:"emailPj",placeholder:"masukkan email penanggung jawab","onUpdate:modelValue":s[4]||(s[4]=o=>e.value.emailPj=o)},null,512),[[p,e.value.emailPj]])])]),a("div",Ca,[a("div",Ua,[La,d(a("input",{type:"password",class:"form-control custom-input",id:"passwordPj",placeholder:"masukkan password penanggung jawab","onUpdate:modelValue":s[5]||(s[5]=o=>e.value.passwordPj=o)},null,512),[[p,e.value.passwordPj]])])])]),a("div",Ha,[a("div",Ma,[a("div",Aa,[Ja,d(a("input",{type:"text",class:"form-control custom-input",id:"vip",placeholder:"vip","onUpdate:modelValue":s[6]||(s[6]=o=>e.value.kamarVip=o)},null,512),[[p,e.value.kamarVip]])])]),a("div",Ta,[a("div",Wa,[Ba,d(a("input",{type:"text",class:"form-control custom-input",id:"std",placeholder:"std","onUpdate:modelValue":s[7]||(s[7]=o=>e.value.kamarStandart=o)},null,512),[[p,e.value.kamarStandart]])])])]),a("div",Ea,[a("div",Fa,[a("div",Oa,[za,d(a("input",{type:"text",class:"form-control custom-input",id:"nik",placeholder:"masukkan nik","onUpdate:modelValue":s[8]||(s[8]=o=>e.value.nikPj=o)},null,512),[[p,e.value.nikPj]])])]),a("div",Ra,[a("div",Xa,[qa,d(a("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":s[9]||(s[9]=o=>e.value.pendidikanPj=o)},Qa,512),[[x,e.value.pendidikanPj]])])]),a("div",Ya,[Za,a("div",ae,[a("div",ee,[a("div",se,[d(a("input",{class:"form-check-input",type:"radio",name:"wargaNegaraPj",id:"wargaNegaraPjWNI",value:"WNI","onUpdate:modelValue":s[10]||(s[10]=o=>e.value.wargaNegaraPj=o)},null,512),[[k,e.value.wargaNegaraPj]]),oe])]),a("div",te,[a("div",le,[d(a("input",{class:"form-check-input",type:"radio",name:"wargaNegaraPj",id:"wargaNegaraPjWNA",value:"WNA","onUpdate:modelValue":s[11]||(s[11]=o=>e.value.wargaNegaraPj=o)},null,512),[[k,e.value.wargaNegaraPj]]),ne])])])])]),a("div",ie,[a("div",re,[a("div",de,[ce,d(a("input",{type:"text",class:"form-control",id:"nib",placeholder:"masukkan nib","onUpdate:modelValue":s[12]||(s[12]=o=>e.value.nib=o)},null,512),[[p,e.value.nib]])])]),a("div",me,[a("div",pe,[ue,d(a("input",{type:"text",class:"form-control",id:"resiko",placeholder:"masukkan resiko","onUpdate:modelValue":s[13]||(s[13]=o=>e.value.resiko=o)},null,512),[[p,e.value.resiko]])])]),a("div",ve,[a("div",he,[be,d(a("input",{type:"text",class:"form-control",id:"skalaUsaha",placeholder:"masukkan skala usaha","onUpdate:modelValue":s[14]||(s[14]=o=>e.value.skalaUsaha=o)},null,512),[[p,e.value.skalaUsaha]])])])]),a("div",_e,[a("div",fe,[a("div",ge,[we,d(a("textarea",{class:"form-control custom-input",id:"alamat",rows:"3","onUpdate:modelValue":s[15]||(s[15]=o=>e.value.alamat=o)},null,512),[[p,e.value.alamat]])])]),a("div",ke,[b(H,{onLocationSelected:m})])]),ye,b(la),Ke],32)])])])]),b(U)])]))}}),Le=K(je,[["__scopeId","data-v-0f3a3998"]]);export{Le as default};