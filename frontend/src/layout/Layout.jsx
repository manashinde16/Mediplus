import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer/footer';
import Routers from '../routes/routers';

function Layout() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default Layout;
