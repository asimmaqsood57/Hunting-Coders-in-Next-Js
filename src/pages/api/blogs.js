// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  const data = await fs.promises.readdir("./blogData/", "utf8");

  let allBlogs = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const myFile = await fs.promises.readFile(`./blogData/${item}`, "utf8");
    allBlogs.push(JSON.parse(myFile));
  }

  res.status(200).json(allBlogs);
  //   data.forEach((item) => {
  //     console.log(item);
  //     let myFile = await fs.promises.readFile(`./blogData/${item}`, "utf8");
  //     console.log(myFile);
  //   });

  //   fs.promises.readdir("./blogData/", "utf8", (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     let allBlogs = [];

  //     data.forEach((item) => {
  //       console.log(item);
  //       fs.readFile(`./blogData/${item}`, "utf8", (err, data) => {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //         console.log(data);
  //       });
  //     });

  //     res.status(200).json(data);
  //   });
}
