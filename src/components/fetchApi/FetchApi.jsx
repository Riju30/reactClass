import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchApi = () => {
    let [apidata, setApiData] = useState([])

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
    }, [])
    return (
        <>
            <div className='container center' >
                <div className="row">
                    {
                        apidata.map((curData) => {
                            return (
                                <div className="col-md-4" key={curData.id} style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                    <div className="card" >
                                        <img src={curData.avatar_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text"></p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </>
    )
}

export default FetchApi