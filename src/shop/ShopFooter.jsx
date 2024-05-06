import { copyrightSign } from '../assets/icons/index'
import { headerLogo } from '../assets/images/index'
import { footerLinks, socialMedia } from '../constants/index'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={headerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Unser Hardware-Shop bietet dir eine umfangreiche Auswahl an hochwertigen Produkten, von leistungsstarken Grafikkarten
            über blitzschnelle Prozessoren bis hin zu zuverlässigen Speicherlösungen.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon2) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon2.alt}
              >
                <img
                  src={icon2.src}
                  alt={icon2.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-betwen lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section2) => (
            <div key={section2}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section2.title}</h4>
              <ul>
                {section2.links.map((link2) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link2.name}
                  >
                    <a>{link2.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>        

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Urheberschutz. Alle Rechte vorbehalten.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Bedingungen und Konditionen</p>
      </div>             
      <div className="flex text-white-400 mt-8 max-sm:flex-col max-sm:items-center gap-1">
        Images from <a href="https://www.freepik.com/"> Freepik.com</a>
      </div>
    </footer>
  )
}

export default Footer
