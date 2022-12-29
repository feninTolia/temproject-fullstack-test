import { useState, useEffect } from 'react';

import { redirect, useLocation } from 'react-router-dom';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import style from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={style.layoutContainer}>
      <Header />

      <div className={style.outlets}>
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
