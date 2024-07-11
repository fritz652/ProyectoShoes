import './App.css'
import Cards from './componets/Cards/Cards'
import { Counter } from './componets/Counter/Counter'
import Show from './componets/show.jsx/Show'

/* import Nav from './componets/nav/Nav' */
import Usuario from './componets/usuario/Usuario'


function App() {


  return (
    <>
        <Cards/>
        <Usuario  nombre= "Fritz" codigo={123}  nacionalidad="Peruano" profesion="Desarrollador FrontEnd"/>
        <Counter/>
        <Show/>
    </>
  )
}

export default App
