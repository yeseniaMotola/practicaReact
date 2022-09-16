
import './App.css';

function App() {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>miau <span>store</span></h1>
      </div>
      <nav>
        <ul className='navLinks'>
          <li>alimentos</li>
          <li>objetos</li>
          <li>plantas</li>
          <li>contacto</li>
        </ul>
      </nav>
      <button className='botonBuscar'>buscar</button>
    </header>
  );
}

export default App;
