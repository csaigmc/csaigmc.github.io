(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[15],{177:function(e,a,t){"use strict";var n=t(40),r=t(27),o=t(10),l=t(0),c=t.n(l),i=t(124),s=(t(61),t(39)),m=t(173),u=t.n(m),d=t(158),p=t(38),h=t(24),f=t(122),g=(t(62),t(77)),b=Object(g.a)((function(e){return{item:{background:"".concat(e.palette.primary.dark,"8f"),borderRadius:"8px",marginTop:"8px",marginBottom:"8px"},width100:{width:"100%"},width60:{width:"60%"},width50:{width:"50%"},width20:{width:"20%"},width10:{width:"10%"},height196:Object(o.a)({height:"156px"},e.breakpoints.down("sm"),{height:"128px"}),height20:{height:"20px"}}})),E=function(){var e=b();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"".concat(e.item," ").concat(e.height196," ").concat(e.width100)}),c.a.createElement("div",{className:"".concat(e.item," ").concat(e.height20," ").concat(e.width50)}),c.a.createElement("div",{className:"".concat(e.item," ").concat(e.height20," ").concat(e.width60)}))},y=function(){return c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,style:{padding:"4px"},xs:12,md:4},c.a.createElement(E,null)),c.a.createElement(d.a,{item:!0,style:{padding:"4px"},xs:12,md:4},c.a.createElement(E,null)),c.a.createElement(d.a,{item:!0,style:{padding:"4px"},xs:12,md:4},c.a.createElement(E,null)))};t.d(a,"a",(function(){return q}));var x=Object(f.a)((function(e){return{infoContainer:{padding:e.spacing(1),borderRadius:"4px",overflow:"hidden",transition:"0.14s backgroundColor ease-in-out","&:hover":{backgroundColor:"".concat(e.palette.primary.dark,"2f")}},imazo_gal:{},imazo:Object(o.a)({width:"100%",height:"240px",objectFit:"contain"},e.breakpoints.down("md"),{height:"180px"}),info:{fontFamily:h.a,fontSize:"1rem",color:"".concat(e.textColor.main,"7f")},subinfo:{fontFamily:h.a,fontSize:"12px",color:"".concat(e.textColor.dark,"6f")}}})),v=function(e){var a=e.showInfo,t=e.info,n=x();return console.log("called User Card"),console.log(t),c.a.createElement(d.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer},c.a.createElement("img",{className:n.imazo,src:t.url_path}),a?c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:12,style:{paddingTop:"8px"}},c.a.createElement(p.a,{variant:"h6",className:n.info},t.user)),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(p.a,{variant:"subtitle1",className:n.subinfo},t.about_user)),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(p.a,{variant:"subtitle2",className:n.subinfo},t.phone_no)),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(p.a,{variant:"subtitle2",className:n.subinfo},t.email))):null)},_=function(e){var a=e.showInfo,t=e.info,n=x();return c.a.createElement(d.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer},c.a.createElement("img",{className:n.imazo,src:t.url_path}),a?c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:12,style:{paddingTop:"8px"}},c.a.createElement(p.a,{variant:"h6",className:n.info},t.creator)),c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(p.a,{variant:"subtitle1",className:n.subinfo},t.about_creator))):null)},w=Object(f.a)((function(e){return{notFound:{color:e.palette.grey[600],paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},loading_display:{fontFamily:h.a,fontSize:"16px",color:e.palette.grey[400]}}})),q=function(e){var a,t=e.queryObject,m=e.shouldDisplayInfo,h=e.showContactInfo,f=w(),g=Object(l.useState)(!0),b=Object(r.a)(g,2),E=b[0],x=b[1],q=Object(i.c)(t.query_query,{variables:{options:{skip:0,limit:12,type:t.query_params}}}),j=q.data,O=q.error,N=q.loading,k=q.fetchMore,F=Object(s.a)().setLoading;console.log(j),Object(l.useEffect)((function(){!0===N?F(!0):!1===N&&(F(!1),(!j||j[t.query_tablename].length<12)&&x(!1))}),[N]);if(N)a=c.a.createElement(y,null);else if(O)a=c.a.createElement("div",null,"Error");else if(j){var C=function(){if(console.log(j),!j)return[];for(var e=j[t.query_tablename].map((function(e,a){return!0===h?c.a.createElement(v,{showInfo:m,info:e,key:a}):c.a.createElement(_,{showInfo:m,info:e,key:a})})),a=[],n=0;n<j[t.query_tablename].length;n+=4){for(var r=[],o=0;o<4&&n+o<j[t.query_tablename].length;++o)r.push(e[n+o]);a.push(c.a.createElement(d.a,{container:!0},r))}return a}();console.log(C),a=0===C.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{container:!0,className:f.notFound},c.a.createElement(d.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(p.a,{variant:"h4"},"-\\_(^_^)_/- ",c.a.createElement("br",null),c.a.createElement("br",null),"Nothing Found")))):c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{dataLength:C.length,loader:c.a.createElement(d.a,{container:!0},c.a.createElement(d.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(p.a,{className:f.loading_display},"\u2022 \u2022 \u2022"))),hasMore:E,endMessage:c.a.createElement(c.a.Fragment,null),next:function(){var e=j[t.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),k({variables:{options:{skip:e,limit:12,type:t.query_params}},updateQuery:function(e,a){var r=a.fetchMoreResult;return r&&E?(console.log(e),console.log(t),console.log(r),r[t.query_tablename].length<12&&x(!1),Object(o.a)({},t.query_tablename,[].concat(Object(n.a)(e[t.query_tablename]),Object(n.a)(r[t.query_tablename])))):e}})}},C))}return c.a.createElement(c.a.Fragment,null,a)}},310:function(e,a,t){"use strict";t.r(a);var n=t(174),r=t(0),o=t.n(r),l=t(61),c=t.n(l),i=(t(39),t(173),t(177)),s=t(158);function m(){var e=Object(n.a)(["\nquery allAdvisory($options: InpOptions) {\n    allArts(options: $options) {\n        _id\n        creator\n        about_creator\n        url_path\n    }\n}\n"]);return m=function(){return e},e}var u=c()(m());a.default=function(){return o.a.createElement(s.a,{container:!0},o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(i.a,{queryObject:{query_query:u,query_params:"gallery",query_tablename:"allArts"},shouldDisplayInfo:!0})))}}}]);
//# sourceMappingURL=15.36fff090.chunk.js.map