(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(235)},113:function(e,t,n){},233:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var o=n(10),r=n.n(o),a=n(56),i=n.n(a),l=(n(113),n(102)),s=n(103),c=n(106),u=n(104),g=n(107),h=n(41),p=n.n(h),f=n(105),d=n.n(f),m=n(38),y=n(75);n(231),n(233);function j(e){return fetch("https://serve.onegraph.com/dynamic?app_id=c333eb5b-04b2-4709-9246-31e18db397e1",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.text()}).then(function(e){try{return JSON.parse(e)}catch(t){return e}})}var v='{\n  npm {\n    package(name: "graphql") {\n      name\n      downloads {\n        lastMonth {\n          count\n        }\n      }\n    }\n  }\n}',w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={schema:null,query:v,explorerIsOpen:!0},n._handleEditQuery=function(e){return n.setState({query:e})},n._handleToggleExplorer=function(){n.setState({explorerIsOpen:!n.state.explorerIsOpen})},n}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j({query:Object(m.a)()}).then(function(t){e.setState({schema:Object(y.a)(t.data)})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.query,o=t.schema;return r.a.createElement("div",{className:"graphiql-container"},r.a.createElement(d.a,{schema:o,query:n,onEdit:this._handleEditQuery,explorerIsOpen:this.state.explorerIsOpen,onToggleExplorer:this._handleToggleExplorer}),r.a.createElement(p.a,{ref:function(t){return e._graphiql=t},fetcher:j,schema:o,query:n,onEditQuery:this._handleEditQuery},r.a.createElement(p.a.Toolbar,null,r.a.createElement(p.a.Button,{onClick:function(){return e._graphiql.handlePrettifyQuery()},label:"Prettify",title:"Prettify Query (Shift-Ctrl-P)"}),r.a.createElement(p.a.Button,{onClick:function(){return e._graphiql.handleToggleHistory()},label:"History",title:"Show History"}),r.a.createElement(p.a.Button,{onClick:this._handleToggleExplorer,label:"Explorer",title:"Toggle Explorer"}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,n){var o={".":35,"./":35,"./GraphQLLanguageService":70,"./GraphQLLanguageService.js":70,"./GraphQLLanguageService.js.flow":192,"./autocompleteUtils":51,"./autocompleteUtils.js":51,"./autocompleteUtils.js.flow":193,"./getAutocompleteSuggestions":44,"./getAutocompleteSuggestions.js":44,"./getAutocompleteSuggestions.js.flow":194,"./getDefinition":52,"./getDefinition.js":52,"./getDefinition.js.flow":195,"./getDiagnostics":54,"./getDiagnostics.js":54,"./getDiagnostics.js.flow":196,"./getHoverInformation":55,"./getHoverInformation.js":55,"./getHoverInformation.js.flow":197,"./getOutline":69,"./getOutline.js":69,"./getOutline.js.flow":198,"./index":35,"./index.js":35,"./index.js.flow":199};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=95}},[[108,2,1]]]);
//# sourceMappingURL=main.1f6160c9.chunk.js.map