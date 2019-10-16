const { PythonShell } = require("python-shell");
const fs = require("fs");

const Router = () => {
  const Symptoms = router => {
    router.post("/symptoms-identify", (req, res) => {
      try {
        const { symptoms } = req.body;
        fs.writeFileSync("file.txt", symptoms);
        let pyshell = new PythonShell("./Execution.py");
        const result = [];
        pyshell.on("message", function(message) {
          result.push(message);
          if (result.length === 2)
            res.status(200).json({ disease: result[0], remedy: result[1] });
        });
      } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "error" });
      }
    });
  };

  return {
    Symptoms
  };
};

module.exports = Router;
