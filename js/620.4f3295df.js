"use strict";(self["webpackChunknike"]=self["webpackChunknike"]||[]).push([[620],{4474:function(s,t,e){e.r(t),e.d(t,{default:function(){return z}});var r=e(6252),i=e(9963),c=e(3577),n=e.p+"img/bottom.fc56bfd1.svg",a=e.p+"img/top.91502a6d.svg";const o={class:"opt"},l={class:"container"},g={class:"opt__desc"},u={class:"sort__list"},_={src:n,alt:"",class:"sort__img"},d={src:a,alt:"",class:"sort__img"},p={class:"opt__num"},m={class:"products"},k={class:"container"},h={class:"products__cards"},C={class:"products__card-rating"},b=["src"],w={class:"products__name"},v={class:"products__inf"},y={class:"products__price"},P={class:"products__pagination"},f=["onClick"];function N(s,t,e,n,a,N){const D=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",o,[(0,r._)("div",l,[(0,r._)("div",g,[(0,r._)("ul",u,[(0,r._)("li",{class:"sort__item",onClick:t[0]||(t[0]=s=>a.listFunc=!a.listFunc)},[(0,r.Uk)(" Opt "),(0,r.wy)((0,r._)("img",_,null,512),[[i.F8,a.listFunc]]),(0,r.wy)((0,r._)("img",d,null,512),[[i.F8,!a.listFunc]])]),(0,r._)("ul",{class:(0,c.C_)(["sort__menu",{active:a.listFunc}])},[(0,r._)("li",{class:"sort__item",onClick:t[1]||(t[1]=(...t)=>s.sortAscending&&s.sortAscending(...t))},"Sort by prices 1-10"),(0,r._)("li",{class:"sort__item",onClick:t[2]||(t[2]=(...t)=>s.sortDescending&&s.sortDescending(...t))},"Sort by prices 10-1"),(0,r._)("li",{class:"sort__item",onClick:t[3]||(t[3]=(...t)=>s.sortAscendingRating&&s.sortAscendingRating(...t))},"Sort ratings ascending"),(0,r._)("li",{class:"sort__item",onClick:t[4]||(t[4]=(...t)=>s.sortDescendingRating&&s.sortDescendingRating(...t))},"Sort ratings in descending")],2)]),(0,r._)("p",p,[(0,r.Uk)(" Общее кол-во товаров - "),(0,r._)("span",null,(0,c.zw)(s.products.length),1)])])])]),(0,r._)("section",m,[(0,r._)("div",k,[(0,r._)("div",h,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(N.paginatedUsers,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"products__card",key:e},[(0,r._)("p",C,"★ "+(0,c.zw)(t?.rating),1),(0,r.Wm)(D,{to:{name:"ProductPage",params:{id:t?.id}},onClick:t=>s.$store.commit("setCategory",N.paginatedUsers[e].category),class:"products__rout"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:t?.thumbnail,alt:"",class:"products__img"},null,8,b)])),_:2},1032,["to","onClick"]),(0,r._)("h3",w,(0,c.zw)(t?.title),1),(0,r.Wm)(D,{to:{name:"CategoryName",params:{category:t?.category}},class:"products__category",onClick:t=>s.$store.commit("setCategory",N.paginatedUsers[e].category)},{default:(0,r.w5)((()=>[(0,r.Uk)("#"+(0,c.zw)(t.category),1)])),_:2},1032,["to","onClick"]),(0,r._)("div",v,[(0,r._)("div",y,(0,c.zw)(t.price)+"$",1),(0,r.Wm)(D,{to:{name:"ProductPage",params:{id:t?.id}},onClick:t=>s.$store.commit("setCategory",N.paginatedUsers[e].category),class:"products__btn"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Add to cart ")])),_:2},1032,["to","onClick"])])])))),128)),(0,r.wy)((0,r._)("p",null,"No more products",512),[[i.F8,!N.paginatedUsers?.length]])]),(0,r._)("div",P,[(0,r._)("button",{class:"products__pagination-btn prev",onClick:t[5]||(t[5]=(...s)=>N.prev&&N.prev(...s))}," Prev "),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(N.pages,((s,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,c.C_)(["products__pagination-page",{selected:s==a.pageNumber}]),key:t,onClick:t=>N.pageClick(s)},(0,c.zw)(s),11,f)))),128)),(0,r._)("button",{class:"products__pagination-btn next",onClick:t[6]||(t[6]=(...s)=>N.next&&N.next(...s))}," Next ")])])])],64)}var D=e(3907),U={name:"Intro",data(){return{usersPerPage:16,pageNumber:1,listFunc:!1}},computed:{...(0,D.rn)(["products","numbers","www","cart"]),sortedNumbers(){return[...this.products]},pages(){return Math.ceil(this.products?.length/this.usersPerPage)},paginatedUsers(){let s=(this.pageNumber-1)*this.usersPerPage,t=s+this.usersPerPage;return this.products.slice(s,t)}},created(){this.$store.dispatch("getProducts")},methods:{...(0,D.OI)(["sortAscending","sortDescending","sortAscendingRating","sortDescendingRating"]),pageClick(s){this.pageNumber=s},prev(){this.pageNumber>1&&this.pageNumber--},next(){this.pageNumber<Math.ceil(this.products?.length/this.usersPerPage)&&this.pageNumber++}}},F=e(3744);const A=(0,F.Z)(U,[["render",N]]);var z=A}}]);
//# sourceMappingURL=620.4f3295df.js.map