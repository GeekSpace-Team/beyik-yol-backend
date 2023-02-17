import { extname } from "path";
import { randomUUID } from "crypto";

export  const editFileName = (req: any, file: Express.Multer.File, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(32)
    .fill(null)
    .map(()=> Math.round(Math.random()*16).toString(16))
    .join('');
  callback(null,`${name}-${randomName}-${randomUUID().toString()}${fileExtName}`);
}