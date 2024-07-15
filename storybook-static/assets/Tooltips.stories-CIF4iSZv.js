import{j as i}from"./jsx-runtime-BZf_YgVj.js";import{r as c}from"./index-CEThVCg_.js";const w="_tooltipWrapper_1fif6_24",E="_tooltip_1fif6_24",W="_top_1fif6_40",q="_right_1fif6_47",C="_bottom_1fif6_54",L="_left_1fif6_61",m={tooltipWrapper:w,tooltip:E,top:W,right:q,bottom:C,left:L},$=()=>{const[o,a]=c.useState(!1),n=c.useCallback(()=>a(!0),[]),l=c.useCallback(()=>a(!1),[]);return{visible:o,showTooltip:n,hideTooltip:l}},j=({text:o,children:a,position:n="top"})=>{const{visible:l,showTooltip:N,hideTooltip:S}=$();return i.jsxs("div",{className:m.tooltipWrapper,onMouseEnter:N,onMouseLeave:S,children:[a,l&&i.jsx("div",{className:`${m.tooltip} ${m[n]}`,children:o})]})},y=j;j.__docgenInfo={description:"",methods:[],displayName:"Tooltips",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const V={title:"Components/Tooltips",component:y},p=o=>i.jsx(y,{...o,children:i.jsx("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"this tooltip"})}),t=p.bind({});t.args={text:"Tooltip on top",position:"top"};const e=p.bind({});e.args={text:"Tooltip on right",position:"right"};const r=p.bind({});r.args={text:"Tooltip on bottom",position:"bottom"};const s=p.bind({});s.args={text:"Tooltip on left",position:"left"};var d,f,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => <Tooltips {...args}>
    <a href="/" target="_blank" rel="noopener noreferrer">this tooltip</a>
  </Tooltips>`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,h,T;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Tooltips {...args}>
    <a href="/" target="_blank" rel="noopener noreferrer">this tooltip</a>
  </Tooltips>`,...(T=(h=e.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var _,b,x;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => <Tooltips {...args}>
    <a href="/" target="_blank" rel="noopener noreferrer">this tooltip</a>
  </Tooltips>`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,k,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => <Tooltips {...args}>
    <a href="/" target="_blank" rel="noopener noreferrer">this tooltip</a>
  </Tooltips>`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const I=["Top","Right","Bottom","Left"];export{r as Bottom,s as Left,e as Right,t as Top,I as __namedExportsOrder,V as default};
