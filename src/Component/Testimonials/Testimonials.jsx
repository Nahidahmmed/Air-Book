function Testimonials() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-28">Featured Destinations</h1>
      <div className="bg-blue-600  p-20">
        <div className="grid grid-cols-10 xl:max-w-screen-xl lg:max-w-screen-xl md:max-w-screen-xl mx-auto h-[280px]">
        <div className="col-span-2 relative xl:block lg:flex md:block hidden ">
            <img
              className="w-[61.5%] ml-auto "
              src="https://i.ibb.co/5sRZM8R/Rectangle-30.png"
              alt=""
            />
            <div className="absolute inset-0 bg-blue-500 opacity-50 w-[61.5%] rounded-xl md:h-[230px] ml-auto"></div>
          </div>
          <div className="bg-white xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-10 flex xl:w-[95%] lg:w-[95%] md:w-[95%] w-[300px] mx-auto rounded-2xl xl:h-[290px] lg:h-[280px] md:h-[230px]">
            <img
              className="w-[25%]"
              src="https://i.ibb.co/SybKkYx/Rectangle-32.png"
              alt=""
            />
            <div>
              <p>
                Great hiking spot! The hills offer endless opportunities for
                adventure and exploration. You wll be amazed by the stunning
                vistas and the sense of accomplishment when you reach the
                summit.
              </p>
              <p>Emily</p>
              <p>adventure enthusiast</p>
            </div>
          </div>
          <div className="col-span-2 relative xl:block lg:flex md:block hidden">
            <img
              className="w-[61.5%]"
              src="https://i.ibb.co/p3Cb1Lw/Rectangle-33.png"
              alt=""
            />
            <div className="absolute inset-0 bg-blue-500 opacity-50 w-[61.5%] rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
