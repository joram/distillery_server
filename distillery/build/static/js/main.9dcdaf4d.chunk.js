(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(322)},168:function(e,t,a){},169:function(e,t,a){},313:function(e,t){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(31),r=a.n(o),i=(a(168),a(16)),s=a(17),c=a(19),u=a(18),h=a(20),d=(a(169),a(28)),m=a(323),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={enabled:a.props.enabled},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.enabled?l.a.createElement(l.a.Fragment,null,"Enabled ",l.a.createElement(m.a,{onClick:this.props.onClick},"Disable")):l.a.createElement(l.a.Fragment,null,"Disabled ",l.a.createElement(m.a,{onClick:this.props.onClick},"Enable"))}}]),t}(l.a.Component),b=a(329),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.open},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(b.a,{type:"number",onChange:this.props.onChange,value:this.props.open,min:0,max:100,style:{marginLeft:"3px",marginRight:"3px"}})}}]),t}(l.a.Component),v=a(330),g=a(332),O=a(101),j=a(32),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={floating:a.props.floating},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.floating?l.a.createElement("span",null,"floating",l.a.createElement(j.a,{name:"arrow circle up"})):l.a.createElement("span",null,"not floating",l.a.createElement(j.a,{name:"arrow circle down"}))}}]),t}(l.a.Component),w=a(153),k=a.n(w),C=window.location.origin;"http://localhost:3000"===C&&(C="ws://localhost:5000"),C.startsWith("https://")&&(C=C.replace("https://","ws://")),C.startsWith("http://")&&(C=C.replace("http://","ws://")),console.log(C);var y=k()(C);y.on("value_update",function(e){var t=e.module,a=e.variable,n=e.value;console.log("".concat(t,":\t").concat(a,"=").concat(n))});var D=y,M=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),D.on("value_update",a.update.bind(Object(d.a)(a))),a.state={enabled:null,floating:null,open:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"update",value:function(e){if(this.props.module===e.module){console.log(e);var t=this.state;t.enabled="enabled"===e.variable?e.value:t.enabled,t.floating="floating"===e.variable?e.value:t.floating,t.open="open"===e.variable?e.value:t.open,this.setState(t)}}},{key:"toggle",value:function(){D.emit("action",{module:this.props.module,data:{enabled:!this.state.enabled}})}},{key:"setRate",value:function(e,t){D.emit("action",{module:this.props.module,data:{set_rate:parseInt(t.value)}})}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement(p,{onClick:this.toggle.bind(this),enabled:this.state.enabled}),l.a.createElement(f,{onChange:this.setRate.bind(this),open:this.state.open}),l.a.createElement(E,{floating:this.state.floating}));return null!==this.state.enabled&&null!==this.state.floating&&""!==this.state.open||(e=l.a.createElement(v.a,null,"Loading")),l.a.createElement(g.a,null,l.a.createElement(O.a,{className:"top attached"},this.props.name),e)}}]),t}(l.a.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),D.on("value_update",a.update.bind(Object(d.a)(a))),a.state={enabled:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"update",value:function(e){if(this.props.module===e.module){var t=this.state;t.enabled="enabled"===e.variable?e.value:t.enabled,this.setState(t)}}},{key:"toggle",value:function(){D.emit("action",{module:this.props.module,data:!this.state.enabled})}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement(p,{enabled:this.state.enabled,onClick:this.toggle.bind(this)}));return null===this.state.enabled&&(e=l.a.createElement(v.a,null,"Loading")),l.a.createElement(g.a,null,l.a.createElement(O.a,{className:"top attached"},this.props.name),e)}}]),t}(l.a.Component),L=a(154),x=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),D.on("value_update",a.update.bind(Object(d.a)(a))),a.state={temperatureData:{},labels:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"randomColor",value:function(){return"#"+Math.floor(16*Math.random()).toString(16)+Math.floor(16*Math.random()).toString(16)+Math.floor(16*Math.random()).toString(16)+Math.floor(16*Math.random()).toString(16)+Math.floor(16*Math.random()).toString(16)+Math.floor(16*Math.random()).toString(16)}},{key:"update",value:function(e){if("temperature_probes"===e.module){var t=e.variable,a=e.value,n=this.state,l=Date.now();void 0===n.temperatureData[t]&&(n.temperatureData[t]={data:[],label:t,borderColor:this.randomColor(),fill:!1}),n.labels.push(l),n.temperatureData[t].data.push({x:l,y:a});for(var o=l-18e5;n.temperatureData[t].data.length>=1&&n.temperatureData[t].data[0].x<o;)n.temperatureData[t].data.shift();for(;n.labels.length>=1&&n.labels[0]<o;)n.labels.shift();this.setState(n),this.forceUpdate()}}},{key:"chartData",value:function(){return{update:Date.now(),labels:this.state.labels,datasets:Object.values(this.state.temperatureData)}}},{key:"chartOptions",value:function(){return{elements:{point:{radius:0}},scales:{xAxes:[{type:"time",time:{displayFormats:{quarter:"MMM YYYY"}}}]},scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,scaleShowHorizontalLines:!0,scaleShowVerticalLines:!0,bezierCurve:!0,bezierCurveTension:.4,pointDot:!0,pointDotRadius:0,pointDotStrokeWidth:0,pointHitDetectionRadius:20,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0}}},{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement(O.a,{className:"top attached"},this.props.name),l.a.createElement("div",null,l.a.createElement(L.a,{data:this.chartData(),options:this.chartOptions()})))}}]),t}(l.a.Component),W=a(331),R=a(333),_=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(W.a,null,l.a.createElement(R.a,null,l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Column,{width:16})),l.a.createElement(R.a.Row,null,l.a.createElement(R.a.Column,{width:8},l.a.createElement(S,{name:"Coolant Loop",module:"coolant"})),l.a.createElement(R.a.Column,{width:8},l.a.createElement(M,{name:"Wash Bilge",module:"wash_bilge",style:{marginLeft:"3em"}})))),l.a.createElement(x,{name:"Temperature"}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(321);r.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.9dcdaf4d.chunk.js.map