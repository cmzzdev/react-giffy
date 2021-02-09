import React from 'react'
import Gif from '../Gif'
import './styles.css'

const ListOfGifs = ({gifs}) => {       

    return ( 
        <div className='ListOfGifs'>
        {
          gifs.map(({id, title, url, ...restOfGif}) =>
            <Gif
              id={id}
              key={id}
              title={title}
              url={url}
              extraInfo={restOfGif}
            />
          )
        }
      </div>
    );
}
 
export default ListOfGifs;