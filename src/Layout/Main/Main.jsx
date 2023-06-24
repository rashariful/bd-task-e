import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import MainHeader from '../../Components/Header/MainHeader/MainHeader';
import TopHeader from '../../Components/Header/TopHeader/TopHeader';

const Main = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <TopHeader></TopHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;