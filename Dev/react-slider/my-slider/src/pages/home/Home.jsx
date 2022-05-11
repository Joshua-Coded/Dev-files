import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './home.css';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';


export default function Home() {
    return (
        <div>
            < Navbar />
            < Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle'>Home guests love</h1>
                <FeaturedProperty />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}