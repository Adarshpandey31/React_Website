<eslint-disabled />

import React from 'react';
// createRoutesFromElements, RouterProvider,errorElement,Outlet,
import { BrowserRouter, Routes,   Route,  } from 'react-router-dom';
// import HeaderPart from './components/HeaderPart.jsx';
// import Body_Home from './components/Body_Home.jsx';
// import Footer from './components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Page1MensOuterwear from './Pages/Page1MensOuterwear.jsx';
import Page2LadiesOuterwear from './Pages/Page2LadiesOuterwear.jsx';
import Page3MensTshirts from './Pages/Page3MensTshirts';
import Page4LadiesTshirts from './Pages/Page4LadiesTshirts.jsx';

import './styles/reset.css';
import './styles/HeaderPart.css';
import './styles/Footer.css';
import './styles/BodyHome.css';
import './styles/Page1.css';

function App() {

  return(
    <>
    <BrowserRouter>

    <Routes>
      <Route path ="/" element = {<Home />  } />
      <Route path ="/mens_outerwear" element = {<Page1MensOuterwear />} />
      <Route path ="/ladies_outerwear" element = {<Page2LadiesOuterwear />} />
      <Route path ="/mens_tshirts" element = {<Page3MensTshirts />} />
      <Route path ="/ladies_tshirts" element = {<Page4LadiesTshirts />} />
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


}

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
