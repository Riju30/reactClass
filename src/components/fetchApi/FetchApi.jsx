import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../Loader'
import NpmSpin from '../npmSpinner/NpmSpin'
import TopLodingBar from '../npmSpinner/TopLodingBar'
import AllApiData from './AllApiData'

const FetchApi = () => {
    let [apidata, setApiData] = useState([])
    let [loader, setLoader] = useState(true)
    let [progress , setProgress] = useState(0)

    let api = "https://jsonplaceholder.typicode.com/photos"
    let api2 = "https://jsonplaceholder.typicode.com/users"
    let api3 = "https://api.github.com/users"
    let fetchData = async () => {
        setProgress(20)
        let jsonData = await fetch(api3)
        setProgress(40)
        let data = await jsonData.json();
        setProgress(60)
        setApiData(data)
        setProgress(80)
        // console.log(data);
    }

    useEffect(() => {
        setProgress(10)
        fetchData()
        
        setTimeout(()=>{
            setLoader(false)
            setProgress(100)
        },2000)
    }, [])
    return (
        <>
            {loader && <TopLodingBar progress={progress} setProgress={setProgress}/>}
            {/* <Loader/> */}
            {loader && <NpmSpin/>}
            {!loader && <AllApiData apiData ={apidata} />}
        </>
    )
}

export default FetchApi