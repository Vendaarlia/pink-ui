import{j as e}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const g="_subHero_iex8k_34",h="_txtSub_iex8k_60",u={subHero:g,txtSub:h},x=({title:t,subtitle:r,description:i})=>({getTitleContent:()=>t,getSubtitleContent:()=>r,getDescriptionContent:()=>i}),p=({title:t,subtitle:r,imageSrc:i,description:n})=>{const{getTitleContent:o,getSubtitleContent:c,getDescriptionContent:m}=x({title:t,subtitle:r,description:n});return e.jsxs("div",{className:u.subHero,children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("img",{src:i,alt:"Subhero Image"})}),e.jsxs("div",{children:[e.jsx("h3",{children:o()}),e.jsx("h3",{children:c()})]})]}),e.jsx("div",{className:u.txtSub,children:e.jsx("p",{children:m()})})]})},b=p;p.__docgenInfo={description:"",methods:[],displayName:"Subhero",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},imageSrc:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const C={title:"Components/Subhero",component:b},S=t=>e.jsx(b,{...t}),s=S.bind({});s.args={title:"Hero Title",subtitle:"Hero Subtitle",imageSrc:"/guild.PNG",description:"This is the subhero description."};var d,a,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Subhero {...args} />",...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,C as default};
