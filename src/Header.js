import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMainTiles } from '../store';

const Header = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMainTiles());
  }, []);

  return <div>header</div>;
};

export default Header;
