import React from 'react'
import Header_two from '../../common/Header_two';
import Margin_left from '../Margin_left';
import Dashboard_body from './Dashboard_body';
import Margin_right from '../Margin_right';
import Footer_one from '../../common/Footer_one';
import Copyright_one from '../../common/Copyright_one';




function Dashboard() {
  return (
    <div>
      <Header_two/>
      <Margin_left/>
      <Dashboard_body/>
      <Margin_right/>
      <Footer_one/>
      <Copyright_one/>
    </div>
  );
}

export default Dashboard;
