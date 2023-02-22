import './styles.css';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Routes><Navbar/></Routes> */}
      
      {/* Route is used in switching pages */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
        
      </Routes>

      
      
      
    </div>
  );
}

export default App;
