
import React, { useReducer } from 'react';
import './Slideshow.css';

const initialState = {
  currentIndex: 0,
  images: [
    "https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610171912188-49b8e7f3fad7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521900092653-4bf38fcd896a?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1700669465712-31711e4ea5c8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1547533456-07321515b4fd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1615281144933-17ae60439da2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1470922792794-b15b12d20e80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

const actionTypes = {
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEXT:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % state.images.length,
      };
    case actionTypes.PREVIOUS:
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length,
      };
    default:
      return state;
  }
};

const ImageCarousel = ({ images, currentIndex, nextImage, previousImage }) => {
  return (
    <div className='SlideShowCSS'>
      <button className='previousButtonSlideshow' onClick={previousImage} disabled={currentIndex === 0}>
        Previous
      </button>
      <img className='slidshowimages' src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className='nextButtonSlideshow' onClick={nextImage} disabled={currentIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
};

const Slideshow = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nextImage = () => {
    dispatch({ type: actionTypes.NEXT });
  };

  const previousImage = () => {
    dispatch({ type: actionTypes.PREVIOUS });
  };

  return (
    <ImageCarousel
      images={state.images}
      currentIndex={state.currentIndex}
      nextImage={nextImage}
      previousImage={previousImage}
    />
  );
};

export default Slideshow;
