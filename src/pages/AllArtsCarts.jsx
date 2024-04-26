import { Link, useLoaderData } from "react-router-dom";

const AllArtsCarts = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>this is all arts cards</h1>

      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
              <th>Subcategory</th>
              <th>Customization</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, idx) => (
              <tr key={product._id} className=" hover">
                <th>{idx + 1}</th>
                <td>{product.category}</td>
                <td>{product.subcategory}</td>
                <td>{product.customization}</td>
                <td>
                  <Link
                    to={`/details/${product._id}`}
                    className="btn bg-transparent hover:bg-[#fc9927] hover:text-white text-[#fc5927] border-[#fc5927]"
                  >
                    View
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtsCarts;
