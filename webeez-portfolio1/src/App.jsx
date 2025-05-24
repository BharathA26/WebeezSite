import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import './styles/theme.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      {/* Add other sections as we create them */}
    </div>
  );
}

export default App; 