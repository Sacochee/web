"use client"
import {useRef, useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import tabl from "./tableaux.module.css"
import {v4 as uuidv4} from "uuid"
import Image from "next/image"

export default function Tableaux({data}){
    const router = useRouter()
    const ref = useRef()
    const img = data.images.split(";")[0]
    const [like, setLike] = useState(false)
    useEffect(()=>{
      setLike(getId(data.id))
      if(like){
        ref.current.classList.add(tabl.anim)
      }
      else
        ref.current.classList.remove(tabl.anim)
    }, [like])
    const handleGo = ()=>{
      router.push(`/art/${data.id}`)
    }
    return(
      <li className={tabl.container} key={uuidv4()}>
          <Image 
          src={`http://195.35.48.48:8080/${img}`}
          width={150}
          height={150}
          alt={data.name + "de Patricia"}
          onClick={handleGo}
          />
          <h2 className={tabl.h2} onClick={handleGo}>
            {data.name}
          </h2>
          <div className={tabl.class} >
            <div className={tabl.part} onClick={handleGo}>
              <p className={tabl.desc}>
                
                {data.width + "x" + data.heigth + "cm"}
              </p>
              <p className={tabl.price}>
                 {data.price}€
              </p>
            </div>
            <div className={tabl.part2} >
              <button className={tabl.buy} onClick={handleGo}>acheter</button>
              <button className={tabl.like} onClick={()=>{like ? removeLocalStrorage(data.id) : addlocalStrorage(data.id); setLike(getId(data.id))}} ref={ref}>
                {
                like ? 
                <Image src={"/images/fullHeart.png"}
                width={30}
                height={30} 
                alt="coeur vide"
                /> 
                : 
                <Image src={"/images/coeur.png"}
                width={30}
                height={30} 
                alt="coeur plein"
                />
                }
                
              </button>
            </div>
          </div>  
      </li>
    )
  }

export function getIDs(){
  let ids = localStorage.getItem("Id")
  if(ids != null){
    ids = ids.split(";")
    ids.pop()
    return ids
  }
  else
    return undefined 
}

function getId(id){
  let ids = localStorage.getItem("Id")
  if(ids != null)
    return ids.split(";").includes(id.toString())
  else
    return false
  
}
  
function addlocalStrorage(id){
  let ids = localStorage.getItem("Id")
  if(ids != null){
    localStorage.removeItem("Id")
    ids = ids + id + ";"
    localStorage.setItem("Id", ids)
  }
  else{
    localStorage.setItem("Id", `${id};`)
  }
  
}
  
function removeLocalStrorage(id){
  if(getId(id)){
     const ids = []
    localStorage.getItem('Id').split(';').forEach((i)=>ids.push(i))
    ids.pop()
    const sav = []
    for(let i = 0 ; i < ids.length; i++){
      if(ids[i] != id.toString()){
        sav.push(ids[i])
      }
    }
    if(sav != undefined){
      localStorage.removeItem("Id")
      localStorage.setItem("Id", sav.join(";")+";")
    }
    else
      localStorage.removeItem("Id")
  }
}
