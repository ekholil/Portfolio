import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Menubar from './Components/Menubar/Menubar';
import ProjectDetail from './Components/Projects/ProjectDetail';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/skill" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/projectdetail/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
