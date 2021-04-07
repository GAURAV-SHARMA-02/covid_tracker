(this.webpackJsonpcovid__tracker=this.webpackJsonpcovid__tracker||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),s=n.n(r),o=(n(98),n(23)),i=n.n(o),l=n(38),u=n(11),d=(n(100),n(240)),j=n(241),f=n(242),h=n(232),b=n(236),v=n(21),p=n(237),O=(n(101),n(3));var x=function(e){var t=e.title,n=e.cases,c=e.total,a=e.active,r=e.isRed,s=Object(v.a)(e,["title","cases","total","active","isRed"]);return console.log(t,a),Object(O.jsx)(h.a,{onClick:s.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(r&&"infoBox--red"),children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(O.jsx)("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green"),children:n}),Object(O.jsxs)(p.a,{className:"infoBox__total",color:"textSecondary",children:[c," Total"]})]})})},m=n(86),g=n(12),y=n.n(g),w={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return y()(e).format("0a")}}}]}},_=function(e,t){var n,c=[];for(var a in e.cases){if(n){var r={x:a,y:e[t][a]-n};c.push(r)}n=e[t][a]}return c};var C=function(e){var t=e.casesType,n=Object(c.useState)({}),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var n=_(e,t);s(n),console.log(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(O.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(O.jsx)(m.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:w})})},k=(n(202),function(e){var t=e.countries;return Object(O.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,n=e.cases;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t}),Object(O.jsx)("td",{children:Object(O.jsx)("strong",{children:y()(n).format("0,0")})})]})}))})}),N=n(87),S=n(243),B=n(238),I={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},R=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(O.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:I[t].hex,fillColor:I[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*I[t].multiplier,children:Object(O.jsx)(B.a,{children:Object(O.jsxs)("div",{className:"info-container",children:[Object(O.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(O.jsx)("div",{className:"info-name",children:e.country}),Object(O.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(O.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(O.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},F=n(239),L=n(244);n(203);var M=function(e){var t=e.countries,n=e.casesType,c=e.center,a=e.zoom;return Object(O.jsx)("div",{className:"mapContainer",children:Object(O.jsxs)(F.a,{center:c,zoom:a,children:[Object(O.jsx)(L.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D(t,n)]})})},z=(n(204),function(){var e=Object(c.useState)("worldwide"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),s=Object(u.a)(r,2),o=s[0],v=s[1],p=Object(c.useState)([]),m=Object(u.a)(p,2),g=m[0],w=m[1],_=Object(c.useState)([]),N=Object(u.a)(_,2),S=N[0],B=N[1],I=Object(c.useState)([]),D=Object(u.a)(I,2),F=D[0],L=D[1],z=Object(c.useState)("cases"),E=Object(u.a)(z,2),W=E[0],A=E[1],J=Object(c.useState)({lat:34.80746,lng:-40.4796}),P=Object(u.a)(J,2),Y=P[0],q=P[1],$=Object(c.useState)(3),G=Object(u.a)($,2),H=G[0],K=G[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){v(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=R(e);w(t),B(e),L(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(W);var Q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.value,c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),e.next=4,fetch(c).then((function(e){return e.json()})).then((function(e){a(n),v(e),"worldwide"!==n&&q([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsxs)("div",{className:"app__left",children:[Object(O.jsxs)("div",{className:"app__header",children:[Object(O.jsx)("h1",{children:"Covid Tracker"}),Object(O.jsx)(d.a,{className:"app__dropdown",children:Object(O.jsxs)(j.a,{variant:"outlined",value:n,onChange:Q,children:[Object(O.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(O.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(O.jsxs)("div",{className:"app__stats",children:[Object(O.jsx)(x,{onClick:function(e){return A("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===W,cases:T(o.todayCases),total:y()(o.cases).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return A("recovered")},title:"Recovered",active:"recovered"===W,cases:T(o.todayRecovered),total:y()(o.recovered).format("0.0a")}),Object(O.jsx)(x,{onClick:function(e){return A("deaths")},title:"Deaths",isRed:!0,active:"deaths"===W,cases:T(o.todayDeaths),total:y()(o.deaths).format("0.0a")})]}),Object(O.jsx)(M,{countries:S,casesType:W,center:Y,zoom:H})]}),Object(O.jsx)(h.a,{className:"app__right",children:Object(O.jsx)(b.a,{children:Object(O.jsxs)("div",{className:"app__information",children:[Object(O.jsx)("h3",{children:"Live Cases by Country"}),Object(O.jsx)(k,{countries:F}),Object(O.jsxs)("h3",{children:["Worldwide new ",W]}),Object(O.jsx)(C,{casesType:W})]})})})]})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,246)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()},98:function(e,t,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.a1f0c1ed.chunk.js.map