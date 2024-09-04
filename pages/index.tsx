import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
    <header>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/user">user</Link></li>
      </ul>
    </header>
   <h1> Welcome Ferry</h1>
      </>
  );
}
