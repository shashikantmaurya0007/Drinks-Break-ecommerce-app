import axios from 'axios';
import React ,{useEffect,useState}from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import '../styles/SingleProduct.css'
import { Audio } from "react-loader-spinner";
import {useCart,useUser,addItemToCart, isAlreadyExistInCart,useWishList,addToWishList, isAlreadyExistInWishList, removeFromWishList} from "../state/index";

const SingleProduct = () => {
  const {id}=  useParams()
  const navigate = useNavigate();
  const [product,setProduct]=useState(null);
  const [loading,setLoading]=useState(true)
  const {
    cartDispatch,
    cartState: { cartProducts },
  } = useCart();
  const { wishlistDispatch, wishliststate: { wishlistproducts } } = useWishList();
  console.log(useCart)
  const {
    user: { encodedToken },
  } = useUser();
  useEffect(()=>{

  (
    async ()=>
      {  
        try{
           const {data:{product}}= await axios.get(`/api/products/${id}`);
        
          
           setTimeout(() => {
              setProduct(product)

              setLoading(false)
           }, 2000);
        }
        catch(e)
        {
            setLoading(false)
            
        }
      }
  )()

  },[])

  
  return<> 
  { loading&&<div className='single_prod_main_con'>
    
  <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>}
   {  
     
     

     (product &&<div className='single_prod_main_con'>


       <div className={`card shopping_card card_shadow horizontal `}>
       {product?.offer && <p className="card_text_badge">{product?.offer}</p>}
       {product?.offer === "outOfStock" && (
        <div className="card-overlay-text">
          <span>Out of Stock</span>
        </div>
      )}
              <div className="img-container">
                <img
                  src={product?.img}
                  alt={product?.title}
                />
              </div>
              <div class="lower-card">
                <header>
                  <h3>{product?.title}</h3>
                  <p class="header-description">From {product?.brand}</p>
                </header>
                <p class="card-description">
                  <span class="product_price">₹{product?.finalPrice} </span><strike>₹{product?.price}</strike
                  ><span class="card_discount">{product?.discountPercent}% off</span
                  ><span class="product_rating">{product?.rating}⭐</span>
                </p>
                <div className='single_prod_desc'>
                  <p><i class="bi bi-tags-fill"></i> Fast Delivery</p>
                  <p><i class="bi bi-tags-fill"></i>Free Home-Delivery</p>
                  <p><i class="bi bi-tags-fill"></i>Applicable for coupon</p>
                </div>
                <div class="btn-container singleprod_btn_con">
                {isAlreadyExistInCart(cartProducts, id) ? (
            <p
              onClick={(e) =>{ navigate("/cart")}}
              className="card_btn btn btn-primary btn-solid"
            >
              Go To Cart <i class="bi bi-cart-fill"></i>
            </p>
          ) : (
            <p
              onClick={(e) =>{
                console.log(cartDispatch,product,encodedToken,'hello')
               
                   addItemToCart(cartDispatch,product, encodedToken)
                 }
              }
              className="card_btn btn btn-primary btn-solid"
            >
              Add To Cart<i class="bi bi-cart-fill"></i>
            </p>
          )}          {console.log(isAlreadyExistInWishList(wishlistproducts,product._id),'ye dekh le bhai')}
                  <p onClick={()=>{ isAlreadyExistInWishList(wishlistproducts,product._id)?removeFromWishList(product._id,wishlistDispatch,encodedToken): addToWishList(product, wishlistDispatch, encodedToken)}} class="btn btn-primary btn-outline"
                    > {isAlreadyExistInWishList(wishlistproducts,product._id)?"Remove From WishList":"Add to WishList"}</p>
                </div>
              </div>
            </div>
    </div>)
   }
  </>
}

export {SingleProduct}