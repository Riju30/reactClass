import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../Loader'
import AllApiData from './AllApiData'

const FetchApi = () => {
    let [apidata, setApiData] = useState([])
    let [loader, setLoader] = useState(true)

    let api = "https://jsonplaceholder.typicode.com/photos"
    let api2 = "https://jsonplaceholder.typicode.com/users"
    let api3 = "https://api.github.com/users"
    let fetchData = async () => {
        let jsonData = await fetch(api3)
        let data = await jsonData.json();
        setApiData(data)
        // console.log(data);
    }

    useEffect(() => {
        fetchData()
        setTimeout(()=>{
            setLoader(false)
        },2000)
    }, [])
    return (
        <>
            {/* <Loader/> */}
            {loader && <Loader/>}
            {!loader && <AllApiData apiData ={apidata} />}
        </>
    )
}

export default FetchApi