
import './App.css'
import Banner from './Component/Banner/Banner'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'

function App() {


  return (
    <div>
      <Navbar></Navbar>
      {/* home contetnt */}
        <Banner/>
      <div className='max-w-screen-xl mx-auto'>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
