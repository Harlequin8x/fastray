import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons'
import {
  rx7900xtx,
  rtx4080super,
  rtx4090,
  ryzen7800X3D,
  Ryzen97950X3D,
  b650EAorus,
  ASRockX670ETaichi,
  customer1,
  customer2,  
  customer3,
  RTX4080,
  RX7900XT,
  RTX4070TiSuper,
  RTX4070Ti,
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
    name: 'Ryzen 7 7800X3D',
    price: '358€',
    star1: '4.6',
  },
  {
    imgURL: b650EAorus,
    name: 'B650E Aorus Master',
    price: '372€',
    star1: '4.7',
  }
]

export const products2 = [  
  {    
    imgURL: rtx4090,    
    name: 'RTX 4090',
    category: 'GPU',
    price: '1739€',
    star2: '5.0.',
  },
  {    
    imgURL: rtx4080super,    
    name: 'RTX 4080 Super',
    category: 'GPU',
    price: '1139€',
    star2: '4.9',
  },
  {    
    imgURL: rx7900xtx,    
    name: 'RX 7900 XTX',
    category: 'GPU',
    price: '959€',
    star2: '4.8',
  },
  {
    imgURL: RTX4080,
    name: 'RTX 4080',
    category: 'GPU',
    price: '1049€',
    star2: '4.7',
  },
  {
    imgURL: RX7900XT,
    name: 'RX 7900 XT',
    category: 'GPU',
    price: '699€',
    star2: '4.8',
  },
  {
    imgURL: ryzen7800X3D,
    name: 'Ryzen 7 7800X3D',
    category: 'CPU',
    price: '358€',
    star2: '4.6',
  },
  {
    imgURL: Ryzen97950X3D,
    name: 'Ryzen 9 7950X3D',
    category: 'CPU',
    price: '626€',
    star2: '4.7',
  },  
  {
    imgURL: b650EAorus,
    name: 'B650E Aorus Master ',
    category: 'Mainboard',
    price: '372€',
    star2: '4.7',
  },
  {
    imgURL: ASRockX670ETaichi,
    name: 'ASRock X670E Taichi',
    category: 'Mainboard',
    price: '524.92€',
    star2: '4.7',
  },  
  {
    imgURL: RTX4070TiSuper,
    name: 'RTX 4070 TI Super',
    category: 'GPU',
    price: '799€',
    star2: '4.4',
  },
  {
    imgURL: RTX4070Ti,
    name: 'RTX 4070 Ti',
    category: 'GPU',
    price: '699€',
    star2: '4.5',
  },
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
    title: 'Produkte',
    links: [
      { name: 'GPU', link: '/shop' },
      { name: 'CPU', link: '/shop' },
      { name: 'Mainboard', link: '/shop' },
      { name: 'Arbeitspeicher', link: '/shop' },      
    ],
  },
  {
    title: 'Hilfe',
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
  { src: facebook, alt: 'facebook logo', href: 'https://www.facebook.com' },
  { src: twitter, alt: 'twitter logo', href: 'https://www.twitter.com' },
  { src: instagram, alt: 'instagram logo', href: 'https://www.instagram.com' },
]
