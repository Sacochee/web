import Vente from "./vente"


export default async function Page({params : {id}}) {
    const data  = await getData(id)
    console.log("data ++++++++++++++++++++++++++")
    console.log(data)
    if(data.status != "Error")
        return <Vente data={data.result[0]} />
    else
        return (
            <div>Page</div>
        )
}


async function getData(id){
    const data = await fetch(`http://195.35.48.48:8080/tableaux/${id}`)
    return data.json()
}