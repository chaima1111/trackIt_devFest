import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Fomr1 from './components/form/Form1'
import Fomr2 from './components/form/Form2'
import Fomr3 from './components/form/Form3'
import Fomr4 from './components/form/Form4'
import Sign from './pages/page1/Sign'
import  Team from './pages/page2/Team' ;
import WorkSpace from './pages/page3/Workspace';
import Success from './pages/page4/Success';
import  Join from './pages/page5/Join';
import WelcomBack from './pages/page6/WelcomBack';
import Lending from './pages/page7/Lending';
import './App.css'


  function App() {
    return (
      <BrowserRouter>
      <Routes>
       
        <Route path="/form1" element={<Fomr1/>}></Route>
        <Route path="/form2" element={<Fomr2/>}></Route>
        <Route path="/form3" element={<Fomr3/>}></Route>
        <Route path="/form4" element={<Fomr4/>}></Route>
        <Route path="/sign" element={<Sign/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/workspace" element={<WorkSpace/>} />
        <Route path='/success' element={<Success/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/welcomback' element={<WelcomBack/>}/>
        <Route path='/' element={<Lending/>}/>
      </Routes>
      </BrowserRouter>
    
    )



  }
  
  export default App;