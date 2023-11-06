import Vente from "./vente"


export default async function Page({params : {id}}) {
    const data  = await getData(id)
    if(data.status != "Error")
        if(data.result[0]== undefined)
            return<Oups/>
        else
            return <Vente data={data.result[0]} />
    else
        return <Oups/>
        
}


async function getData(id){
    const data = await fetch(`http://195.35.48.48:8080/tableaux/${id}`)
    return data.json()
}

function Oups(){
    return(<div>

    </div>)
}