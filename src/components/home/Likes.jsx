import frontend from '@/assets/images/frontend.png'
import backend from '@/assets/images/backend.png'
import ui from '@/assets/images/ui.png'
import bicycle from '@/assets/images/bicycle.png'
import travel from '@/assets/images/travel.png'
import running from '@/assets/images/running.png'
import music from '@/assets/images/music.png'

const Likes = () => {
    return (
        <section className="likes py-5 container">
            <h2 className="mb-4">Mis gustos e intereses</h2>
            <div className="row row-cols-1 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={frontend} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Frontend</h5>
                            <p className="card-text">Me gusta el desarrollo web frontend, enfocado en el desarrollo de interfaces de usuario atractivas y funcionales.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={backend} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Backend</h5>
                            <p className="card-text">Me gusta el desarrollo web backend, enfocado en el desarrollo de servidores robustos y eficientes.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={ui} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">UI/UX</h5>
                            <p className="card-text">Me gusta el diseño web, enfocado en la creación de experiencias de usuario intuitivas y atractivas.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bicycle} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Bicicleta</h5>
                            <p className="card-text">Me gusta andar en bicicleta y conocer nuevos lugares, nuevas rutas en lugares poco transitados.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={travel} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Viajar</h5>
                            <p className="card-text">Me gusta mucho viajar, y conocer nuevos lugares, culturas y personas.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={running} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Correr</h5>
                            <p className="card-text">Me gusta mucho correr en la ciudad, la naturaleza y la adrenalina.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={music} alt="Cesar Hernandez" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Musica</h5>
                            <p className="card-text">Me gusta tocar la guitarra y practicar canciones de mis artistas favoritos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Likes