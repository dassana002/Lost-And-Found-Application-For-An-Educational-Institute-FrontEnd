import 'bootstrap/dist/css/bootstrap.min.css';
import "/";
import { Request } from './components/request/Request';
import { NavBar } from './components/NavBar';
import { Item } from './components/item/Item';

/**
 * Create the Item Component
 *      Install React Boostrap
 *      Install axios
 *      CORS origin policy Configuration on BackEnd 
 */

function App() {
  return (
    <div>
      <NavBar/>
      <Item/>
    </div>
  );
}

export default App;
