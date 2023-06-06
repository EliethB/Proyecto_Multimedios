import React, { useState } from 'react';
import '../TabBarStyle.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';

function TabBar() {
  return (
    <nav className="tab" data-selected="2">
      <div className="icons">
        <div
          data-index="1"
          className="icon fa fa-home"
        ></div>
        <div
          data-index="2"
          className="icon fa fa-play initialised"
        
        ></div>
        <div
          data-index="3"
          className="icon fa fa-user fa-swap-opacity">

          </div>
      </div>
      <div className="bar">
        <div className="cap"></div>
        <div className="middle">
          <div className="side"></div>
          <div className="circle"></div>
          <div className="side"></div>
        </div>
        <div className="cap"></div>
      </div>
    </nav>
  );
}

export default TabBar;
