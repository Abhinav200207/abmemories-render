const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");
connectDatabase();

cloudinary.config({
  cloud_name: "dnyhtkvsh",
  api_key: "764822969512944",
  api_secret: "HTgR6Imgpg_mrOBLMysXm8w559c",
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
