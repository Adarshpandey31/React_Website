import React from 'react';
import {createRoutesFromElements, RouterProvider, BrowserRouter, Routes,  Outlet, Route } from 'react-router-dom';
import HeaderPart from './components/HeaderPart.jsx';
import Body_Home from './components/Body_Home.jsx';
import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Mens_Outerwear from './Pages/Mens_Outerwear.jsx';
import Ladies_Outerwear from './Pages/Ladies_Outerwear.jsx';
import Mens_Tshirts from './Pages/Mens_Tshirts.jsx';
import Ladies_Tshirts from './Pages/Ladies_Tshirts.jsx';

import './styles/HeaderPart.css';
import './styles/Footer.css';
import './styles/Body_Home.css';

function App() {

  return(
    <>
    <BrowserRouter>

    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path ="/mens_outerwear" element = {<Mens_Outerwear />} />
      <Route path ="/ladies_outerwear" element = {<Ladies_Outerwear />} />
      <Route path ="/mens_tshirts" element = {<Mens_Tshirts />} />
      <Route path ="/ladies_tshirts" element = {<Ladies_Tshirts />} />
    </Routes>
    
    </BrowserRouter>
    </>
  );

  //another method -1, For routing 
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path ="/" element = {<Root /> }>
  //       <Route index element={<Body_Home />} />
  //       <Route Path ="/mens_outerwear" element={<Mens_Outerwear />} />
  //     </Route>
  //   )
  // ) 
  // return(
  //   <div classNsme = "App">
  //     <RouterProvider router={router} />
  //   </div>
  // )


};

//another method -1 

// const Root = () =>{

//   return(
//      <>
//      <div>
//       <HeaderPart />
//      </div>
     
//      <div>
//       <Outlet/>
//      </div>
     
//      {/* <div>
//      <Footer />
//      </div> */}
//      </>
//   )
// }

export default App;
