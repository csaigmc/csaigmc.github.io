(this["webpackJsonpcsaigmc-front"]=this["webpackJsonpcsaigmc-front"]||[]).push([[10],{182:function(e,t,a){"use strict";var o=a(0),r=a.n(o),n=a(79),l=a(1),c=a(4),i=(a(8),a(6)),d=a(183),s=Object(d.a)(r.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),m=a(7),p=a(18),b=a(11),u=a(9),g=r.a.forwardRef((function(e,t){var a=e.avatar,o=e.classes,n=e.className,d=e.clickable,m=e.color,p=void 0===m?"default":m,g=e.component,f=void 0===g?"div":g,y=e.deleteIcon,h=e.disabled,v=void 0!==h&&h,C=e.icon,O=e.label,k=e.onClick,j=e.onDelete,S=e.onKeyDown,x=e.onKeyUp,E=e.size,w=void 0===E?"medium":E,z=e.variant,I=void 0===z?"default":z,T=Object(c.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=r.a.useRef(null),N=Object(b.a)(R,t),L=function(e){e.stopPropagation(),j&&j(e)},$=!(!1===d||!k)||d,P="small"===w,D=null;if(j){var A=Object(i.a)("default"!==p&&("default"===I?o["deleteIconColor".concat(Object(u.a)(p))]:o["deleteIconOutlinedColor".concat(Object(u.a)(p))]),P&&o.deleteIconSmall);D=y&&r.a.isValidElement(y)?r.a.cloneElement(y,{className:Object(i.a)(y.props.className,o.deleteIcon,A),onClick:L}):r.a.createElement(s,{className:Object(i.a)(o.deleteIcon,A),onClick:L})}var B=null;a&&r.a.isValidElement(a)&&(B=r.a.cloneElement(a,{className:Object(i.a)(o.avatar,a.props.className,P&&o.avatarSmall,"default"!==p&&o["avatarColor".concat(Object(u.a)(p))])}));var K=null;return C&&r.a.isValidElement(C)&&(K=r.a.cloneElement(C,{className:Object(i.a)(o.icon,C.props.className,P&&o.iconSmall,"default"!==p&&o["iconColor".concat(Object(u.a)(p))])})),r.a.createElement(f,Object(l.a)({role:$||j?"button":void 0,className:Object(i.a)(o.root,n,"default"!==p&&[o["color".concat(Object(u.a)(p))],$&&o["clickableColor".concat(Object(u.a)(p))],j&&o["deletableColor".concat(Object(u.a)(p))]],"default"!==I&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[p]],v&&o.disabled,P&&o.sizeSmall,$&&o.clickable,j&&o.deletable),tabIndex:$||j?0:void 0,onClick:k,onKeyDown:function(e){S&&S(e),e.currentTarget===e.target&&-1!==[" ","Enter","Backspace","Delete","Escape"].indexOf(e.key)&&e.preventDefault()},onKeyUp:function(e){if(x&&x(e),e.currentTarget===e.target){var t=e.key;!k||" "!==t&&"Enter"!==t?!j||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&R.current&&R.current.blur():j(e):k(e)}},ref:N},T),B||K,r.a.createElement("span",{className:Object(i.a)(o.label,P&&o.labelSmall)},O),D)})),f=Object(m.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(p.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(p.b)(t,.08)},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(p.b)(t,.12)}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.08)},"&:active":{backgroundColor:Object(p.b)(e.palette.primary.main,.12)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.08)},"&:active":{backgroundColor:Object(p.b)(e.palette.secondary.main,.12)}},deletable:{"&:focus":{backgroundColor:Object(p.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(p.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},avatarSmall:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},avatarColorPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},avatarColorSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,userSelect:"none",whiteSpace:"nowrap",cursor:"inherit"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(p.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(p.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(p.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(p.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(p.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g),y=a(159),h=a(27);a.d(t,"a",(function(){return O}));var v=Object(n.a)((function(e){return{root:{fontFamily:h.a,marginLeft:e.spacing(1),fontWeight:700}}})),C=function(e){var t=e.text,a=e.isActive,o=e.onChange,n=v();return r.a.createElement(f,{onClick:o,className:n.root,label:t,variant:a?"default":"outlined",color:a?"secondary":"default"})},O=function(e){var t=e.tabList,a=e.currentTab,o=e.onChange;return r.a.createElement(y.a,{style:{paddingBottom:"24px"}},t.map((function(e,t){return r.a.createElement(C,{key:t,text:e,isActive:a===t,onChange:function(){return o(t)}})})))}},183:function(e,t,a){"use strict";var o=a(1),r=a(0),n=a.n(r),l=a(4),c=(a(8),a(6)),i=a(7),d=a(9),s=n.a.forwardRef((function(e,t){var a=e.children,r=e.classes,i=e.className,s=e.color,m=void 0===s?"inherit":s,p=e.component,b=void 0===p?"svg":p,u=e.fontSize,g=void 0===u?"default":u,f=e.htmlColor,y=e.titleAccess,h=e.viewBox,v=void 0===h?"0 0 24 24":h,C=Object(l.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return n.a.createElement(b,Object(o.a)({className:Object(c.a)(r.root,i,"inherit"!==m&&r["color".concat(Object(d.a)(m))],"default"!==g&&r["fontSize".concat(Object(d.a)(g))]),focusable:"false",viewBox:v,color:f,"aria-hidden":y?"false":"true",role:y?"img":"presentation",ref:t},C),a,y?n.a.createElement("title",null,y):null)}));s.muiName="SvgIcon";var m=Object(i.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s);function p(e,t){var a=n.a.memo(n.a.forwardRef((function(t,a){return n.a.createElement(m,Object(o.a)({},t,{ref:a}),e)})));return a.muiName=m.muiName,a}a.d(t,"a",(function(){return p}))},310:function(e,t,a){"use strict";a.r(t);var o=a(23),r=a(0),n=a.n(r),l=(a(60),a(182)),c=a(159),i=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,215))})),d=Object(r.lazy)((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,216))}));t.default=function(){var e,t=Object(r.useState)(0),a=Object(o.a)(t,2),s=a[0],m=a[1];switch(s){case 0:e=n.a.createElement(i,null);break;case 1:e=n.a.createElement(d,null)}return n.a.createElement(c.a,{container:!0},n.a.createElement(l.a,{tabList:["CSA Advisory","CSA Members"],currentTab:s,onChange:function(e){m(e)}}),n.a.createElement(c.a,{container:!0},n.a.createElement(c.a,{item:!0,xs:12},e)))}}}]);
//# sourceMappingURL=10.8929afb8.chunk.js.map