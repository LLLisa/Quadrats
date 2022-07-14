import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTiles } from './store';

const Header = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTiles());
  }, []);

  //for testing
  useEffect(() => {
    console.log(state);
  }, [state.mainTiles]);

  return <div>header</div>;
};

export default Header;