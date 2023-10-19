import React from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../components/nav_bar';
import LogoUSM from '../assets/usm.png';

const InternalPage = () => {
  return (
    <div className="container">
      <h1 className="mt-3 text-white">Frontend Sample App</h1>
      <NavBar />
      <h2 className="mt-3 text-white">Página Interna</h2>
      <img src={LogoUSM} height={100} alt="logo usm" className="mt-3" /><br />
      <Button variant="danger" className="mt-3 text-white">Material UI Button</Button>
    </div>
  );
};

export default InternalPage;
