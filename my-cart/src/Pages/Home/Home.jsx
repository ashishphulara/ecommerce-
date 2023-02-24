import React from 'react';
// import products from "../product"
import {PRODUCTS} from '../../products';
import Product from './Product';


const Home = () => {
  return (
    <div className='header'>
      <div>My shop</div>
      <div className='products'>
       {
        PRODUCTS.map((Prod)=>(
          <Product data={Prod}/>
        ))
       } 
      </div>
    </div>

  )
}

export default Home