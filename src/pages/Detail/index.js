import React from 'react'
import useSingleGif from 'hooks/useSingleGif'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

const Detail = ({ params }) => {

    const { gif, isLoading, isError } = useSingleGif({id: params.id})

    const title = gif ? gif.title : '';    

    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }    

    if(isError) return <Redirect to='/404' />
    if(!gif) return null

    return ( 
        <>
            <Helmet>
                <title>{title} | Giffy</title>
            </Helmet>

            <h3 className="App-title">{gif.title}</h3>
            <Gif {...gif} />

        </>
    );
}
 
export default Detail;