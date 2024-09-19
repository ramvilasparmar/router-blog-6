// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import User from './component/User';
import Filter from './component/Filter';
import Contact from './component/Contact';
import Company from './component/Company';
import Channel from './component/Channel';
import Other from './component/Other';
import Login from './component/Login';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
      <Router>
      
        <NavBar />
        <Routes>
          <Route path='/' element={<Protected Component={Home} />}/>
          <Route path='/about' element={<Protected Component={About} />}/>
          <Route path='/*' element={<Page404 />}/>
          <Route path='/user/:name' element={<User />} />
          <Route path='/filter/' element={<Protected Component={Filter} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contact' element={<Contact />} >
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
