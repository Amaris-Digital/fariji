import React, { ReactNode } from 'react';

interface AppShellProps {
    children: ReactNode;
  }
  

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  return (  
    <div>
      <header>
        <h1>Fariji</h1>
      </header>
    </div>
  );
};

export default AppShell;
