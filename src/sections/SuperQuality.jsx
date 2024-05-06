import { FullPC } from '../assets/images/index'
import Button from '../components/Button'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Wir bieten dir
          <span className="text-dark-red"> highperformance</span>
          <span className="text-dark-red"> Hardware</span> an
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Tauche in die Welt der Spitzenleistung und erlebe Technologie auf einem neuen Niveau.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Egal ob Sie ein Gaming-Enthusiast sind, kreative Projekte umsetzen oder professionelle Anwendungen nutzen – unsere
          Hardware liefert stets die beste Performance.
        </p>
        <div className="mt-11">
          <Button label="Details" />
        </div>
      </div>

      <div className="flex-1 mr-40 flex justify-center items-center bg-card rounded-xl bg-right">
        <img
          src={FullPC}
          alt="FullPC"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
