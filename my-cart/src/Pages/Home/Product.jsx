import React from 'react'

const Product = (props) => {
    const {id,productName,price,productImage} = props.data
  return (
    <div className='products'>
        <img src={productImage} alt=''/>
        <div className='description'>
          <p><b>{productName}</b></p>
          <p>₹{price}</p>
        </div>
    </div>
  )
}

export default Product