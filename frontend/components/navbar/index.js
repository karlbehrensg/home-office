import Link from 'next/link'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href='/'><a className="navbar-brand">Home Office</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href='/'><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Pricing</a>
          </li>
        </ul>
        <span className="navbar-text">
          <Link href='register'><a className="btn btn-primary btn-sm mr-2" role="button" aria-disabled="true">Registrate</a></Link>
          <Link href='login'><a className="btn btn-outline-success btn-sm mr-2" role="button" aria-disabled="true">Iniciar Sesion</a></Link>
        </span>
      </div>
    </nav>
  )
}

export default Navbar