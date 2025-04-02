// import { serverSideFunction } from "@/utils/server-utils";

import ImageSliderComponent from "@/components/imageSlider";

const ServerRoutePage = () => {
  // const result = serverSideFunction();

  return (
    <div className="image-slider-container">
      <ImageSliderComponent />
    </div>
  );
};

export default ServerRoutePage;
