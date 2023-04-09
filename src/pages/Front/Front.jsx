import React from 'react'
import Home from "../../components/Home/Home"
import MileStone from '../../components/Miestone/MileStone';
import Ship from '../../components/Ship/Ship';
import Stats from '../../components/Stats/Stats';
import News from '../../components/News/News';

function Front() {
  return (
    <>
    <Home/>
    <Ship/>
    <MileStone/>
    <Stats/>
    <News/>
    </>
  )
}

export default Front