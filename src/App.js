import './App.css';
import { Index } from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import FormikDemo from './components/prectise/FormikDemo';
function App() {
  return (
    <>
      <h1 className='p-3 bg-dark text-light align-center'>Book store</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={< Index/>} />
        <Route path="/FormikDemo" element={<FormikDemo />} />
      </Routes>
    </>
  );
}
export default App;
