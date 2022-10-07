import React from 'react';
import ReactDOM from 'react-dom/client';
import './mainStyle.css'
import Navbar from './components/Navbar/navBar';

import Footer from './components/Footer/footer'
import Header from './components/Header/header';
import Characters from './components/Body/Characters';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < React.StrictMode >
    <>
        <Navbar / >
        <Header/>
        <Characters/>
         <Footer/>
    
    </>
    </React.StrictMode>
);