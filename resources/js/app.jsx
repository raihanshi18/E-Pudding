import { BrowserRouter } from 'react-router-dom';
import '../css/app.css';
import './bootstrap';
import ReactDOM from 'react-dom/client'
import App from '../pages/App';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)