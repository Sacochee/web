"use client"
import { useEffect, useState, useReducer,} from "react"
import s from "./.module.css"
import Image from "next/image"
import Main from "../main/main"

export default function Nav({data}) {
    const [nav, setNav] = useState(false)
    const handle = () =>{
        setNav(nav ? false : true)
    }
    const [nb , setNb] = useState(0)
    const getList = ()=>{
      const local = localStorage.getItem("Id")
      const item = local ? local.split(";") : []
      setNb(item.length - 1)
    }
    useEffect(()=>{getList()}, [])
    const getData = (data)=>{
      console.log(data)
      dispatch({type : "croissantPrix"})
      setState(reducer)
    }
    const [reducer, dispatch] = useReducer(redux, data)
    const [state, setState] = useState(reducer)
  return (
    <>
    <nav className={s.nav}>
        <div className={s.filtre} onClick={()=>handle()}>
          <p className={s.p}>
            Filtres
          </p>
          <Image 
          src={"/images/filtre.png"}
          width={20}
          height={20}
          alt="icones de filres"
          />

        </div>
        <div className={s.like}>
          <Image 
            src={"/images/coeur.png"}
            width={20}
            height={20}
            alt="coeur logo"
          />
          <div className={s.count}>
            {nb}
          </div>
        </div>
      </nav>
      {nav ? <Filtre sendData={getData}/> : undefined}
      <Main data={state}/>
    </>

    
  )
}


function Filtre(props){
    const send = ()=>{
      props.sendData("a")
    }
    return(
    <nav>
        filtres
        <button onClick={send}>
         send 
        </button>
        <button >

        </button>
    </nav>
    )
}


function redux(state, action) {
  if(action.type === "croissantPrix"){
    const lst = state
    lst.sort(croissantP)
    return state = lst
  }
  if(action.type === "decroissantPrix"){
    const lst = state
    lst.sort(croissantP)
    return state = lst.toReversed()
  }
  if(action.type === "decroissantSize"){
    const lst = state
    lst.sort(croissantS)
    return state = lst.toReversed()
  }
  if(action.type === "croissantSize"){
    const lst = state
    lst.sort(croissantS)
    return state = lst
  }
}

function croissantP(a, b){
  if(+(a.price) < +(b.price) )
    return -1
  if(+(b.price) > +(a.price))
    return 1
  return 0 
}
function croissantS(_a, _b){
  const a = +(_a.width) * +(_a.height)
  const b = +(_b.width) * +(_b.height)
  if(a < b )
    return -1
  if(b > a)
    return 1 
  return 0
}