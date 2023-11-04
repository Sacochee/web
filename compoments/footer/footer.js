"use client"
import s from "./style.module.css"
import { useTranslations } from "next-intl"
import Link from "next/link"
import Image from "next/image"
import { v4 as uuidv4 } from 'uuid';

export default function Footer() {
  const t = useTranslations("footer")
  return (
    <footer className={s.footer}>
        <div className={s.part}>
            <h3 className={s.title}>
              {t("h3")}
            </h3>
            <p className={s.elements}>
              adasdasdad@domain.com
            </p>
            <p className={s.elements}>
              06.00.00.00.00
            </p>
        </div>
        <ul className={s.part}>
          <li key={uuidv4()} className={s.lic}>
            <Link href={"/CGV"} className={s.link}>
            Condition Général de Vente
            </Link>
          </li>
          <li key={uuidv4()} className={s.lic}>
            <Link href={"/mentionslegales"} className={s.link}>
            Mentions Legales
            </Link>
          </li>
          <li key={uuidv4()} className={s.lic}>
            <Link href={"/protectiondonnes"} className={s.link}>
            Protection des Données
            </Link >
          </li>
          <li key={uuidv4()} className={s.lic}>
            <Link href={"/"} className={s.link}>
            Sécurité des Paiements
            </Link>
          </li>
          <li key={uuidv4()} className={s.lic}>
            <Link href={"/"} className={s.link}>
            Propriété Intellectuelle
            </Link>
          </li>
        </ul>
        <div>
          <div className={s.mp}>
            <div style={{display:"flex", justifyContent:"center"}}>
              <p className={s.p}>
              {t("mp")}
              </p>
            </div>
            <Cartes/>
          </div>
            
         <div style={{display:"flex", justifyContent:"center"}}>
          <p>
            Powered By domain
          </p>
        </div> 
          
        </div>
    </footer>
  )
}


function Cartes(){
  return(  
  <ul className={s.ul}>
    <li key={uuidv4()} className={s.li}>
      <Image 
      src={"/carts/visa.png"}
      width={40}
      height={13}
      alt="logo d une visa carts"
      />
    </li>
    <li key={uuidv4()} className={s.li}>
      <Image 
      src={"/carts/master.png"}
      width={40}
      height={26}
      alt="logo d une master carts"
      />
    </li>
    <li key={uuidv4()} className={s.li}>
      <Image 
      src={"/carts/americain.png"}
      width={40}
      height={26}
      alt="logo d une americain express carts"
      />
    </li>
    <li key={uuidv4()} className={s.li}>
      <Image 
      src={"/carts/disco.png"}
      width={40}
      height={22}
      alt="logo d une dinner discover"
      />
    </li>
    <li key={uuidv4()} className={s.li}>
      <Image 
      src={"/carts/diner.png"}
      width={40}
      height={21}
      alt="logo d une dinner carts"
      />
    </li>
  </ul>
  )
}