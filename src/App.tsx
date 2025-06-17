import 'bootstrap/dist/css/bootstrap.min.css';
import "/";
import { Request } from './components/request/Request';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Request/>
    </div>
  );
}

export default App;
