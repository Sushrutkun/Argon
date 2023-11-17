import express  from "express"
import { loginUser, registerUser } from "./controllers/UserController.js";
import dotenv from "dotenv";
import { authLinkedin, authLinkedinCallback } from "./controllers/AuthController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.post('/login',loginUser);
app.post('/register',registerUser);

app.get('/auth/linkedin',authLinkedin);
app.get('/auth/linkedin/callback',authLinkedinCallback);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}\nhttp://localhost:${port}`);
});