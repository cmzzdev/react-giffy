import React from 'react';
import {Link} from 'wouter'

const Category = ({name, options = []}) => {
    return ( 
        <div className='Category'>
            <h3 className="Category-title">{decodeURI(name)}</h3>
            <ul className="Category-list">
                {options.map((singleOption) => (
                    <li key={singleOption}>
                        <Link 
                            className="Category-link"
                            to={`/search/${singleOption}`}
                        >
                            {singleOption}
                        </Link>
                    </li>
                ))}
            </ul>
         </div>
     );
}
 
export default Category;