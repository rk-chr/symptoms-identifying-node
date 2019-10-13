const fs = require("fs");

const Router = () => {
  const Symptoms = router => {
    router.post("/symptoms-identify", (req, res) => {
      try {
        const { symptoms } = req.body;
        fs.writeFileSync("file.txt", symptoms);
        res.status(200).json({ msg: "success" });
      } catch (error) {
        console.log(error);
      }
    });
  };

  return {
    Symptoms
  };
};

module.exports = Router;
