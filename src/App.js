// import logo from './logo.svg';
import './App.css';
import { EmployeeComponent } from './Component/EmployeeComponent';
import FooterComponent from './Component/FooterComponent';
import HeaderComponent from './Component/HeaderComponent';
import { ListEmployeeComponent } from './Component/ListEmployeeComponent';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
// import HelloWorld from './HelloWorld';

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
      <Routes>
        <Route path='/' element = {<ListEmployeeComponent/>}></Route>
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
      </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  );
}

export default App;

