import React from "react";

interface LayoutProps {
  children: any;
  className: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-white dark:bg-black/10 p-32 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
