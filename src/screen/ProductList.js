import React, {useEffect, useState} from "react";
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getsearchProduct } from "../assets/service/getsearchProduct";
import Navbar from "../component/Navbar";
import StarRatings from "react-star-ratings";
import '../assets/style/productlist.css';

const ProductList =()=>{
 const params = useParams();
 const [data, setData] = useState()

useEffect(()=>{
  getsearchProduct(params.keyword)
  .then((res)=>setData(res.data?.products))
  .catch((err)=>console.log(err))
},[])
    
    return(
 <div>
    <Navbar/>
    <div className="container-product-list">
        {data?.map((item, index)=>{
            return (
              <div className="listProduct-item">
                <img
                  src={item.thumbnail}
                  className="img-product-list"
                  alt="product-img"
                />
                <div className="name-product-list">{item.title}</div>
                <div className="price-product-list">
                  {item.price}Rb
                  <div className="disc-product-list">
                    -{item.discountPercentage}%
                  </div>
                </div>
                <div className="rating-product-list">
                  {item.rating}
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"
                  />
                </div>
              </div>
            );
        })}
    </div>
 </div>
    )
}
export default ProductList