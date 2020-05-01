(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[12],{195:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a(43),r=a(23),o=a(10),l=a(0),i=a.n(l),c=(a(60),a(203)),s=a.n(c),m=a(126),u=a(27),p=(a(64),a(42)),d=a(177),f=a.n(d),g=a(79),h=a(159),b=a(41),E=a(320),y=a(160),x=a(162),_=a(163),v=a(164),O=a(176),q=a(122),C=(a(65),Object(g.a)((function(e){return{infoContainer:{padding:e.spacing(1),border:"1px solid transparent",borderRadius:"1px",overflow:"hidden",transition:"0.14s all ease-in-out","&:hover":{backgroundColor:e.palette.primary.dark,border:"1px solid ".concat(e.palette.primary.light)},marginBottom:e.spacing(1),marginTop:e.spacing(1)},imazo:Object(o.a)({width:"100%",height:"180px",objectFit:"cover"},e.breakpoints.down("md"),{height:"180px"}),title:{fontFamily:u.a,fontWeight:"bold",color:e.textColor.main,textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",maxHeight:"2rem"},info:{fontFamily:u.a,fontSize:"16px",color:e.textColor.main},subinfo:{fontFamily:u.a,fontSize:"12px",color:e.textColor.dark}}}))),j=/!\[.*\]\((.*)\)/,F=function(e){var t=new Date;t.setTime(e);var a=t.getUTCDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"/").concat(a,"/").concat(r)},N=function(e){e.showInfo;var t=e.info,a=e.handleClick,n=C(),r=function(e){var t=e.match(j),a=null;if(null!==t)try{a=t[1]}catch(n){return null}return a}(t.text);return console.log(r),i.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer,onClick:a},i.a.createElement(h.a,{container:!0},r?i.a.createElement("img",{className:n.imazo,src:r}):null,i.a.createElement(h.a,{item:!0,xs:12,style:{paddingTop:"8px"}},i.a.createElement(b.a,{variant:"h6",className:n.title},t.title)),i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(b.a,{variant:"h6",className:n.info},t.author)),i.a.createElement(h.a,{item:!0,xs:12,style:{paddingTop:"16px"}},i.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},F(t.create_date))),i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},t.about_author))))},k=i.a.forwardRef((function(e,t){return i.a.createElement(q.a,Object.assign({direction:"up",ref:t},e))})),w=Object(g.a)((function(e){return{title:{fontFamily:u.a,color:"inherit"},aboutAuthor:{fontFamily:u.a,color:e.textColor.dark,fontSize:"14px"},author:{fontFamily:u.a,color:e.textColor.light,fontSize:"14px"},error:{fontFamily:u.a,color:e.palette.grey[500]},text:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),color:e.textColor.main},meta_info_container:{border:"1px solid ".concat(e.palette.primary.light),backgroundColor:e.palette.primary.dark,padding:e.spacing(2),borderRadius:"1px"}}})),A=function(e){var t=e.showing,a=e.info,n=e.handleClose,r=w();return i.a.createElement(E.a,{fullScreen:!0,open:t,TransitionComponent:k,onClose:function(){return n()}},i.a.createElement(y.a,{position:"fixed"},i.a.createElement(x.a,null,i.a.createElement(_.a,{color:"inherit",onClick:function(){return n()}},i.a.createElement(v.a,null,"close")),i.a.createElement(b.a,{className:r.title,style:{paddingLeft:"8px"}},a?a.title:"Not Found"))),i.a.createElement(O.a,null,a?i.a.createElement(h.a,{container:!0,style:{paddingTop:"84px"}},i.a.createElement(h.a,{item:!0,xs:12,className:r.meta_info_container},i.a.createElement(b.a,{className:r.author},"Author: ",a.author),i.a.createElement(b.a,{className:r.aboutAuthor},"About Author: ",a.about_author),i.a.createElement(b.a,{className:r.aboutAuthor},"Created On: ",F(a.create_date))),i.a.createElement(h.a,{item:!0,xs:12,className:"react-article-source ".concat(r.text)},i.a.createElement(s.a,{source:a.text}))):i.a.createElement(h.a,{container:!0,style:{paddingTop:"84px"}},i.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{className:r.error,variant:"h5"},"\\_[^_^]_/",i.a.createElement("br",null)," ",i.a.createElement("br",null),"ERROR")))))},T=Object(g.a)((function(e){return{notFound:{color:e.palette.grey[600],paddingTop:e.spacing(5),paddingBottom:e.spacing(5)},loading_display:{fontFamily:u.a,fontSize:"16px",color:e.palette.grey[400]}}})),S=function(e){var t,a=e.queryObject,c=e.shouldDisplayInfo,s=T(),u=Object(l.useState)(!0),d=Object(r.a)(u,2),g=d[0],E=d[1],y=Object(m.c)(a.query_query,{variables:{options:{skip:0,limit:12,type:a.query_params}}}),x=y.data,_=y.error,v=y.loading,O=y.fetchMore,q=Object(p.a)().setLoading,C=Object(l.useState)(-1),j=Object(r.a)(C,2),F=j[0],k=j[1];Object(l.useEffect)((function(){!0===v?q(!0):!1===v&&(q(!1),x[a.query_tablename].length<12&&E(!1))}),[v]);if(v)t=i.a.createElement(h.a,{container:!0,className:s.notFound},i.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{variant:"h4"},"Loading...")));else if(_)t=i.a.createElement("div",null,"Error");else if(x){var w=function(){for(var e=x[a.query_tablename].map((function(e,t){return i.a.createElement(N,{showInfo:c,info:e,key:t,handleClick:function(){return k(t)}})})),t=[],n=0;n<x[a.query_tablename].length;n+=4){for(var r=[],o=0;o<4&&n+o<x[a.query_tablename].length;++o)r.push(e[n+o]);t.push(i.a.createElement(h.a,{container:!0},r))}return t}();console.log(w),t=0===w.length?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{container:!0,className:s.notFound},i.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{variant:"h4"},"-\\_(^_^)_/- ",i.a.createElement("br",null),i.a.createElement("br",null),"Nothing Found")))):i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{dataLength:w.length,loader:i.a.createElement(h.a,{container:!0},i.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{className:s.loading_display},"Loading"))),endMessage:i.a.createElement(i.a.Fragment,null),hasMore:g,next:function(){return O({variables:{options:{skip:x.length/12,limit:12,type:a.query_params}},updateQuery:function(e,t){var r=t.fetchMoreResult;return r&&g?(r[a.query_tablename].length<12&&E(!1),Object(o.a)({},a.query_tablename,[].concat(Object(n.a)(e[a.query_tablename]),Object(n.a)(r[a.query_tablename])))):e}})}},w))}return i.a.createElement(i.a.Fragment,null,t,i.a.createElement(A,{showing:F>=0,info:F>=0?x[a.query_tablename][F]:null,handleClose:function(){return k(-1)}}))}},319:function(e,t,a){"use strict";a.r(t);var n=a(178),r=a(0),o=a.n(r),l=a(64),i=a.n(l),c=(a(27),a(159)),s=a(195);function m(){var e=Object(n.a)(["\nquery allEnigma($options: InpOptions) {\n    allArticles(options: $options) {\n        _id\n        text\n        title\n        author\n        about_author\n        create_date\n    }\n}"]);return m=function(){return e},e}var u=i()(m());t.default=function(){return o.a.createElement(c.a,{container:!0},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(s.a,{queryObject:{query_query:u,query_tablename:"allArticles",query_params:"enigma"}})))}}}]);
//# sourceMappingURL=12.f348b8b8.chunk.js.map