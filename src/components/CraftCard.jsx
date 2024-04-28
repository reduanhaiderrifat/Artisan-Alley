import Proptypes from "prop-types";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const CraftCard = ({ prod }) => {
  const { photo, _id, category, subcategory, description } = prod;
  return (
    <div>
      <Helmet>
        <title>Artisan Alley_CraftCard</title>
      </Helmet>
      <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className=" overflow-hidden">
          <img
            src={photo}
            alt=""
            className="object-cover object-center hover:scale-110 transition-all w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 flex-grow">
            <Fade direction="down">
              <h4>
                <strong>{category}</strong>
              </h4>

              <h2 className="text-2xl font-semibold tracking-wide">
                {subcategory}
              </h2>
            </Fade>
            <p className="dark:text-gray-800 break-all">
              {description.slice(0, 100)}
            </p>
          </div>
          <Fade direction="up">
            <Link
              to={`/craftdetails/${_id}`}
              className="btn bg-[#fc9f27] w-full text-white text-lg hover:bg-green-500"
            >
              Veiw Details
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

CraftCard.propTypes = {
  prod: Proptypes.object.isRequired,
};
export default CraftCard;
