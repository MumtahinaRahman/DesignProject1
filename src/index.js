import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { LessonsContextProvider } from './context/LessonsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
        <AuthContextProvider>
            <LessonsContextProvider>
                <App />
            </LessonsContextProvider>           
        </AuthContextProvider>
    </React.StrictMode>

);
