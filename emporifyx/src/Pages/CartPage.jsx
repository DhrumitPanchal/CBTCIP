import { useState } from "react";
import CartPageCard from "../components/CartPageCard";
import productData from "../components/ProductData";
function CartPage() {
  const [cartProduct, setCartProduct] = useState(null);
  const [total, setTotal] = useState(0);

  return (
    <>
      <section className="px-[4rem] max-sm:px-[1rem] py-[2rem] min-h-[calc(100vh-3.5rem)] flex flex-col gap-[1.6rem]">
        {cartProduct?.length > 0 && (
          <div className="max-sm:hidden pb-[1rem] flex border-b-[.5px]  border-black/50">
            <div className="w-[10.6rem]"></div>
            <h2 className="w-[24rem] mx-[3rem] font-medium ">Item</h2>
            <h2 className="w-[6rem] mr-[3rem] font-medium ">Item Price</h2>
            <h2 className="w-[7rem] mr-[3rem] font-medium ">Quantity</h2>
            <h2 className="font-medium">Total Price</h2>
          </div>
        )}
        {productData?.length > 0 ? (
          productData.map((data, index) => (
            <CartPageCard key={index} ProductData={data} />
          ))
        ) : (
          <h2 className="text-center w-full text-[3rem] text-black/20">
            You not have any products
          </h2>
        )}

        {cartProduct?.length > 0 && (
          <div className="mt-[1rem] cursor-pointer h-[2.8rem] px-[2rem] flex gap-[2rem] rounded-[.6rem] items-center w-fit  bg-black">
            <div className="text-[1.3rem] font-semibold text-white">
              Total :
            </div>
            <div className="text-[1.3rem] font-semibold text-white">
              ₹ {total}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default CartPage;
