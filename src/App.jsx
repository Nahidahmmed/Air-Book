import "./App.css";
import Airlines from "./Component/Airlines/Airlines";
import Banner from "./Component/Banner/Banner";
import Blog from "./Component/Blog/Blog";
import Destinations from "./Component/Destinations/Destinations";
import Footer from "./Component/Footer/Footer";
import Navbar from "./Component/Navbar/Navbar";
import Offers from "./Component/Offers/Offers";
// import Testimonials from "./Component/Testimonials/Testimonials";

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
        <Blog/>
      </div>
        {/* <Testimonials/> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
