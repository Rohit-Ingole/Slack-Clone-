(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(29),i=c.n(a),r=(c(66),c(17)),o=(c(67),c(68),c(115)),l=c(54),j=c.n(l),d=c(55),u=c.n(d),h=c(56),b=c.n(h),O=c(3),m=Object(n.createContext)(),x=function(e){var t=e.initialState,c=e.reducer,s=e.children;return Object(O.jsx)(m.Provider,{value:Object(n.useReducer)(c,t),children:s})},p=function(){return Object(n.useContext)(m)};var v=function(){var e=p(),t=Object(r.a)(e,1)[0].user;return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsxs)("div",{className:"header__left",children:[Object(O.jsx)(o.a,{className:"header__avatar",alt:null===t||void 0===t?void 0:t.displayName,src:null===t||void 0===t?void 0:t.photoURL}),Object(O.jsx)(j.a,{})]}),Object(O.jsxs)("div",{className:"header__search",children:[Object(O.jsx)(u.a,{}),Object(O.jsx)("input",{placeholder:"Search Rohit Ingole"})]}),Object(O.jsx)("div",{className:"header__right",children:Object(O.jsx)(b.a,{})})]})},f=(c(74),c(75),c(11)),g=c(32),_=g.a.initializeApp({apiKey:"AIzaSyDNfvtDmagSxksMzQHMi9UIHSPf212EAaM",authDomain:"slack-clone-60917.firebaseapp.com",projectId:"slack-clone-60917",storageBucket:"slack-clone-60917.appspot.com",messagingSenderId:"264733567274",appId:"1:264733567274:web:510046c8d4099cd68a9653",measurementId:"G-0RX988JQV0"}).firestore(),N=g.a.auth(),I=new g.a.auth.GoogleAuthProvider,S=_;var C=function(e){var t=e.Icon,c=e.title,n=e.id,s=e.addChannelOption,a=Object(f.f)();return Object(O.jsxs)("div",{className:"sidebarOption",onClick:s?function(){var e=prompt("Please enter the channel name");e&&S.collection("rooms").add({name:e})}:function(){n?a.push("/room/".concat(n)):a.push(c)},children:[t&&Object(O.jsx)(t,{className:"sidebarOption__icon"}),t?Object(O.jsx)("h3",{children:c}):Object(O.jsxs)("h3",{className:"sidebarOption__channel",children:[Object(O.jsx)("span",{className:"sidebarOption__hash",children:"#"})," ",c]})]})},k=c(100),w=c(101),y=c(102),D=c(103),F=c(104),R=c(105),P=c(106),A=c(107),M=c(108),E=c(109),L=c(110),T=c(111);var B=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=p(),i=Object(r.a)(a,1)[0].user;return Object(n.useEffect)((function(){return S.collection("rooms").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))})),function(){}}),[]),Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsxs)("div",{className:"sidebar__header",children:[Object(O.jsxs)("div",{className:"sidebar__info",children:[Object(O.jsx)("h2",{children:"Web Dev React"}),Object(O.jsxs)("h3",{children:[Object(O.jsx)(k.a,{}),null===i||void 0===i?void 0:i.displayName]})]}),Object(O.jsx)(w.a,{})]}),Object(O.jsx)(C,{Icon:y.a,title:"Threads"}),Object(O.jsx)(C,{Icon:D.a,title:"Mentions & reactions"}),Object(O.jsx)(C,{Icon:F.a,title:"Saved items"}),Object(O.jsx)(C,{Icon:R.a,title:"Channel Browser"}),Object(O.jsx)(C,{Icon:P.a,title:"People & user groups"}),Object(O.jsx)(C,{Icon:A.a,title:"Apps"}),Object(O.jsx)(C,{Icon:M.a,title:"File browser"}),Object(O.jsx)(C,{Icon:E.a,title:"Show less"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C,{Icon:L.a,title:"Channels"}),Object(O.jsx)("hr",{}),Object(O.jsx)(C,{Icon:T.a,addChannelOption:!0,title:"Add Channel"}),c.map((function(e){return Object(O.jsx)(C,{title:e.name,id:e.id})}))]})},U=(c(80),c(112)),z=c(113);c(81);var G=function(e){var t=e.message,c=e.user,n=e.timestamp,s=e.userImage;return Object(O.jsxs)("div",{className:"message",children:[Object(O.jsx)("img",{src:s,alt:""}),Object(O.jsxs)("div",{className:"message__info",children:[Object(O.jsxs)("h4",{children:[c,Object(O.jsx)("span",{className:"message__timestamp",children:new Date(null===n||void 0===n?void 0:n.toDate()).toUTCString()})]}),Object(O.jsx)("p",{children:t})]})]})},H=(c(82),c(114));var J=function(e){var t=e.channelName,c=e.channelId,s=Object(n.useState)(""),a=Object(r.a)(s,2),i=a[0],o=a[1],l=p(),j=Object(r.a)(l,1)[0].user;return Object(O.jsx)("div",{className:"chatInput",children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{value:i,onChange:function(e){return o(e.target.value)},placeholder:"Message #".concat(null===t||void 0===t?void 0:t.toLowerCase())}),Object(O.jsx)(H.a,{type:"submit",onClick:function(e){e.preventDefault(),""===i?alert("Message Field is Compulsary !"):c&&(S.collection("rooms").doc(c).collection("messages").add({message:i,timestamp:g.a.firestore.FieldValue.serverTimestamp(),user:j.displayName,userImage:j.photoURL}),o(""))},children:"Send"})]})})};var Q=function(){var e=Object(f.g)().roomId,t=Object(n.useState)(null),c=Object(r.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)([]),o=Object(r.a)(i,2),l=o[0],j=o[1];return Object(n.useEffect)((function(){e&&S.collection("rooms").doc(e).onSnapshot((function(e){return a(e.data())})),S.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return j(e.docs.map((function(e){return e.data()})))}))}),[e]),Object(O.jsxs)("div",{className:"chat",id:"divChatContainer",children:[Object(O.jsxs)("div",{className:"chat__header",children:[Object(O.jsx)("div",{className:"chat__headerLeft",children:Object(O.jsxs)("h4",{className:"chat__channelName",children:[Object(O.jsxs)("strong",{children:["#",null===s||void 0===s?void 0:s.name]}),Object(O.jsx)(U.a,{})]})}),Object(O.jsx)("div",{className:"chat__headerRight",children:Object(O.jsxs)("p",{children:[Object(O.jsx)(z.a,{})," Details"]})})]}),console.log(l),Object(O.jsx)("div",{className:"chat__messages",children:null===l||void 0===l?void 0:l.map((function(e){var t=e.message,c=e.user,n=e.timestamp,s=e.userImage;return Object(O.jsx)(G,{message:t,user:c,userImage:s,timestamp:n})}))}),Object(O.jsx)(J,{channelName:null===s||void 0===s?void 0:s.name,channelId:e})]})},W=(c(83),c(47)),V="SET_USER",K=function(e,t){switch(t.type){case V:return Object(W.a)(Object(W.a)({},e),{},{user:t.user});default:return e}};var X=function(){var e=p(),t=Object(r.a)(e,2),c=(t[0],t[1]);return Object(O.jsx)("div",{className:"login",children:Object(O.jsxs)("div",{className:"login__container",children:[Object(O.jsx)("img",{src:"https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",alt:""}),Object(O.jsx)("h1",{children:"Sign in to Rohit Ingole HQ"}),Object(O.jsx)("p",{children:"rohit-ingole.slack.com"}),Object(O.jsx)(H.a,{onClick:function(){N.signInWithPopup(I).then((function(e){c({type:V,user:e.user})})).catch((function(e){alert(e.message)}))},children:"Sign in with Google"})]})})},q=c(38);var Y=function(){var e=p(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(q.a,{children:c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)("div",{className:"app__body",children:[Object(O.jsx)(B,{}),Object(O.jsxs)(f.c,{children:[Object(O.jsx)(f.a,{path:"/room/:roomId",children:Object(O.jsx)(Q,{})}),Object(O.jsx)(f.a,{path:"/",children:Object(O.jsx)("h1",{children:"Welcome"})})]})]})]}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(X,{})})})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(x,{initialState:{user:null},reducer:K,children:Object(O.jsx)(Y,{})})}),document.getElementById("root")),Z()}},[[84,1,2]]]);
//# sourceMappingURL=main.d6b172b0.chunk.js.map