import {Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Equipos from '../pages/Equipos'
import Estadios from '../pages/Estadios'
import Historial from '../pages/Historial'



function AppRouter() {
  return (
    
      <Routes>
      <Route path='/' element={<Navbar/>}>
      <Route index  element={<Equipos/>}/>
      <Route  path='/estadios' element={<Estadios/>}/>
      <Route path='/historial' element={<Historial/>}/>
    
      </Route>
      <Route path='*' element={<h1 className='text-center'>404</h1>}/>
    </Routes>
    
  )
}

export default AppRouter
