import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <h5>
        <Link href='user/register'>
          <a>Pagina de registro</a>
        </Link>
      </h5>
    </>
  )
}
