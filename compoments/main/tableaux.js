"use client"
import React,{useRef, useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import tabl from "./tableaux.module.css"
import {v4 as uuidv4} from "uuid"
import Image from "next/image"

export default function Tableaux({data}){
    const router = useRouter()
    const ref = useRef()
    const img = data.images.split(';')[0]
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

  
function getId(id){
    const ids = []
    localStorage.getItem('Id') ? localStorage.getItem('Id').split(';').forEach((i)=>ids.push(i)) : undefined
    return ids.includes(id.toString())
  }
  
  function addlocalStrorage(id){
    const local = localStorage.getItem('Id') || undefined
    localStorage.removeItem("Id")
    localStorage.setItem('Id', local ?  local + ";" + id : id)
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
  