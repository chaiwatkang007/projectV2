(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{971:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/template",function(){return a(720)}])},720:function(e,s,a){"use strict";a.r(s);var t=a(4246),n=a(7378),i=a(8830),c=a(6676),r=a.n(c),l=a(9858),d=a(8315),h=a(4472),o=a(5570),m=a(9894),x=a.n(m),u=a(8579),j=a.n(u);let{Meta:p}=l.default;s.default=function(){let[e,s]=(0,n.useState)(""),[a,c]=(0,n.useState)(!1),[m,u]=(0,n.useState)("2023-09-03"),[N,g]=(0,n.useState)("00:00"),[f,_]=(0,n.useState)([]),[v,A]=(0,n.useState)([]),[b,w]=(0,n.useState)(),[y,k]=(0,n.useState)([]),[S,E]=(0,n.useState)("DASHBOARD"),[C,O]=(0,n.useState)([]),[R,D]=(0,n.useState)(""),[H,L]=(0,n.useState)(1),[Z]=(0,n.useState)(10),M=H*Z,T=M-Z,I=C.slice(T,M),P=[];for(let e=1;e<=Math.ceil(C.length/Z);e++)P.push(e);let B=P.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",onClick:()=>L(e),children:e})},e)),[U,F]=(0,n.useState)(!1),[G,Q]=(0,n.useState)(""),[z,X]=(0,n.useState)(""),[q,K]=(0,n.useState)(""),[W,J]=(0,n.useState)(""),[V,Y]=(0,n.useState)(!1),verifyRecaptcha=async e=>{try{let s=await i.Z.post("https://www.google.com/recaptcha/api/siteverify",null,{params:{secret:"6Lcoi9onAAAAAJ_rNHdtMM7EGmubvFQC8slUHiTt",response:e}}),a=s.data;return a.success}catch(e){return console.error("Error verifying reCAPTCHA:",e),!1}},_handleLogin=async()=>{try{if(!z||!q){Q("Please enter a username password ");return}if(!V){Q("Please verify the ReCAPTCHA");return}await verifyRecaptcha(W);let e=await (0,i.Z)({method:"post",maxBodyLength:1/0,url:"/api/user/adminlog",headers:{"Content-Type":"application/json"},data:JSON.stringify({username:z,password:q})});if("admin"===e.data.result.role&&(console.log("Login successful! as admin"),F(!0)),"user"===e.data.result.role){Q("คุณไม่มีสิทธิ์เข้าถึง");return}}catch(e){i.Z.isAxiosError(e)&&e.response&&Q("Invalid username or password"),console.log("err=========>",e)}};(0,n.useEffect)(()=>{{let e=localStorage.getItem("usernamelogin");e&&s(e)}let fetchData=async()=>{try{let e=await i.Z.post("/api/temp/daytemp",{day:m}),s=e.data,a=s.result.map(e=>e.temp),t=s.result.map(e=>e.humidity),n=s.result.map(e=>e.time);_(a),A(t),w(n)}catch(e){console.error("Error fetching data:",e)}};fetchData();let fetchLog=async()=>{try{let e=await i.Z.get("/api/log"),s=e.data,a=s.result.rows.map(e=>({day:e.day,time:e.time,event_happening:e.event_happening}));console.log(a),O(a)}catch(e){console.error("Error fetching data:",e)}};fetchLog();let fetchpix=async()=>{try{let e=Math.random().toString(36).substring(7),s=await fetch("https://robohash.org/".concat(e,".png"));s.ok&&D(s.url)}catch(e){console.error("Error fetching avatar:",e)}};fetchpix();let fetchDataUser=async()=>{try{let e=await i.Z.get("/api/user"),s=e.data,a=s.result.count;s.result.rows[4].username,s.result.rows[0].username,s.result.rows[1].username,s.result.rows[3].username,console.log(a),k(a)}catch(e){console.error("Error fetching data:",e)}};fetchDataUser()},[m,N]);let selectMenu=e=>{E(e)};return(0,t.jsxs)("div",{children:[(0,t.jsxs)("header",{children:[(0,t.jsx)("title",{children:"Admin Dashboard"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap",rel:"stylesheet"}),(0,t.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",rel:"stylesheet"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"})]}),(0,t.jsxs)("div",{className:"grid-container",children:[(0,t.jsxs)("header",{className:"header",children:[(0,t.jsx)("div",{className:"menu-icon",onClick:()=>{c(!0)},children:(0,t.jsx)("span",{className:"material-icons-outlined",children:"menu"})}),(0,t.jsx)("div",{className:"header-left",children:(0,t.jsx)("span",{className:"material-icons-outlined",children:"search"})}),(0,t.jsxs)("div",{className:"header-right",children:[R&&(0,t.jsx)(j(),{className:"avatar-image",src:R,alt:"Avatar",width:40,height:25}),"Wellcome ",e]})]}),(0,t.jsxs)("aside",{id:"sidebar",className:a?"open":"",children:[(0,t.jsxs)("div",{className:"sidebar-title",children:[(0,t.jsxs)("div",{className:"sidebar-brand",children:[(0,t.jsx)("span",{className:"material-icons-outlined"}),"SENIOR PROJECT"]}),(0,t.jsx)("span",{className:"material-icons-outlined",onClick:()=>{c(!1)},children:"close"})]}),(0,t.jsxs)("ul",{className:"sidebar-list",children:[(0,t.jsx)("li",{className:"sidebar-list-item",children:(0,t.jsxs)("span",{onClick:()=>selectMenu("DASHBOARD"),children:[(0,t.jsx)("span",{className:"material-icons-outlined",children:"dashboard"})," ","DASHBOARD"]})}),(0,t.jsx)("li",{className:"sidebar-list-item",children:(0,t.jsxs)("span",{onClick:()=>selectMenu("TEAM"),children:[(0,t.jsx)("span",{className:"material-icons-outlined",children:"groups"})," TEAM"]})}),(0,t.jsx)("li",{className:"sidebar-list-item",children:(0,t.jsxs)("span",{onClick:()=>selectMenu("CONTROL"),children:[(0,t.jsx)("span",{className:"material-icons-outlined",children:"settings"})," ","CONTROL"]})}),(0,t.jsx)("li",{className:"sidebar-list-item",children:(0,t.jsxs)("span",{onClick:()=>selectMenu("ADMINLOG"),children:[(0,t.jsx)("span",{className:"material-icons-outlined",children:"construction"})," ","ADMINLOG"]})})]})]}),(0,t.jsxs)("main",{className:"main-container",children:[(0,t.jsx)("div",{className:"main-title",children:(0,t.jsx)("h2",{children:S})}),"DASHBOARD"===S&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"main-cards",children:[(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsx)("h2",{children:"USER"}),(0,t.jsx)("span",{className:"material-icons-outlined",children:"groups"})]}),(0,t.jsx)("h1",{children:y})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsx)("h2",{children:"ยาคงเหลือหลอดแรก"}),(0,t.jsx)("span",{className:"material-icons-outlined",children:"autorenew"})]}),(0,t.jsx)("div",{className:"prog",children:(0,t.jsx)(h.Z,{type:"circle",percent:30,size:"small"})})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsx)("h2",{children:"ยาคงเหลือหลอดสอง"}),(0,t.jsx)("span",{className:"material-icons-outlined",children:"autorenew"})]}),(0,t.jsx)("div",{className:"prog",children:(0,t.jsx)(h.Z,{type:"circle",percent:20,size:"small"})})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsx)("h2",{children:"ยาคงเหลือหลอดสาม"}),(0,t.jsx)("span",{className:"material-icons-outlined",children:"autorenew"})]}),(0,t.jsx)("div",{className:"prog",children:(0,t.jsx)(h.Z,{type:"circle",percent:25,size:"small"})})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"card-inner",children:[(0,t.jsx)("h2",{children:"ยาคงเหลือหลอดสี่"}),(0,t.jsx)("span",{className:"material-icons-outlined",children:"autorenew"})]}),(0,t.jsx)("div",{className:"prog",children:(0,t.jsx)(h.Z,{type:"circle",percent:25,size:"small"})})]})]}),(0,t.jsx)("div",{className:"products",children:(0,t.jsx)("div",{className:"social-media",children:(0,t.jsx)("div",{className:"product"})})})]}),"TEAM"===S&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"team1",children:(0,t.jsx)(l.default,{hoverable:!0,style:{width:300},cover:(0,t.jsx)(j(),{alt:"Professor Dr. Wisan Pathomchun",src:"https://www.bu.ac.th/uploads/professors/20230105094052_1p23gZ0mf2LULxu_5OPxgLGfPvFusU5.jpg",width:300,height:300}),children:(0,t.jsx)(p,{title:"ผศ.ดร.วิศาล พัฒน์ชู",description:"FACULTY ADVISORS"})})}),(0,t.jsx)("div",{className:"fixteam",children:(0,t.jsxs)("div",{className:"team-container",children:[(0,t.jsx)(l.default,{hoverable:!0,style:{width:300},cover:(0,t.jsx)(j(),{alt:"example",src:"https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/323320300_831499997912863_7842745807329510235_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=rGQgrI42kVkAX8myzqL&_nc_ht=scontent-bkk1-1.xx&oh=00_AfBzn8wiHhFqQahscKgZA6GZ8Uuycjs4_XmIsBrzy1QHOw&oe=65AB9287",width:300,height:300}),children:(0,t.jsx)(p,{title:"CHAIWAT COMERINTHRON",description:"SOFTWARE"})}),(0,t.jsx)(l.default,{hoverable:!0,style:{width:300},cover:(0,t.jsx)(j(),{alt:"example",src:"https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/337012394_233257582512653_7465760359736163477_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AIBW8QH9iccAX8a6YkL&_nc_ht=scontent-bkk1-1.xx&oh=00_AfAZHAXHEEdTLQHhiz2ZZ16K31c6Fu9Lnmr6iVP8E1aJVA&oe=65AD08B7",width:300,height:300}),children:(0,t.jsx)(p,{title:"KANOKPORN HUDSREE",description:"HARDWARE"})}),(0,t.jsx)(l.default,{hoverable:!0,style:{width:300},cover:(0,t.jsx)(j(),{alt:"example",src:"https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/371034662_1974338542924136_330610339788569331_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=1iN2Q8ZqQG8AX_hHb1c&_nc_ht=scontent-bkk1-1.xx&oh=00_AfBUxoo5yNrcwveoUeHBKkUgcNuFa1frfe_7rtQ14I-CdQ&oe=65ACAB4B",width:300,height:300}),children:(0,t.jsx)(p,{title:"KASSARAPON CHAYANANT",description:"HARDWARE"})}),(0,t.jsx)(l.default,{hoverable:!0,style:{width:300},cover:(0,t.jsx)(j(),{src:"https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/362951835_2042172992795649_5082259832039992477_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=8hNZEngh_18AX_Bs1E8&_nc_ht=scontent-bkk1-1.xx&oh=00_AfAiMdDH-5JG46uVpiF41lUKvZ9YRV_I4VWRZJlZiUqKrw&oe=65ACBCF1",alt:"example",width:300,height:300}),children:(0,t.jsx)(p,{title:"BENCHAPORN PHANMI",description:"CLOUD"})})]})})]}),"CONTROL"===S&&(0,t.jsx)(t.Fragment,{}),"ADMINLOG"===S&&(0,t.jsxs)(t.Fragment,{children:[U?null:(0,t.jsx)("div",{className:"beforelogin",children:(0,t.jsxs)("form",{children:[(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("label",{className:"signin",htmlFor:"signin",children:(0,t.jsx)("b",{children:(0,t.jsx)("h1",{children:"SIGN IN"})})}),(0,t.jsx)("label",{htmlFor:"uname",children:(0,t.jsx)("b",{children:"Username"})}),(0,t.jsx)("input",{type:"text",placeholder:"Enter Username",name:"uname",required:!0,value:z,onChange:e=>X(e.target.value)}),(0,t.jsx)("label",{htmlFor:"psw",children:(0,t.jsx)("b",{children:"Password"})}),(0,t.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0,value:q,onChange:e=>K(e.target.value)}),(0,t.jsx)(d.Z,{className:"b",children:(0,t.jsx)(x(),{href:"/forgorpassword",children:"forgot password"})}),(0,t.jsx)("div",{className:"cc",children:(0,t.jsx)(o.Z,{sitekey:"6Lcoi9onAAAAAMeXsjmOo05DRzAg1g3yuJqx9yqS",onChange:e=>{Y(!0),J(e||"")}})}),(0,t.jsx)(r(),{className:"buttonlogin",type:"primary",onClick:_handleLogin,children:"Login"})]}),(0,t.jsx)("p",{children:G})]})}),C.length>0&&U&&(0,t.jsxs)("div",{className:"admin-log-table",children:[(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Day"}),(0,t.jsx)("th",{children:"Time"}),(0,t.jsx)("th",{children:"Event"})]})}),I.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:e.day}),(0,t.jsx)("td",{children:e.time}),(0,t.jsx)("td",{children:e.event_happening})]},s))]}),(0,t.jsx)("div",{className:"pagination",children:(0,t.jsx)("ul",{className:"page-numbers",children:B})})]})]})]})]})]})}}},function(e){e.O(0,[676,830,542,570,476,335,774,888,179],function(){return e(e.s=971)}),_N_E=e.O()}]);