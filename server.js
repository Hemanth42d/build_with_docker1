require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const userModel = require("./userModel");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.set("views", path.join(__dirname));

app.get("/", async (req, res) => {
  try {
    const user = await userModel.findOne();
    if (!user) {
      user = await userModel.create({
        name: "Hemanth",
        email: "hemanth@gmail.com",
        interests: ["coding", "travel"],
      });
    }
    res.render("profile", {
      name: user.name,
      email: user.email,
      interests: user.interests || [],
    });
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/profile/update", async (req, res) => {
  try {
    let { email, name, interest } = req.body;
    let interestArray = (req.body.interests || "")
      .split(",")
      .map((i) => i.trim());
    const user = await userModel.findOneAndUpdate(
      { email },
      { name, interests: interestArray },
      { new: true }
    );
    if (!user) return res.status(404).send("User not found");
    res.render("profile", {
      name: user.name,
      email: user.email,
      interests: user.interests,
    });
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
