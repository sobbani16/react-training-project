import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CounterComponent from './Components/CounterComponent/CounterComponent';
import PasswordField from './Components/PasswordField/PasswordField';
import ShoppingComponent from './Components/ShoppingComponent/Shopping';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';
import { Provider } from 'react-redux';
import { store } from './store';
import AxiosApp from './Components/AxiosDemo/Axios-demo';
import AxiosAppPost from './Components/AxiosDemo/Axios-demo-post';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shopping" element={<ShoppingComponent />} />
        <Route path="counter" element={<CounterComponent />} />
        <Route path="password" element={<PasswordField />} />
        <Route path="third-component" element={<ThirdComponent/>}/>
        <Route path="axios-component" element={<AxiosApp/>}/>
        <Route path="axios-component-post" element={<AxiosAppPost/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
