import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from '../container/Layout.jsx';
import Login from '../container/Login.jsx';
import RecoveryPassword from '../container/RecoveryPassword.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx'
import '../styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
       
            <Layout>
            <Routes>
            <Route exact path ="/" element ={<Home/>}/>
                <Route exact path ="/login" element ={<Login/>}/>
                <Route  path ="/recovery-password" element ={<RecoveryPassword/>}/>
                <Route path ="*" element ={<NotFound/>} />
                </Routes>
            </Layout>
        
        </BrowserRouter>
      
    );
};

export default App;
