import  express  from "express";
import multer from "multer";
import galleryController from "../controllers/galleryController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file ,cb){
        cb(null, `public/upload`);
    },
    filename: function(req, file ,cb){
        cb(null , `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({storage: storage});
router.post("/upload/image",upload.single('image'), galleryController.uploadImage);

router.post("/add", galleryController.addNewCategory);
router.get("/get/cetogories", galleryController.getAllcategories);
router.get("/get/allimages", galleryController.getAllimages);
router.get("/get/image", galleryController.getsingleImage);

export default router;