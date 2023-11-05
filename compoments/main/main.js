"use client"
import style from "./style.module.css"
import { useEffect, useState, useRef, } from "react"
import Image from "next/image"
import tabl from "./tableaux.module.css"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';
import Tableaux from "./tableaux"
import Faq from "../Faq/faq"

export default function Main({data}) {
  const router = useRouter()
  const [une , setUne] = useState(+(data.length) - 1)
  const [d, setD] = useState(data[une])
  const ref = useRef()
  const swtich = (int) =>{
    if(+(une) + (int) >= data.length){
      setUne(0)
      setD(data[une])
    }
    else if(+(une) + int < 0){
      setUne(+(data.length) - 1)
      setD(data[une])
    }
    else  {
      setUne(+(une)+int )
      setD(data[une])
    }
      
  }
  useEffect(()=>{
    ref.current.classList.add(style.anim)
  },[d])
  const size = ()=>{
    return screen.width < 768 ? 30 : 60
  }
  return (
    <div>
      <section className={style.une}>
        <div style={{position:"relative"}}>
          <div ref={ref} onAnimationEnd={()=>ref.current.classList.remove(style.anim)} onClick={()=>router.push(`/art/${d.id}`)}>
          <Une data={d} />
          </div>
          
          <div className={style.flecheGauche} onClick={()=>swtich(+1)}>
            <Image 
            src={"/images/left.png"}
            width={size()}
            height={size()}
            alt="fleche qui pointe vers la gauche"
            />
          </div>
          <div className={style.flecheDroite} onClick={()=>swtich(-1)}>
            <Image 
            src={"/images/right.png"}
            width={size()}
            height={size()}
            alt="fleche qui pointe vers la droite"
            />
          </div>
        </div>
      </section>
      <section className={style.tabl}>
        <ul className={tabl.ul}>
          {data.map((item)=><Tableaux data={item} key={uuidv4()}/>)}
        </ul>
      </section>
      <Faq />
    </div>
  )
}


function Une({data}){
  const img = data.images.split(';')[0]
  const size = () =>{
    return screen.width < 768 ? 300 : 600
  }
  return(
    <div className={style.containerune} >
      <Image 
      src={`http://195.35.48.48:8080/${img}`}
      width={size()}
      height={size()}
      alt={` oeuvre d art ${data.name}`}
      placeholder="empty"
      />
      <div className={style.unetitle}>
        <h3 className={style.unet}>
          {data.name}
        </h3>
      </div>
      <div className={style.unedesc} >
        <p className={style.unep}>
          {data.description}
        </p>
      </div>
    </div>
  )
}