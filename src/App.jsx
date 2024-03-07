import "./App.css";
import Airlines from "./Component/Airlines/Airlines";
import Banner from "./Component/Banner/Banner";
import Destinations from "./Component/Destinations/Destinations";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Offers from "./Component/Offers/Offers";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      {/* home contetnt */}
      <Banner />
      <div className="max-w-screen-xl mx-auto">
        <Destinations />
        <Offers/>
        <Airlines/>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
