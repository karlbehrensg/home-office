import Link from 'next/link'
import {useForm} from "react-hook-form"

export default function Index() {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))

    fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  return (
    <div className="container col-md-8 align-items-center">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <input name="username" ref={register({required:true})} type="email" className="form-control" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Confirmar email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Contraseña</label>
                <input name="password" ref={register({required:true})} type="password" className="form-control" />
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