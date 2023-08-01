import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';
import { LDUser } from 'launchdarkly-js-client-sdk';

(async () => {
  const testUser: LDUser = { key: 'test-user' };

  // Set clientSideID to your own Client-side ID. You can find this in
  // your LaunchDarkly portal under Account settings / Projects
  const LDProvider = await asyncWithLDProvider({
    clientSideID: 'client-side-id',
    user: testUser,
  });

  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(
    <React.StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </React.StrictMode>,
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();
