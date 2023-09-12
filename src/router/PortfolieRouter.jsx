import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';


function PortfolieRouter(){
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    );
  }
export default PortfolieRouter;
