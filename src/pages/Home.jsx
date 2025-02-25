import { Autoplay, Navigation, Pagination, Zoom } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slider from "../components/Slider";
import { useContext, useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import CraftCard from "../components/CraftCard";
import { AuthContext } from "../Provider/AuthProvider";
import PaintingCard from "../components/PaintingCard";
import { MdArrowDropDown } from "react-icons/md";
import { FaCheck, FaShoppingCart } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import Review from "../components/Review";
const Home = () => {
  const [products, SetProducts] = useState([]);
  const { loading } = useContext(AuthContext);
  const [product, setProducts] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [loader, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://art-craft-server-iota.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://art-craft-server-iota.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        SetProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://art-craft-server-iota.vercel.app/paintings")
      .then((res) => res.json())
      .then((data) => {
        setPaintings(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Artisan Alley_Home</title>
      </Helmet>
      {loader ? (
        <div className="flex justify-center items-center h-[150px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <section className="slider">
          <Swiper
            slidesPerView={1}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            zoom={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation, Zoom, Pagination, Navigation]}
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

      <section className="mt-44">
        <div className="text-center space-y-12 my-20">
          <h2 className=" text-3xl font-bold text-[#fc7527]">Arts & Crafts</h2>
          <Fade direction="down">
            <p className=" text-xl break-all inter">
              Arts and crafts describes a wide variety of activities involving
              making things with of one own hands. Arts and crafts is usually a
              hobby. Some crafts (art skills) have been practised since
              preshistoric times, others are more recent inventions.
            </p>
          </Fade>
        </div>
        {loader ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {product
              .sort(() => Math.random() - 0.5)
              .slice(0, 6)
              .map((prod) => (
                <CraftCard key={prod._id} prod={prod}></CraftCard>
              ))}
          </div>
        )}
      </section>
      <section className="mt-44">
        <div className="">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold flex text-[#fc7527] justify-center my-14">
            <span className="mr-2"> Arts & Crafts {""} </span>
            <Typewriter
              words={["Painting Category"]}
              loop={500}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <Fade direction="down">
            <p className=" text-center mb-3 inter">
              The Arts & Crafts category encompasses a wide range of creative
              endeavors that involve crafting, making, and artistic expression.
              From traditional handicrafts to modern DIY projects, this category
              celebrates the joy of creating handmade items and exploring
              artistic techniques
            </p>
          </Fade>
        </div>
        {loader ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paintings.map((painting) => (
              <PaintingCard
                key={painting._id}
                painting={painting}
              ></PaintingCard>
            ))}
          </div>
        )}
      </section>
      <section className="discount mt-44">
        <div className=" text-center">
          <h2 className=" text-4xl font-bold my-12 text-[#fc7527]">
            Discount <span className=" text-red-600">%</span>
          </h2>
          <Fade direction="down">
            <p className="inter">
              Explore a world of creativity and imagination with our exclusive
              art collection, now available at unbeatable prices for a limited
              time only!
            </p>
          </Fade>
        </div>
        {loader || loading ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            {" "}
            {products.slice(0, 4).map((pro, idx) => (
              <>
                <div key={pro._id} className=" overflow-hidden">
                  <Fade
                    duration={2000}
                    triggerOnce={true}
                    direction={idx % 2 === 0 ? "right" : "left"}
                  >
                    <div className="dark:bg-gray-100 dark:text-gray-800">
                      <div className="container max-w-6xl  p-6 mx-auto space-y-6 sm:space-y-12">
                        <div className="block max-w-sm gap-3 mx-auto  sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                          <img
                            src={pro.photo}
                            alt=""
                            className="object-cover  w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                          />

                          <div className="p-6 space-y-2 border-2 lg:col-span-5">
                            <Fade triggerOnce={true} direction="down">
                              <h3 className="text-2xl font-semibold flex items-center sm:text-4xl ">
                                Regular Price <MdArrowDropDown />
                                <span className="ml-4 text-2xl">
                                  <sup>$</sup>40-70 up
                                </span>
                              </h3>
                              <span className="text-xs dark:text-gray-600 ">
                                {pro.timestamp.split("T")[0]} POST
                              </span>
                            </Fade>
                            <div className="divider"></div>
                            <Fade triggerOnce={true} direction="left">
                              <div className="flex items-center gap-2">
                                <FaCheck /> <p>Quality checked by Owner</p>
                              </div>
                            </Fade>
                            <Fade
                              triggerOnce={true}
                              direction="left"
                              duration={2000}
                            >
                              <div className="flex items-center gap-2">
                                <FaCheck /> <p>Included: Future updates</p>
                              </div>
                            </Fade>
                            <Fade
                              triggerOnce={true}
                              direction="left"
                              duration={3000}
                            >
                              <div className="flex items-center gap-2">
                                <FaCheck />
                                <p>
                                  Included:6 months support for any conditions
                                </p>
                              </div>
                            </Fade>
                            <div className="flex gap-6 ">
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="checkbox checkbox-md"
                                />
                                <span>Use our membership token</span>
                              </label>
                              <div className="flex gap-4 text-xl font-semibold items-center">
                                <span>
                                  <del>
                                    <sup>$</sup>54.07
                                  </del>
                                </span>
                                <span>
                                  <sup>$</sup>36.38
                                </span>
                              </div>
                            </div>
                            <Fade triggerOnce={true} direction="up">
                              <button className="btn w-full font-semibold hover:border-[#82B440] hover:bg-transparent hover:text-[#82B440] bg-[#82B440] text-xl text-white">
                                <FaShoppingCart /> Add to Cart
                              </button>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              </>
            ))}
          </>
        )}
      </section>
      <section>
        <Review></Review>
      </section>
      <section>
        <div className="text-center mt-44 my-14 space-y-8">
          <h1 className="text-4xl font-bold text-[#fc7527] ">Gallery</h1>
          <Fade direction="down">
            <p className="inter">
              A gallery is a space dedicated to the exhibition and appreciation
              of visual art. It serves as a cultural hub where artists showcase
              their works to the public and visitors engage with art in various
              forms. Within a gallery, visitors can immerse themselves in a
              diverse range of artistic expressions, from traditional paintings
              and sculptures to avant-garde installations and multimedia
              presentations.
            </p>
          </Fade>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[calc(100px-70)]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="gallery">
              <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                  <img
                    src="https://i.ibb.co/1f1sp6T/cartoon-stripe.jpg"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/mhbdTmY/cartoonzip.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/Tcf1LT4/pencil.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/pWZgXm4/oil.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/cLHgpf2/prolar.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/r0tfQtq/skach.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/PtXfM1t/mauntaint.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/1Lk2jWY/cartoon.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/DDwWqBW/carchol.jpg"
                  />
                  <img
                    src="https://i.ibb.co/xqSq5MJ/water.jpg"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                  />
                  <img
                    src="https://i.ibb.co/FW03yX9/parotiat.jpg"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/xgBq8mr/parotia.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/JFKLD3V/paingting4.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/HN8hTnm/painting2.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/hDpPRzh/painting1.jpg "
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/HV5GVGY/canvas.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/wWqPZZn/Forest.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/J5byYy9/Ink.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/kMKKTSj/river-forest-with-river-trees-337384-20353.jpg"
                  />
                </div>
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                  <img
                    src="https://i.ibb.co/7KCXdCG/superhero.jpg"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/2sxRsz5/skatch.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/WzHyt1p/seperhero3.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/hsCxSjd/seperhero1.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/2ZKS0by/scatch.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/1Mj9Kyk/moutain2.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/5LgjsXT/mountaint4.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/FVjn7NQ/mountain3.jpg"
                  />
                  <img
                    alt=""
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src="https://i.ibb.co/yW5WLwC/mauntain.jpg"
                  />
                  <img
                    src="https://i.ibb.co/6FrpTNK/oil.jpg"
                    alt=""
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
                  />
                </div>
              </section>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
