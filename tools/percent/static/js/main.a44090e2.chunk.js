(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),u=a.n(o),r=(a(14),a(3)),i=a(4),c=a(6),s=a(5),h=a(7),d=(a(15),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=(a.state.firstValue/a.state.secondValue*100).toFixed(1);a.setState({result:t})},a.handleValueChange=function(e){a.setState({firstValue:e.target.value})},a.handlePercentChange=function(e){a.setState({secondValue:e.target.value})},a.state={firstValue:"",secondValue:"",result:0},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("input",{autoFocus:!0,type:"text",value:this.state.firstValue,onChange:this.handleValueChange}),"is what percentage of"),l.a.createElement("label",null,l.a.createElement("input",{type:"text",value:this.state.secondValue,onChange:this.handlePercentChange})),l.a.createElement("input",{type:"submit",value:"Calculate"})),l.a.createElement("h1",null,this.state.result,"%"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a44090e2.chunk.js.map