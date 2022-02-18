import express, { response } from "express";


const app = express();
 
// http://localhost:3000

app.get("/test", (resquest, response) => {
  return response.send("Testando");
});

app.post("/test-post", (resquest, response) => {
  return response.send("Olá método POST");
});

app.listen(3000, () => console.log("Server is running"));
