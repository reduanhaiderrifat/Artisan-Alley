import { Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "../components/Slider";
import { useContext, useEffect, useState } from "react";

import CraftCard from "../components/CraftCard";
import { AuthContext } from "../Provider/AuthProvider";
const Home = () => {
  const [products, SetProducts] = useState([]);
  const { loading } = useContext(AuthContext);
  const [product, setProducts] = useState([]);
  const [loader, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProducts(data);
        setLoading(false);
      });
  }, []);
  console.log(product);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        SetProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen">
      {loading && loader ? (
        <div className="flex justify-center items-center h-[150px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section className="slider">
          <Swiper
            slidesPerView={1}
            navigation={true}
            zoom={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Zoom, Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((slider) => (
              <SwiperSlide key={slider._id}>
                <Slider slider={slider}></Slider>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <section className="mt-6">
        <div className="text-center space-y-12 my-20">
          <h2 className=" text-3xl font-bold">Arts & Crafts</h2>
          <p className=" text-xl break-all">
            Arts and crafts describes a wide variety of activities involving
            making things with of one own hands. Arts and crafts is usually a
            hobby. Some crafts (art skills) have been practised since
            preshistoric times, others are more recent inventions.
          </p>
        </div>
        {loader ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.slice(0, 6).map((prod) => (
              <CraftCard key={prod._id} prod={prod}></CraftCard>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
