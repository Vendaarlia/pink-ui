import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{useMDXComponents as n}from"./index-BwF_zu8I.js";import{M as o}from"./index-XN6moam9.js";import"./index-CEThVCg_.js";import"./iframe-CR2nemuT.js";import"../sb-preview/runtime.js";import"./index-xnkZ--kd.js";import"./index-DXimoRZY.js";import"./index-9UrncIcR.js";import"./index-DrFu-skq.js";const u=()=>{const i={path:"path",svg:"svg",...n()};return e.jsx(i.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(i.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function s(i){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...n(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Configure your project"}),`
`,e.jsxs("div",{className:"sb-container",children:[e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"pink-ui",children:"Pink UI"}),e.jsxs(t.p,{children:["Welcome to ",e.jsx(t.strong,{children:"Pink UI"}),", a design system inspired by the vibrant and bold color palette of pink. This project aims to provide a set of reusable and customizable React components to help developers build modern and consistent user interfaces with ease."]})]}),e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-section-item",children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),e.jsx(t.p,{children:"Pink UI is a collection of React components designed to streamline the process of building user interfaces. With a focus on a playful and energetic pink theme, these components are perfect for creating visually appealing and cohesive designs."})]})})]}),`
`,e.jsx("div",{className:"sb-section",children:e.jsxs("div",{className:"sb-features-grid",children:[e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(t.h2,{id:"usage",children:"Usage"}),e.jsx(t.p,{children:"To use the components in your React project, simply import them as needed:"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import React from 'react';
import { Button, Input } from 'pink-ui';

const App = () => {
  return (
    <div>
      <Button label="Click Me" />
      <Input placeholder="Enter text" />
    </div>
  );
};

export default App;
`})})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(t.h2,{id:"customization",children:"Customization"}),e.jsx(t.p,{children:"All components in Pink UI are designed to be easily customizable. You can override the default styles using CSS or styled-components. Here’s an example of customizing the Button component:"}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import React from 'react';
import { Button } from 'pink-ui';
import styled from 'styled-components';

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
`})})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(t.h2,{id:"contributing",children:"Contributing"}),e.jsx(t.p,{children:"We welcome contributions to Pink UI! If you have ideas for new features or improvements, please open an issue or submit a pull request."})]}),e.jsxs("div",{className:"sb-grid-item",children:[e.jsx(t.h2,{id:"license",children:"License"}),e.jsxs(t.p,{children:["Pink UI is licensed under the MIT License. See the ",e.jsx(t.a,{href:"LICENSE",children:"LICENSE"})," file for more information."]})]})]})}),`
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
  `})]})}function b(i={}){const{wrapper:t}={...n(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as RightArrow,b as default};
