import{j as t}from"./jsx-runtime-BZf_YgVj.js";import{r as g}from"./index-CEThVCg_.js";const C="_collapsible_vhnrp_24",E="_header_vhnrp_30",T="_content_vhnrp_42",l={collapsible:C,header:E,content:T},u=({title:a,children:h,defaultExpanded:f=!1})=>{const[o,x]=g.useState(f),_=()=>{x(!o)};return t.jsxs("div",{className:l.collapsible,children:[t.jsx("button",{className:l.header,onClick:_,children:a}),o&&t.jsx("div",{className:l.content,children:h})]})},m=u;u.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const N={title:"Components/Collapsible",component:m},b=a=>t.jsx(m,{...a}),e=b.bind({});e.args={title:"Collapsible Title",children:"This is the collapsible content."};const s=b.bind({});s.args={title:"Collapsible Title",children:"This is the collapsible content.",defaultExpanded:!0};var r,n,c;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Collapsible {...args} />",...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,p,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Collapsible {...args} />",...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["Default","DefaultExpanded"];export{e as Default,s as DefaultExpanded,y as __namedExportsOrder,N as default};