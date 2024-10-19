import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Fomr1 from './components/form/Form1';
import Fomr2 from './components/form/Form2';
import Fomr3 from './components/form/Form3';
import Fomr4 from './components/form/Form4';
function Forms() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/form1" element={<Fomr1/>}></Route>
      <Route path="/form2" element={<Fomr2/>}></Route>
      <Route path="/form3" element={<Fomr3/>}></Route>
      <Route path="/form4" element={<Fomr4/>}></Route>
    </Routes>
    </BrowserRouter>
  
  )
}

export default Forms;