

const Usuario = ({nombre, codigo, nacionalidad,profesion}) => {
  return (
    <div>
        <h1>{nombre}</h1>
        <p>{codigo}</p>
        <p>{nacionalidad}</p>
        <p>{profesion}</p>
        <hr/>
    </div>
  )
}

export default Usuario