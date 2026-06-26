import { Data } from "./data/data.js";
export default function NavBar({ isDark, setIsDark, color }) {
  return (
    <div
      className="flex justify-between p-[18px] sticky top-0 z-10 md:px-7"
      style={{
        backgroundColor: color.surface,
        transition: "background-color 1s ease-in-out",
      }}
    >
      <section className="flex gap-1  items-center">
        <img
          src="/terminal-box-fill-svgrepo-com.svg"
          className="w-[24px] h-[24px] md:h-8 md:w-8"
          alt="terminal"
        />
        <p
          className=" font-semibold font-jetbrains  md:text-lg"
          style={{ color: color.textPrimary }}
        >
          {Data.name}.Dev
        </p>
      </section>
      {!isDark ? (
        <img
          className="w-[26px] h-[26px] md:h-8 md:w-8"
          src="/clear-day-svgrepo-com.svg"
          alt="day"
          onClick={() => setIsDark(!isDark)}
        />
      ) : (
        <img
          className="w-[26px] h-[26px] md:h-8 md:w-8"
          src="/moon-svgrepo-com.svg"
          alt="night"
          onClick={() => setIsDark(!isDark)}
        />
      )}
    </div>
  );
}
