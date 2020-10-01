import Link from 'next/link'
import {useForm} from "react-hook-form"

export default function Index() {

  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))

    fetch('http://127.0.0.1:8000/auth/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(
        data => {
          console.log(data.token);
        }
      ).catch(error => console.error(error))
  }

  return (
    <div className="container col-md-4 align-items-center">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                ref={register({required: true})}
                name="username"
                type="text"
                className="form-control"
                id="username"
              />
              {
                errors?.user &&
                <div className="alert alert-danger" role="alert">
                  Ingrese un correo
                </div>
              }
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                ref={register({required: true})}
                name="password"
                type="password"
                className="form-control"
                id="password"
              />
              {
                errors?.password &&
                <div className="alert alert-danger" role="alert">
                  Ingrese una contraseña
                </div>
              }
            </div>
            <button type="submit" className="btn btn-primary">Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </div>
  )
}