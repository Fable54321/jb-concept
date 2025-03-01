import { Route, Routes } from 'react-router'
import  Home  from './Root/Home/Home'
import Products from './Root/Products/Products'
import Root from './Root/Root'
import About from './Root/About/About'
import Contact from './Root/Contact/Contact'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}/>
        <Route path="/produits" element={<Products />} />
        <Route path="/a_propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    
)

}

export default App
