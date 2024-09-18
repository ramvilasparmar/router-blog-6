// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/*' element={<Page404 />}/>
      <Route path='/user/:name' element={<User />} />
      <Route path='/filter/' element={<Filter />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
