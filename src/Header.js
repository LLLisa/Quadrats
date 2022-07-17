import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMainTiles, loadSwapTiles } from '../store';

const Header = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMainTiles());
    dispatch(loadSwapTiles());
  }, []);

  //for testing
  //   useEffect(() => {
  //     console.log(state);
  //  }, [state.mainTiles]);

  return <div>header</div>;
};

export default Header;
