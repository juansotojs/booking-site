import React from 'react';
import ReactDOM from 'react-dom';
import { InlineWidget } from "react-calendly";
import InstagramFeed  from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

const App = (props) => {
  const toggleButton = document.getElementsByClassName('burger')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  const header = document.getElementsByClassName('hdr')[0]
  toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      header.classList.toggle('active');
  })
  navbarLinks.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
      header.classList.toggle('active');
  })
  return <div className="app">
    <div className='picsBox'>
    <InstagramFeed token="IGQVJXamxqVmFBT2FVNTJPaEhmejFQNC14X2ZANNGRGVVZAOOUFtU3pjRFlaN1lualJQa0FCWDBWMTBHSlg2VmtyZAl9NV1U3RmZAGMmdISEpYeG1qSmJqdXhwcHZAuV3BMaWVmQTNIc3hreVVtVUdCMGo2SgZDZD"  counter="6" className="picin"/>  
    </div>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);