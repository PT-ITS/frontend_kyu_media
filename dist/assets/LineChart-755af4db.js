import{q as i}from"./vue3-apexcharts-c5728896.js";import{_ as c,e as u,b as s,f as p,c as m,s as h}from"./index-ff3a5314.js";const l={props:{jumlahHotel:{type:String,required:!0},jumlahHiburan:{type:String,required:!0},jumlahFnb:{type:String,required:!0}},components:{apexchart:i},data(){return{tampilkan:!1,series:[],chartOptions:{chart:{height:350,type:"line"},xaxis:{categories:[]},yaxis:{labels:{formatter:function(e){return Math.round(e)}}},plotOptions:{line:{markers:{size:6}}}}}},created(){const e=[{user:{name:"Hotel"},note_count:this.jumlahHotel},{user:{name:"Hiburan"},note_count:this.jumlahHiburan},{user:{name:"Makan & Minuman"},note_count:this.jumlahFnb}],a=e.map(t=>t.user.name),r=e.map(t=>t.note_count);this.chartOptions.xaxis.categories=a,this.series=[{name:"Jumlah TallySheet",data:r}],this.tampilkan=!0}},_={id:"chart"};function d(e,a,r,t,n,x){const o=u("apexchart");return s(),p("div",_,[n.tampilkan?(s(),m(o,{key:0,type:"line",height:"350",options:n.chartOptions,series:n.series},null,8,["options","series"])):h("",!0)])}const y=c(l,[["render",d]]);export{y as L};