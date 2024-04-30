import { Fade, Zoom } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div className="mt-44">
      <div className="text-center shadow-lg">
        <h2 className="text-4xl font-bold text-orange-500 ">Client Reviews</h2>
        <Fade direction="down">
          <p className="inter my-9">
            Reviews are essential for offering evaluation, context, and guidance
            to viewers. They provide insights into an artwork's quality,
            historical significance, and artistic intentions, guiding
            individuals in understanding and appreciating the piece. Moreover,
            reviews can promote artworks, attract attention, and offer
            constructive critique to help artists refine their craft.
          </p>
        </Fade>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <Zoom>
          <div className="flex flex-col justify-center  p-2 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://i.ibb.co/FmgwbBL/profile1.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl mb-3 font-semibold sm:text-2xl">
                  David Johnson
                </h2>
                <p className="px-1 text-xs sm:text-base dark:text-gray-600">
                  The mountain charcoal sketch beautifully captures the rugged
                  grandeur of the landscape. The artist's skillful use of
                  charcoal brings a sense of raw energy and texture to the
                  scene, with bold strokes and dynamic lines evoking the sheer
                  majesty of the mountains.
                </p>
              </div>
              <div className="flex justify-center text-orange-500 pt-2 space-x-4 align-center">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="flex flex-col justify-center  p-2 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://i.ibb.co/RC1YrpT/peofile2.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl mb-3 font-semibold sm:text-2xl">
                  Michael Brown
                </h2>
                <p className="px-1 text-xs sm:text-base dark:text-gray-600">
                  The forest oil painting transports the viewer into a serene
                  woodland oasis. The rich, vibrant colors and lush brushwork
                  create a sense of depth and vitality, inviting the viewer to
                  lose themselves in the tranquil beauty of the forest.
                </p>
              </div>
              <div className="flex justify-center text-orange-500 pt-2 space-x-4 align-center">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="flex flex-col justify-center  p-2 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://i.ibb.co/HtgPqwh/profile3.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl mb-3 font-semibold sm:text-2xl">
                  Christopher Lee
                </h2>
                <p className="px-1 text-xs sm:text-base dark:text-gray-600">
                  The mountain charcoal sketch exudes a sense of quiet strength
                  and majesty. The artist's deft use of charcoal captures the
                  rugged contours of the mountains with remarkable precision,
                  while the subtle shading and blending add a sense of depth and
                  realism to the scene.
                </p>
              </div>
              <div className="flex justify-center pt-2 text-orange-500 space-x-4 align-center">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </Zoom>
        <Zoom>
          <div className="flex flex-col justify-center  p-2 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
            <img
              src="https://i.ibb.co/xX9zjX1/profile4.jpg"
              alt=""
              className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
            />
            <div className="space-y-4 text-center divide-y dark:divide-gray-300">
              <div className="my-2 space-y-1">
                <h2 className="text-xl mb-3 font-semibold sm:text-2xl">
                  Alexander Smith
                </h2>
                <p className="px-1 text-xs sm:text-base dark:text-gray-600">
                  The forest oil painting is a mesmerizing tribute to the
                  enchanting beauty of the woodland realm. The artist's
                  masterful use of oil paints brings the lush foliage and
                  dappled light of the forest to life with breathtaking realism.
                  Each brushstroke seems to pulse with vitality.
                </p>
              </div>
              <div className="flex justify-center text-orange-500 pt-2 space-x-4 align-center">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Review;
