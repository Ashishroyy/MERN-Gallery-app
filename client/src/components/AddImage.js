import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllcategories, PostImage ,getAllImages}  from '../redux/reducers/GallerySlice.js';

const AddImage = () => {
  const navigate = useNavigate();
  const [file, setFiles] = useState();
  const [category ,setCategory] = useState();
  const dispatch = useDispatch();

  const formdata = new FormData();
  formdata.append("image", file)
  formdata.append("category", category)
  useEffect(() =>{
    dispatch(getAllcategories())
  },[]);
const {categories} = useSelector((state) => state.gallery);
    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(PostImage(formdata))
      navigate('/');
    };
    return (
        <div className='container'>
            <div class="row">
        <div align="center">
          <form onSubmit= {handleSubmit}>
            <div class="form-group">
            <label for="exampleInputEmail1">Image</label>
              <input 
              type="file"onChange={ (e) => setFiles(e.target.files[0])}
                class="form-control"
              />
            </div>
            <div class="form-group mt-4">
              <label for="exampleInputEmail1">Category:</label>
              <select
                class="form-control custom-select"
                name="category"onChange={(e) => setCategory(e.target.value)}>
                <option value="" selected>
                  Please Select
                </option>
                {categories && categories.map((item) =>{
                  return <option value={item._id}>{item.name}</option>
                })}
              </select>
            </div>

            <button type="submit" class="btn btn-danger mt-4">
              Upload
            </button>
          </form>
        </div>
        <br />
      </div>
        </div>

    )
};

export default AddImage;