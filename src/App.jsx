import './App.css'
import Sidebar from './layout/Sidebar/Sidebar'
import Content from './layout/Content/Content'
import {DarkModeProvider} from './context/DarkModeContext';

function App() {
  
  return (
        <div className='app'>  
          <DarkModeProvider>  
              <Sidebar />
               <Content />
           </DarkModeProvider>
        </div>
  )
}

export default App

