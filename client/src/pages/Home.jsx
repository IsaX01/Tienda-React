import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: 600;
  display: flex;
  margin: 5;
`

const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <div><Title>Sugeridos para ti:</Title></div>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  );
};

export default Home;