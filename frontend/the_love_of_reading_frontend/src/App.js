import './App.css';
import Navbar from './components/Nav'
import CustomHero from './components/secondHero';
import AIAdoptionSection from './components/Adoption';
import RainToys from './components/rainingHero';
import GeoLocation from './components/Location';
import CreateAccount from './components/Join';
import MissionSection from './components/Statement';
import ShelterJoin from './components/JoinShelter';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";



function App() {
  return (
      <div className="App">

        

        <Navbar/>

          <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <RainToys />
              <AIAdoptionSection />
              <MissionSection />
            </>
          } 
        />

        <Route 
          path="/join/user"
          element={
            <CreateAccount />
          } />

           <Route 
          path="/join/shelter"
          element={
            <ShelterJoin />
          } />

      </Routes>
    </Router>
     


        

        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Love of Animals LLC.</p>
  </aside>
</footer>
      

     
    </div>

    
  );
}

export default App;
