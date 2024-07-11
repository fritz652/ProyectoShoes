import "./Usuario.css"

const Usuario = ({nombre, codigo, nacionalidad,profesion}) => {
  return (
    <>
        <div className="h-200">
            <h1>{nombre}</h1>
            <p>{codigo}</p>
            <p>{nacionalidad}</p>
            <p>{profesion}</p>
        </div>
    </>
  )
}

export default Usuario