webpackJsonp([1],{"3CCX":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("UvQ2")},null,null).exports,s=n("/ocq"),r=n("//Fk"),l=n.n(r),c=n("Xxa5"),u=n.n(c),p=n("exGp"),h=n.n(p),d=n("Zx67"),f=n.n(d),v=n("zwoO"),m=n.n(v),_=n("Pf15"),g=n.n(_),b=n("Zrlr"),w=n.n(b),y=n("wxAW"),C=n.n(y),k=(function(t){function e(){w()(this,e);var t=m()(this,(e.__proto__||f()(e)).call(this));return t.canvas=document.getElementById("fire"),t.c=t.canvas.getContext("2d"),t.resize(),window.onresize=function(){t.resize()},t.width=t.canvas.width,t.height=t.canvas.height,t.max=100,t.size=100,t.fireDelay=700,t}g()(e,t),C()(e,[{key:"fireSet",value:function(){var t=h()(u.a.mark(function t(){var e,n,a,i,o,s,r,l,c,p,h,d;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=Math.random()*this.size+50,n=0,a=Math.random()*this.width-e,i=Math.random()*this.height-e,o=[],s=[],r=[],l=[],c=0;c<this.max;c++)o.push(360*Math.random()),s.push(Math.random()*e),r.push("hsla( "+360*Math.random()+", "+100*Math.random()+"%, 75% , 0.7 )"),l.push(3*Math.random());return p=50*Math.random(),h=Math.random()*this.fireDelay,d={size:e,count:n,x:a,y:i,direction:o,spread:s,color:r,remove:p,width:l},t.next=15,this.delay(this.animation(d),h);case 15:t.next=0;break;case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"delay",value:function(t,e){return new l.a(function(n){setTimeout(function(){n(t)},e)})}},{key:"animation",value:function(t){for(var e=this,n=0;n<this.max;n++){var a=void 0,i=(a=t.spread[n]>t.count?t.count:t.spread[n])-(t.size-t.count)/2<0?0:a-(t.size-t.count)/2;this.c.save(),this.c.beginPath(),this.c.strokeStyle=t.color[n],this.c.lineWidth=t.width[n],this.c.lineCap="round",this.c.translate(t.x,t.y),this.c.rotate(t.direction[n]*Math.PI/180),this.c.moveTo(0,0),this.c.lineTo(a,0),this.c.stroke(),this.c.beginPath(),this.c.strokeStyle="white",this.c.lineWidth=4,this.c.globalCompositeOperation="destination-out",this.c.moveTo(0,0),this.c.lineTo(i,0),this.c.stroke(),t.count>=t.size&&(this.c.lineTo(a<0?0:a,0),this.c.stroke()),this.c.globalCompositeOperation="source-over",this.c.restore()}if(t.count>=t.size)return!1;var o=t.size/150;t.remove=t.remove-o<=0?0:t.remove-o,t.count+=2,window.requestAnimationFrame(function(){e.animation(t)})}}])}(function(){function t(){w()(this,t)}return C()(t,[{key:"resize",value:function(){var t=document.body.clientHeight,e=document.body.clientWidth;this.canvas.width=e,this.canvas.height=t}},{key:"start",value:function(){this.fireSet()}},{key:"stop",value:function(){}}]),t}()),{name:"Index",computed:{profile:function(){return this.$store.state.profile}},created:function(){this.$store.dispatch("setJsonData")},data:function(){return{lang:"en"}},methods:{getDate:function(){return((new Date).getFullYear()+1+"").substring(2,4)}},mounted:function(){}}),x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.keys(t.profile).length?n("div",{staticClass:"container"},[n("canvas",{attrs:{id:"fire"}}),t._v(" "),n("div",{staticClass:"row first"},[n("button",{staticClass:"btn btn-light",domProps:{innerHTML:t._s(t.profile.profile[t.lang].korean)},on:{click:function(e){t.lang="kr"}}}),t._v(" "),n("button",{staticClass:"btn btn-light",domProps:{innerHTML:t._s(t.profile.profile[t.lang].english)},on:{click:function(e){t.lang="en"}}}),t._v(" "),n("router-link",{attrs:{to:"/admin"}},[n("button",{staticClass:"btn btn-light",domProps:{innerHTML:t._s(t.profile.profile[t.lang].admin)}})])],1),t._v(" "),n("div",{staticClass:"row"},[n("h2",{staticClass:"page-header"},[t._v(t._s(t.profile.profile[t.lang].name.toUpperCase())+" "),n("small",[t._v(t._s(t.profile.profile[t.lang].job))])])]),t._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"page-header"},[t._v(t._s(t.profile.profile[t.lang].title.profile))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title.name))]),t._v(" "+t._s(t.profile.profile[t.lang].name))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title.age))]),t._v(" "+t._s(t.getDate()))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title.birthday))]),t._v(" "+t._s(t.profile.profile[t.lang].birthday))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title.address))]),t._v(" "+t._s(t.profile.profile[t.lang].address))]),t._v(" "),n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title.github))]),t._v(" "),n("router-link",{attrs:{to:"/github"}},[t._v(t._s(t.profile.profile.github))])],1),t._v(" "),t._l(t.profile.profile[t.lang].profile,function(e,a){return n("ul",{key:a},[n("p",[n("strong",[t._v(t._s(t.profile.profile[t.lang].title[a]))])]),t._v(" "),t._l(e,function(e,a){return n("li",{key:a},[t._v(t._s(e))])})],2)})],2),t._v(" "),n("div",{staticClass:"row"},[n("h3",{staticClass:"page-header"},[t._v(t._s(t.profile.profile[t.lang].title.career))]),t._v(" "),t._l(t.profile.profile[t.lang].curriculum,function(e,a){return n("ul",{key:a},[n("h4",[t._v(t._s(a))]),t._v(" "),t._l(e,function(e,a){return n("li",{key:a},[t._v(t._s(e))])})],2)})],2),t._v(" "),t._m(0)]):n("div",[t._v("데이터 가져오는중")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row page-footer blue"},[e("p",[this._v("Copyright 2018. JUNHO MUN. All rights reserved. ")])])}]};var M=n("VU/8")(k,x,!1,function(t){n("wWSS")},null,null).exports,D=n("mvHQ"),z=n.n(D),J={name:"Admin",created:function(){this.$store.dispatch("setJsonData")},computed:{profile:function(){return z()(this.$store.state.profile,null,4)}},data:function(){return{password:"",real:"junho",type:"none"}},methods:{send:function(){this.password===this.real?this.type="success":this.type="error"},save:function(t){var e=JSON.parse(t.target.elements.data.value);this.$store.dispatch("saveJsonData",e)},download:function(){var t="data:text/json;utf-8,"+encodeURIComponent(JSON.parse(z()(this.profile,null,4))),e=document.createElement("a");e.download="data.json",e.href=t,e.click()}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"success"!=t.type?n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[t._v("Admin Page")]),t._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"form-group"},[n("form",{attrs:{action:"",onsubmit:"return false"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",autofocus:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),n("button",{staticClass:"btn btn-primary form-control",on:{click:t.send}},[t._v("Send")])]),t._v(" "),n("p",{class:t.type},[t._v("비밀번호가 일치하지 않습니다.")])])])]):n("div",{staticClass:"container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[n("textarea",{staticClass:"form-control",attrs:{name:"data",rows:"30"}},[t._v(t._s(t.profile))]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("저장하기")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.download}},[t._v("다운로드")]),t._v(" "),n("router-link",{attrs:{to:"/"}},[n("button",{staticClass:"btn btn-primary"},[t._v("돌아가기")])])],1)])},staticRenderFns:[]};var P=n("VU/8")(J,S,!1,function(t){n("3CCX")},null,null).exports;a.a.use(s.a);var T=new s.a({mode:"history",routes:[{path:"/",name:"Index",component:M},{path:"/admin",name:"Admin",component:P},{path:"/github",beforeEnter:function(){location.href="https://github.com/junho2343"}}]}),$=n("NYxO"),A=n("mtWM"),O=n.n(A);a.a.use($.a),a.a.prototype.$http=O.a;var U=new $.a.Store({state:{profile:{}},mutations:{updateJsonData:function(t,e){t.profile=e}},actions:{setJsonData:function(t){O.a.get("/data/get").then(function(e){t.commit("updateJsonData",e.data)})},saveJsonData:function(t,e){var n=this;console.log(e),O.a.post("/data/set",e).then(function(t){n.dispatch("setJsonData",t.data)})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:T,store:U,components:{App:o},template:"<App/>"})},UvQ2:function(t,e){},wWSS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.99bd2f3224c1d2351e7e.js.map