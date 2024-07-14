import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import productData from "../components/ProductData";
const ProductCard = lazy(() => import("../components/ProductCard"));

function HomePage() {
  return (
    <>
      <section className="bg-red-100 h-[calc(100vh-3.5rem)] max-sm:h-fit w-full flex">
        <img
          src="https://i.pinimg.com/originals/39/d0/a7/39d0a7e4ee4300d46910b1eb77b388f2.jpg"
          alt=""
          className="w-full h-full max-sm:h-fit"
        />
      </section>

      <section className="p-[1.5rem] max-sm:p-[1rem] flex flex-col w-full h-screen max-sm:h-fit gap-[1.5rem] bg-slate-100">
        <div className="flex max-sm:flex-col max-sm:gap-[1rem] gap-[1.5rem] w-full h-3/5">
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src="https://images.ctfassets.net/q602vtcuu3w3/7FN9jV5pR4KceNjErZ4DKw/434860b70c439739c13b4f759946b996/24_JULY_HOMEPAGE_ASSETS_EM58.jpg?w=1420&q=80&fm=webp"
              alt=""
              className="w-full h-full max-sm:h-fit "
            />
            <div className="absolute flex justify-center items-center left-0 z-20 w-full h-full top-[50%] opacity-0 hover:opacity-100 group-hover:top-0 hover:bg-black/30 transition-all duration-150">
              <h2 className="text-[2rem] font-bold text-white">
                Summer Dresses
              </h2>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src="https://images.ctfassets.net/q602vtcuu3w3/7xiw5zdSfVK31SfEpbyi5d/c3d20d1311a9000abe55e25c7d13bc03/24_JULY_HOMEPAGE_ASSETS_EM.jpg?w=710&q=80&fm=webp"
              alt=""
              className="w-full h-full max-sm:h-fit"
            />
            <div className="absolute flex justify-center items-center left-0 z-20 w-full h-full top-[50%] opacity-0 hover:opacity-100 group-hover:top-0 hover:bg-black/30 transition-all duration-150">
              <h2 className="text-[2rem] font-bold text-white">
                Denim Outfits
              </h2>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden flex max-sm:flex-col max-sm:gap-[1rem] gap-[1.5rem] w-full  h-2/5">
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src="https://images.ctfassets.net/q602vtcuu3w3/2phu60i1EqhFkzbnyuboAr/236d37597b7ac2054f07230a48329fb5/24_JULY_HOMEPAGE_ASSETS_EM12.jpg?w=1420&q=80&fm=webp"
              alt=""
              className="w-full h-full max-sm:h-fit"
            />
            <div className="absolute flex justify-center items-center left-0 z-20 w-full h-full top-[50%] opacity-0 hover:opacity-100 group-hover:top-0 hover:bg-black/30 transition-all duration-150">
              <h2 className="text-[1.6rem] font-bold text-white">
                Hoodies + Sweatshirts
              </h2>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src="https://images.ctfassets.net/q602vtcuu3w3/66TvFu8pLZ4y0x0esxFgPc/0328bc38716bd2e850544ed018d55964/24_JULY_HOMEPAGE_ASSETS_EM.jpg?w=1420&q=80&fm=webp"
              alt=""
              className="w-full h-full max-sm:h-fit"
            />
            <div className="absolute flex justify-center items-center left-0 z-20 w-full h-full top-[50%] opacity-0 hover:opacity-100 group-hover:top-0 hover:bg-black/30 transition-all duration-150">
              <h2 className="text-[1.6rem] font-bold text-white">
                College + Dorm Essentials
              </h2>
            </div>
          </div>
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src="https://images.ctfassets.net/q602vtcuu3w3/7H5VwrITXWYAgWj3ONhDXq/e8c7bd5ff11783761ac9e055787916bf/24_JULY_HOMEPAGE_ASSETS_EM13.jpg?w=1420&q=80&fm=webp"
              alt=""
              className="w-full h-full max-sm:h-fit"
            />
            <div className="absolute flex justify-center items-center left-0 z-20 w-full h-full top-[50%] opacity-0 hover:opacity-100 group-hover:top-0 hover:bg-black/30 transition-all duration-150">
              <h2 className="text-[1.6rem] font-bold text-white">
                Spotlight On: Jorts
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[3rem] flex items-center flex-col">
        <h2 className="text-[1.8rem] font-semibold">
          Best Seller<span className="font-normal">Products</span>
        </h2>
        {/* --------------- products -------------------------- */}

        <div className=" mt-[3rem] flex justify-center flex-wrap gap-[3rem] max-sm:gap-[1rem] ">
          <Suspense fallback={<Loading />}>
            {productData?.map((e) => (
              <ProductCard key={e._id} data={e} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  );
}

export default HomePage;
