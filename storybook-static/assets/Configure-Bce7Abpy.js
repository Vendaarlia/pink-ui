import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{useMDXComponents as i}from"./index-BwF_zu8I.js";import{M as s}from"./index-BLPeopKO.js";import"./index-CEThVCg_.js";import"./iframe-pE8G74H7.js";import"../sb-preview/runtime.js";import"./index-xnkZ--kd.js";import"./index-DXimoRZY.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";const u=()=>{const t={path:"path",svg:"svg",...i()};return e.jsx(t.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(t.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Configure your project"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"pink-ui",children:"Pink UI"}),e.jsxs(n.p,{children:["Welcome to ",e.jsx(n.strong,{children:"Pink UI"}),", a design system inspired by the vibrant and bold color palette of pink. This project aims to provide a set of reusable and customizable React components to speed up my work with ready to use component that ease to customizing."]})]}),e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-section-item",children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),e.jsx(n.p,{children:"Pink UI is a collection of React components designed to streamline the process of building user interfaces. With a focus on a playful and energetic pink theme, these components are personal project that I want to speed up my prototyping in unusual way of looking creative or none practical way."})]})})]}),`
`,e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-section-item",children:[e.jsx(n.h2,{id:"stories-the-components",children:"Stories the components"}),e.jsx(n.h3,{id:"components-section",children:"Components Section"}),e.jsx(n.p,{children:"On the Component Section is component that I learned to build with help from my mentor. I'm learning how to making components, remember anatomy that components, and learning the basic working components. I want component that is customizable the look and the purpose so basically I want cheat code library so I can't build component fast and skip wondering around to build component. That reliable on every need and condition."}),e.jsx(n.h3,{id:"advance-components",children:"Advance Components"}),e.jsx(n.p,{children:"for the Advance Component i want to experiment and learning how to making simple component that can be combine or integrated with other components."}),e.jsxs("div",{className:"sb-features-grid",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h4,{id:"micro",children:"micro"}),e.jsx(n.p,{children:"this folder is contain basic components that use to build complex component or asosiated components."})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h4,{id:"bundle",children:"bundle"}),e.jsx(n.p,{children:"this folder is contain collection of component that construct solid components that ready for use in specifict need."})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-features-grid",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h2,{id:"usage",children:"Usage"}),e.jsx(n.p,{children:"To use the components in your React project, simply import them as needed:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from "react";
import { Button, Input } from "pink-ui";

const App = () => {
  return (
      <div>
        <Button label="Click Me" />
        <Input placeholder="Enter text" />
      </div>
    );
  };

export default App;
`})})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h2,{id:"customization",children:"Customization"}),e.jsx(n.p,{children:"All components in Pink UI are designed to be easily customizable. You can override the default styles using CSS or styled-components. Here’s an example of customizing the Button component:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from "react";
import { Button } from "pink-ui";
import styled from "styled-components";

const CustomButton = styled(Button)\`
  background-color: #ff69b4;
  border-radius: 10px;
\`;

const App = () => {
  return (
    <div>
      <CustomButton label="Custom Button" />
    </div>
  );
};

export default App;
`})})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h2,{id:"contributing",children:"Contributing"}),e.jsxs(n.p,{children:["I'm welcome to new ideas for new features, improvements, or criticism. because I'm just a self-taught developer, please ",e.jsx(n.a,{href:"https://github.com/Vendaarlia/pink-ui",rel:"nofollow",children:"open an issue"})," for discuss."]})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(n.h2,{id:"license",children:"License"}),e.jsxs(n.p,{children:["Pink UI is licensed under the MIT License. See the ",e.jsx(n.a,{href:"https://github.com/Vendaarlia/pink-ui/blob/main/LICENSE",rel:"nofollow",children:"LICENSE"})," file for more information."]})]})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function b(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{u as RightArrow,b as default};
