import ReactDOM from 'react-dom/client';
import './index.css';
import {Routing} from "@routing/index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Routing />
);
