import React from 'react'

const AllApiData = (props) => {
  return (
    <>
        <div className='container center' >
                <div className="row">
                    {
                        props.apiData.map((curData) => {
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

export default AllApiData