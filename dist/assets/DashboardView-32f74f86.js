import{S as p,N as _,F as u}from"./Footer-9a29b948.js";import{_ as g,k as l,o as h,c as m,a as t,n as b,b as s,B as f,C as v}from"./index-41c00ed5.js";import"./sweetalert2.all-10b92cf6.js";const S=e=>(f("data-v-f5428946"),e=e(),v(),e),k={id:"wrapper"},w={id:"content-wrapper",class:"d-flex flex-column"},x={id:"content"},y=S(()=>s("div",{class:"container-fluid mt-4"},[s("h1",{class:"mb-0 fw-bold customJudul"},"Dashboard"),s("p",null,"Semangat semoga harimu menyenangkan")],-1)),D={data(){return{dataDashboards:[],selectedChartType:"weekly",ready:!1}},methods:{},created(){const e=sessionStorage.getItem("token");if(e)try{const[a,o]=e.split("."),r=JSON.parse(atob(a)),c=atob(o),i=JSON.parse(atob(e.split(".")[1])).exp,n=new Date(i*1e3);console.log("Waktu Kedaluwarsa (UTC):",n.toUTCString()),new Date>n?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/login")):console.log("Aman")}catch(a){console.error("Error decoding token:",a),this.$router.push("/login")}else this.$router.push("/login")}},B=Object.assign(D,{__name:"DashboardView",setup(e){const a=l(!1),o=l(""),r=()=>{a.value=!a.value,o.value=a.value?"toggled":""};return(c,d)=>(h(),m("div",k,[t(p,{class:b(o.value)},null,8,["class"]),s("div",w,[s("div",x,[t(_,{onToggleSidebar:r}),y]),t(u)])]))}}),T=g(B,[["__scopeId","data-v-f5428946"]]);export{T as default};