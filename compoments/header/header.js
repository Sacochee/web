"use client"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import style from "./style.module.css"


export default function Header() {
  
  const t = useTranslations('header')
  return (
    <header className={style.header}>
      <Link href={"/"}>
        <div className={style.boximage}>
          <Image 
            src={"/images/sign.png"}
            width={75}
            height={35}
            alt="signature de patricial tessiyer"
          />
        </div>
      </Link>
        
      
      <nav className={style.navbar}>
        <Link className={style.link} href={"/"}>
          {t('oeuvre')}
        </Link>
        <Link className={style.link} href={"/"}>
          {t('contact')}
        </Link>
        <Link className={style.link} href={"/"}>
          {t('about')}
        </Link>
      </nav>
    </header>
  )
}
