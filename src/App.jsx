
import About from './component/About'
// import Catalog from './component/Catalog'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
import Product from './component/Product'

function App() {

  return (
    <div className=''>
    <Navbar/>
     <Home />
     <About/>
     {/* <Catalog/> */}
     <Product />
     <Footer/>
    </div>
  )
}

export default App
