/* eslint-disable react/prop-types */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useRef } from "react";
function ProductCard(props) {
  const [liked, setLiked] = useState(false);
  const cardRef = useRef(null);

  const { data } = props;

  return (
    <>
      <div
        ref={cardRef}
        onClick={() => navigator(`/products/${data?._id}`)}
        className=" product-card cursor-pointer h-fit max-sm:w-[13rem] "
      >
        <div className="group relative overflow-hidden h-[20rem] w-fit max-sm:h-fit max-sm:w-full flex justify-center items-center">
          <div className="flex items-center justify-center h-[20rem] w-full bg-slate-100/50">
            <img src={data?.Image_url} alt="" className="h-full" />
          </div>

          <div className="group-hover:flex max-sm:flex hidden transition-all duration-700  absolute top-[.8rem] bg-white/60 rounded-full right-[.8rem]  justify-center items-center z-20 mt-[.2rem] h-[1.9rem] w-[1.9rem]">
            {liked ? (
              <FaHeart className="text-red-500 text-[1rem] " />
            ) : (
              <FaRegHeart className="text-[1rem] " />
            )}
          </div>
        </div>
        <div className=" w-full py-[.8rem] flex flex-col justify-between">
          <p className="w-[13rem] font-thin truncate ...">
            {data?.product_name}
          </p>
          <div className="flex gap-[1rem] text-[.8rem]">
            {data?.discount_rate && (
              <h2 className="italic font-normal line-through ">
                ₹{data?.product_price + (10 * data?.product_price) / 100}
              </h2>
            )}
            <h2 className="font-normal text-green-600">
              ₹{data?.product_price}{" "}
              {data?.discount_rate && `(${data?.discount_rate}%`}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
