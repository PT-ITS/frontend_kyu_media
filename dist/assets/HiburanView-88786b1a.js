import{_ as K,b as _,f,g as a,F as S,z as j,t as v,C as g,r as w,i as h,n as N,l as x,j as m,v as p,D as P,E as k,x as D,y as I}from"./index-ff3a5314.js";import{S as C}from"./Sidebar-f27aa015.js";import{N as U,F as H}from"./Footer-a99f178f.js";import{r as V}from"./readXlsxFileBrowser-e2c7cc3d.js";import{M as L}from"./MapsView-7ea90c9d.js";import{a as M}from"./axios-a342f982.js";import{S as y}from"./sweetalert2.all-ba5903e9.js";import"./leaflet.curve-0e7c6766.js";const J={data(){return{karyawanList:[]}},mounted(){this.loadKaryawanData()},methods:{loadKaryawanData(){const o=localStorage.getItem("dataKaryawanHiburan");o&&(this.karyawanList=JSON.parse(o))},simpanData(){const o=document.getElementById("karyawanForm"),i={namaKaryawan:o.namaKaryawan.value,nikKaryawan:o.nikKaryawan.value,pendidikanKaryawan:o.pendidikanKaryawan.value,jenisKelamin:o.jenisKelamin.value,sertifikasiKaryawan:o.sertifikasiKaryawan.value,jabatanKaryawan:o.jabatanKaryawan.value,alamatKaryawan:o.alamatKaryawan.value,wargaNegara:o.wargaNegara1.checked?"WNI":"WNA"};let n=localStorage.getItem("dataKaryawanHiburan");n?n=JSON.parse(n):n=[],n.push(i),localStorage.setItem("dataKaryawanHiburan",JSON.stringify(n)),o.reset(),$("#tambahKaryawan").modal("hide"),this.loadKaryawanData()},hapusKaryawan(o){this.karyawanList.splice(o,1),localStorage.setItem("dataKaryawanHiburan",JSON.stringify(this.karyawanList))},onFileChange(o){let i=o.target.files?o.target.files[0]:null;i&&V(i).then(n=>{console.log("rows:",n);const e=n[0],b=n.slice(1).map(c=>{let r={};return e.forEach((u,d)=>{let s=c[d];u.toLowerCase()==="jeniskelamin"&&(s=s.toLowerCase()==="laki-laki"?"1":"0"),u.toLowerCase()==="sertifikasikaryawan"&&(s=s.toLowerCase()==="yes"?"1":"0"),r[u]=s}),r});console.log("Formatted Data:",b),localStorage.setItem("dataKaryawanHiburan",JSON.stringify(b)),this.loadKaryawanData(),$("#importKaryawan").modal("hide")}).catch(n=>{console.error("Error reading the Excel file:",n)})}}},T={class:"modal fade",id:"tambahKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"tambahKaryawanLabel","aria-hidden":"true"},A={class:"modal-dialog",role:"document"},E={class:"modal-content"},B=g('<div class="modal-header"><h5 class="modal-title" id="tambahKaryawanLabel"> Tambah Data Karyawan </h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><form id="karyawanForm"><div class="mb-3"><label for="namaKaryawan" class="form-label">Nama Lengkap</label><input type="text" class="form-control placeholder" id="namaKaryawan" placeholder="masukkan nama lengkap"></div><div class="row"><div class="col-sm-6"><div class="mb-3"><label for="nikKaryawan" class="form-label">NIK</label><input type="text" class="form-control placeholder" id="nikKaryawan" placeholder="masukkan nikKaryawan"></div></div><div class="col-sm-6"><div class="mb-3"><label for="pendidikanKaryawan" class="form-label">Pendidikan</label><input type="text" class="form-control placeholder" id="pendidikanKaryawan" placeholder="masukkan pendidikanKaryawan"></div></div></div><div class="row"><div class="col-sm-6"><div class="mb-3"><label for="jenisKelamin" class="form-label">Jenis Kelamin</label><select class="form-select" id="jenisKelamin" aria-label="Default select example"><option selected>Pilih Jenis Kelamin</option><option value="1">Laki-laki</option><option value="0">Perempuan</option></select></div></div><div class="col-sm-6"><div class="mb-3"><label for="sertifikasiKaryawan" class="form-label">Sertifikasi</label><select class="form-select" id="sertifikasiKaryawan" aria-label="Default select example"><option selected>Pilih Status Sertifikasi</option><option value="1">Tersertifikasi</option><option value="0">Belum Tersertifikasi</option></select></div></div></div><div class="mb-3"><label for="jabatanKaryawan" class="form-label">Jabatan</label><input type="text" class="form-control placeholder" id="jabatanKaryawan" placeholder="masukkan jabatanKaryawan"></div><div class="mb-3"><label for="alamatKaryawan" class="form-label">Alamat</label><textarea class="form-control" id="alamatKaryawan" rows="3"></textarea></div><div class="mb-3"><label for="wargaNegara" class="form-label">Kewarganegaraan</label><div class="row ms-3"><div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="radio" name="wargaNegara" id="wargaNegara1" value="WNI"><label class="form-check-label" for="wargaNegara1"> WNI </label></div></div><div class="col-sm-6"><div class="form-check"><input class="form-check-input" type="radio" name="wargaNegara" id="wargaNegara2" value="WNA"><label class="form-check-label" for="wargaNegara2"> WNA </label></div></div></div></div></form></div>',2),F={class:"modal-footer"},W=a("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),O={class:"modal fade",id:"importKaryawan",tabindex:"-1",role:"dialog","aria-labelledby":"importKaryawanLabel","aria-hidden":"true"},z={class:"modal-dialog",role:"document"},R={class:"modal-content"},X=a("div",{class:"modal-header"},[a("h5",{class:"modal-title",id:"importKaryawanLabel"}," Import Data Karyawan "),a("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[a("span",{"aria-hidden":"true"},"×")])],-1),q={class:"modal-body"},G={id:"karyawanForm"},Q={class:"mb-3"},Y=a("label",{for:"fileExcel",class:"form-label"},"File Excel",-1),Z={class:"table-responsive"},aa={class:"table"},ea=a("thead",null,[a("tr",null,[a("th",{scope:"col"},"No"),a("th",{scope:"col"},"Nama"),a("th",{scope:"col"},"Jabatan"),a("th",{scope:"col"},"Alamat"),a("th",{scope:"col"},"Jenis Kelamin"),a("th",{scope:"col"},"Kewarganegaraan"),a("th",{scope:"col"},"Sertifikasi"),a("th",{scope:"col"},"Aksi")])],-1),sa={scope:"row"},oa=["onClick"];function ta(o,i,n,e,b,c){return _(),f("div",null,[a("div",T,[a("div",A,[a("div",E,[B,a("div",F,[W,a("button",{type:"button",class:"btn blueButton",onClick:i[0]||(i[0]=(...r)=>c.simpanData&&c.simpanData(...r))}," Simpan ")])])])]),a("div",O,[a("div",z,[a("div",R,[X,a("div",q,[a("form",G,[a("div",Q,[Y,a("input",{type:"file",class:"form-control placeholder",id:"fileExcel",onChange:i[1]||(i[1]=(...r)=>c.onFileChange&&c.onFileChange(...r))},null,32)])])])])])]),a("div",Z,[a("table",aa,[ea,a("tbody",null,[(_(!0),f(S,null,j(b.karyawanList,(r,u)=>(_(),f("tr",{key:u},[a("th",sa,v(u+1),1),a("td",null,v(r.namaKaryawan),1),a("td",null,v(r.jabatanKaryawan),1),a("td",null,v(r.alamatKaryawan),1),a("td",null,v(r.jenisKelamin=="1"?"Laki-laki":"Perempuan"),1),a("td",null,v(r.wargaNegara),1),a("td",null,v(r.sertifikasiKaryawan=="1"?"Iya":"Tidak"),1),a("td",null,[a("button",{class:"btn btn-danger",type:"button",onClick:d=>c.hapusKaryawan(u)}," Hapus ",8,oa)])]))),128))])])])])}const la=K(J,[["render",ta]]);const l=o=>(D("data-v-e7f90729"),o=o(),I(),o),na={id:"wrapper"},ia={id:"content-wrapper",class:"d-flex flex-column"},ra={id:"content"},da={class:"container-fluid mt-4"},ca=l(()=>a("h1",{class:"mb-0 fw-bold customJudul"},"Selamat Datang!",-1)),ma=l(()=>a("p",null,"Semangat semoga harimu menyenangkan",-1)),ua={class:"customBox mt-3"},pa={class:"container-fluid"},ba=l(()=>a("h6",{class:"fw-bold pt-3 mb-3",style:{"font-size":"20px"}}," Input Data Hiburan ",-1)),va={class:"row"},ha={class:"col-sm-12"},_a={class:"mb-3"},fa=l(()=>a("label",{for:"namaUsaha",class:"form-label"},"Nama Usaha",-1)),wa=l(()=>a("div",{class:"col-sm-6"},null,-1)),ga=l(()=>a("div",{class:"col-sm-3"},null,-1)),ka={class:"row"},ya={class:"col-sm-6"},Ka={class:"mb-3"},Sa=l(()=>a("label",{for:"penanggungJawab",class:"form-label"},"Penanggung Jawab",-1)),ja={class:"col-sm-6"},Na={class:"mb-3"},xa=l(()=>a("label",{for:"nomorhp",class:"form-label"},"Nomor Telepon",-1)),Pa={class:"row"},Da={class:"col-sm-6"},Ia={class:"mb-3"},$a=l(()=>a("label",{for:"emailPj",class:"form-label"},"Email",-1)),Ca={class:"col-sm-6"},Ua={class:"mb-3"},Ha=l(()=>a("label",{for:"passwordPj",class:"form-label"},"Password",-1)),Va={class:"row"},La={class:"col-sm-3"},Ma={class:"mb-3"},Ja=l(()=>a("label",{for:"nik",class:"form-label"},"NIK",-1)),Ta={class:"col-sm-3"},Aa={class:"mb-3"},Ea=l(()=>a("label",{for:"pendidikanPj",class:"form-label"},"Pendidikan",-1)),Ba=g('<option selected disabled value="Pilih pendidikan" data-v-e7f90729> Pilih pendidikan </option><option value="SD/MI" data-v-e7f90729>SD/MI</option><option value="SMP/MTS" data-v-e7f90729>SMP/MTS</option><option value="SMA/SMK/MA" data-v-e7f90729>SMA/SMK/MA</option><option value="D3/S1/D4" data-v-e7f90729>D3/S1/D4</option><option value="S2" data-v-e7f90729>S2</option><option value="S3" data-v-e7f90729>S3</option>',7),Fa=[Ba],Wa={class:"col-sm-3"},Oa={class:"mb-3"},za=l(()=>a("label",{for:"kewarganegaraan",class:"form-label"},"Kewarganegaraan",-1)),Ra={class:"form-check"},Xa=l(()=>a("label",{class:"form-check-label",for:"wni"}," Warga Negara Indonesia ",-1)),qa={class:"col-sm-3"},Ga={class:"mb-3"},Qa=l(()=>a("label",{for:"kewarganegaraan",class:"form-label"}," ",-1)),Ya={class:"form-check"},Za=l(()=>a("label",{class:"form-check-label",for:"wna"}," Warga Negara Asing ",-1)),ae={class:"row"},ee={class:"col-sm-4"},se={class:"mb-3"},oe=l(()=>a("label",{for:"nib",class:"form-label"},"NIB",-1)),te={class:"col-sm-4"},le={class:"mb-3"},ne=l(()=>a("label",{for:"resiko",class:"form-label"},"Resiko",-1)),ie={class:"col-sm-4"},re={class:"mb-3"},de=l(()=>a("label",{for:"skalaUsaha",class:"form-label"},"Skala Usaha",-1)),ce={class:"row"},me={class:"col-sm-6"},ue={class:"mb-3"},pe=l(()=>a("label",{for:"alamat",class:"form-label"},"Alamat",-1)),be={class:"col-sm-6"},ve=g('<div class="dropdown" data-v-e7f90729><button class="btn btnCustomColor mt-3 dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" data-v-e7f90729> Tambah Karyawan </button><div class="dropdown-menu" data-v-e7f90729><a class="dropdown-item" href="#" data-toggle="modal" data-target="#importKaryawan" data-v-e7f90729>Import By Excel</a><a class="dropdown-item" href="#" data-toggle="modal" data-target="#tambahKaryawan" data-v-e7f90729>Manual Input</a></div></div><a class="btn btnCustomColor ms-2 mt-3" href="/format_data_karyawan.xlsx" download data-v-e7f90729> Download Contoh Import </a>',2),he=l(()=>a("button",{type:"submit",class:"btn btnCustomColor ps-5 pe-5 pt-2 pb-2"}," Simpan Data ",-1)),_e={created(){const o=sessionStorage.getItem("token");if(this.myToken=o,o)try{const[i,n]=o.split("."),e=JSON.parse(atob(i)),b=atob(n),c=JSON.parse(atob(o.split(".")[1])),r=c.exp,u=new Date(r*1e3);console.log("Waktu Kedaluwarsa (UTC):",u.toUTCString()),new Date>u?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman");const d=c.level;this.user_id=c.id,console.log("ini idddd:",this.user_id),d!=="1"?this.$router.push("/unauthorized"):(!e||!b)&&this.$router.push("/")}catch(i){console.error("Error decoding token:",i),this.$router.push("/")}else this.$router.push("/")}},fe=Object.assign(_e,{__name:"HiburanView",setup(o){const i=w(!1),n=w(""),e=w({namaHiburan:"",bintangHiburan:"",alamat:"",koordinat:"",namaPj:"",emailPj:"",passwordPj:"",nikPj:"",pendidikanPj:"",teleponPj:"",wargaNegaraPj:"WNI",surveyor_id:"1",nib:"",resiko:"",skalaUsaha:""}),b=()=>{i.value=!i.value,n.value=i.value?"toggled":""},c=d=>{console.log("Location selected:",d),e.value.koordinat=d},r=()=>{const d=localStorage.getItem("dataKaryawanHiburan");return d?JSON.parse(d):[]},u=async()=>{try{const d={hiburan:e.value,karyawan:r()},s=await M.post("https://api.surveiwisatadki.com/api/hiburan/input-hiburan",d,{headers:{Authorization:"Bearer "+sessionStorage.getItem("token")}});console.log(s.data),y.fire("Success","Data berhasil disimpan!","success"),Object.keys(e.value).forEach(t=>{e.value[t]=""}),localStorage.removeItem("dataKaryawanHiburan")}catch(d){console.error(d),y.fire("Error","Terjadi kesalahan saat menyimpan data.","error")}};return(d,s)=>(_(),f("div",na,[h(C,{class:N(n.value)},null,8,["class"]),a("div",ia,[a("div",ra,[h(U,{onToggleSidebar:b}),a("div",da,[ca,ma,a("div",ua,[a("div",pa,[ba,a("form",{onSubmit:x(u,["prevent"])},[a("div",va,[a("div",ha,[a("div",_a,[fa,m(a("input",{type:"text",class:"form-control custom-input",id:"namaUsaha",placeholder:"masukkan nama usaha","onUpdate:modelValue":s[0]||(s[0]=t=>e.value.namaHiburan=t)},null,512),[[p,e.value.namaHiburan]])])]),wa,ga]),a("div",ka,[a("div",ya,[a("div",Ka,[Sa,m(a("input",{type:"text",class:"form-control custom-input",id:"penanggungJawab",placeholder:"masukkan nama penanggung jawab","onUpdate:modelValue":s[1]||(s[1]=t=>e.value.namaPj=t)},null,512),[[p,e.value.namaPj]])])]),a("div",ja,[a("div",Na,[xa,m(a("input",{type:"text",class:"form-control custom-input",id:"nomorhp",placeholder:"masukkan nomor telepon","onUpdate:modelValue":s[2]||(s[2]=t=>e.value.teleponPj=t)},null,512),[[p,e.value.teleponPj]])])])]),a("div",Pa,[a("div",Da,[a("div",Ia,[$a,m(a("input",{type:"email",class:"form-control custom-input",id:"emailPj",placeholder:"masukkan email penanggung jawab","onUpdate:modelValue":s[3]||(s[3]=t=>e.value.emailPj=t)},null,512),[[p,e.value.emailPj]])])]),a("div",Ca,[a("div",Ua,[Ha,m(a("input",{type:"password",class:"form-control custom-input",id:"passwordPj",placeholder:"masukkan password penanggung jawab","onUpdate:modelValue":s[4]||(s[4]=t=>e.value.passwordPj=t)},null,512),[[p,e.value.passwordPj]])])])]),a("div",Va,[a("div",La,[a("div",Ma,[Ja,m(a("input",{type:"text",class:"form-control custom-input",id:"nik",placeholder:"masukkan nik","onUpdate:modelValue":s[5]||(s[5]=t=>e.value.nikPj=t)},null,512),[[p,e.value.nikPj]])])]),a("div",Ta,[a("div",Aa,[Ea,m(a("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":s[6]||(s[6]=t=>e.value.pendidikanPj=t)},Fa,512),[[P,e.value.pendidikanPj]])])]),a("div",Wa,[a("div",Oa,[za,a("div",Ra,[m(a("input",{class:"form-check-input",type:"radio",name:"kewarganegaraan",value:"WNI",id:"wni","onUpdate:modelValue":s[7]||(s[7]=t=>e.value.wargaNegaraPj=t)},null,512),[[k,e.value.wargaNegaraPj]]),Xa])])]),a("div",qa,[a("div",Ga,[Qa,a("div",Ya,[m(a("input",{class:"form-check-input",type:"radio",name:"kewarganegaraan",value:"WNA",id:"wna","onUpdate:modelValue":s[8]||(s[8]=t=>e.value.wargaNegaraPj=t)},null,512),[[k,e.value.wargaNegaraPj]]),Za])])])]),a("div",ae,[a("div",ee,[a("div",se,[oe,m(a("input",{type:"text",class:"form-control",id:"nib",placeholder:"masukkan nib","onUpdate:modelValue":s[9]||(s[9]=t=>e.value.nib=t)},null,512),[[p,e.value.nib]])])]),a("div",te,[a("div",le,[ne,m(a("input",{type:"text",class:"form-control",id:"resiko",placeholder:"masukkan resiko","onUpdate:modelValue":s[10]||(s[10]=t=>e.value.resiko=t)},null,512),[[p,e.value.resiko]])])]),a("div",ie,[a("div",re,[de,m(a("input",{type:"text",class:"form-control",id:"skalaUsaha",placeholder:"masukkan skala usaha","onUpdate:modelValue":s[11]||(s[11]=t=>e.value.skalaUsaha=t)},null,512),[[p,e.value.skalaUsaha]])])])]),a("div",ce,[a("div",me,[a("div",ue,[pe,m(a("textarea",{class:"form-control custom-input",id:"alamat",placeholder:"masukkan alamat",rows:"3","onUpdate:modelValue":s[12]||(s[12]=t=>e.value.alamat=t)},null,512),[[p,e.value.alamat]])])]),a("div",be,[h(L,{onLocationSelected:c})])]),ve,h(la),he],32)])])])]),h(H)])]))}}),xe=K(fe,[["__scopeId","data-v-e7f90729"]]);export{xe as default};