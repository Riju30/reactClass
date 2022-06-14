import React from 'react'
import LoadingBar from 'react-top-loading-bar'

const TopLodingBar = ({progress,setProgress}) => {
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={5}
                onLoaderFinished={() => setProgress(0)}
            />
        </>
    )
}

export default TopLodingBar