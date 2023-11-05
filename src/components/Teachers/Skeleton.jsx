const Sceleton = () => {
  return (
    <div title="period " className="skeleton p-3 rounded-md">
      <div
        title="period avatar"
        className="skeleton-circle justify-center text-5xl mx-auto"
      />

      <h3
        title="period title"
        className="skeleton-line text-3xl w-[80%] mx-auto"
      />
      <p
        title="period lessons amount"
        className="skeleton-line text-2xl w-[60%] mx-auto"
      />
      <p
        title="period slogan"
        className="skeleton-line text-2xl w-[90%] mx-auto"
      />
      <p
        title="period price"
        className="skeleton-line text-4xl w-[70%] mx-auto"
      />
      <ul
        title="period description"
        className="flex flex-col justify-center gap-2 py-5"
      >
        <li className="skeleton-line w-[80%]" />
        <li className="skeleton-line w-[70%]" />
        <li className="skeleton-line w-[50%]" />
        <li className="skeleton-line w-[80%]" />
        <li className="skeleton-line w-[60%]" />
        <li className="skeleton-line w-[50%]" />
      </ul>
      <div className="skeleton-line  mx-auto text-5xl w-[60%] !rounded-bl-2xl !rounded-tr-2xl" />
    </div>
  );
};

export default Sceleton;
