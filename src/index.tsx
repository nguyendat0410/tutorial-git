/**
 * @description   ¯\(ツ)/¯
 * @since         Monday, 9 18th 2023, 16:17:56 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { createRoot } from 'react-dom/client';

import './public/tailwind.css';
import './public/style.css';

const App = () => {
  return (
    <div className="main-content container">
      <h1 className="font-bold">Hello World !</h1>
      <div className="font-bold text-9xl text-orange-500">DEV</div>
    </div>
  );
};

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);
