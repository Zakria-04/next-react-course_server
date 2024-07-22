const USER_MODEL = require("../Models/user.module");

const userApplication = (req, res) => {
  const { userName, phone, location } = req.body;

  USER_MODEL.create({
    userName: userName,
    phone: phone,
    location: location,
  })
    .then((Cres) => {
      res.status(200).json({ user: Cres });
    })
    .catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );
};

const deleteUserApplication = (req, res) => {
  const { userID } = req.body;
  let user = USER_MODEL.findById(userID);
  if (!user) {
    res.status(500).json({ error: true });
  } else {
    USER_MODEL.findByIdAndDelete(userID)
      .then(() => {
        res.status(200).json({ message: "user deleted sucsusfuly" });
      })
      .catch((e) =>
        res.status(500).json({ errorMessage: "user is not found" })
      );
  }
};

module.exports = {
  userApplication,
  deleteUserApplication,
};
