var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../models/users");
const userAdditionalDataSchema = require("../models/userAdditionalData");
const { use } = require("./posts");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async function (req, res, next) {
  const {
    firstName,
    lastName,
    email,
    password,
    city,
    state,
    country,
    zipCode,
    role,
    university,
    startMonth,
    startYear,
    endMonth,
    endYear,
  } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    res.status(203).send("User already exists");
  } else {
    const user = await userSchema.create({
      id: new mongoose.Types.ObjectId(),
      firstName: firstName,
      lastName: lastName,
      profilePicture:
        "https://res.cloudinary.com/dp6ofrbni/image/upload/v1688055678/ProfesioHub/preview_z2tdjn.png",
      email: email,
      password: password,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode,
      role: role,
      university: university,
      startMonth: startMonth,
      startYear: startYear,
      endMonth: endMonth,
      endYear: endYear,
    });

    if (user) {
      res.status(201).send("Account created successfully");
    } else {
      res.status(500).send("Error in creating account");
    }
  }
});

router.post("/validateEmail", async function (req, res, next) {
  const { email } = req.body;
  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    res.status(200).send({ message: "Email already exists" });
  } else {
    res.status(200).send({ message: "Email is valid" });
  }
});

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    const myData = {
      message: "",
      email: isPresent.email,
    };
    if (isPresent.password === password) {
      myData.message = "Login successful";
      res.status(200).send(myData);
    } else {
      myData.message = "Incorrect password";
      res.status(200).send(myData);
    }
  } else {
    res.status(203).send("User not found");
  }
});

router.post("/getUserDetails", async function (req, res, next) {
  const { email } = req.body;

  const isPresent = await userSchema.findOne({ email: email });

  if (isPresent) {
    res.status(200).send(isPresent);
  } else {
    res.status(203).send("User not found");
  }
});

router.post("/getUserAdditionalData", async function (req, res, next) {
  const { email } = req.body;

  const isPresent = await userAdditionalDataSchema.findOne({ email: email });

  if (isPresent) {
    res.status(200).send(isPresent);
  } else {
    res.status(203).send("User not found");
  }
});

router.put("/updateUserDetails", async function (req, res, next) {
  const {
    email,
    firstName,
    lastName,
    city,
    state,
    country,
    university,
    profilePicture,
  } = req.body;

  console.log(req.body);

  const isUpdated = await userSchema.updateOne(
    { email: email },
    {
      $set: {
        firstName: firstName,
        lastName: lastName,
        city: city,
        state: state,
        country: country,
        university: university,
        profilePicture: profilePicture,
      },
    }
  );
  res.status(200).send("User details updated successfully");
});

router.get("/getAllUsers", async function (req, res, next) {
  const users = await userSchema.find();

  if (users) {
    res.status(200).send(users);
  } else {
    res.status(203).send("No users found");
  }
});

router.put("/updateUserAdditionalDataAbout", async function (req, res, next) {
  const { email, about } = req.body;

  const isUpdated = await userAdditionalDataSchema.updateOne(
    { email: email },
    {
      $set: {
        about: about,
      },
    }
  );

  if (isUpdated) {
    res.status(200).send("User additional data updated successfully");
  } else {
    res.status(203).send("Error in updating user additional data");
  }
});

router.post("/bookmarkPost", async function (req, res, next) {
  const { email, postId } = req.body;

  const isBookmarkPresent = await userAdditionalDataSchema.findOne({
    email: email,
  });

  if (isBookmarkPresent) {
    const isPostPresent = isBookmarkPresent.bookmarks.find(
      (bookmark) => bookmark === postId
    );

    if (isPostPresent) {
      const updatedBookmarks = isBookmarkPresent.bookmarks.filter(
        (bookmark) => bookmark !== postId
      );

      const updatedUser = await userAdditionalDataSchema.findOneAndUpdate(
        { email: email },
        { bookmarks: updatedBookmarks }
      );

      if (updatedUser) {
        res.status(200).send("false");
      } else {
        res.status(203).send("Error in unbookmarking post");
      }
    } else {
      const updatedBookmarks = [...isBookmarkPresent.bookmarks, postId];

      const updatedUser = await userAdditionalDataSchema.findOneAndUpdate(
        { email: email },
        { bookmarks: updatedBookmarks }
      );

      if (updatedUser) {
        res.status(200).send("true");
      } else {
        res.status(203).send("Error in bookmarking post");
      }
    }
  } else {
    const user = await userAdditionalDataSchema.create({
      id: new mongoose.Types.ObjectId(),
      email: email,
      bookmarks: [postId],
    });

    if (user) {
      res.status(200).send("Post bookmarked successfully");
    } else {
      res.status(203).send("Error in bookmarking post");
    }
  }
});

router.post("/getIsBookmarked", async function (req, res, next) {
  const { email, postId } = req.body;

  const isBookmarkPresent = await userAdditionalDataSchema.findOne({
    email: email,
  });

  if (isBookmarkPresent) {
    const isPostPresent = isBookmarkPresent.bookmarks.find(
      (bookmark) => bookmark === postId
    );

    if (isPostPresent) {
      res.status(200).send("true");
    } else {
      res.status(200).send("false");
    }
  } else {
    res.status(200).send("false");
  }
});

module.exports = router;
