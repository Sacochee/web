import Nav from '@/compoments/nav/nav'


export default async function Home() {
  const data = await getData()   // mettre main dans nav afin de faire passer els infos + faire les filtres + faire les hover 1024
  console.log(data)
  return (
    <main>
      <Nav data={data.result}/>
    </main>
  )
}

export async function getData(){
  const res = await fetch('http://195.35.48.48:8080/tableaux')
  if(res != "")
    return res.json()
  else
    throw new Error('failed to fetc data')
}

