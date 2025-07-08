

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';

const AppShell = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handlePageChange = () => {
      const url = window.location.pathname;
      switch (url) {
        case '/':
          setCurrentPage('home');
          break;
        case '/about':
          setCurrentPage('about');
          break;
        case '/contact':
          setCurrentPage('contact');
          break;
        default:
          setCurrentPage('home');
      }
    };
    handlePageChange();
  }, []);

  return (
    <BrowserRouter>
      <Navigation currentPage={currentPage} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default AppShell;