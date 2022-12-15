import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import PgFOF from './Components/PgFOF';
import Cart from './Components/Cart';
import Index2 from './Components/index2';
import Product from './Components/product';
import Producta from './Components/producta';
import Productb from './Components/productb';
import Productc from './Components/productc';
import Productd from './Components/productd';
import Producte from './Components/producte';
import ProductPlush1 from './Components/productplush1';
import ProductPlush2 from './Components/productplush2';
import ProductPlush3 from './Components/productplush3';
import ProductBoard1 from './Components/productboard1';
import ProductBoard2 from './Components/productboard2';
import ProductBoard3 from './Components/productboard3';
import ProductCar1 from './Components/productcar1';
import ProductCar2 from './Components/productcar2';
import ProductCar3 from './Components/productcar3';







function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element ={<Login />}/>
      <Route exact path="/home" element ={<Home />}/>
      <Route exact path="/signup" element ={<Signup />}/>
      <Route exact path="/login" element ={<Login />}/>
      <Route exact path="/cart" element ={<Cart />}/>
      <Route exact path="/index2" element ={<Index2 />}/>
      <Route exact path="/product" element ={<Product />}/>
      <Route exact path="/producta" element ={<Producta />}/>
      <Route exact path="/productb" element ={<Productb />}/>
      <Route exact path="/productc" element ={<Productc />}/>
      <Route exact path="/productd" element ={<Productd />}/>
      <Route exact path="/producte" element ={<Producte />}/>
      <Route exact path="/productplush1" element ={<ProductPlush1 />}/>
      <Route exact path="/productplush2" element ={<ProductPlush2 />}/>
      <Route exact path="/productplush3" element ={<ProductPlush3 />}/>
      <Route exact path="/productboard1" element ={<ProductBoard1 />}/>
      <Route exact path="/productboard2" element ={<ProductBoard2 />}/>
      <Route exact path="/productboard3" element ={<ProductBoard3 />}/>
      <Route exact path="/productcar1" element ={<ProductCar1 />}/>
      <Route exact path="/productcar2" element ={<ProductCar2 />}/>
      <Route exact path="/productcar3" element ={<ProductCar3 />}/>


      <Route path="*" element ={<PgFOF />}/>
  


    </Routes>
    </BrowserRouter>







  );
}

export default App;
