import {Navbar} from './Navbar.js'
import {Subnav} from './Subnav.js'
import { Card } from './Card.js'
import imagen1 from './chucho.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <Subnav></Subnav>
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
      <Card image={imagen1} />
    </div>
  );
}

export default App;
