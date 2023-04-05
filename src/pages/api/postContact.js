import fs from "fs";
export default async function handler(req, res) {
  const { name, email, message } = req.body;

  console.log(req.body);

  if (req.method === "POST") {
    // Process a POST request

    let data = await fs.promises.readdir("./contactData/", "utf8");

    console.log(data);

    fs.writeFile(
      `contactData/${data.length + 1}.json`,
      JSON.stringify(req.body),
      () => {}
    );
  } else {
    // Handle any other HTTP method
  }

  res.status(200).json({ name, email, message });
}
