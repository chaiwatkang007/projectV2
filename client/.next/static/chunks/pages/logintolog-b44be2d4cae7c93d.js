(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[990],{8315:function(e,n,r){"use strict";n.Z=void 0;var s=r(4466);n.Z=s.Col},4152:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logintolog",function(){return r(4601)}])},4601:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Logintolog}});var s=r(4246),a=r(7378),t=r(6676),o=r.n(t),i=r(8315),l=r(8830),c=r(6677),u=r.n(c),d=r(5570),h=r(9894),p=r.n(h);function Logintolog(){let[e,n]=(0,a.useState)(""),[r,t]=(0,a.useState)(""),[c,h]=(0,a.useState)(""),[g,m]=(0,a.useState)(""),[f,x]=(0,a.useState)(!1),verifyRecaptcha=async e=>{try{let n=await l.Z.post("https://www.google.com/recaptcha/api/siteverify",null,{params:{secret:"6Lcoi9onAAAAAJ_rNHdtMM7EGmubvFQC8slUHiTt",response:e}}),r=n.data;return r.success}catch(e){return console.error("Error verifying reCAPTCHA:",e),!1}},_handleLogin=async()=>{try{if(!r||!c){n("Please enter a username password ");return}if(!f){n("Please verify the ReCAPTCHA");return}await verifyRecaptcha(g);let e=await (0,l.Z)({method:"post",maxBodyLength:1/0,url:"/api/user/adminlog",headers:{"Content-Type":"application/json"},data:JSON.stringify({username:r,password:c})});if("admin"===e.data.result.role&&(console.log("Login successful!"),u().push("/template")),"user"===e.data.result.role){n("คุณไม่มีสิทธิ์เข้าถึง");return}}catch(e){l.Z.isAxiosError(e)&&e.response&&n("Invalid username or password"),console.log("err=========>",e)}};return(0,s.jsxs)("main",{className:"bg",children:[(0,s.jsx)("title",{children:"Sign in to SeniorProject"}),(0,s.jsx)("div",{className:"beforelogin",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("label",{className:"signin",htmlFor:"signin",children:(0,s.jsx)("b",{children:(0,s.jsx)("h1",{children:"SIGN IN"})})}),(0,s.jsx)("label",{htmlFor:"uname",children:(0,s.jsx)("b",{children:"Username"})}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Username",name:"uname",required:!0,value:r,onChange:e=>t(e.target.value)}),(0,s.jsx)("label",{htmlFor:"psw",children:(0,s.jsx)("b",{children:"Password"})}),(0,s.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0,value:c,onChange:e=>h(e.target.value)}),(0,s.jsx)(i.Z,{className:"b",children:(0,s.jsx)(p(),{href:"/forgotpassword",children:(0,s.jsx)("a",{children:"forgot password"})})}),(0,s.jsx)("div",{className:"cc",children:(0,s.jsx)(d.Z,{sitekey:"6Lcoi9onAAAAAMeXsjmOo05DRzAg1g3yuJqx9yqS",onChange:e=>{x(!0),m(e||"")}})}),(0,s.jsx)(o(),{className:"buttonlogin",type:"primary",onClick:_handleLogin,children:"Login"})]}),(0,s.jsx)("p",{children:e})]})})]})}},6677:function(e,n,r){e.exports=r(6250)}},function(e){e.O(0,[676,830,542,570,774,888,179],function(){return e(e.s=4152)}),_N_E=e.O()}]);