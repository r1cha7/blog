import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Base from './pages/Base';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import PostPage from "./pages/PostPage";
import Categories from "./pages/Categories";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='services' element={ <Services />} />
        <Route path='/about' element={<About />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
