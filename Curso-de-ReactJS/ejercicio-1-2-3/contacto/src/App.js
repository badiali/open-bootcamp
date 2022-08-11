import "./App.css";
import ComponenteA from "./components/ComponenteA";
import { Contacto } from "./models/contacto.class";

function App() {
  const contactoPrueba = new Contacto(
    "Luis",
    "Badiali",
    "luis@badiali.es",
    true
  );

  return (
    <div className="App">
      <h1>Contacto</h1>
      <ComponenteA contacto={contactoPrueba} />
    </div>
  );
}

export default App;
