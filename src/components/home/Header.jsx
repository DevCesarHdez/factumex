import profile from '@/assets/images/profile.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row d-flex flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center">
            <h1><span className="fs-3">Hola, soy</span> <code className="text-primary">Cesar Hernandez</code></h1>
            <p>Soy un desarrollador web frontend, con mas de 4 años de experiencia, con conocimientos en React, Vue, Angular, NextJS, NodeJS, Express, MongoDB, PostgreSQL, etc. Con ganas de aprender y desarrollarme profesionalmente.</p>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <img src={profile} alt="Cesar Hernandez" className="img-fluid" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header