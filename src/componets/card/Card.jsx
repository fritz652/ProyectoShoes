import './Card.css'

const user = {
    name:'Hedy Lammarr',
    ImageUrl:  'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

const Card = () => {
  return (
    <>
        <div className='containerCard'>

            <img 
                className="avatar"
                src={user.ImageUrl} 
                alt= {'Foto de ' + user.name} 
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}/>
            <h1 className='t-30'>{user.name}</h1>
        </div>
    </>
  )
}

export default Card