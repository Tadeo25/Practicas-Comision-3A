// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import FormColores from './components/FormColores';


function App() {
  return (
    <>
      <Header img="https://upload.wikimedia.org/wikipedia/commons/d/db/HLSColorSpace.png"/>
      <FormColores />
    </>
  );
}


export default App;
