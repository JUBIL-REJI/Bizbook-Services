import React from 'react';
import Marginright from '../Theme/Margin_right'
import Marginleft from '../Theme/Margin_left'
import Copyright_one from '../common/Copyright_one';
import Blogpostbody from './Blogpostbody';
import Header_two from '../common/Header_two';
import Footer_one from '../common/Footer_one'

function Blogpost() {
  return (
    <div>
      <Header_two/>
      <Marginleft/>
      <Blogpostbody/>
      <Marginright/>
      <Footer_one/>
      <Copyright_one/>
      
    </div>
  );
}

export default Blogpost;