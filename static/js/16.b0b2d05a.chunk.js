(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[16],{165:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var n=t(41),r=t(35),o=t(10),l=t(0),c=t.n(l),i=t(121),s=(t(59),t(40)),u=t(162),m=t.n(u),p=t(156),f=t(38),g=t(26),d=t(119),y=(t(60),Object(d.a)((function(e){return{infoContainer:{padding:e.spacing(1),borderRadius:"4px",overflow:"hidden",transition:"0.14s backgroundColor ease-in-out","&:hover":{backgroundColor:e.palette.primary.dark}},imazo:Object(o.a)({width:"100%",height:"240px",objectFit:"contain"},e.breakpoints.down("md"),{height:"180px"}),info:{fontFamily:g.a,fontSize:"16px",color:e.palette.grey[100]},subinfo:{fontFamily:g.a,fontSize:"12px",color:e.palette.grey[400]}}}))),b=function(e){var a=e.showInfo,t=e.info,n=y();return c.a.createElement(p.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer},c.a.createElement("img",{className:n.imazo,src:t.url_path}),a?c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:12,style:{paddingTop:"8px"}},c.a.createElement(f.a,{variant:"h6",className:n.info},t.creator)),c.a.createElement(p.a,{item:!0,xs:12},c.a.createElement(f.a,{variant:"subtitle1",className:n.subinfo},t.about_creator))):null)},h=Object(d.a)((function(e){return{notFound:{color:e.palette.grey[600],paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},loading_display:{fontFamily:g.a,fontSize:"16px",color:e.palette.grey[400]}}})),E=function(e){var a,t=e.queryObject,u=e.shouldDisplayInfo,g=h(),d=Object(l.useState)(!0),y=Object(r.a)(d,2),E=y[0],_=y[1],v=Object(i.c)(t.query_query,{variables:{options:{skip:0,limit:12,type:t.query_params}}}),x=v.data,q=v.error,j=v.loading,O=v.fetchMore,F=Object(s.a)().setLoading;Object(l.useEffect)((function(){!0===j?F(!0):!1===j&&(F(!1),x[t.query_tablename].length<12&&_(!1))}),[j]);if(j)a=c.a.createElement(p.a,{container:!0,className:g.notFound},c.a.createElement(p.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(f.a,{variant:"h4"},"Loading...")));else if(q)a=c.a.createElement("div",null,"Error");else if(x){var k=function(){for(var e=x.allArts.map((function(e,a){return c.a.createElement(b,{showInfo:u,info:e,key:a})})),a=[],t=0;t<x.allArts.length;t+=4){for(var n=[],r=0;r<4&&t+r<x.allArts.length;++r)n.push(e[t+r]);a.push(c.a.createElement(p.a,{container:!0},n))}return a}();console.log(k),a=0===k.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,className:g.notFound},c.a.createElement(p.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(f.a,{variant:"h4"},"-\\_(^_^)_/- ",c.a.createElement("br",null),c.a.createElement("br",null),"Nothing Found")))):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{dataLength:k.length,loader:c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(f.a,{className:g.loading_display},"Loading"))),hasMore:E,endMessage:c.a.createElement(c.a.Fragment,null),next:function(){var e=x[t.query_tablename].length/12;return console.log("SKIP: ".concat(e," | ").concat(Math.floor(e))),O({variables:{options:{skip:e,limit:12,type:t.query_params}},updateQuery:function(e,a){var r=a.fetchMoreResult;return r&&E?(console.log(e),console.log(t),console.log(r),r[t.query_tablename].length<12&&_(!1),Object(o.a)({},t.query_tablename,[].concat(Object(n.a)(e[t.query_tablename]),Object(n.a)(r[t.query_tablename])))):e}})}},k))}return c.a.createElement(c.a.Fragment,null,a)}},311:function(e,a,t){"use strict";t.r(a);var n=t(163),r=t(0),o=t.n(r),l=t(59),c=t.n(l),i=(t(40),t(162),t(165)),s=t(156);function u(){var e=Object(n.a)(["\nquery allAdvisory($options: InpOptions) {\n    allArts(options: $options) {\n        _id\n        creator\n        about_creator\n        url_path\n    }\n}\n"]);return u=function(){return e},e}var m=c()(u());a.default=function(){return o.a.createElement(s.a,{container:!0},o.a.createElement(s.a,{item:!0,xs:12},o.a.createElement(i.a,{queryObject:{query_query:m,query_params:"art",query_tablename:"allArts"},shouldDisplayInfo:!0})))}}}]);
//# sourceMappingURL=16.b0b2d05a.chunk.js.map