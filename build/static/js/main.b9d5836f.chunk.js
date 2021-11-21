(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{122:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(38),s=n.n(r),i=(n(122),n(16)),c=n(17),l=n(18),d=n(29),u=n(20),p=n(19),m=(n(30),n(184)),j=n(1),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.personalInfo,t=e.name,n=e.title,a=e.email,o=e.phone,r=e.location,s=e.website,i=e.description;return Object(j.jsxs)("div",{className:"personal-info-form",children:[Object(j.jsx)("h2",{children:"Personal Details"}),Object(j.jsx)(m.a,{defaultValue:t,onChange:this.props.setPersonalInfo("name"),label:"Full name",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:n,onChange:this.props.setPersonalInfo("title"),label:"Title",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:a,onChange:this.props.setPersonalInfo("email"),label:"Email",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:o,onChange:this.props.setPersonalInfo("phone"),label:"Phone",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:r,onChange:this.props.setPersonalInfo("location"),label:"Location",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:s,onChange:this.props.setPersonalInfo("website"),label:"Website",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:i,onChange:this.props.setPersonalInfo("description"),id:"personalDescInput",label:"Description",variant:"outlined",margin:"dense",size:"small",multiline:!0,minRows:"2",maxRows:"2"})]})}}]),n}(a.PureComponent),h=n(50),f=n(188),O=n(182),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.form;return Object(j.jsxs)("div",{id:t.id,className:"work-form",children:[Object(j.jsx)(m.a,{defaultValue:t.position,onChange:this.props.setWorkInfo(t.id,"position"),label:"Position",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:t.company,onChange:this.props.setWorkInfo(t.id,"company"),label:"Company",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsxs)("div",{className:"date-container",children:[Object(j.jsx)(O.a,{className:"date-picker",label:"From",views:["year"],value:t.from,onChange:function(n){return e.props.setWorkDate(t,"from",n)},renderInput:function(e){return Object(j.jsx)(m.a,Object(h.a)({},e))}}),Object(j.jsx)(O.a,{className:"date-picker",label:"To",views:["year"],minDate:t.from,value:t.to,onChange:function(n){return e.props.setWorkDate(t,"to",n)},renderInput:function(e){return Object(j.jsx)(m.a,Object(h.a)({},e))}})]}),Object(j.jsx)(m.a,{defaultValue:t.description,onChange:this.props.setWorkInfo(t.id,"description"),label:"Description",variant:"outlined",margin:"dense",size:"small",multiline:!0,minRows:"2",maxRows:"2"}),Object(j.jsx)(f.a,{className:"delete-btn",onClick:this.props.deleteWorkForm(t.id),variant:"outlined",color:"error",children:"Delete"})]})}}]),n}(a.PureComponent),x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.workForms.map((function(t,n){return Object(j.jsx)(v,{form:t,dateFrom:e.props.workForms[n].from,dateTo:e.props.workForms[n].to,setWorkDate:e.props.setWorkDate,deleteWorkForm:e.props.deleteWorkForm,setWorkInfo:e.props.setWorkInfo},t.id)}));return Object(j.jsxs)("div",{className:"work-form-wrapper",children:[Object(j.jsx)("h2",{children:"Work Experience"}),t,Object(j.jsx)(f.a,{variant:"contained",onClick:this.props.addWorkForm,children:"Add"})]})}}]),n}(a.PureComponent),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.form;return Object(j.jsxs)("div",{id:t.id,className:"education-form",children:[Object(j.jsx)(m.a,{defaultValue:t.title,onChange:this.props.setEducationInfo(t.id,"title"),label:"Title",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsx)(m.a,{defaultValue:t.organization,onChange:this.props.setEducationInfo(t.id,"organization"),label:"Organization",variant:"outlined",margin:"dense",size:"small"}),Object(j.jsxs)("div",{className:"date-container",children:[Object(j.jsx)(O.a,{className:"date-picker",label:"From",views:["year"],value:t.from,onChange:function(n){return e.props.setEducationDate(t,"from",n)},renderInput:function(e){return Object(j.jsx)(m.a,Object(h.a)({},e))}}),Object(j.jsx)(O.a,{className:"date-picker",label:"To",views:["year"],minDate:t.from,value:t.to,onChange:function(n){return e.props.setEducationDate(t,"to",n)},renderInput:function(e){return Object(j.jsx)(m.a,Object(h.a)({},e))}})]}),Object(j.jsx)(m.a,{defaultValue:t.description,onChange:this.props.setEducationInfo(t.id,"description"),label:"Description",variant:"outlined",margin:"dense",size:"small",multiline:!0,minRows:"2",maxRows:"2"}),Object(j.jsx)(f.a,{className:"delete-btn",onClick:this.props.deleteEducationForm(t.id),variant:"outlined",color:"error",children:"Delete"})]})}}]),n}(a.PureComponent),F=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.eduForms.map((function(t,n){return Object(j.jsx)(k,{form:t,dateFrom:e.props.eduForms[n].from,dateTo:e.props.eduForms[n].to,setEducationDate:e.props.setEducationDate,deleteEducationForm:e.props.deleteEducationForm,setEducationInfo:e.props.setEducationInfo},t.id)}));return Object(j.jsxs)("div",{className:"edu-form-wrapper",children:[Object(j.jsx)("h2",{children:"Education"}),t,Object(j.jsx)(f.a,{variant:"contained",onClick:this.props.addEducationForm,children:"Add"})]})}}]),n}(a.PureComponent),I=n(183),w=n(180),g=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"form-wrapper",children:[Object(j.jsx)(b,{personalInfo:this.props.personalInfo,setPersonalInfo:this.props.setPersonalInfo}),Object(j.jsxs)(w.b,{dateAdapter:I.a,children:[Object(j.jsx)(x,{workForms:this.props.workForms,addWorkForm:this.props.addWorkForm,deleteWorkForm:this.props.deleteWorkForm,setWorkDate:this.props.setWorkDate,setWorkInfo:this.props.setWorkInfo}),Object(j.jsx)(F,{eduForms:this.props.eduForms,addEducationForm:this.props.addEducationForm,deleteEducationForm:this.props.deleteEducationForm,setEducationDate:this.props.setEducationDate,setEducationInfo:this.props.setEducationInfo})]})]})}}]),n}(a.Component),N=n(96),E=n.n(N),W=n(97),D=n.n(W),y=n(98),C=n.n(y),z=n(99),P=n.n(z),S=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"pv-personal",children:[Object(j.jsx)("div",{className:"personal-wrapper",children:Object(j.jsxs)("div",{className:"intro-column",children:[Object(j.jsxs)("div",{className:"intro",children:[Object(j.jsx)("div",{className:"personal-name",children:this.props.personalInfo.name}),Object(j.jsx)("div",{className:"divider"}),Object(j.jsx)("div",{className:"personal-title",children:this.props.personalInfo.title})]}),Object(j.jsxs)("div",{className:"contact-column",children:[Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(E.a,{className:"contact-icon",fontSize:"small"}),this.props.personalInfo.email]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(D.a,{className:"contact-icon",fontSize:"small"}),this.props.personalInfo.phone]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(C.a,{className:"contact-icon",fontSize:"small"}),this.props.personalInfo.location]}),Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsx)(P.a,{className:"contact-icon",fontSize:"small"}),this.props.personalInfo.website]})]})]})}),Object(j.jsxs)("div",{className:"desc-wrapper",children:[Object(j.jsx)("div",{className:"label",children:Object(j.jsx)("h3",{children:"Summary"})}),Object(j.jsx)("div",{className:"personal-desc",children:this.props.personalInfo.description})]})]})}}]),n}(a.Component),V=n(40),q=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.workForms.map((function(e){return Object(j.jsxs)("div",{className:"pv-work-form",children:[Object(j.jsxs)("div",{className:"date-column",children:[Object(V.a)(e.from),"\u2014",Object(V.a)(e.to)]}),Object(j.jsxs)("div",{className:"work-info-column",children:[Object(j.jsxs)("div",{className:"title-wrapper",children:[Object(j.jsx)("span",{className:"title",children:e.position}),Object(j.jsx)("span",{children:"  |  "}),Object(j.jsx)("span",{className:"organization",children:e.company})]}),Object(j.jsx)("div",{children:e.description})]})]},e.id)}));return Object(j.jsxs)("div",{className:"pv-work-wrapper",children:[Object(j.jsx)("div",{className:"label",children:Object(j.jsx)("h3",{children:"Work Experience"})}),e]})}}]),n}(a.PureComponent),T=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.eduForms.map((function(e){return Object(j.jsxs)("div",{className:"pv-edu-form",children:[Object(j.jsxs)("div",{className:"date-column",children:[Object(V.a)(e.from),"\u2014",Object(V.a)(e.to)]}),Object(j.jsxs)("div",{className:"edu-info-column",children:[Object(j.jsxs)("div",{className:"title-wrapper",children:[Object(j.jsx)("span",{className:"title",children:e.title}),Object(j.jsx)("span",{children:"  |  "}),Object(j.jsx)("span",{className:"organization",children:e.organization})]}),Object(j.jsx)("div",{children:e.description})]})]},e.id)}));return Object(j.jsxs)("div",{className:"pv-edu-wrapper",children:[Object(j.jsx)("div",{className:"label",children:Object(j.jsx)("h3",{children:"Education"})}),e]})}}]),n}(a.PureComponent),R=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"preview",children:[Object(j.jsx)(S,{personalInfo:this.props.personalInfo}),Object(j.jsx)(q,{workForms:this.props.workForms}),Object(j.jsx)(T,{eduForms:this.props.eduForms})]})}}]),n}(a.Component),L=n(59),A=n.n(L),J=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).setPersonalInfo=function(t){return function(n){var a=e.state.personalInfo;a[t]=n.target.value,e.setState({personalInfo:a})}},e.deleteWorkForm=function(t){return function(n){var a=Object(i.a)(e.state.workForms);e.setState({workForms:a.filter((function(e){return e.id!==t}))})}},e.setWorkInfo=function(t,n){return function(a){var o=Object(i.a)(e.state.workForms),r=o.map((function(e){return e.id})).indexOf(t);o[r][n]=a.target.value,e.setState({workForms:o})}},e.deleteEducationForm=function(t){return function(n){var a=Object(i.a)(e.state.eduForms);e.setState({eduForms:a.filter((function(e){return e.id!==t}))})}},e.setEducationInfo=function(t,n){return function(a){var o=Object(i.a)(e.state.eduForms),r=o.map((function(e){return e.id})).indexOf(t);o[r][n]=a.target.value,e.setState({eduForms:o})}},e.state={personalInfo:{name:"John Smith",title:"Front-End Developer",email:"johnsmith123@hotmail.com",phone:"123-4567-8910",location:"United States",website:"github.com/johnsmith",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},workForms:[{id:A()(),position:"Social Media Manager",company:"Twitter",from:new Date,to:new Date,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],eduForms:[{id:A()(),title:"Bachelor of Computer Science",organization:"University of Coolville",from:new Date,to:new Date,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]},e.setPersonalInfo=e.setPersonalInfo.bind(Object(d.a)(e)),e.addWorkForm=e.addWorkForm.bind(Object(d.a)(e)),e.deleteWorkForm=e.deleteWorkForm.bind(Object(d.a)(e)),e.setWorkDate=e.setWorkDate.bind(Object(d.a)(e)),e.setWorkInfo=e.setWorkInfo.bind(Object(d.a)(e)),e.addEducationForm=e.addEducationForm.bind(Object(d.a)(e)),e.deleteEducationForm=e.deleteEducationForm.bind(Object(d.a)(e)),e.setEducationDate=e.setEducationDate.bind(Object(d.a)(e)),e.setEducationInfo=e.setEducationInfo.bind(Object(d.a)(e)),e}return Object(l.a)(n,[{key:"addWorkForm",value:function(){var e={id:A()(),position:"",company:"",from:new Date,to:new Date,description:""},t=[].concat(Object(i.a)(this.state.workForms),[e]);this.setState({workForms:t})}},{key:"setWorkDate",value:function(e,t,n){var a=this.state.workForms,o=a.filter((function(t){return t.id===e.id}))[0];o[t]=n;var r=a.map((function(e){return e.id===o.id?o:e}));this.setState({workForms:r})}},{key:"addEducationForm",value:function(){var e={id:A()(),title:"",organization:"",from:new Date,to:new Date},t=[].concat(Object(i.a)(this.state.eduForms),[e]);this.setState({eduForms:t})}},{key:"setEducationDate",value:function(e,t,n){var a=this.state.eduForms,o=a.filter((function(t){return t.id===e.id}))[0];o[t]=n;var r=a.map((function(e){return e.id===o.id?o:e}));this.setState({eduForms:r})}},{key:"render",value:function(){var e=this.state,t=e.personalInfo,n=e.workForms,a=e.eduForms;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(g,{setPersonalInfo:this.setPersonalInfo,addWorkForm:this.addWorkForm,deleteWorkForm:this.deleteWorkForm,setWorkDate:this.setWorkDate,setWorkInfo:this.setWorkInfo,addEducationForm:this.addEducationForm,deleteEducationForm:this.deleteEducationForm,setEducationDate:this.setEducationDate,setEducationInfo:this.setEducationInfo,personalInfo:t,workForms:n,eduForms:a}),Object(j.jsx)(R,{personalInfo:t,workForms:n,eduForms:a})]})}}]),n}(a.Component);s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))},30:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.b9d5836f.chunk.js.map