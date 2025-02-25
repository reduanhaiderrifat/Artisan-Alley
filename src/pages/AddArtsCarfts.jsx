import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";

const AddArtsCarfts = () => {
  const { user, loading } = useContext(AuthContext);
  const [stockStatus, setStockStatus] = useState("inStock");
  const [customization, setCustomization] = useState("yes");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const username = form.name.value;
    const user_email = form.email.value;
    const subcategory = form.subcategory.value;
    const time = form.time.value;
    const photo = form.photo.value;
    const description = form.description.value;

    const image = user.photoURL;
    const products = {
      category,
      rating,
      username,
      user_email,
      image,
      price,
      time,
      description,
      photo,
      subcategory,
      stockStatus,
      customization,
    };
    // console.log(products);
    fetch("https://art-craft-server-iota.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Product add successfully!",
            icon: "success",
          });
        }
      });
    e.target.reset();
  };
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>Artisan Alley_Add Arts&Crafts</title>
      </Helmet>
      <div className="my-8 px-6 border rounded-lg bg-base-200">
        <form onSubmit={handleSubmit} className=" space-y-4">
          <h2 className="text-center text-2xl font-bold inter">
            Add Your Art & Crafts Information
          </h2>
          {/* form user information row */}
          <Fade direction="down" triggerOnce={true}>
            <div className="lg:flex gap-4 ">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    User Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder=" Username"
                    defaultValue={user.displayName}
                  />
                </label>
              </div>
              <div className="form-control  lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    User Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full cursor-no-drop"
                    placeholder="email"
                    defaultValue={user.email}
                  />
                </label>
              </div>
            </div>
          </Fade>
          {/* form products information row */}
          <Fade direction="down" delay={500} triggerOnce={true}>
            <div className="lg:flex gap-4 ">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Subcategory Name
                  </span>
                </label>
                <label className="input-group">
                  <select
                    type="text"
                    name="category"
                    className="input input-bordered w-full select"
                    // placeholder="subcategory_name"
                    required
                  >
                    <option value="" disabled selected>
                      subcategory_name
                    </option>
                    <option value="Watercolour Painting">
                      Watercolour Painting
                    </option>
                    <option value="Oil Painting">Oil Painting</option>
                    <option value="Charcoal Sketching">
                      Charcoal Sketching
                    </option>
                    <option value="Cartoon Drawing">Cartoon Drawing</option>
                    <option value="Landscape Painting">
                      Landscape Painting
                    </option>
                    <option value="Portrait Drawing">Portrait Drawing</option>
                  </select>
                </label>
              </div>
              <div className="form-control  lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Item Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="subcategory"
                    className="input input-bordered w-full"
                    placeholder=" Item_name"
                    required
                  />
                </label>
              </div>
            </div>
          </Fade>
          {/* form price rating row */}
          <Fade direction="down" delay={1000} triggerOnce={true}>
            <div className="lg:flex gap-4">
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    className="input input-bordered w-full"
                    placeholder="price"
                    required
                  />
                </label>
              </div>
              <div className="form-control  lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    className="input input-bordered w-full"
                    placeholder="rating"
                    required
                  />
                </label>
              </div>
            </div>
          </Fade>
          {/* form time photo row */}
          <Fade direction="down" delay={1500} triggerOnce={true}>
            <div className="lg:flex gap-4">
              {" "}
              <div className="form-control lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">
                    Processing Time
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="time"
                    className="input input-bordered w-full"
                    placeholder="processing_time"
                    required
                  />
                </label>
              </div>
              <div className="form-control  lg:w-1/2">
                <label className="label">
                  <span className="label-text font-bold text-xl">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    className="input input-bordered w-full"
                    placeholder="photo"
                    required
                  />
                </label>
              </div>
            </div>
          </Fade>
          {/* form stock and customaize row */}
          <div className="lg:flex gap-4">
            <div className="form-control lg:w-1/2">
              <div className="">
                <Fade direction="left" delay={1600} triggerOnce={true}>
                  {" "}
                  <label className="label">
                    <span className="label-text font-bold text-xl">
                      StockStatus
                    </span>
                  </label>
                  <label className="input-group flex items-center gap-3">
                    <input
                      type="radio"
                      name="stock"
                      value="inStock"
                      checked={stockStatus === "inStock"}
                      onChange={() => setStockStatus("inStock")}
                      className="radio radio-success"
                    />
                    <span> In stock</span>
                    <input
                      type="radio"
                      name="made"
                      value="madeToOrder"
                      checked={stockStatus === "madeToOrder"}
                      onChange={() => setStockStatus("madeToOrder")}
                      className="radio radio-success"
                    />
                    <span> Made to Order</span>
                  </label>
                </Fade>
              </div>
              <div className="mt-12">
                <Fade direction="left" delay={1800} triggerOnce={true}>
                  <label className="label">
                    <span className="label-text font-bold text-xl">
                      Customization
                    </span>
                  </label>
                  <label className="input-group flex items-center gap-3">
                    <input
                      type="radio"
                      name="yes"
                      value="madeToOrder"
                      checked={customization === "yes"}
                      onChange={() => setCustomization("yes")}
                      className="radio radio-success"
                    />
                    <span> Yes</span>
                    <input
                      type="radio"
                      value="madeToOrder"
                      checked={customization === "no"}
                      onChange={() => setCustomization("no")}
                      name="no"
                      className="radio radio-success"
                    />
                    <span> No</span>
                  </label>
                </Fade>
              </div>
            </div>
            <div className="form-control ml-3 lg:w-1/2">
              <label className="label">
                <span className="label-text font-bold text-xl">
                  Description
                </span>
              </label>

              <label className="input-group">
                <textarea
                  cols="40"
                  rows="10"
                  type="text"
                  name="description"
                  className="border-2 p-2 rounded-lg input-bordered w-full"
                  placeholder="description"
                  required
                ></textarea>
              </label>
            </div>
          </div>
          <Fade direction="up" triggerOnce={true}>
            <div className="flex justify-center mx-6">
              <button className="btn btn-block font-bold text-xl hover:text-black hover:bg-green-500 bg-[#fc9f27] text-white mb-6">
                Add
              </button>
            </div>
          </Fade>
        </form>
      </div>
    </>
  );
};

export default AddArtsCarfts;
