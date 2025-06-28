import React from 'react'

const ProductInfo = () => {
     const ProductInfo = {
            name:'Laptop',
            price:'$1200',
            availability: "In stock"
        }
  return (
  
    <div> 
        {ProductInfo.name}  , 
        {ProductInfo.price}  ,
        {ProductInfo.availability}  ,
    </div>
  )
}

export default ProductInfo