import Array from "./components/Array.jsx";
import Footer from "./components/Footer.jsx";
import { Something, Something1 } from "./components/Greet.jsx";
import Header from "./components/header.jsx";
import JSXRules from "./components/JSXRules.jsx";
import Maincomponent from "./components/Maincomponent.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Username123 from "./components/username.jsx";
import Userlist from "./components/Userlist.jsx";
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import Children from "./components/Children.jsx";

function App() {
  return (
    <div>
      <Something />
      <Something1 />
      <Header />
      <Footer />
      <Maincomponent />
      <WelcomeMessage />
      <JSXRules />
      <ProductInfo />
      <Array />
      <Username123 />
      <Userlist/>
      <Person name ='Khushansh' age={15}/>
      <Product name ="Apple Air pods Max" price ='$1000'/>
      <Children>
        <h1>LOL</h1>
        <p>LMAO</p>
      </Children>
    </div>
  );
}

export default App;
