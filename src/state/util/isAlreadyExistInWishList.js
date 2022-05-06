const isAlreadyExistInWishList=(wishlist,id)=>
{



  return wishlist.filter(prod=>prod._id===id).length;



}

export {isAlreadyExistInWishList}