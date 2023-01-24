import ReactDOM from 'react-dom/client';
import App from './App';
import TagManager from 'react-gtm-module';
import { BrowserRouter } from 'react-router-dom';

const tagManagerArgs = {
  gtmId: 'GTM-5CT8BX4'
}

TagManager.initialize(tagManagerArgs);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
