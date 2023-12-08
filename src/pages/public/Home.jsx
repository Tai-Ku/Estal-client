import React from "react";

const Home = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-full h-fit relative">
        <img src="/banner.png" alt="banner" />
        <div className="absolute inset-0 flex pt-8 flex-col gap-4 items-center justify-center">
          <h1 className="text-5xl text-white">Find Your Dream Home</h1>
          <p className="text-white text-lg max-w-3xl text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </p>
        </div>
      </div>
      <div className="w-main mx-auto">content</div>
    </div>
  );
};

export default Home;
