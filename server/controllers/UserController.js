export const loginUser = (req,res) => {
    res.status(200).json({message:"loginUser"});
    console.log("loginUser");
}

export const registerUser = (req,res) => {
    res.status(200).json({message:"registerUser"});
    console.log("registerUser");
}