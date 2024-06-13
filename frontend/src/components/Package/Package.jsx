import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const data = [
  { id: 1, price:5000, content: "Varanasi", videoUrl: "https://videos.pexels.com/video-files/4685716/4685716-sd_640_360_30fps.mp4", imageUrl: "https://images.pexels.com/photos/17869859/pexels-photo-17869859/free-photo-of-ganges-coast-in-varanasi-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 2,price:7000, content: "Jaipur", videoUrl: "https://videos.pexels.com/video-files/5243307/5243307-sd_640_360_25fps.mp4", imageUrl: "https://images.ctfassets.net/bth3mlrehms2/15FkRQjgtqJC4L40yhFg6W/4dff837ed92569427b2607e9b5a51826/iStock-639075168.jpg?w=3865&h=2576&fl=progressive&q=50&fm=jpg" },
  { id: 3,price:8000, content: "Srinagar", videoUrl: "https://videos.pexels.com/video-files/20530145/20530145-sd_540_960_30fps.mp4", imageUrl: "https://images.pexels.com/photos/8629979/pexels-photo-8629979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, price:5000,content: "Package 4", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://via.placeholder.com/150" },
  { id: 5, price:5000,content: "Package 5", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://via.placeholder.com/150" },
  { id: 6, price:5000,content: "Package 6", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://via.placeholder.com/150" },
  
];

const ITEMS_PER_PAGE = 3;

export const Package = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideos, setPlayingVideos] = useState({});

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePlayVideo = (id) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="container mx-auto text-center pt-4 pb-8 bg-blue-900">
      <h1 className="text-white font-bold text-2xl sm:text-5xl md:text-4xl lg:text-5xl font-mono py-1 sm:py-2">
        Packages
      </h1>
      {/* <p className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-mono">
        Explore our travel packages
      </p> */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-2 p-4  ">
        {currentItems.map((item) => (
          <div key={item.id} className="bg-blue-100 p-4 rounded-lg shadow-md h-auto flex flex-col justify-between hover:shadow-lg hover:shadow-blue-500">
            <div className="flex-grow flex items-center justify-center ">
              {playingVideos[item.id] ? (
             <video width="100%" height="100%" controls autoPlay loop muted className="w-full h-96 object-cover">
             <source src={item.videoUrl} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
           
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.content}
                  className="w-full h-96 cursor-pointer object-cover"
                  onClick={() => handlePlayVideo(item.id)}
                />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold m-4">{item.content}</h2>
              <p className="text-gray-700 mt-1">Price: {item.price}</p> 
              <div className="mt-4 text-center ">
          <Link to="/register" className="bg-blue-400 mb-1 sm:mb-8 p-2  rounded-lg hover:bg-blue-700">
            Book
          </Link>
        </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 md:mt-2 space-x-2 ">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
