const Sceleton = () => {
  return (
    <div
      title="question "
      className="skeleton px-6 py-6 t:px-8 t:py-9 d:px-16 d:py-11 bg-white-100 border-[1px] border-black-30 rounded-[5px] d:max-w-[856px] 
      w-full gap-6 items-center"
    >
      <div title="question more" className="skeleton-circle text-2xl inline" />

      <h3
        title="question title"
        className="inline skeleton-line text-4xl w-[80%] "
      />
    </div>
  );
};

export default Sceleton;
