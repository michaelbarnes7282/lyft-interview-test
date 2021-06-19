const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.post("/test", (req, res) => {
  string_to_cut = req.body.string_to_cut;
  rs = "";
  let x = 2;
  while (x < string_to_cut.length) {
    rs += string_to_cut[x];
    x += 3;
  }
  res.status(200).json({ return_string: rs });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
