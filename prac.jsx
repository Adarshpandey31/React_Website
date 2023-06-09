import { lazy, Suspense } from 'react'; 
 import { 
   BrowserRouter, 
   Navigate, 
   Route, 
   Routes, 
 } from "react-router-dom"; 
 //pages 
 const LandingPage = lazy(() => import('./Pages/LandingPage/page')); 
 const MyTrips = lazy(() => import('./Pages/Protected/MyTrips/page')); 
 const CreateTrip = lazy(() => import("./Pages/Protected/CreateTrip/step1/page")); 
 const PersonalizedTripInterests = lazy(() => import('./Pages/Protected/CreateTrip/step2/page')); 
 const PersonalizedTripConsider = lazy(() => import('./Pages/Protected/CreateTrip/step3/CreateTripStep3')); 
 const TripItinerary = lazy(() => import('./Pages/Protected/TripItinerary/page')); 
  
 // import ExampleComponent from './Pages/test'; 
 //outlet for protected routes 
 import ProtectedRoutesOutlet, { Loader } from './utils/ProtectedRoutesOutlet'; 
 function App() { 
   return ( 
     <BrowserRouter> 
       <Suspense fallback={<Loader />}> 
         <Routes> 
           <Route path="/" element={<LandingPage />} /> 
           <Route element={<ProtectedRoutesOutlet />}> 
             <Route path="/my-trips" element={<MyTrips />} /> 
             <Route path="/create-trip"> 
               <Route path="step-1" element={<CreateTrip />} /> 
               <Route path="step-2" element={<PersonalizedTripInterests />} /> 
               <Route path="step-3" element={<PersonalizedTripConsider />} /> 
             </Route> 
             <Route path="/trip/:tripId" element={<TripItinerary />} /> 
           </Route> 
           <Route path="*" element={<Navigate to={"/"} replace />} /> 
         </Routes> 
       </Suspense> 
     </BrowserRouter> 
   ) 
 } 
 export default App;