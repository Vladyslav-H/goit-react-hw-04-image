import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosImg } from 'services/pixabayapi';
import Searchbar from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = submitName => {
    setSearchName(submitName);
    setPage(1);
  };

  const changePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
     const setNewImages = async () => {
    setIsLoading(true);
    try {
      const data = await axiosImg(searchName, page);
      if (!data.length) {
        throw new Error();
      }
      setImages(prevImages =>
        page === 1 ? [...data] : [...prevImages, ...data]
      );
    } catch (error) {
      toast.error('Not find any images. Please, try again');
    } finally {
      setIsLoading(false);
    }
    };
    if (searchName || page !== 1) setNewImages()
  }, [searchName, page]);

 

  return (
    <>
      <ToastContainer position="top-center" theme="colored" />
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} changePage={changePage} />

      {images.length > 0 && <Button title="Load more" onClick={changePage} />}
    </>
  );
};
