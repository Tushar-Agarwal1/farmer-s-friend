import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signin = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		//https://avatar.iran.liara.run/public/job/farmer/male


        const boyProfilePic = `https://avatar.iran.liara.run/public/job/farmer/male?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/job/farmer/female?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword, // Assigning password directly without hashing
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        

      
		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
    } catch (err) {
        console.log("Error in signup:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
		const { username, password } = req.body;
		const user = await User.findOne({ username });
        if(!user){
            return res.status(400).json({ error: "Invalid user" });
        }
		const isPasswordCorrect = await bcrypt.compare(password, user.password );

		if ( !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
    //console.log("logout");
    try {
		res.cookie("jwt", "", { maxAge: 0 });  //this sets value of cookie named jwt as "" and its maxage as 0 ,setting it 0 means deleting it
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
