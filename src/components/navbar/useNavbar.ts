import React from 'react';

export type Nav = {
  text: string;
  href: string;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
};

const useNavbar = () => {
  const renderLink = (link: Nav, key: number) => 
    React.createElement('a', {
      className: link.className,
      href: link.href,
      target: link.target || '_self',
      key: key,
      style: link.style,
    }, link.text);

  return {
    renderLink,
  };
};

export default useNavbar;
