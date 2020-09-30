import Link from 'next/link'
import {useForm} from "react-hook-form";

export default function Index() {

  const {register, handleSubmit, errors} = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
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
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {
                errors?.email &&
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
                id="exampleInputPassword1"
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