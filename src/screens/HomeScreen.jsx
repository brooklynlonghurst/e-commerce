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
        axios
            .get(`https://dog.ceo/api/breeds/list/all`)
            .then((res) => {
                let newState = res.data.results.map((item, index) => {
                    item.img = `https://dog.ceo/api/${index + 1}/image/random`
                    return item
                })
                setDogs(newState)
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
            <h1>Home</h1>
            <input className="searchInput" placeholder="Search by Breed" onChange={handleSearch}/>
            {dogDisplay}
        </div>
    )
}

export default HomeScreen