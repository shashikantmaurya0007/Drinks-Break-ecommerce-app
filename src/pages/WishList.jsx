import React from "react";
import { WishListCard } from "../component/WishListCard";
import { useWishList } from "../state/index";
const WishList = () => {
  const {
    wishliststate: { wishlistproducts },
  } = useWishList();
  return (
    <>
      {wishlistproducts.length ? (
        <main class="wishList_container">
          {wishlistproducts.map((prod) => (
            <WishListCard key={prod._id} product={prod} />
          ))}
        </main>
      ) : (
        <h1 className="cart_wishlist_header">
          Please add Products to WishList:)
        </h1>
      )}
    </>
  );
};

export { WishList };
