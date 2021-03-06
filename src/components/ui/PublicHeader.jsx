import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styles from './PublicHeader.module.css';

export const PublicHeader = () => {
  const location = useLocation();
  const alreadyInSignInPage = () => {
    if (location.pathname === '/login') {
      return true;
    } else {
      return false;
    }
  };
  const alreadyInSignUpPage = () => {
    if (location.pathname === '/signup') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles.header}>
      <Link className={styles.link} to={alreadyInSignInPage() ? '/' : '/login'}>
        {alreadyInSignInPage() ? 'Go back to home' : 'Sign In'}
      </Link>
      <Link
        className={styles.link}
        to={alreadyInSignUpPage() ? '/' : '/signup'}
      >
        {alreadyInSignUpPage() ? 'Go back to home' : 'Sign Up'}
      </Link>
    </div>
  );
};
