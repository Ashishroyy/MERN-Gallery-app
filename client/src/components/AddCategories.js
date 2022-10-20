import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { getAllcategories , AddCategory} from '../redux/reducers/GallerySlice';
import {useNavigate} from 'react-router-dom';
const AddCategories = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [input, setinput] = useState({
        name: '',
    });
    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispath(AddCategory(input))
        dispath(getAllcategories()); 
        navigate('/add/image');
    };
    return (
        <div className='container'>
            <div class="row">
                <div align="center">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label>Category</label>
                            <input
                                name='name'
                                value = {input.name}
                                onChange ={(e) => setinput({...input, [e.target.name]: e.target.value})
                                }
                                type="text"
                                class="form-control p-3 bg-light text-dark"
                                placeholder='Enter category'
                            />
                        </div>
                        <button type="Submit" class="btn btn-danger mt-4">
                            Add Category
                        </button>
                    </form>

                    <button className="btn btn-dark mt-4" >Go to Home</button>
                </div>
                <br />
            </div>
        </div>
    )
};

export default AddCategories;