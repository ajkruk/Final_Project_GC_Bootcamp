import React from 'react';

type NavigationProps = {
  links: { title: string; url: string }[];
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <nav id="main-navigation">
      <ul>
        {links.map((link, index) => (
          <ul key={index}>
            <a href={link.url}>{link.title}</a>
          </ul>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;