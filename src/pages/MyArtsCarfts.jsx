import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyCard from "../components/MyCard";

const MyArtsCarfts = () => {
  const { user } = useContext(AuthContext) || {};
  const [items, setProducts] = useState([]);
  const [products, setItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [user]);
  useEffect(() => {
    setItems(items);
  }, [items]);

  if (products.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <h2 className=" text-5xl font-semibold text-center">
          <i>No data available!</i>
        </h2>{" "}
        <h3 className=" text-5xl font-semibold mt-1">
          <i>Please upload some data!</i>
        </h3>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="flex justify-center ">
        <div className="dropdown dropdown-hover mb-4">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter by Customization
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Yes</a>
            </li>
            <li>
              <a>No</a>
            </li>
          </ul>
        </div>
      </div>
      {/* card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <MyCard
            key={product._id}
            product={product}
            products={products}
            setItems={setItems}
          ></MyCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtsCarfts;
