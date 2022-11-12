const express = require("express");
const axios = require('axios')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.json());
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};
app.use(cors(corsOptions));

let client_id = "PWtO57KgpkYanO0MUPeL";
let client_secret = "wecG6Lu9xy";

app.get("/search/:searchText", (req, res) => {
  console.log(req.params);
  const { searchText } = req.params;
  axios.get("https://openapi.naver.com/v1/search/blog.json", {
      params: {
        query: searchText,
        display: 10,
      },
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-secret": client_secret,
      },
    })
    .then((response) => {
      const { data } = response;
      res.send(data.items);
    })
    .catch((error) => {
      if (error instanceof Error) console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`connected ${PORT}`);
});
