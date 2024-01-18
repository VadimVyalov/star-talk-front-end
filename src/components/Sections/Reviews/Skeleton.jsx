const Sceleton = () => {
  return (
    <div title="period " className="skeleton p-3 rounded-md flex-col gap-2">
      <ul
        title="period description"
        className="flex flex-col justify-center gap-2 py-5"
      >
        <li className="skeleton-line w-[80%]" />
        <li className="skeleton-line w-[70%]" />
        <li className="skeleton-line w-[50%]" />
        <li className="skeleton-line w-[80%]" />
      </ul>
      <div className="skeleton-line  mx-auto text-5xl w-[60%] !rounded-bl-2xl !rounded-tr-2xl" />
    </div>
  );
};

export default Sceleton;
