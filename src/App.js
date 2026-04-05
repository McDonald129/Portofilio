import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Set light mode by default
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
