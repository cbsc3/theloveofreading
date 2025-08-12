import './App.css';
import Navbar from './components/Nav'
import CustomHero from './components/secondHero';
import AIAdoptionSection from './components/Adoption';
import RainToys from './components/rainingHero';
import GeoLocation from './components/Location';


function App() {
  return (
      <div className="App">

        <Navbar/>
        <GeoLocation />
        <RainToys />
        <AIAdoptionSection />
      

     
    </div>

    
  );
}

export default App;
