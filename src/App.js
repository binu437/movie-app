
import './App.css';
import MovieComponent from './components/MovieComponent';
import MovieInfoComponent from './components/MovieInfoComponent';
import React,{useState} from'react';
// import axios from 'axios';


function App() {
  
  // step1:created all html component and styling
  // step2: create hook to store search-bar data and update search-bar once we type in
  // Debouncing techniques this will enable the function to be called only when the complete text is typed
  // debouncing will accombany with timer
  // step 3: fetching api call
  // step 4 : create next hook to show the result of api call
  // step:5 mapping
  // step 6:create movie info with hooks

  const API_KEY ="729a6477";
  const[searchQuery, updateSearchQuery]= useState("");

  // step 2:
   const[timeOutId, updateTimeOutId] = useState("");

  // step 4

   const[ movieList , updateMovieList] = useState([]);

  // step:6

  const[selectedMovie,onMovieSelect] = useState();


  //  const fetchdata = async(movieName) =>{
  //   const response= await axios.get(
  //     "https://www.omdbapi.com/?i=tt3896198&apikey="+API_KEY+"&s="+movieName
  //   );
  //   console.log(response);
  //  }
   
  // step 3
  async function fetchdata(){
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey="
      +API_KEY+
      "&s="
      +searchQuery
    );
    const data = await response.json();
    updateMovieList(data.Search);
  }
  


  //  step 1:
  function onTextChange(event){
    // step 2 b
    clearTimeout(timeOutId);

    updateSearchQuery (event.target.value);

  // step 2 a

  const timeout = setTimeout(() => {
    fetchdata("event.target.value");
  }, 500);
  updateTimeOutId(timeout);
  
  }






  return (
    <div className="Container">
    
     <div className='header'> 
    
        <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></svg>
        
        <h1 className='app-name'>React Movie App</h1> 

        <div className="search-bar">
           <input 
            className = "search-input" 
            type="text" 
            placeholder="search..."
            value={searchQuery}
            onChange={onTextChange} 
            />
           <button>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"></path></svg>
           </button>
        </div>    
     </div>
     
     {selectedMovie && <MovieInfoComponent 
     selectedMovie={selectedMovie}
     onMovieSelect={onMovieSelect}
     />}

     <div className="MovieListContainer">
       {movieList?.length ? 
           movieList.map((movie,index) =>(

           <MovieComponent
            
            key={index}
            movie={movie}  
            onMovieSelect={onMovieSelect}

            />            
            )) : "NO MOVIE SEARCH"
       }   
     </div>
     
  
    </div>

    
  );
    
    
}

export default App;
