"use client"
import style from "./style.module.css"
import { useEffect, useState, useRef, } from "react"
import Image from "next/image"
import tabl from "./tableaux.module.css"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid';
import Tableaux from "./tableaux"

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
  useEffect(()=>{ref.current.classList.add(style.anim)},[d])
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
            width={30}
            height={30}
            alt="fleche qui pointe vers la gauche"
            />
          </div>
          <div className={style.flecheDroite} onClick={()=>swtich(-1)}>
            <Image 
            src={"/images/right.png"}
            width={30}
            height={30}
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
    </div>
  )
}


function Une({data}){

  const img = data.images.split(';')[0]
  return(
    <div className={style.containerune} >
      <Image 
      src={`http://195.35.48.48:8080/${img}`}
      width={300}
      height={300}
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

function getId(id){
  const ids = []
  localStorage.getItem('Id') ? localStorage.getItem('Id').split(';').forEach((i)=>ids.push(i)) : undefined
  return ids.includes(id.toString())
}

function addlocalStrorage(id){
  const local = localStorage.getItem('Id') || undefined
  localStorage.removeItem("Id")
  localStorage.setItem('Id', local != undefined ?  local + ";" + id : id)
}

function removeLocalStrorage(id){
  if(getId(id)){
    const ids = []
    localStorage.getItem('Id').split(';').forEach((i)=>ids.push(i))
    for(let i = 0 ; i < ids.length; i++){
      if(ids[i] == id.toString()){
        ids.slice(i, 1)
        localStorage.clear
        localStorage.setItem("Id", ids.forEach((i)=>`${i};`))
        break
      }
      else
        continue
    }
  }
}
