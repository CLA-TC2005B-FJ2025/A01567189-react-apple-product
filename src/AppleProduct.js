import React, { useInsertionEffect } from 'react'
import { useState } from 'react'  

import iphone from './svg/iphone.svg'
import ipad from './svg/ipad.svg'
import airpods from './svg/airpods.svg'
import imac from './svg/imac.svg'
import macbook from './svg/macbook.svg'
import watch from './svg/watch.svg'

import heart from './svg/heart.svg'

import './AppleProduct.css'

const mapaSVG = {iphone, ipad, airpods, imac, macbook, watch}

export function AppleProduct( props ) {

  const [clicks, setclicks] = useState(0);
  const manejarclick = () => {
    setclicks(clicks + 1);
  }

  return (
    <div className='apple-product'  onClick={manejarclick}>
      Producto {props.type} lleva {clicks} clicks
      <img className='product'
      alt="producto" src={mapaSVG[props.type]} width={100}/>
      <img className='heart'
      alt="heart" src={heart} style={{width:10+10*clicks+ 'px'}}/>
    </div>
  )
}