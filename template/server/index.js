const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/",
  expressStaticGzip(path.join(process.cwd(), "dist"), {
    enableBrotli: true,
    orderPreference: ["br", "gz"]
  })
);
app.use(express.static(path.join(process.cwd(), "dist")));
app.use("/", express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.header = res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Started listening on port: ${PORT}`);
});
