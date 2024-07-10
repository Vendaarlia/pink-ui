import{j as r}from"./jsx-runtime-BZf_YgVj.js";import{r as d}from"./index-CEThVCg_.js";const $="_grouper_1w0wn_24",D="_alert_1w0wn_29",S="_normal_1w0wn_38",q="_danger_1w0wn_43",E="_timerContainer_1w0wn_48",L="_timerLine_1w0wn_54",k="_shrinkWidth_1w0wn_1",e={grouper:$,alert:D,normal:S,danger:q,timerContainer:E,timerLine:L,shrinkWidth:k},A=({message:o,type:c="normal",duration:m=3e3,onClose:l})=>{const[j,b]=d.useState(!0);return d.useEffect(()=>{const N=setTimeout(()=>{b(!1),l&&l()},m);return()=>clearTimeout(N)},[m,l]),j?r.jsxs("div",{className:e.grouper,children:[r.jsx("div",{className:`${e.alert} ${e[c]}`,children:r.jsx("span",{children:o})}),r.jsx("div",{className:e.timerContainer,children:r.jsx("div",{className:`${e.timerLine} ${e[c]}`,style:{animationDuration:`${m}ms`}})})]}):null},C=A;A.__docgenInfo={description:"",methods:[],displayName:"AlertWithTimer",props:{message:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'normal' | 'danger'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Components/AlertWithTimer",component:C},i=o=>r.jsx(C,{...o}),s=i.bind({});s.args={message:"This is a timed normal alert",type:"normal"};const a=i.bind({});a.args={message:"This is a timed danger alert",type:"danger"};const t=i.bind({});t.args={message:"This alert will disappear in 5 seconds",type:"normal",duration:5e3};const n=i.bind({});n.args={message:"This alert will disappear in 3 seconds with onClose",type:"normal",duration:3e3,onClose:()=>alert("Alert closed")};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"args => <AlertWithTimer {...args} />",...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,_,T;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AlertWithTimer {...args} />",...(T=(_=a.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var w,f,W;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:"args => <AlertWithTimer {...args} />",...(W=(f=t.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};var y,v,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:"args => <AlertWithTimer {...args} />",...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const R=["Normal","Danger","CustomDuration","WithOnClose"];export{t as CustomDuration,a as Danger,s as Normal,n as WithOnClose,R as __namedExportsOrder,I as default};