import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/products'>Products</Link>
      <br />
      <Link href='/cart'>Cart</Link>
    </>
  );
}
