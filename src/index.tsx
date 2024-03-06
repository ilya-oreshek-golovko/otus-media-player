import ReactDOM from 'react-dom/client';
import {App} from "@app/index";
import { Routing } from './pages/Routing';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Routing />
);
