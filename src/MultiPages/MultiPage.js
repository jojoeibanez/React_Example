import React from 'react';
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2'
import './MultiPages.css'

function Home() {
    return (
        <>
            <div>
                <Header />
                <hr />
                <Carousel />
                <hr />
                <Content />
                <hr />
                <Footer />
                <hr />
                <Footer2 />
            </div>
        </>
    )
}

export default Home
