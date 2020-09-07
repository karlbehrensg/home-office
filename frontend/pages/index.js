import Head from 'next/head'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Realiza tareas desde tu hogar</h1>
        <p className="lead">Con Home Office puedes realizar tareas online y ganar dinero.</p>
        <hr className="my-4" />
          <a className="btn btn-primary btn-lg mr-4" role="button">Busca una tarea</a>
          <a className="btn btn-outline-secondary btn-lg mr-4" role="button">Crea una tarea</a>
      </div>
    </>
  )
}