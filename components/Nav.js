import Link from "next/link";

const Nav = () => (
  <div className="my-nav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/news">
      <a>News</a>
    </Link>

    <style jsx>{`
      a,
      img {
        padding: 10px;
      }
    `}</style>
  </div>
);

export default Nav;
