import { useEffect, useState, useContext } from 'react';
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0;

const useGifs = ({keyword} = { keyword: null }) => {

    const [ loading, setLoading ] = useState(false);
    const [ loadingNextPage, setLoadingNextPage ] = useState(false)

    const [ page, setPage ] = useState(0)
    const { gifs, setGifs } = useContext(GifsContext) 
    
    // Recuperamos la última keyword de localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(() => {
        setLoading(true)            
        getGifs({keyword: keywordToUse})        
          .then(result => {
            setGifs(result)
            setLoading(false)
            // Guardamos la keyword en localStorage
            localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE ) return

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [keywordToUse, page, setGifs])

    return { loading, gifs, setPage }

}
 
export default useGifs;