import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons'
import {
  rx7900xtx,
  rtx4080super,
  rtx4090,
  ryzen7800X3D,
  b650EAorus,
  customer1,
  customer2,  
  customer3,
  RTX4080,
  RX7900XT,
  // RTX4070TiSuper,
  // RTX4070Ti,
  thumbnail4090,
  thumbnail4080super,
  thumbnailrx7900xtx,
  thumbnail7800X3D,
  thumbnailB650EAorus,
} from '../assets/images'

export const navLinks = [
  // { href: '#shop', label: 'Shop' },
  { href: '#about-us', label: 'Über uns' },
  { href: '#products', label: 'Produkte' },
  { href: '#contact-us', label: 'Kontaktiere uns' },
]

export const gpus = [
  {
    thumbnail: thumbnail4090,
    bigGPU: rtx4090,
    text: 'RTX 4090',
  },
  {
    thumbnail: thumbnail4080super,
    bigGPU: rtx4080super,
    text: 'RTX 4080 Super',
  },
  {
    thumbnail: thumbnailrx7900xtx,
    bigGPU: rx7900xtx,
    text: 'RX 7900 XTX',
  },
]

export const cpus = [
  {
    thumbnail: thumbnail7800X3D,
    bigCPU: ryzen7800X3D,
    text: 'Ryzen 7 7800X3D',
  },
]

export const mainboards = [
  {
    thumbnail: thumbnailB650EAorus,
    bigMainboard: b650EAorus,
    text: 'B650E Aorus Master ',
  }
]

export const statistics = [
  { value: '1k+', label: 'Produkte' },
  { value: '10+', label: 'Shops' },
  { value: '250k+', label: 'Kunden' },
]

export const products = [  
  {
    imgURL: RTX4080,
    name: 'RTX 4080',
    price: '1185€',
    star1: '4.9',
  },
  {
    imgURL: RX7900XT,
    name: 'RX 7900 XT',
    price: '699€',
    star1: '4.8',
  },
  {
    imgURL: ryzen7800X3D,
    text: 'Ryzen 7 7800X3D',
    price: '358€',
    star1: '4.6',
  },
  {
    imgURL: b650EAorus,
    text: 'B650E Aorus Master ',
    price: '372€',
    star1: '4.7',
  }
  // {
  //   imgURL: RTX4070TiSuper,
  //   name: 'RTX 4070 TI Super',
  //   price: '799€',
  //   star1: '4.4',
  // },
  // {
  //   imgURL: RTX4070Ti,
  //   name: 'RTX 4070 Ti',
  //   price: '699€',
  //   star1: '4.5',
  // },
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Gratis Lieferung',
    subtext: 'Genieße einen reibungslosen Einkauf mit unserem kostenlosen Versandservice.',
  },
  {
    imgURL: shieldTick,
    label: 'Sichere Zahlung',
    subtext: 'Mit unserer sicheren Zahlungsmethode kannst du unbeschwert einkaufen.',
  },
  {
    imgURL: support,
    label: 'Wir helfen dir gerne',
    subtext: 'Unser engagiertes Team steht dir jederzeit zur Verfügung',
  },
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Nika',
    rating: 4,
    feedback: 'Ich bin absolut begeistert von meinem Kauf! Die PC-Hardware, die ich bei diesem Shop erworben habe, übertrifft meine Erwartungen bei weitem. Die Leistung ist beeindruckend und die Qualität ist erstklassig.',
  },
  {
    imgURL: customer2,
    customerName: 'Daniel',
    rating: 4,
    feedback: "Diese PC-Hardware hat mein Gaming-Erlebnis komplett verändert! Die Komponenten sind leistungsstark und zuverlässig, sodass ich meine Lieblingsspiele in höchster Grafikqualität und ohne Verzögerungen genießen kann.",
  },
  {
    imgURL: customer3,
    customerName: 'Oliver',
    rating: 5,
    feedback: "Die Auswahl an Produkten war großartig, und ich fand genau das, wonach ich gesucht habe. Die Qualität der Hardware ist ausgezeichnet und der Bestellprozess verlief reibungslos."
  }
]

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'GPU', link: '/' },
      { name: 'CPU', link: '/' },
      { name: 'Mainboard', link: '/' },
      { name: 'Arbeitspeicher', link: '/' },      
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Über uns', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'Wie es funktioniert', link: '/' },
      { name: 'Datenschutzbestimmungen', link: '/' },
      { name: 'Zahlungsbedingungen', link: '/' },
    ],
  },
  {
    title: 'Kontaktiere uns',
    links: [
      { name: 'kunde@fastray.eu', link: 'mailto:customer@nike.com' },
      { name: '+49 58795216', link: 'tel:+4958795216' },
    ],
  },
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' },
]