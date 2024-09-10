import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { DataProvider } from './context';
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    {/* <DataProvider> */}
        <App />
    {/* </DataProvider> */}
     </Provider>
  </StrictMode>,
)
