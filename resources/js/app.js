
require('./bootstrap');
import axios from "axios";
window.axios = axios;
axios.defaults.baseURL = '/api/admin'
import React from 'react';
import ReactDOM from 'react-dom';
import Applink from "./routes/Applink";
import Notification from "./Notification/Notification";
window.Notification = Notification;

ReactDOM.render(
    <React.StrictMode>
        <Applink />
    </React.StrictMode>,
    document.getElementById('app')
);
