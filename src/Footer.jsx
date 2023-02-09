export default function Footer() {
  return (
    <footer className="flex py-1 text-gray-400 border-gray-400 w-full justify-center flex-col tracking-wide">
      <ul className="flex flex-wrap  leading-5">
        <li className="border-b mr-3 mb-2">
          <a href="/">Home</a>{" "}
        </li>
        <li className="border-b mr-3 mb-2">
          <a href="/blog">Blog</a>
        </li>
        <li className="border-b mr-3 mb-2">
          <a href="mailto:lionlpcc@gmail.com">Say Hi</a>
        </li>
        <li className="border-b mr-3 mb-2">
          <a href="">Github</a>
        </li>

        <li className="border-b mr-3 mb-2">
          <a href="">Linkedin</a>
        </li>
      </ul>
      <p>
        © 2021 Lion Patrocinio Cunha Costa |{" "}
        <a className="border-b" href="">
          Source Code
        </a>
      </p>
    </footer>
  );
}
