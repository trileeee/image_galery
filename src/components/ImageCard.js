import React from 'react';
const ImageCard= ({image})=>{
    const tags=image.tags.split(',');
    return(
    <>  
    <div className='max-w-sm rounded overflow-hidden shadow-lg '>
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user} </div>
          <ul>
          <li><strong>Views:</strong> {image.views}</li>
          </ul>
          <ul>
          <li><strong>Download:</strong> {image.downloads}</li>
          </ul>
          <ul>
          <li><strong>Likes:</strong> {image.likes}</li>
          </ul>
          <div className="px-6 py-4">
            {tags.map((tag,index)=>(
              
                <span  key={`tag_${index}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-">#{tag}</span>
            ))}
          </div>
      </div>
      </div>
   </>
   )
}
export default ImageCard;