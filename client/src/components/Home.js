import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { getAllcategories, getAllImages ,getSingleImages} from '../redux/reducers/GallerySlice.js';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllImages())
    dispatch(getAllcategories())
  },[]);
  
  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImages(id))
  }
  return (
    <div class="container my-3">
      <div class="row" bg-dark>
        <div align="center">
          <button onClick={() => dispatch(getAllImages())}
          className="btn btn-dark filter-button"data-filter="all">
            All
          </button>
          {categories && categories.map((item) =>{
            return (
              <button onClick={() => handleCategories(item._id)}
          className="btn btn-secondary filter-button border mx-2" 
          data-filter="hdpe"
          >{item.name}</button>
          );
        })}
        </div>
          
        <br />
        {images && images.map((item) =>{
          return(
            <div class= "gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe my-4">
            <img src={`http://localhost:5000/${item.name}`}
              class="img img-responsive"
              height="300px"
              width="300px"
            /></div>
            );
        })}
        
      </div>
    </div>

  );
};

export default Home;