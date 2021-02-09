import React, { useCallback } from 'react'
import { useLocation } from 'wouter'
import useGifs from 'hooks/useGifs'
import SearchForm from 'components/SearchForm'
import ListOfGifs from 'components/ListOfGifs'
import Category from 'components/Category'
import TrendingSearches from 'components/TrendingSearches'

const Home = () => {
   
    const [ path, pushLocation ] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = useCallback(({keyword}) => {    
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])   

    return ( 
        <>
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