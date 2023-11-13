import express  from "express"
import { loginUser, registerUser } from "./controllers/UserController.js";

const app = express();
const port = 5000 || process.env.PORT;

app.post('/login',loginUser);
app.post('/register',registerUser);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}\nhttp://localhost:${port}`);
})