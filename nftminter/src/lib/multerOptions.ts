import { HttpException, HttpStatus } from "@nestjs/common";
import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import uuidRandom from "./uuidRandom";

export const multerOptions = {
    fileFilter: (request, file, callback) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
            // allow image format: jpg, jpeg, png
            callback(null, true);
        } else {
            callback(new HttpException(
                {
                    status: HttpStatus.FORBIDDEN,
                    error: 'Not support image format'
                }, 
                HttpStatus.FORBIDDEN), false);
        }
    },
    storage: diskStorage({
        destination: (request, file, callback) => {
            const uploadPath: string = 'public';
            if (!existsSync(uploadPath)) {
                //if public folder is not exist
                mkdirSync(uploadPath);
            }
            callback(null, uploadPath);
        },
        filename: (request, file: Express.Multer.File, callback) => {
            callback(null, uuidRandom(file));
        }
    })
}

export const createImageURL = (file): string => {
    const serverAddress: string = process.env.SERVER_ADDRESS;
    // file store path: server/public
    return `${serverAddress}/public/${file.filename}`;
}

