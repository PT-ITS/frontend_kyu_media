import{d as D,u as L,r as f,o as B,w as N,a as E,b as p,c as x,h as u,_ as M,e as j,f as _,g as t,i as q,j as m,v as S,k as O,l as R,m as U,n as A,p as F,q as J,s as V,t as z,x as G,y as H}from"./index-ff3a5314.js";import{a as W}from"./axios-a342f982.js";import{S as Y}from"./sweetalert2.all-ba5903e9.js";const Z="/img/login.png",K=D({props:{value:{default:""},chars:{default:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"},count:{default:5},hideLines:{type:Boolean,default:!1},customTextColor:{default:""},textColors:{default:()=>[]},isDirty:{type:Boolean,default:!0},width:{default:function(l){return l.count*30}},height:{default:50},canvasClass:{default:""},icon:{default:"refresh"},captchaFont:{default:"bold 28px sans-serif"}},emits:["isValid","getCode","update:modelValue"],setup(l,{emit:e}){const a=l,s=L(),c=f();let n=f(""),i=a.width,h=a.height;B(()=>{v()});const v=()=>{c.value.width=i,c.value.height=h;let o=c.value.getContext("2d");for(let d=0;d<a.count;d++){let g=Math.floor(Math.random()*a.chars.length),C=Math.random()*30*Math.PI/180,b=a.chars[g];n.value+=b;let k=10+d*25,y=30+Math.random()*8;o.font=a.captchaFont,o.translate(k,y),a.customTextColor?o.fillStyle=a.customTextColor:a.textColors.length?o.fillStyle=a.textColors[Math.floor(Math.random()*a.textColors.length)]:o.fillStyle=w(),o.rotate(C),o.fillText(b,0,0),o.rotate(-C),o.translate(-k,-y)}a.hideLines||I(),P()},I=()=>{let o=c.value.getContext("2d");for(let d=0;d<a.count;d++)o.strokeStyle=w(),o.beginPath(),o.moveTo(Math.random()*i,Math.random()*h),o.lineTo(Math.random()*i,Math.random()*h),o.stroke()},P=()=>{e("getCode",n.value)};N(()=>{n.value&&n.value===a.value?e("isValid",!0):e("isValid",!1)}),E(n,o=>{e("update:modelValue",o)});const w=()=>{let o=Math.floor(Math.random()*256),d=Math.floor(Math.random()*256),g=Math.floor(Math.random()*256);return"rgb("+o+","+d+","+g+")"},$=()=>{c.value.getContext("2d").clearRect(0,0,i,h),n.value="",v()},T=()=>u("div",{class:"vue_client_recaptcha"},[u("div",{class:"vue_client_recaptcha_icon",onClick:()=>$()},[u(s.icon?s.icon:"svg",{class:"vue_client_recaptcha_icon_svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[u("path",{d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z",fill:"#333333"})])]),u("canvas",{id:"captcha_canvas",class:`captcha_canvas ${a.canvasClass}`,ref:c},n.value)]);return(o,d)=>(p(),x(T))}});const Q={components:{VueClientRecaptcha:K},setup(){const l=f(""),e=O(),a=i=>{n.captchaCode=i},s=i=>{n.isValid=i,i&&c()},c=()=>{e.emit("emitCaptcha",!1)},n=f({captchaCode:null,isValid:!1});return{inputValue:l,data:n,getCaptchaCode:a,checkValidCaptcha:s,captchaM:c}}},X={class:"sample-captcha"},ee={class:"row"},te={class:"col-sm-6"},ae={class:"captcha-box"},se={class:"col-sm-6"},oe={class:"data-box"};function le(l,e,a,s,c,n){const i=j("VueClientRecaptcha");return p(),_("div",X,[t("div",ee,[t("div",te,[t("section",ae,[q(i,{value:s.inputValue,onGetCode:s.getCaptchaCode,onIsValid:s.checkValidCaptcha},null,8,["value","onGetCode","onIsValid"])])]),t("div",se,[t("section",oe,[m(t("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>s.inputValue=h),placeholder:"Masukkan captcha",class:"input",type:"text"},null,512),[[S,s.inputValue]])])])])])}const ne=M(Q,[["render",le]]);const r=l=>(G("data-v-98c556ae"),l=l(),H(),l),ie={class:"container-fluid login-container"},ce={class:"row h-100"},de=r(()=>t("div",{class:"col-md-6 d-flex align-items-center justify-content-center left-container d-none d-md-flex"},[t("div",{class:"box-container text-center"},[t("img",{src:Z,alt:"Image",class:"image img-fluid d-none d-md-block"}),t("div",{class:"text-container"},[t("h3",null,"Aplikasi Pengawasan Pariwisata"),t("p",null,'"Platform pengawasan pariwisata kami menyediakan solusi inovatif'),t("p",null,"untuk memantau dan mengelola destinasi pariwisata”.")])])],-1)),re={class:"col-md-6 d-flex align-items-center justify-content-center form-container"},he={class:"w-100 px-4"},ue=r(()=>t("h2",null,"Selamat Datang!",-1)),pe=r(()=>t("p",null,"Semoga harimu menyenangkan. Jangan lupa harus tetap semangat.",-1)),me={class:"form-group mb-3"},fe=r(()=>t("label",{for:"email"},"Email",-1)),ge={class:"form-group mb-3"},_e=r(()=>t("label",{for:"password"},"Password",-1)),ve={class:"input-group"},we=["type"],Ce={class:"form-group form-check ms-2 mb-3"},be=r(()=>t("label",{class:"form-check-label",for:"customCheck"},"Ingat Saya",-1)),ke={key:0,class:"mb-3 text-center"},ye=r(()=>t("img",{width:"48",height:"48",src:"https://img.icons8.com/fluency/48/checked.png",alt:"checked"},null,-1)),Ve={class:"mb-3"},xe=["disabled"],Me={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1,loading:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(l){this.captchaValidate=l},login(){this.loading=!0;const l=new FormData;l.append("email",this.form.email),l.append("password",this.form.password),W.post("https://api.surveiwisatadki.com/api/auth/login",l).then(e=>{if(this.cheked===!0){const s=JSON.stringify(this.form);localStorage.setItem("login",s)}else localStorage.getItem("login")&&localStorage.removeItem("login");const a=e.data.access_token;this.loading=!1,sessionStorage.setItem("token",a),e.data.level==="0"?this.$router.push("/survey-dashboard"):e.data.level==="1"?this.$router.push("/admin-dashboard"):e.data.level==="2"?this.$router.push("/pengelola-dashboard"):this.$router.push("/unauthorized")}).catch(e=>{console.error(e),this.captchaValidate=!0,this.loading=!1,Y.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},created(){const l=localStorage.getItem("login");l&&(this.form=JSON.parse(l),this.cheked=!0)}},Se=Object.assign(Me,{__name:"LoginView",setup(l){return(e,a)=>(p(),_("div",ie,[t("div",ce,[de,t("div",re,[t("div",he,[ue,pe,t("form",{class:"user",onSubmit:a[4]||(a[4]=R((...s)=>e.login&&e.login(...s),["prevent"]))},[t("div",me,[fe,m(t("input",{type:"email",id:"email","onUpdate:modelValue":a[0]||(a[0]=s=>e.form.email=s),class:"form-control",required:""},null,512),[[S,e.form.email]])]),t("div",ge,[_e,t("div",ve,[m(t("input",{type:e.showPassword?"text":"password",id:"password","onUpdate:modelValue":a[1]||(a[1]=s=>e.form.password=s),class:"form-control",required:""},null,8,we),[[U,e.form.password]]),t("button",{type:"button",class:"btn btn-outline-secondary",onClick:a[2]||(a[2]=(...s)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...s))},[t("i",{class:A(e.showPassword?"bi bi-eye-fill":"bi bi-eye-slash-fill")},null,2)])])]),t("div",Ce,[m(t("input",{type:"checkbox",class:"form-check-input",id:"customCheck","onUpdate:modelValue":a[3]||(a[3]=s=>e.cheked=s)},null,512),[[F,e.cheked]]),be]),e.captchaValidate===!1?(p(),_("div",ke,[ye,J(" You are human ")])):V("",!0),t("div",Ve,[e.captchaValidate===!0?(p(),x(ne,{key:0,onEmitCaptcha:e.captchaCode},null,8,["onEmitCaptcha"])):V("",!0)]),t("button",{type:"submit",class:"btn btn-primary w-100",style:{"background-color":"#3e9693 !important"},disabled:e.captchaValidate===!0},z(e.loading?"Loading ...":"Masuk"),9,xe)],32)])])])]))}}),Te=M(Se,[["__scopeId","data-v-98c556ae"]]);export{Te as default};
