(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[12],{175:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var n=a(40),r=a(35),o=a(14),l=a(0),c=a.n(l),i=(a(51),a(186)),s=a.n(i),u=a(120),m=a(58),p=(a(57),a(39)),f=a(161),d=a.n(f),g=a(74),h=a(155),b=a(37),E=a(306),y=a(141),x=a(144),_=a(145),v=a(146),O=a(160),j=a(115),q=Object(g.a)((function(e){var t;return{infoContainer:(t={padding:e.spacing(1),border:"1px solid ".concat(e.palette.grey[700]),borderRadius:"0px",overflow:"hidden",transition:"0.14s all ease-in-out"},Object(o.a)(t,"border","1px solid transparent"),Object(o.a)(t,"&:hover",{backgroundColor:e.palette.grey[800],border:"1px solid ".concat(e.palette.grey[700]),boxShadow:e.shadows[3]}),t),imazo:Object(o.a)({width:"100%",height:"240px",objectFit:"cover"},e.breakpoints.down("md"),{height:"180px"}),title:{fontFamily:m.a,fontWeight:"bold",color:"#fff",textTransform:"uppercase",overflow:"hidden",textOverflow:"ellipsis",maxHeight:"2rem"},info:{fontFamily:m.a,fontSize:"16px",color:e.palette.grey[100]},subinfo:{fontFamily:m.a,fontSize:"12px",color:e.palette.grey[400]}}})),N=/!\[.*\]\((.*)\)/,F=function(e){var t=new Date;t.setTime(e);var a=t.getUTCDate(),n=t.getMonth()+1,r=t.getFullYear();return"".concat(n,"/").concat(a,"/").concat(r)},w=function(e){e.showInfo;var t=e.info,a=e.handleClick,n=q(),r=function(e){var t=e.match(N),a=null;if(null!==t)try{a=t[1]}catch(n){return null}return a}(t.text);return console.log(r),c.a.createElement(h.a,{item:!0,xs:12,sm:6,md:3,className:n.infoContainer,onClick:a},c.a.createElement(h.a,{container:!0},r?c.a.createElement("img",{className:n.imazo,src:r}):null,c.a.createElement(h.a,{item:!0,xs:12,style:{paddingTop:"8px"}},c.a.createElement(b.a,{variant:"h6",className:n.title},t.title)),c.a.createElement(h.a,{item:!0,xs:12},c.a.createElement(b.a,{variant:"h6",className:n.info},t.author)),c.a.createElement(h.a,{item:!0,xs:12,style:{paddingTop:"16px"}},c.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},F(t.create_date))),c.a.createElement(h.a,{item:!0,xs:12},c.a.createElement(b.a,{variant:"subtitle1",className:n.subinfo},t.about_author))))},C=c.a.forwardRef((function(e,t){return c.a.createElement(j.a,Object.assign({direction:"up",ref:t},e))})),k=Object(g.a)((function(e){return{title:{fontFamily:m.a,color:e.palette.grey[300]},aboutAuthor:{fontFamily:m.a,color:e.palette.grey[400],fontSize:"14px"},author:{fontFamily:m.a,color:e.palette.grey[400],fontSize:"14px"},error:{fontFamily:m.a,color:e.palette.grey[500]},text:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3),color:e.palette.grey[100]},meta_info_container:{border:"1px solid ".concat(e.palette.grey[700]),backgroundColor:e.palette.primary.dark,padding:e.spacing(2),borderRadius:"0px"}}})),A=function(e){var t=e.showing,a=e.info,n=e.handleClose,r=k();return c.a.createElement(E.a,{fullScreen:!0,open:t,TransitionComponent:C,onClose:function(){return n()}},c.a.createElement(y.a,{position:"fixed"},c.a.createElement(x.a,null,c.a.createElement(_.a,{onClick:function(){return n()}},c.a.createElement(v.a,null,"close")),c.a.createElement(b.a,{className:r.title,style:{paddingLeft:"8px"}},a?a.title:"Not Found"))),c.a.createElement(O.a,null,a?c.a.createElement(h.a,{container:!0,style:{paddingTop:"84px"}},c.a.createElement(h.a,{item:!0,xs:12,className:r.meta_info_container},c.a.createElement(b.a,{className:r.aboutAuthor},"Created On: ",F(a.create_date)),c.a.createElement(b.a,{className:r.author},"Author: ",a.author),c.a.createElement(b.a,{className:r.aboutAuthor},"About Author: ",a.about_author)),c.a.createElement(h.a,{item:!0,xs:12,className:"react-article-source ".concat(r.text)},c.a.createElement(s.a,{source:a.text}))):c.a.createElement(h.a,{container:!0,style:{paddingTop:"84px"}},c.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(b.a,{className:r.error,variant:"h5"},"\\_[^_^]_/",c.a.createElement("br",null)," ",c.a.createElement("br",null),"ERROR")))))},T=Object(g.a)((function(e){return{notFound:{color:e.palette.grey[600],paddingTop:e.spacing(5),paddingBottom:e.spacing(5)}}})),R=function(e){var t,a=e.queryObject,o=e.shouldDisplayInfo,i=T(),s=Object(u.c)(a.query_query,{variables:{options:{skip:0,limit:12,type:a.query_params}}}),m=s.data,f=s.error,g=s.loading,E=s.fetchMore,y=Object(p.a)().setLoading,x=Object(l.useState)(-1),_=Object(r.a)(x,2),v=_[0],O=_[1];Object(l.useEffect)((function(){!0===g?y(!0):!1===g&&y(!1)}),[g]);if(g)t=c.a.createElement(h.a,{container:!0,className:i.notFound},c.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(b.a,{variant:"h4"},"Loading...")));else if(f)t=c.a.createElement("div",null,"Error");else if(m){var j=function(){for(var e=m[a.query_table_name].map((function(e,t){return c.a.createElement(w,{showInfo:o,info:e,key:t,handleClick:function(){return O(t)}})})),t=[],n=0;n<m[a.query_table_name].length;n+=4){for(var r=[],l=0;l<4&&n+l<m[a.query_table_name].length;++l)r.push(e[n+l]);t.push(c.a.createElement(h.a,{container:!0},r))}return t}();console.log(j),t=0===j.length?c.a.createElement(h.a,{container:!0,className:i.notFound},c.a.createElement(h.a,{item:!0,xs:12,style:{textAlign:"center"}},c.a.createElement(b.a,{variant:"h4"},"-\\_(^_^)_/- ",c.a.createElement("br",null),c.a.createElement("br",null),"Nothing Found"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{dataLength:j.length,loader:c.a.createElement("div",null,"Loading"),hasMore:m.length%12===0,next:function(){return E({variables:{skip:Math.floor(m.length/12),limit:12,type:a.query_params},updateQuery:function(e,t){var r=t.fetchMoreResult;return r?Object.assign({},e,{feed:[].concat(Object(n.a)(e[a.query_table_name]),Object(n.a)(r[a.query_table_name]))}):e}})}},j))}return c.a.createElement(c.a.Fragment,null,t,c.a.createElement(A,{showing:v>=0,info:v>=0?m[a.query_table_name][v]:null,handleClose:function(){return O(-1)}}))}},305:function(e,t,a){"use strict";a.r(t);var n=a(162),r=a(0),o=a.n(r),l=a(57),c=a.n(l),i=(a(58),a(155)),s=a(175);function u(){var e=Object(n.a)(["\nquery allEnigma($options: InpOptions) {\n    allArticles(options: $options) {\n        _id\n        text\n        title\n        author\n        about_author\n        create_date\n    }\n}"]);return u=function(){return e},e}var m=c()(u());t.default=function(){return o.a.createElement(i.a,{container:!0},o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(s.a,{queryObject:{query_query:m,query_table_name:"allArticles",query_params:"enigma"}})))}}}]);
//# sourceMappingURL=12.b3aa3aca.chunk.js.map