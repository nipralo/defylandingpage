const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1440px] w-[90%] mx-auto py-16 lg:py-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
