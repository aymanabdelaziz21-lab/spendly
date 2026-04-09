import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from "./Context/AppContext"
import { ToastProvider } from "./Context/ToastContext"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ToastProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </ToastProvider>
);