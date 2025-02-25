import { useContext, useEffect, useState } from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaMoneyCheckDollar, FaStar } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Zoom } from "react-awesome-reveal";

const VeiwDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { loading } = useContext(AuthContext);
  const {
    category,
    username,
    time,
    subcategory,
    stockStatus,
    rating,
    price,
    photo,
    image,
    timestamp,

    user_email,
    description,
    customization,
  } = product;
  useEffect(() => {
    fetch(`https://art-craft-server-iota.vercel.app/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      });
  }, [id]);

  if (loading || loader) {
    return (
      <div className="h-[calc(100vh-80px)] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Artisan Alley_VeiwDetails</title>
      </Helmet>
      <div className="flex my-4 flex-col max-w-6xl p-6 shadow-xl space-y-6 overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
        <div className="flex space-x-4">
          <img
            alt=""
            src={image}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />

          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {username}
            </a>
            <span className="text-xs dark:text-gray-600">
              {timestamp && timestamp.split("T")[0]} POST
            </span>
          </div>
        </div>
        <div>
          <Zoom triggerOnce={true}>
            <img
              src={photo}
              alt=""
              className=" w-full mb-4 h-96 md:h-[450px] lg:h-[550px] dark:bg-gray-500"
            />
          </Zoom>
          <h2 className="mb-1 text-xl font-semibold">
            <span className=" font-bold">Subcategory </span> : {category}
          </h2>
          <h2 className=" text-xl mt-4 my-2 font-semibold">
            <span className=" font-bold "> {subcategory}</span>
          </h2>
          <p className="text-sm dark:text-gray-600 break-all">
            <strong>Description</strong>: {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-between">
          <div className=" space-y-2">
            <label className="flex items-center gap-3">
              <strong>StockStatus :</strong>{" "}
              <input
                type="radio"
                name="radio-5"
                className="radio radio-success"
                defaultChecked
              />
              <span className="font-semibold text-lg">{stockStatus}</span>
            </label>
            <label className="flex items-center gap-3">
              <strong> Customization :</strong>
              <input
                type="radio"
                name="radio-2"
                className="radio radio-success"
                defaultChecked
              />
              <span className="font-semibold text-lg"> {customization}</span>
            </label>
            <p className="flex items-center gap-1 break-all">
              <MdAttachEmail />
              <strong>Contact :</strong> {user_email}
            </p>
          </div>
          <div className=" space-y-2">
            <p className="flex items-center gap-1">
              <AiOutlineFieldTime size={20} />
              <strong>Poccesing-Time : </strong>
              {time}
            </p>
            <p className="flex items-center gap-1">
              <FaMoneyCheckDollar /> <strong>Price : </strong>
              {price}
            </p>
            <p className="flex items-center gap-1">
              <strong>Rating : </strong>
              {rating} <FaStar className="text-orange-600" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeiwDetails;
