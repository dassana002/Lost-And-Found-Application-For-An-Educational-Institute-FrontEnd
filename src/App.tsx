import 'bootstrap/dist/css/bootstrap.min.css';
import "/";
import { Request } from './components/request/Request';
import { NavBar } from './components/NavBar';
import { Item } from './components/item/Item';

function App() {
  return (
    <div>
      <NavBar/>
      <Item/>
    </div>
  );
}

export default App;
