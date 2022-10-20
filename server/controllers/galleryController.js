import galleryModel from '../models/gallery.js';
import categoryModel from '../models/category.js';
class galleryController {
    static uploadImage = async(req, res) => {
        const {category} = req.body;
        try{
            if(category){
                const addImage = galleryModel({
                    name: req.file.filename,
                    category: category,
                });
                const save_image = await addImage.save();
                if(save_image){
            return res.status(200).json({massege:'upload file succesfully'});
                }
            }else{
            return res.status(400).json({massege:'required all field'});
            }

        }catch(error){
            return res.status(400).json({massege: error.massege});
        }
    };
    //
    static addNewCategory = async(req, res) => {
        const {name} = req.body;
        try{
            if(name){
                const newCategory = categoryModel({
                    name: name,
                });
                const saved_category = await newCategory.save();
                if(saved_category){
                    return res.status(200).json({massege:'added file succesfully'});
                }
            }
        else{
        return res.status(400).json({massege:'required all field'});
        }
        }catch(error){
            return res.status(400).json({massege: error.massege});
        }
    };
    // getall
    static getAllcategories = async (req, res) => {
        try{
            const fetAllcategory = await categoryModel.find({});
           return res.status(200).json(fetAllcategory);

        }catch(error){
            return res.status(400).json({massege: error.massege});
        }
    };
// fetch all images
    static getAllimages = async (req ,res) => {
        try{
            const fetchAllImage = await galleryModel.find({});
            return res.status(200).json(fetchAllImage);
        }catch(error){
            return res.status(400).json({massege: error.massege})
        }
    };
    // 
    static getsingleImage = async (req, res) => {
        const { category } = req.query;
        try {
          if (category) {
            const getCategoryBasedImages = await galleryModel.find({
              category,
            });
            return res.status(200).json(getCategoryBasedImages);
          } else {
            return res.status(400).json({ message: "all fields are required" });
          }
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      };
}

export default galleryController;