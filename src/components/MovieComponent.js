import React from "react";
import  "./MovieModule.css";


const MovieComponent = (props) =>{
    const {Title,Year,imdbID,Type,Poster} = props.movie;
       
            return(
                <div className="movie-content" 
                  onClick ={()=>props.onMovieSelect(imdbID)} >

                <img src={Poster} alt = "post"/>
                
                <p className="movie-name">{Title}</p>
                    <div className="Column">
                        <p>Year: {Year}</p>
                        <p>Type: {Type}</p>
                    </div>
                </div>
            );
}
    


export default  MovieComponent;