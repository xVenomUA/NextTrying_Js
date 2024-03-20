import { headers } from "next/headers";
import Link from "next/link";
export default function Layout() {
  return (
    <header>
      <h1>My Blog</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
