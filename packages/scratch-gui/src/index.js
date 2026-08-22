import React from 'react';

import {createRoot} from 'react-dom/client';

import App from './components/app/app';

const rootElement = document.getElementById('root');

if (!rootElement) {

    throw new Error('Scratch Mod: root element was not found.');

}

const root = createRoot(rootElement);

root.render(

    <React.StrictMode>

        <App />

    </React.StrictMode>

);
