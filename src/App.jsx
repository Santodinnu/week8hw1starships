import { useEffect, useState } from 'react'
import './App.css'
import Starships from './components/Starships'

function App() {
  let [data, setData] = useState([])

  useEffect(() => {

    async function getData () {

        const response = await fetch ('https://swapi.dev/api/starships/')
        const data = await response.json()
        console.log(data)
        setData(data.results)
    }
    getData()
},[])

return(
    <div>
        <h1>STAR WARS STARSHIPS</h1>
        <Starships data={data} />
    </div>
)
}
export default App