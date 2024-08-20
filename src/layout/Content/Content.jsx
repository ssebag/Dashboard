import "./Content.css";
import { Routes, Route } from 'react-router-dom';

import Home from '../../component/Home/Home';
import ContentTop from '../../component/ContentTop/ContentTop';

const Content = () => {
  return (
    <div className='main-content'>
    <ContentTop />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
     
    </div>
  )
}

export default Content
