import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import RainbowSetup from './web3/RainbowSetup.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RainbowSetup>
        <App />
    </RainbowSetup>
  </div>
)
