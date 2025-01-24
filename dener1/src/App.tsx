import { Acumulador5 } from "./typescript/Acumulador5";
import { AreaCuadrado } from "./typescript/AreaCuadrado";
import { ArregloParametro } from "./typescript/ArregloParametro";
import { ArreglosDivididos5 } from "./typescript/ArreglosDivididos5";
import { EjersicioAlumnos } from "./typescript/EjersicioAlumnos";




const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion TS - React</h1>
      <hr/>
      <AreaCuadrado />
      <br/>
      <hr/>
      <Acumulador5/>
      <br/>
      <hr/>
      <ArregloParametro/>
      <br/>
      <hr/>
      <ArreglosDivididos5/>
      <br/>
      <hr/>
      <EjersicioAlumnos/>
    </div>
  )
}


export default App;
