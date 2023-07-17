"use client"
import { useState } from "react"

const Form = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const addData = async () => {
        try {
            const response = await fetch("/api/user", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                }),
            });
            if (response.ok) {
                alert("Data Added");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await addData();
    };


    return (
        <form
            className="h-screen w-full flex flex-col justify-center items-center gap-2 "
            onSubmit={onSubmit}
        >
            <input
                type="text"
                name="name"
                className="border-2 rounded-lg px-2"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                className="border-2 rounded-lg px-2 "
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form