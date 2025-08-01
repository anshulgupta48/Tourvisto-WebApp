import React from 'react';
import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const AppLayout: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout;