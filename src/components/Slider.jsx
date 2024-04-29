import Proptypes from "prop-types";
const Slider = ({ slider }) => {
  const { photo, category, subcategory, description } = slider;
  return (
    <div>
      <div className=" relative">
        <img
          className=" h-[400px] md:h-[500px]  lg:h-[750px] bg-cover object-contain w-full opacity-60"
          src={photo}
          alt=""
        />
        <div className=" absolute md:space-y-2 lg:space-y-3 left-[5%] top-[30%] md:left-[30%] lg:top-[30%] bg-center">
          <h2 className="text-[#fc7527] text-xl font-bold md:text-3xl lg:text-5xl">
            {category}
          </h2>
          <p className="font-semibold  text-[#D10000] text-md md:text-lg lg:text-xl">
            {subcategory}
          </p>
          <p className="text-[#FFFF00]  hover:text-black text-sm font-medium md:w-2/3 lg:w-2/3">
            {description.slice(0, 300)}
          </p>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slider: Proptypes.object.isRequired,
};
export default Slider;
