import Link from 'next/link'

export default function Index() {
  return (
    <div className="container col-md-8 align-items-center">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label>Nombre</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-4">
                <label>Apellido Paterno</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group col-md-4">
                <label>Apellido Materno</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Confirmar email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Contraseña</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Confirmar contraseña</label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Registrate</button>
          </form>
        </div>
      </div>
    </div>
  )
}