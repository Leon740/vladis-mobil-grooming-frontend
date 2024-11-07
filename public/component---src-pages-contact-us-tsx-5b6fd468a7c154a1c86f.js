"use strict";(self.webpackChunkvladis_mobil_grooming=self.webpackChunkvladis_mobil_grooming||[]).push([[630],{1686:function(e,a,t){t.r(a);var r=t(6540),n=t(6671),s=t(2421),l=t(3478),i=t(5290),o=t(9562),c=t(5879),m=t(7425),d=t(2664);a.default=function(){const e={icon:"icon-sections_contacts",title:"Contact Us",paragraph:"Have any questions or concerns? Feel free to ask."},a=[{name:"name",type:"text",isRequired:!0,placeholder:"Leo"},{name:"email",type:"email",isRequired:!0,placeholder:"leo@gmail.com"},{as:"mobile",name:"mobile",type:"text",isRequired:!0,placeholder:"267-977-1310",mask:"999-999-9999"},{as:"textarea",name:"message",type:"textarea",isRequired:!0,placeholder:"Any questions or concerns? Share your thoughts with us."}];return r.createElement(n.g,null,r.createElement(c.J,null),r.createElement(s.w,null,r.createElement("div",{className:"container"},r.createElement("div",{className:"section-inner-gap"},r.createElement(l.X,{icon:e.icon,title:e.title.replace("Contact",'<span class="text-sky-500">Contact</span>'),paragraph:e.paragraph}),r.createElement(m.l1,{initialValues:{name:"",email:"",mobile:"",message:""},validationSchema:d.Ik().shape({name:d.Yj().min(2,"Name should be more than 1 character").max(20,"Name should be less than 20 characters").required("Name is required"),email:d.Yj().email("Invalid Email").required("Email is required"),mobile:d.Yj().matches(/^\d{3}-\d{3}-\d{4}$/,"Invalid Mobile").required("Mobile is required"),message:d.Yj().min(2,"Message should be more than 1 character").max(500,"Message should be less than 500 characters").required("Message is required")}),onSubmit:(e,a)=>(async(e,a)=>{try{const t=new FormData;Object.entries(e).forEach((e=>{let[a,r]=e;t.append(a,r)})),t.append("form-name","contact"),(await fetch("/",{method:"POST",body:t})).ok?(alert("Message sent!"),a.resetForm(),window.location.href="/"):alert("Failed to send message.")}catch(t){console.error("Form submission error:",t)}})(e,a)},(e=>{let{errors:t,touched:n}=e;return r.createElement(m.lV,{name:"contact",method:"POST","data-netlify":"true",className:"section-inner-gap w-full xl:w-1/2"},r.createElement("div",{className:"flex flex-col gap-32 bg-white py-64 px-32 rounded-16"},r.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),a.map((e=>{let{as:a,name:s,type:l,isRequired:o,placeholder:c,mask:m}=e;return r.createElement(i.Z,{key:`input_${s}`,as:a,name:s,type:l,isRequired:o,placeholder:c,error:t[s],touched:n[s],mask:m})}))),r.createElement(o.n,{type:"Primary_Blue",aType:"submit",label:"Send my Message",icon:"icon-general_arrow"}))}))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-us-tsx-5b6fd468a7c154a1c86f.js.map