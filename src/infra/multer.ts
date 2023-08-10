import multer from "multer";
import path from "path";
import crypto from "node:crypto";

export const upload = multer({
  dest: path.resolve(__dirname, "../tmp/uploads"),
  limits: { fileSize: 1024 * 1024 * 10 },
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "../tmp/uploads"));
    },
    filename(req, file, callback) {
      const filename = `${Date.now()}${crypto.randomBytes(15).toString("hex")}${
        file.originalname
      }`;
      callback(null, filename);
    },
  }),
});
