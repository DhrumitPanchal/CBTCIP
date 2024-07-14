import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import productData from "../components/ProductData";
function LikedProPage() {
  const [likedProduct, setLikedProduct] = useState(productData);

  //   useEffect(() => {
  //     if (!productData || !user?.likedProducts) return;

  //     const filteredProducts = productData.filter((product) =>
  //       user?.likedProducts.some((item) => item.productId === product?._id)
  //     );
  //     setLikedProduct(filteredProducts);
  //   }, [user, user.likedProducts, productData]);

  return (
    <div className="mt-[2rem] mb-[4rem] px-[3rem] max-sm:px-[1rem] flex flex-wrap max-sm:justify-between min-h-[calc(100vh-3.5rem)] w-full gap-[3rem] max-sm:gap-[1rem]">
      {likedProduct?.length > 0 ? (
        likedProduct?.map((product, index) => (
          <ProductCard key={index} data={product} />
        ))
      ) : (
        <h2 className="text-center w-full text-[3rem] text-black/20">
          You not have any products
        </h2>
      )}
    </div>
  );
}

export default LikedProPage;
