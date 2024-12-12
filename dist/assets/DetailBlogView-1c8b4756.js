import{N as _,F as g}from"./swiper-bundle-cf7f7112.js";import{a as m}from"./sweetalert2.all-10bdec2f.js";import{r as b,o as e,c as o,a as d,b as t,t as i,e as c,d as n,F as h,f as p,g as y,w as f}from"./index-075d1e88.js";import"./logo-42795f0e.js";const v={class:"main"},k=y('<section id="home" class="hero section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row align-items-center"><div class="col-lg d-flex justify-content-center"><div class="hero-content" data-aos="fade-up" data-aos-delay="200"><div class="company-badge mb-4"><i class="bi bi-gear-fill me-2"></i> Home <i class="bi bi-chevron-right"></i> Our Blog </div><div><h1 class="mb-4">Our Blog</h1></div></div></div></div></div></section>',1),w={id:"about",class:"about section"},B={class:"container d-flex flex-column align-items-center justify-content-center","data-aos":"fade-up","data-aos-delay":"100"},j={class:"row gy-4 align-items-center justify-content-center"},D={class:"col-xl-9","data-aos":"fade-up","data-aos-delay":"200"},N={key:0},O=["src","alt"],V={class:"mt-3 d-flex align-items-center"},U={class:"btn btn-primary me-3"},x={class:"mb-0 ps-3 border-start"},C=t("i",{class:"bi bi-calendar3 me-2"},null,-1),M={class:"mt-3"},S=["innerHTML"],A={key:1},F=t("h2",{class:"about-title"},"Our Blog",-1),I=t("p",{class:"about-description"}," Jasa Press Release Murah: Solusi Cerdas Untuk Bisnis Kamu. ",-1),L=[F,I],T={id:"about",class:"about section light-background"},H=t("div",{class:"container section-title","data-aos":"fade-up"},[t("h2",null,"Our Latest Articles & Blog")],-1),R={class:"container d-flex flex-column align-items-start justify-content-center","data-aos":"fade-up","data-aos-delay":"100"},J={class:"row gy-4 align-items-start justify-content-start"},K={class:"col-xl-12","data-aos":"fade-up","data-aos-delay":"200"},P={key:0,class:"d-flex flex-wrap gap-3"},z=["src","alt"],E={class:"card-body d-flex flex-column"},q={class:"card-title"},G=t("i",{class:"bi bi-arrow-up-right-circle-fill"},null,-1),Q={key:1},W=t("h2",{class:"about-title"},"Our Blog",-1),X=t("p",{class:"about-description"}," Jasa Press Release Murah: Solusi Cerdas Untuk Bisnis Kamu. ",-1),Y=[W,X],Z={data(){return{blog:[],latest_blog:[],layanan:[],kontak:[],id:null,ready:!1}},methods:{async fetchData(){this.ready=!1;try{const s=await m.get(`https://apikyu.instinctechsolution.com/api/all/detail-blog/${this.id}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.blog=s.data.data.blog,this.latest_blog=s.data.data.latest_blog,this.layanan=s.data.data.layanan,this.kontak=s.data.data.kontak,this.ready=!0}catch(s){console.error(s),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data.","error")}},showAlert(s,a,r){this.$swal({title:s,text:a,icon:r}).then(()=>{$("#addData").modal("hide"),$("#dataUpdate").modal("hide")})},getImageUrl(s){return s!=null?`https://apikyu.instinctechsolution.com/storage/${s}`:"https://via.placeholder.com/150"}},setup(){},mounted(){},watch:{"$route.params.id"(s){this.id=s,this.fetchData()}},created(){this.id=this.$route.params.id,this.fetchData()}},ot=Object.assign(Z,{__name:"DetailBlogView",setup(s){return(a,r)=>{const u=b("router-link");return e(),o(h,null,[d(_,{layanan:a.layanan},null,8,["layanan"]),t("main",v,[k,t("section",w,[t("div",B,[t("div",j,[t("div",D,[a.blog!=null?(e(),o("div",N,[t("img",{src:a.getImageUrl(a.blog.foto),class:"card-img-top",alt:a.blog.header,style:{height:"500px","object-fit":"cover"}},null,8,O),t("div",V,[t("button",U,i(a.blog.kategori),1),t("h6",x,[t("b",null,[C,c(" "+i(a.blog.tanggal),1)])])]),t("div",M,[t("h2",null,[t("b",null,i(a.blog.header),1)])]),t("div",{class:"about-description",innerHTML:a.blog.isi},null,8,S)])):n("",!0),a.blog==null||!a.ready?(e(),o("div",A,L)):n("",!0)])])])]),t("section",T,[H,t("div",R,[t("div",J,[t("div",K,[a.latest_blog!=null?(e(),o("div",P,[(e(!0),o(h,null,p(a.latest_blog,l=>(e(),o("div",{key:l.id,class:"card",style:{width:"18rem","flex-grow":"1","flex-shrink":"1"}},[t("img",{src:a.getImageUrl(l.foto),class:"card-img-top",alt:l.header,style:{height:"200px","object-fit":"cover"}},null,8,z),t("div",E,[t("h5",q,i(l.header),1),d(u,{to:`/blog/${l.id}`,class:"btn btn-primary mt-auto"},{default:f(()=>[c(" Read More "),G]),_:2},1032,["to"])])]))),128))])):n("",!0),a.latest_blog==null||!a.ready?(e(),o("div",Q,Y)):n("",!0)])])])])]),d(g,{layanan:a.layanan,kontak:a.kontak},null,8,["layanan","kontak"])],64)}}});export{ot as default};
