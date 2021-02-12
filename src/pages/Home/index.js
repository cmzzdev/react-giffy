import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import Helmet from 'react-helmet'
import useGifs from 'hooks/useGifs'
import SearchForm from 'components/SearchForm'
import ListOfGifs from 'components/ListOfGifs'
import Category from 'components/Category'
import TrendingSearches from 'components/TrendingSearches'

// htmlhead.dev --> Podemos ver todos los tags básicos que se utilizan en el HEAD


const Home = () => {
   
    const [ path, pushLocation ] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = useCallback(({keyword}) => {    
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])   

    return ( 
        <>
            <Helmet>
                <title>Home | Giffy </title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                    <Category
                        name="Mascotas"
                        options={['Perros', 'Gatos', 'Hamster']}
                    />
                </div>
            </div>

        </>        
    );
}
 
export default Home;