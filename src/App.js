
import React, { useState,useEffect} from "react";
import ImageCard from "./components/ImageCard";
import  ImageSearch from "./components/ImageSearch";

function App() {
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState('');

  useEffect( ()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_PIXAPAY_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=>console.log(err));
  }
  ,[term]);
  return (
    <div className="container mx-auto">
      <div><ImageSearch handleSearch={text=>setTerm(text)}></ImageSearch></div>
      {!isLoading && images.length===0 && <h1 className="text-center text-blue-500 text-6xl mx-auto mt-32">No Images Found</h1>}
      {isLoading ? <h1 className="text-center text-blue-500 text-6xl mx-auto mt-32">Loading...</h1> :
      
      <div className="grid grid-cols-3 gap-4">
        
        {images.map(image=>(
          <ImageCard key={image.id} image={image}></ImageCard>
        ))}
      </div>
    }
    </div>
      )
}

export default App;
