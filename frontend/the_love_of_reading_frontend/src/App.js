import './App.css';
import Navbar from './components/Nav'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";



function App() {
  return (
    <Theme>
      <div className="App">
      <Navbar />

     
    </div>

    </Theme>
    
  );
}

export default App;
