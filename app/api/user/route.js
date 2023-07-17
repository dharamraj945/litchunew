import ConnectToDb from "@/utils/dbConnect";
import User from "@/models/users";

const handler = async (req, res) => {

    try {
  
        const { name, email } = await req.json();
        await ConnectToDb();    
        const userCreate = await User({name, email})
        await userCreate.save();

        return new Response(JSON.stringify(userCreate), { status: 201 });
    } catch (error) {
        console.log(error);
    }
}

export {handler as POST}

export const GET = async (req, res) => {
    try {
         await ConnectToDb();
         return new Response("I am working")
    } catch (error) {
        console.log(error)
    }
}
