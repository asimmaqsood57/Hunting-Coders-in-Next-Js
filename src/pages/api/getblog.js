// http://localhost:3000/api/getblog?slug=learn-react
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`./blogData/${req.query.slug}.json`, "utf8", (err, data) => {
    if (err) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
}
