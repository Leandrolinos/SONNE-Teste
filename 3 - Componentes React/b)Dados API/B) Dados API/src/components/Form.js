import React, { useState } from "react";
import axios from "axios";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/api/forms", {
                name,
                email,
                message,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
