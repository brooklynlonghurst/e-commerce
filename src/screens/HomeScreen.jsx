import React, { useState, useEffect } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"

function HomeScreen() {
    const [dogs, setDogs] = useState([])
    const [search, setSearch] = useState("")

    function handleSearch(event) {
        setSearch(event.target.value.toLowerCase())
    }

    
    useEffect(() => {
        const url = "https://api.api-ninjas.com/v1/dogs?name=dog";
        const config = {
            headers: {"X-Api-Key" : process.env.REACT_APP_API_KEY}
          };

        axios.get(url, config)
            .then((res) => {
                console.log(res)
                let newState = res.data.map((item, index) => {
                    console.log(item)
                    return item
                })
                setDogs(newState)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    

    const dogDisplay = dogs
    .filter((dog, index) => {
        return dog.name.includes(search)
    })
    .map((dog, index) => {
        return <ProductCard dog={dog} index={index}/>
    })

    return (
        <div>
            <h2>Home</h2>
            <input className="searchInput" placeholder="Search by Breed" onChange={handleSearch}/>
            {dogDisplay}
        </div>
    )
}

export default HomeScreen