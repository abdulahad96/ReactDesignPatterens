import React, { createContext, useContext, useState } from 'react';

// Create a context for the compound component
const ToggleContext = createContext();

// Create a custom hook to access the context
function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('Toggle compound components must be rendered within the Toggle component');
  }
  return context;
}

// Compound component
function Toggle({ children }) {
  const [on, setOn] = useState(false);

  // Toggle function to update the state
  const toggle = () => {
    setOn((prevState) => !prevState);
  };

  // Provide the context value to the children components
  const contextValue = {
    on,
    toggle,
  };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
}

// Child components
function ToggleOn({ children }) {
  const { on } = useToggle();
  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton() {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>;
}
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button
            key={index}
            onClick={() => {
                console.log(child)
                handleTabClick(index)}}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child, index) => (
          <div style={{ display: activeTab === index ? 'block' : 'none' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};


const Tab = ({ children }) => {
  return <>{children}</>;
};

const CompoundTab = ()=>{
    return (
        // <Tabs>
        //   <Tab label="Tab 1">
        //     <p>Content for Tab 1</p>
        //   </Tab>
        //   <Tab label="Tab 2">
        //     <p>Content for Tab 2</p>
        //   </Tab>
        //   <Tab label="Tab 3">
        //     <p>Content for Tab 3</p>
        //   </Tab>
        // </Tabs>
        <Toggle>
      <ToggleOn>The button is on</ToggleOn>
      <ToggleOff>The button is off</ToggleOff>
      <ToggleButton />
    </Toggle>
      );
}
export default CompoundTab;