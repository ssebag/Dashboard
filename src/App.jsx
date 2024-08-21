import './App.css'
import Sidebar from './layout/Sidebar/Sidebar'
import Content from './layout/Content/Content'
import {DarkModeProvider} from './context/DarkModeContext';

function App() {
  
  return (
     <DarkModeProvider >  
        <div className='app'>
           <Sidebar />
           <Content />
        </div>
     </DarkModeProvider >  
  )
}

export default App

