import Proptypes from "prop-types";
const Slider = ({ slider }) => {
  const { photo, category, subcategory, description } = slider;
  return (
    <div>
      <div className=" relative">
        <img
          className=" h-[400px] md:h-[500px] lg:h-[550px]  opacity-60"
          src={photo}
          alt=""
        />
        <div className=" absolute  space-y-3 left-[20%] top-[50%] bg-center">
          <h2 className=" text-3xl font-bold lg:text-5xl">{category}</h2>
          <p className="font-semibold text-xl">{subcategory}</p>
          <p className=" text-lg font-medium">{description.slice(0, 200)}</p>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  slider: Proptypes.object.isRequired,
};
export default Slider;
