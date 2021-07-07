import './App.css';
import Header from './Component/Layout/Header/Header'
import Body from './Component/Layout/Body/Body'
import Footer from './Component/Layout/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
