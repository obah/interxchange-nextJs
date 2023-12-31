export default function Center({ children, styles }) {
  return (
    <div
      className={
        "mx-auto my-0 min-w-[320px] max-w-screen-md md:max-w-screen-lg lg:max-w-screen-2xl " +
        styles
      }
    >
      {children}
    </div>
  );
}
