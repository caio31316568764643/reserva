import multer from 'multer'
import path from 'path'

export default{
    Storage: multer.diskStorage({
        deslination: path.resolve(__dirname, '..', '..','uploads'),
        fileGame: (req, res, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext)
        },
    })
}