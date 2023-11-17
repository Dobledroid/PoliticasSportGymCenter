import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';


import { BrowserRouter } from 'react-router-dom';
// import { SessionProvider } from './paginacion/contexts/SessionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Header />
  //   <Index />
  //   <UpperFooter />
  //   <Footer />
  // </React.StrictMode>
  <React.StrictMode>
    {/* <SessionProvider> */}
      <BrowserRouter>

        <App />
        
      </BrowserRouter>
    {/* </SessionProvider> */}

=======
import PoliticasPrivacidadGimnasio from './PoliticasPrivacidadGimnasio';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PoliticasPrivacidadGimnasio />
>>>>>>> 652d08245e6365b2f2b33228a1d6006cf93ffe4c
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
