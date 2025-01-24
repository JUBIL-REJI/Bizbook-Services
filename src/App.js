
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/index/Main";
import Service from "./pages/Service/Service";
import Events from "./pages/Events/Events";
import Products from "./pages/Products/Products";
import Coupons from "./pages/Coupons/Coupons";
import Blogs from "./pages/Blogs/Blogs";
import Community from "./pages/Community/Community";
import Halls from "./Categories/Halls/Halls";
import MyProfile from "./Theme/MyProfile/MyProfile";
import Dashboard from "./Theme/Dashboard/Dashboard";
import AllListing from "./Theme/All_listing/All_listing";
import AddNewListing from "./Theme/AddNewListing/AddNewListing";
import Enquiry from "./Theme/Enquiry/Enquiry";
import AllProducts from "./Theme/AllProducts/AllProducts";
import MyEvents from "./Theme/MyEvents/MyEvents";
import Blogpost from "./Blogpost/BlogPost";
import Promotions from "./Theme/Promotions/Promotions";














export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<Main />} />
          <Route path="/Service" element={<Service/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/Coupons" element={<Coupons/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/Halls" element={<Halls/>}/>
          <Route path="/MyProfile" element={<MyProfile/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/All_listing" element={<AllListing/>}/>
          <Route path="/AddNewListing" element={<AddNewListing/>}/>
          <Route path="/Enquiry" element={<Enquiry/>}/>
          <Route path="/AllProducts" element={<AllProducts/>}/> 
          <Route path="/MyEvents" element={<MyEvents/>}/>
          <Route path="/Blogpost" element={<Blogpost/>}/>
          <Route path="/Promotions" element={<Promotions/>}/>
          
          
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);