import { imageValidator } from "../utils/helper.js";

class profileController {
    static async index(req, res) {
        try {
            const user = req.user;
            return res.json({ status: 200, user })
        
        } catch (error) {
            return res.status(500).json({ message: "Something went wrong" })
        }
        
    }

    static async store() {
        
    }

    static async show() {
        
    }

    static async update(req, res) {
        const { id } = req.params;
        const authUser = req.user;
        if (!req.files || Object.keys(req.files).lentgh === 0)
        {
            return res.status(400).json({ message: "Image is required" });
        }

        const profile = req.files.profile;
        const message = imageValidator(profile?.size, profile?.mimetype);
        if (message !== null) {
            return res.status(400).json({ errors: { profile: message } });
        }
        

        return res.json({
            name: profile.name,
            sizse: profile?.size,
            mimetype: profile?.mimetype,
        })
    }

    static async destroy() {
        
    }
}


export default profileController;