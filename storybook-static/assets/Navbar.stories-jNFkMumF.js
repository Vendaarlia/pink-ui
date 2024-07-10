import{j as s}from"./jsx-runtime-BZf_YgVj.js";import{R as p}from"./index-CEThVCg_.js";const N="_wrapNav_m3nl1_31",v="_logo_m3nl1_46",f="_menu_m3nl1_53",y="_radius_m3nl1_61",r={wrapNav:N,logo:v,menu:f,radius:y},x=()=>({renderLink:(e,i)=>p.createElement("a",{className:e.className,href:e.href,target:e.target||"_self",key:i,style:e.style},e.text)}),d=({leftLinks:n,rightLinks:e,logoText:i})=>{const{renderLink:l}=x();return s.jsxs("div",{className:r.wrapNav,children:[s.jsx("div",{className:r.menu,children:n.map((a,o)=>l({...a,className:`${r.radius} ${a.className||""}`},o))}),s.jsx("a",{className:r.logo,href:"/",children:i}),s.jsx("div",{className:r.menu,children:e.map((a,o)=>l({...a,className:`${r.radius} ${a.className||""}`},o))})]})},g=d;d.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{leftLinks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  href: string;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"target",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}}],raw:"Nav[]"},description:""},rightLinks:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  href: string;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"target",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"style",value:{name:"ReactCSSProperties",raw:"React.CSSProperties",required:!1}}]}}],raw:"Nav[]"},description:""},logoText:{required:!0,tsType:{name:"string"},description:""}}};const k={title:"Components/Navbar",component:g},_=n=>s.jsx(g,{...n}),t=_.bind({});t.args={leftLinks:[{text:"Guild",href:"/",className:""},{text:"Work",href:"/",className:""}],rightLinks:[{text:"Service",href:"/",className:""},{text:"Contact",href:"/",target:"_blank",className:""}],logoText:"DCARDGM"};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Navbar {...args} />",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,k as default};
