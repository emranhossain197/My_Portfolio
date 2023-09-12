import { useEffect } from 'react';
import WOW from 'wowjs';
import PortfolieRouter from "./router/PortfolieRouter";

function App() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <div >
      <PortfolieRouter />
    </div>
  );
}

export default App;