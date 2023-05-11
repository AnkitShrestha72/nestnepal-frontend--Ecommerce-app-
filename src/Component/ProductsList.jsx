import React, { useState } from 'react'
import axiosApi from "../API/ApiAxios"
import ProductCard from './ProductCard'
import Spinner from './spinner'
const ProductsList = () => {
    const [product,setProduct] = useState()
    const [isloading,setIsLoading] = useState(false)
    const fetchProduct = async ()=>{
        try {
        setIsLoading(true)
        const response = await axiosApi.get('/products')
        setProduct(response.data)
        setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    if(isloading){
      return (
        <Spinner/>
      )
    }
  return (
    <div>
      
        <button className='p-4 bg-slate-600 border' onClick={()=>{
          fetchProduct()
        }}>Get all Products</button>
      
      <div className="ProductLists flex flex-wrap justify-around">
      {product && product.map((data)=> <ProductCard details={data}/>)
      }
      </div>
      
    </div>
  )
}

export default ProductsList
