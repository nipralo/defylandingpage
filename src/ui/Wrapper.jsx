const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1440px] w-[95%] mx-auto py-6 md:py-12 lg:py-24 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
