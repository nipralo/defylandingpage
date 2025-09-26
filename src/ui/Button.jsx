export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`bg-accent-gold cursor-pointer active:scale-95 sm:w-fit w-full text-black font-semibold px-6 md:px-12 py-2.5 shadow-md shadow-black/80 !rounded-full text-sm text-nowrap md:text-xl font-stretch-expanded ${className}`}
    >
      {children}
    </button>
  );
}
