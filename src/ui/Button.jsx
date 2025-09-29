import Loader from "./Loader"; // Import your loader component

export default function Button({
  children,
  className = "",
  loading = false,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading} // disable button while loading
      className={`bg-accent-gold cursor-pointer active:scale-95 sm:w-fit w-full text-black font-semibold px-6 md:px-12 py-2.5 shadow-md shadow-black/80 !rounded-full text-sm text-nowrap md:text-xl font-stretch-expanded flex items-center justify-center gap-2 ${className}`}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
