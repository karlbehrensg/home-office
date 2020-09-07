import Link from 'next/link'

export default function Login() {
  return (
    <>
      <h1>Iniciar sesion</h1>
      <h5>
        <Link href='/'>
          <a>Ir al home</a>
        </Link>
      </h5>
    </>
  )
}