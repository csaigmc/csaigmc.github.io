(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[20],{282:function(a,e,t){"use strict";t.r(e);var n=t(35),c=t(162),r=t(0),i=t.n(r),o=t(57),l=t.n(o),s=t(39),m=t(120),p=t(74),d=t(155),g=t(37),u=t(283),b=t(146),f=t(58);function h(){var a=Object(c.a)(["\nquery searchComplaint($id: ID!) {\n    complaint(id: $id) {\n        _id\n        complaint_status\n        complaint_message\n        create_date\n    }\n}\n"]);return h=function(){return a},a}var E=l()(h()),T=Object(p.a)((function(a){return{searchbar:{background:a.palette.primary.dark,borderTopLeftRadius:a.spacing(10),borderBottomLeftRadius:a.spacing(10),paddingLeft:a.spacing(2),paddingTop:a.spacing(1),paddingBottom:a.spacing(1)},search:{background:a.palette.primary.dark,borderTopRightRadius:a.spacing(10),borderBottomRightRadius:a.spacing(10),textAlign:"right",color:a.palette.grey[400],paddingTop:10,paddingBottom:a.spacing(1),paddingRight:a.spacing(2),"&:hover":{color:a.palette.secondary.main}},error:{paddingTop:a.spacing(2),paddingBottom:a.spacing(2),textAlign:"center",fontFamily:f.a,color:a.palette.grey[500]},complaint_data:{marginBottom:a.spacing(2),padding:a.spacing(2),marginTop:a.spacing(2),border:"1px solid ".concat(a.palette.grey[500]),color:a.palette.grey[200]},complaintText:{fontFamily:f.a}}}));e.default=function(){var a=Object(r.useState)(""),e=Object(n.a)(a,2),t=e[0],c=e[1];console.log(t);var o,l=Object(m.a)(E,{variables:{id:t}}),p=Object(n.a)(l,2),f=p[0],h=p[1],v=T(),_=Object(s.a)().setLoading;if(Object(r.useEffect)((function(){h.called&&h.loading?_(!0):!1===h.loading&&_(!1)}),[h.loading]),console.log(h.data),console.log(h.error),h.error)o=i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:12,className:v.error},i.a.createElement(g.a,{variant:"h5"},"\\_[^_^]_/ ",i.a.createElement("br",null),"Not Found")));else if(h.data){var x;switch(h.data.complaint.complaint_status){case"pending":x="#b71c1c40";break;case"inprogress":x="#ffa00040";break;case"resolved":x="#255d0040"}o=i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:12,className:v.complaint_data,style:{background:x}},i.a.createElement(g.a,{className:v.complaintText},"ID: ",h.data.complaint._id),i.a.createElement(g.a,{className:v.complaintText},"STATUS: ",h.data.complaint.complaint_status),i.a.createElement(g.a,{className:v.complaintText},"COMPLAINT: ",h.data.complaint.complaint_message),i.a.createElement(g.a,{className:v.complaintText},"ADDED ON: ",function(a){var e=new Date;e.setTime(a);var t=e.getUTCDate(),n=e.getMonth()+1,c=e.getFullYear();return"".concat(n,"/").concat(t,"/").concat(c)}(h.data.complaint.create_date))))}return i.a.createElement(d.a,{container:!0},i.a.createElement(d.a,{item:!0,xs:11},i.a.createElement(u.a,{fullWidth:!0,value:t,onChange:function(a){return c(a.target.value)},name:"id",className:v.searchbar,placeholder:"Search Complaint ID..."})),i.a.createElement(d.a,{item:!0,xs:1,className:v.search},i.a.createElement(b.a,{onClick:function(){f()}},"search")),i.a.createElement(d.a,{item:!0,xs:12},o))}}}]);
//# sourceMappingURL=20.b3b05e78.chunk.js.map