/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cartcard(props) {
  const { ProductData, quantity } = props;
  const [productQuantity, setProductQuantity] = useState(null);

  const navigator = useNavigate();

  useEffect(() => {
    setProductQuantity(quantity);
  }, []);
  return (
    <>
      <div className="h-fit max-sm:h-fit flex max-sm:flex-wrap gap-[3rem] max-sm:gap-[1rem] pb-[1.5rem] max-sm:pb-[2rem] border-b-[.5px]  border-black/50">
        <div
          onClick={() => navigator(`/products/${ProductData?._id}`)}
          className="cursor-pointer select-none h-[16rem] w-[10.6rem]"
        >
          <img src={ProductData?.Image_url} alt="" className="h-full" />
        </div>

        <div className="flex flex-col gap-[.2rem] h-full w-[24rem] max-sm:w-[13rem]">
          <h3 className="text-[.9rem] font-light w-[24rem] max-sm:w-[16rem]  truncate ...">
            {ProductData?.product_category}
          </h3>
          <h2
            onClick={() => navigator(`/products/${ProductData?._id}`)}
            className="cursor-pointer text-[1.1rem] font-normal w-[24rem] max-sm:w-[16rem]  truncate ..."
          >
            {ProductData?.product_name}
          </h2>
          <h2 className="text-[.9rem] font-normal w-[24rem] max-sm:w-[16rem]  ">
            {ProductData?.product_description}
          </h2>

          <div className="hidden mt-[.4rem] max-sm:flex gap-[1rem] w-[6rem]">
            <h2 className="font-normal">₹{ProductData?.product_price}.00</h2>
          </div>
        </div>

        <div className="max-sm:hidden flex gap-[1rem] w-[6rem]">
          <h2 className="font-normal">₹{ProductData?.product_price}.00</h2>
        </div>

        <div className="max-sm:mt-[.6rem] w-[7rem] flex gap-[1rem]">
          <div className="cursor-pointer h-[1.6rem] w-[1.6rem] text-[1.3rem] rounded-[.2rem] flex justify-center transition-colors duration-300 items-center bg-black/80 hover:bg-black text-white">
            <FaPlus className="text-[.6rem]" />
          </div>
          <h2 className=" select-none text-[1.4rem] leading-[1.6rem]  text-black">
            {productQuantity}
          </h2>
          <div className="cursor-pointer h-[1.6rem] w-[1.6rem] text-[1.3rem] rounded-[.2rem] flex justify-center transition-colors duration-300 items-center bg-black/80 hover:bg-black text-white">
            <FaMinus className="text-[.6rem]" />
          </div>
        </div>

        <div className=" max-sm:mt-[.6rem] w-[8rem] font-semibold ">
          <span>Total :</span> ₹{ProductData?.product_price * productQuantity}
          .00
        </div>

        <div className=" mr-[2rem] flex gap-[2rem]">
          <div className="cursor-pointer flex items-center px-[2rem] h-[2.2rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-green-600/70 hover:bg-green-600 transition-all duration-300">
            Buy
          </div>
          <div className="cursor-pointer flex items-center px-[2rem] h-[2.2rem] w-fit rounded-[.4rem] text-[1.1rem] font-semibold text-white bg-red-500/80 hover:bg-red-500  transition-all duration-300">
            Remove
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartcard;
