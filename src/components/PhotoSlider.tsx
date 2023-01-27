export const PhotoSlider = () => {
  return (
    <div className="h-full w-full bg-green-100 relative flex justify-center items-center">
      <h1 className="max-w-2xl z-30 text-5xl text-center text-gray-50 font-bold">All things start with dreams and visions. Visualizing that dream mobilizes the universe. If we share our vision openly we serendipitously meet like minded people who want to ignite the vision and see it realized</h1>
      <img src="/gallery/1.jpg" className="h-full absolute right-0 top-0 left-0 bottom-0 w-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-25 bg-black" />
    </div>
  );
};
