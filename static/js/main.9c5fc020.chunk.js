(this["webpackJsonpreact-ref"]=this["webpackJsonpreact-ref"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),u=a(6),i=(a(28),a(2)),m=a(3),o=a(5),s=a(4),f=a(10),b=(a(29),a(30),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({value:e.myRef.current.value})},e.state={value:""},e.myRef=r.a.createRef(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",null,r.a.createElement("h1",null,"Basic React Ref Example"),r.a.createElement("h3",null,"Value:",e),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"text",type:"text",ref:this.myRef}),r.a.createElement("button",{className:"btn"},"Submit")))}}]),a}(n.Component)),h=(a(31),function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleSubmit=function(t){t.preventDefault(),e.setState({value:e.textInput.value})},e.state={value:""},e.myRef=r.a.createRef(),e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.value;return r.a.createElement("div",null,r.a.createElement("h1",null,"Callback React Ref Example"),r.a.createElement("h3",null,"Value:",t),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",ref:function(t){return e.textInput=t}}),r.a.createElement("button",{className:"btn"},"Submit")))}}]),a}(n.Component)),E=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",ref:e.inputRef}))},p=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleSubmit=function(t){e.setState({value:e.inputElement.value})},e.state={value:""},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.state.value;return r.a.createElement("div",null,r.a.createElement("h1",null,"Parent To Child React Ref Example"),r.a.createElement("h3",null,"Value:",t),r.a.createElement(E,{inputRef:function(t){return e.inputElement=t}}),r.a.createElement("button",{className:"btn",onClick:this.handleSubmit},"Submit"))}}]),a}(n.Component),v=r.a.forwardRef((function(e,t){return r.a.createElement("input",{type:"text",ref:t})})),d=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({value:n.inputRef.current.value})},n.inputRef=r.a.createRef(),n.state={value:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Forward React Ref Example"),r.a.createElement("h3",null,"Value: ",this.state.value),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(v,{ref:this.inputRef}),r.a.createElement("button",{className:"btn"},"Submit")))}}]),a}(n.Component),R=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.username.current.value,a=n.password.current.value,r=n.handleValidation(t,a);r.length>0&&n.setState({errors:r})},n.handleValidation=function(e,t){var a=[];return 0===e.length&&a.push("Username cannot be empty"),t.length<6&&a.push("Password should be at least 6 characters long"),a},n.username=r.a.createRef(),n.password=r.a.createRef(),n.state={errors:[]},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("h1",null,"Form React Ref Example"),r.a.createElement("form",{onSubmit:this.handleSubmit},e.map((function(e){return r.a.createElement("p",{key:e},e)})),r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",ref:this.username})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"text",ref:this.password})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Submit"))))}}]),a}(n.Component),j=(a(32),a(20)),O=a.n(j),S=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#slide-out");O.a.Sidenav.init(e,{})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("div",{className:"nav-wrapper hide-on-med-and-down"},r.a.createElement(u.b,{to:"/basic"},"Basic Ref"),r.a.createElement(u.b,{to:"/callback"},"Callback Ref"),r.a.createElement(u.b,{to:"/parent"},"Parent To Child Ref"),r.a.createElement(u.b,{to:"/forward"},"Forward Ref"),r.a.createElement(u.b,{to:"/Form"},"Form Ref"))),r.a.createElement("div",{id:"slide-out",className:"sidenav"},r.a.createElement(u.b,{to:"/basic"},"Basic Ref"),r.a.createElement(u.b,{to:"/callback"},"Callback Ref"),r.a.createElement(u.b,{to:"/parent"},"Parent To Child Ref"),r.a.createElement(u.b,{to:"/forward"},"Forward Ref"),r.a.createElement(u.b,{to:"/Form"},"Form Ref")))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(f.a,{path:"/basic",component:b}),r.a.createElement(f.a,{path:"/callback",component:h}),r.a.createElement(f.a,{path:"/parent",component:p}),r.a.createElement(f.a,{path:"/forward",component:d}),r.a.createElement(f.a,{path:"/form",component:R}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(u.a,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9c5fc020.chunk.js.map