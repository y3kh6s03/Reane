import {Montserrat, Noto_Sans_JP, Roboto_Mono} from "next/font/google";

export const accFont = Montserrat({
  subsets: ['latin'],
  weight: ['800'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-acc'
})

export const jpFont = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300','800'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-jp'
})

export const enFont = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300','700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-en'
})