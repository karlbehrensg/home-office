import Link from 'next/link'

export default function Index() {
  return (
    <div className="container col-md-4 align-items-center">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </div>
  )
}