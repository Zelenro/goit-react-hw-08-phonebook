"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[775],{6775:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t=r(2791),a=r(9434),i=r(6916),s=function(n){return n.contacts.items},o=function(n){return n.filter},c=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},d=(0,i.P1)([s,o],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),l=r(208),m=r(1309),h=r(556),x=r(56),f=r(2715),p=r(9055),j=r(184),b=function(){var n=(0,a.v9)(d),e=(0,a.v9)(u),r=(0,a.v9)(c),i=(0,a.I0)(),s=(0,m.If)().colorMode;(0,t.useEffect)((function(){i((0,l.yF)())}),[i]);return null!==n&&void 0!==n&&n.length?(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)("p",{children:"Loading..."}),e&&(0,j.jsx)("p",{children:e}),(0,j.jsx)(h.M,{columns:[1,2,3,5],spacing:[2,2,4,6],alignItems:"center",py:4,children:n.map((function(n){return(0,j.jsxs)(x.K,{spacing:"2",p:"2",_hover:"dark"===s?{shadow:"outline"}:{shadow:"dark-lg"},borderRadius:"4px",border:"dark"===s?"1px":"2px",borderColor:"dark"===s?"gray.600":"gray.200",children:[(0,j.jsxs)(f.x,{isTruncated:!0,children:[" ",n.name]}),(0,j.jsxs)(f.x,{isTruncated:!0,children:[" tel: ",n.number]}),(0,j.jsx)(p.z,{as:"a",variant:"solid",type:"button",cursor:"pointer",onClick:function(){return e=n.id,void i((0,l.GK)(e));var e},children:"Delete"})]},n.id)}))})]}):(0,j.jsx)("p",{children:"No contacts found."})},v=r(5705),y=r(5984),g=r(8410),N=r(9657),I=r(930),k=r(6336),w=r(2437),C=r(6727),_=function(){var n=(0,a.I0)(),e=(0,a.v9)(s),r=C.Ry().shape({name:C.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+$/,"Name should contain only letters").min(3,"Enter a name from 3 to 50 letters!").max(50,"Enter a name from 3 to 50 letters!").required("Necessarily"),number:C.Z_().matches(/^[0-9]+$/,"Number should contain only digits").min(5,"Number not less than 5 digits and not more than 20 digits!").max(20,"Number not less than 5 digits and not more than 20 digits!").required("Necessarily")});return(0,j.jsx)(g.W,{py:4,maxW:"container.sm",children:(0,j.jsx)(v.J9,{initialValues:{name:"",number:""},validationSchema:r,onSubmit:function(r,t){var a={id:(0,y.x0)(),name:r.name,number:r.number};e.find((function(n){return n.name===a.name}))?alert("".concat(a.name," is already in contacts")):(n((0,l.uK)(a)),t.resetForm())},children:function(n){return(0,j.jsxs)(v.l0,{children:[(0,j.jsxs)(N.NI,{py:4,isInvalid:n.errors.name&&n.touched.name,id:"name",children:[(0,j.jsx)(I.l,{children:"Name:"}),(0,j.jsx)(v.gN,{as:k.I,type:"text",id:"name",name:"name",placeholder:"Name"}),(0,j.jsx)(v.Bc,{name:"name",component:w.J1})]}),(0,j.jsxs)(N.NI,{py:4,isInvalid:n.errors.number&&n.touched.number,id:"number",children:[(0,j.jsx)(I.l,{children:"Number:"}),(0,j.jsx)(v.gN,{as:k.I,type:"tel",id:"number",name:"number",placeholder:"Number"}),(0,j.jsx)(v.Bc,{name:"number",component:w.J1})]}),(0,j.jsx)(p.z,{type:"submit",mt:4,children:"Add contact"})]})}})})},W=r(6895),F=function(){var n=(0,a.I0)(),e=(0,a.v9)(o);return(0,j.jsx)(g.W,{py:4,maxW:"container.sm",children:(0,j.jsxs)(I.l,{children:["Find contacts by name",(0,j.jsx)(k.I,{type:"text",onChange:function(e){return n((0,W.T)(e.target.value.trim()))},value:e,name:"filter",id:"filter"})]})})};function E(){var n=(0,a.I0)(),e=(0,a.v9)(c);return(0,t.useEffect)((function(){n((0,l.yF)())}),[n]),(0,j.jsxs)(g.W,{maxW:"container.xl",children:[(0,j.jsx)(_,{}),(0,j.jsx)(F,{}),(0,j.jsx)("title",{children:"Contacts"}),e&&"Stand by, loading in progress...",(0,j.jsx)(b,{})]})}}}]);
//# sourceMappingURL=775.8702eef5.chunk.js.map