export default function Header() {
  return (
    <div className="flex justify-between  items-center mb-4 md:mb-14 ">
      <a
        href="/"
        className="lg:text-7xl font-bold opacity-100 italic font-mono md:text-8xl text-5xl "
      >
        LionDex
      </a>
      <div className="flex justify-around w-27 items-end h-8 font-bold flex-col lg:text-2xl lg:flex-row md:text-2xl">
        <a
          href="mailto:lionlpcc@gmail.com"
          className="antialiased hover:bg-gray-600 hover:cursor-pointer hover:underline"
        >
          say hi
        </a>
        <a
          href="Projetcts.jsx"
          className="ml-3  hover:bg-gray-600 hover:cursor-pointer hover:underline"
        >
          projects
        </a>
      </div>
    </div>
  );
}
