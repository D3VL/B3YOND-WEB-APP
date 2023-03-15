import React from 'react';
import ReactDOM from 'react-dom/client';

// config stuff
import Global from './js/config/global';

// all page elements
import Footer from './react/components/Footer';
import Header from './react/components/Header';
import ConnectionStatus from './react/components/ConnectionStatus';

// pages
import PageIndex from './react/pages/Index';
import PageAbout from './react/pages/About';
import PageAwaitingConnection from './react/pages/AwaitingConnection';
import PageCommandList from './react/pages/CommandList';
import PageCommandContainer from './react/pages/CommandContainer';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// import main.scss from ../scss/main.scss
import './scss/main.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageIndex />,
    },
    {
        path: "/about",
        element: <PageAbout />,
    },
    {
        path: "/awaiting-connection",
        element: <PageAwaitingConnection />,
    },
    {
        path: "/commands",
        element: <PageCommandList />,
    },
    {
        path: "/command/:command",
        element: <PageCommandContainer />,
    }
]);

Global.connectionStatus = ''


const root = ReactDOM.createRoot(document.getElementById('b3yond-app'));
root.render(
    <React.StrictMode>
        <div className="h-100 text-center p-3">
            <Header />
            <RouterProvider router={router} />
        </div>
        <Footer />
    </React.StrictMode>
);
