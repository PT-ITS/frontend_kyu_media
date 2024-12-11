import{N as _,F as g}from"./swiper-bundle-c6b4770d.js";import{a as m}from"./sweetalert2.all-10b92cf6.js";import{r as f,o,c as l,a as i,b as a,F as d,f as p,d as c,w as h,g as y,t as b,e as u}from"./index-41c00ed5.js";import"./logo-42795f0e.js";const v={class:"main"},k=y('<section id="home" class="hero section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row align-items-center"><div class="col-lg d-flex justify-content-center"><div class="hero-content" data-aos="fade-up" data-aos-delay="200"><div class="company-badge mb-4"><i class="bi bi-gear-fill me-2"></i> Home <i class="bi bi-chevron-right"></i> Our Blog </div><div><h1 class="mb-4">Our Blog</h1></div></div></div></div></div></section>',1),w={id:"about",class:"about section"},x={class:"container d-flex flex-column align-items-start justify-content-center","data-aos":"fade-up","data-aos-delay":"100"},B={class:"row gy-4 align-items-start justify-content-start"},j={class:"col-xl-12","data-aos":"fade-up","data-aos-delay":"200"},N={key:0,class:"d-flex flex-wrap gap-3"},V=["src","alt"],F={class:"card-body d-flex flex-column"},A={class:"card-title"},D=a("i",{class:"bi bi-arrow-up-right-circle-fill"},null,-1),I={key:1},O={class:"card",style:{width:"18rem","flex-grow":"1","flex-shrink":"1"}},C=a("img",{src:"https://via.placeholder.com/150",class:"card-img-top",alt:"Foto Blog",style:{height:"200px","object-fit":"cover"}},null,-1),S={class:"card-body d-flex flex-column"},U=a("h5",{class:"card-title"},[a("b",null,"Article")],-1),M=a("i",{class:"bi bi-arrow-up-right-circle-fill"},null,-1),R={data(){return{activeFaqIndex:null,blog:[],layanan:[],kontak:[],ready:!1}},methods:{async fetchData(){this.ready=!1;try{const t=await m.get("http://127.0.0.1:8000/api/all/blog",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.blog=t.data.data.blog,this.layanan=t.data.data.layanan,this.kontak=t.data.data.kontak,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(t,e,n){this.$swal({title:t,text:e,icon:n}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},getImageUrl(t){return t!=null?`http://127.0.0.1:8000/storage/${t}`:"https://via.placeholder.com/150"}},setup(){},mounted(){},created(){this.fetchData()}},H=Object.assign(R,{__name:"BlogView",setup(t){return(e,n)=>{const r=f("router-link");return o(),l(d,null,[i(_,{layanan:e.layanan},null,8,["layanan"]),a("main",v,[k,a("section",w,[a("div",x,[a("div",B,[a("div",j,[e.blog!=null?(o(),l("div",N,[(o(!0),l(d,null,p(e.blog,s=>(o(),l("div",{key:s.id,class:"card",style:{width:"18rem","flex-grow":"1","flex-shrink":"1"}},[a("img",{src:e.getImageUrl(s.foto),class:"card-img-top",alt:s.header,style:{height:"200px","object-fit":"cover"}},null,8,V),a("div",F,[a("h5",A,[a("b",null,b(s.header),1)]),i(r,{to:`/blog/${s.id}`,class:"btn btn-primary mt-auto"},{default:h(()=>[u(" Read More "),D]),_:2},1032,["to"])])]))),128))])):c("",!0),e.blog==null||!e.ready?(o(),l("div",I,[a("div",O,[C,a("div",S,[U,i(r,{to:"#",class:"btn btn-primary mt-auto"},{default:h(()=>[u(" Read More "),M]),_:1})])])])):c("",!0)])])])])]),i(g,{layanan:e.layanan,kontak:e.kontak},null,8,["layanan","kontak"])],64)}}});export{H as default};
