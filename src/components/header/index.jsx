import React from 'react';
import { useAuth } from '../../utils/AuthContext';

const Header = () => {

    const {user} = useAuth()

  return (
    <div>
      <header>
        <a href="/">home</a>
        <a href="/profile">profile</a>
        {user ? <a href='/login'>logout</a> : <a href='/login'>login</a>}
      </header>
    </div>
  );
}

export default Header;
