import React from 'react';

//Components
import SimpleAccordion from './Accordion/Accordion';

//Styles
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SimpleAccordion />
      <SimpleAccordion />
      <SimpleAccordion />
    </div>
  );
};

export default Sidebar;
