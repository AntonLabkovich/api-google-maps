(this["webpackJsonpapi-google-maps"]=this["webpackJsonpapi-google-maps"]||[]).push([[0],{68:function(e,t,a){e.exports=a(96)},73:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(73),a(54)),c=a(17),s=a(13),u=a(22),p=a(23),m=a(26),d=a(30),h=a(43),g=a(124),v=a(36),f=(a(90),function(e){var t=e.coords.split(",");return{type:"PLACE",coords:{id:e.id,lat:+t[0].trim(),lng:+t[1].trim()}}});var E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(h.Map,{google:this.props.google,zoom:17,style:{width:"75%"},center:{lat:this.props.HerePlace.lat,lng:this.props.HerePlace.lng}},r.a.createElement(h.Marker,{position:{lat:+this.props.HerePlace.lat,lng:+this.props.HerePlace.lng}}))}}]),t}(r.a.Component),b=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyCkvXjd0sh8FZZ7v_Y-0Ib0_cpr2R3Kpng",LoadingContainer:function(){return r.a.createElement("div",{className:"preloader-continer"},r.a.createElement(g.a,null))}})(Object(v.b)((function(e){return{HerePlace:e.HerePlace}}),(function(e){return{setSelectedPlace:function(t){return e(f(t))}}}))(E)),C=a(129),k=(a(91),a(128));function P(e){return r.a.createElement(k.a,{onClick:function(){return e.selectPlaceClick(e.palceItem.id)},raised:e.seclectedPlace.id===e.palceItem.id},r.a.createElement("p",null,e.palceItem.name))}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"ITEMS_IS_LOADING",isLoading:e}},O=a(20),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).selectPlace=function(e){var t=function(e,t){return e.find((function(e){return e.id===t}))}(a.props.places,e);a.props.setSelectedPlace(t)},a.state={timerID:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchData("https://antonlabkovich.github.io/api-google-maps/api/endpoint/plases.json",this.props.places);var t=setInterval((function(){e.props.fetchData("https://antonlabkovich.github.io/api-google-maps/api/endpoint/plases.json",e.props.places)}),3e3);this.setState({timerID:t})}},{key:"render",value:function(){var e=this;return this.props.hasErrored?r.a.createElement("p",{style:{position:"absolute",right:"0",top:"0",bottom:"0",width:"24%"}}," \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"):r.a.createElement(r.a.Fragment,null,this.props.isLoading?r.a.createElement("div",{style:{position:"absolute",right:"0",top:"0",bottom:"0",width:"24%"}},r.a.createElement(C.a,null)):r.a.createElement("div",{className:"cards",style:{position:"absolute",right:"0",top:"50px",width:"24%"}},this.props.places.map((function(t){return r.a.createElement(P,{palceItem:t,key:t.id,selectPlaceClick:e.selectPlace,seclectedPlace:e.props.thisPlace})}))))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerID)}}]),t}(r.a.Component),I=Object(O.d)(Object(v.b)((function(e){return{isLoading:e.isLoadingPlace,hasErrored:e.hasErroredPlace,places:e.Place,thisPlace:e.HerePlace}}),(function(e){return{fetchData:function(t,a){return e(function(e,t){return function(a){0===t.length&&a(j(!0)),fetch(e,{cache:"no-cache"}).then((function(e){return 0===t.length&&a(j(!1)),e})).then((function(e){return e.json()})).then((function(e){return a({type:"FETCH_ITEMS",data:e})})).catch((function(){return a(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{type:"ITEMS_HAS_ERRORED",hasErrored:e}}(!0))}))}}(t,a))},setSelectedPlace:function(t){return e(f(t))}}}))(y)),S=(a(92),a(130)),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).setCookie=function(e,t,a){(a=Object(l.a)({path:"/"},a)).expires instanceof Date&&(a.expires=a.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in a){n+="; "+r;var o=a[r];!0!==o&&(n+="="+o)}document.cookie=n},a.deleteCookie=function(e){a.setCookie(e,"",{"max-age":-1}),a.forceUpdate()},a.getCookie=function(){var e=document.cookie.match(new RegExp("(?:^|; )"+"login".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?decodeURIComponent(e[1]):void 0},a.state={cookie:!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.getCookie()?r.a.createElement("div",{className:"maps-page"},r.a.createElement(b,null),r.a.createElement(I,null),r.a.createElement(S.a,{variant:"contained",color:"primary",style:{position:"absolute",right:"0",top:"0",width:"24%"},onClick:function(){e.deleteCookie("login")}},"\u0412\u044b\u0445\u043e\u0434")):r.a.createElement(d.a,{to:"api-google-maps/login"})}}]),t}(r.a.Component),w=(a(94),a(95),a(97)),D=a(131),H=a(133),_=a(132),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){switch(e.target.id){case"name":return void a.setState({valueName:e.target.value});case"password":return void a.setState({valuePas:e.target.value});default:return}},a.handleClickCheck=function(){a.setState({remember:!a.state.remember})},a.handleClick=function(){var e=!1;a.setState({loading:!0}),fetch("https://antonlabkovich.github.io/api-google-maps/api/endpoint/users.json").then((function(e){return e.json()})).then((function(t){e=t.some((function(e){return e.name.toUpperCase()===a.state.valueName.toUpperCase()&&e.password===a.state.valuePas})),a.state.remember&&e?(document.cookie="login=true; max-age=3600",a.setState({login:1,loading:!1,valuePas:"",valueName:""})):e?(document.cookie="login=true",a.setState({login:1,loading:!1,valuePas:"",valueName:""})):a.setState({login:-1,loading:!1,valuePas:"",valueName:""})}))},a.state={valuePas:"",valueName:"",remember:!1,login:0,loading:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return 0===this.state.login||-1===this.state.login?r.a.createElement("div",{className:"auth"},this.state.loading?r.a.createElement(g.a,{className:"progress"}):r.a.createElement(w.a,{className:"auth-containerForm"},r.a.createElement("form",null,-1===this.state.login?r.a.createElement("div",null,r.a.createElement("p",null,"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f")):null,r.a.createElement("p",null,"Info - use name: Anton, password: 1234 "),r.a.createElement("div",null,r.a.createElement(D.a,{id:"name",label:"Name",variant:"outlined",className:"auth-containerForm-textinput",onChange:this.handleChange,error:!this.state.valueName,required:!0}),r.a.createElement(D.a,{id:"password",label:"Password",variant:"outlined",type:"password",onChange:this.handleChange,className:"auth-containerForm-textinput",error:!this.state.valuePas,required:!0})),r.a.createElement("div",null,r.a.createElement(S.a,{variant:"contained",color:"primary",disabled:!this.state.valuePas||!this.state.valueName,onClick:this.handleClick},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),r.a.createElement(H.a,{control:r.a.createElement(_.a,{checked:this.state.remember,color:"primary",onChange:this.handleClickCheck}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"}))))):r.a.createElement(d.a,{to:"api-google-maps/"})}}]),t}(r.a.Component);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(d.b,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"api-google-maps/",component:N}),r.a.createElement(d.b,{path:"api-google-maps/login",component:x}))))},R=a(38),A=a(60);var M=Object(O.c)({Place:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return JSON.stringify(t.data)!==JSON.stringify(e)?t.data:e;default:return e}},HerePlace:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PLACE":return t.coords;default:return e}},hasErroredPlace:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_HAS_ERRORED":return t.hasErrored;default:return e}},isLoadingPlace:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ITEMS_IS_LOADING":return t.isLoading;default:return e}}}),T=Object(O.e)(M,Object(O.a)(A.a));i.a.render(r.a.createElement(v.a,{store:T},r.a.createElement(R.a,null,r.a.createElement(L,null))),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.5f8001fe.chunk.js.map