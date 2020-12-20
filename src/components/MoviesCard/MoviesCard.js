import React from 'react'
import Rate from "../Rate"
const MovieCard = ({movie : {image, name, date, rating, type, decreptions  }}) => {
    return (
        <div className='card'>
            <div className='cardLeft'>
                <img className="img" src= {image} alt='poster'/>
            </div>
            <div className ='cardRight'>
                <h1>{name}</h1>
           <div className='cardRdetail'>
               <div>
                        {date}
                    </div>
                    <div>
                        <Rate rating={rating} />
                    </div>
                    <div>
                  {type}
                  </div>
           </div>
                <div className='cardRrating'>
                    
                    <p>{decreptions}</p>
                   <div>
                        <button className="trailer" href="https://www.imdb.com/?ref_=nv_home">Read More</button>
                    </div>
                    <div>
                    <button className="trailer" href="https://www.imdb.com/?ref_=nv_home">Watch trailer</button>
                    </div>
                        
           </div>
            </div>
        </div>
    );
};
export default MovieCard