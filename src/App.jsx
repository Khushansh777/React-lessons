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
    </div>
  );
}

export default App;
