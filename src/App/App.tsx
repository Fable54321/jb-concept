import { Route, Routes } from 'react-router'
import  Home  from './Root/Home/Home'
import Products from './Root/Products/Products'
import Root from './Root/Root'
import About from './Root/About/About'

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}/>
        <Route path="/produits" element={<Products />} />
        <Route path="/a_propos" element={<About />} />
      </Route>
    </Routes>
    
)

}

export default App
