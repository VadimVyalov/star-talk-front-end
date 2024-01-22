const Sceleton = () => {
  return (
    <div title="teacher " className="skeleton flex-col p-3 rounded-md gap-2 ">
      <div
        title="teacher photo"
        className="skeleton-square justify-center text-7xl mx-auto h-[15vw] w-[95%]"
      />

      <h3 title="teacher Name" className="skeleton-line text-3xl w-[30%] " />
      <p title="Short information" className="skeleton-line text-xl w-[90%] " />
    </div>
  );
};

export default Sceleton;
