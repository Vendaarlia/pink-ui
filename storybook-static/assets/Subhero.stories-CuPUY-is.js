import{j as e}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const g="_subHero_p0rzj_40",h="_txtSub_p0rzj_62",u={subHero:g,txtSub:h},x=({title:t,subtitle:r,description:n})=>({getTitleContent:()=>t,getSubtitleContent:()=>r,getDescriptionContent:()=>n}),l=({title:t,subtitle:r,imageSrc:n,description:o})=>{const{getTitleContent:i,getSubtitleContent:c,getDescriptionContent:m}=x({title:t,subtitle:r,description:o});return e.jsxs("div",{className:u.subHero,children:[e.jsxs("h3",{children:[e.jsx("span",{children:e.jsx("img",{src:n,alt:"Subhero Image"})}),e.jsx("br",{}),e.jsxs("span",{children:[e.jsx("span",{children:i()}),e.jsx("br",{}),e.jsx("span",{children:c()})]})]}),e.jsx("div",{className:u.txtSub,children:e.jsx("p",{children:m()})})]})},b=l;l.__docgenInfo={description:"",methods:[],displayName:"Subhero",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},imageSrc:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const C={title:"Components/Subhero",component:b},S=t=>e.jsx(b,{...t}),s=S.bind({});s.args={title:"Hero Title",subtitle:"Hero Subtitle",imageSrc:"/public/guild.PNG",description:"This is the subhero description."};var p,a,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Subhero {...args} />",...(d=(a=s.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,C as default};
