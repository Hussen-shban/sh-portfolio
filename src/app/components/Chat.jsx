"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Chat = () => {
    const easterEggReply = {
        heroText:
        
" كيف تجد ال easter egg في الموقع\n1️⃣ عند الضغط على جملة معينة.\n2️⃣   قم بهزّ الموبايل.\n3️⃣  تشغيل الأغنية.\n4️⃣  كتابة كلمة معينة على لوحة المفاتيح\n "
    };

    const [message, setMessage] = useState([
        {
            role: "assistant",
            content: "Hey! 👋 How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [hidden, sethidden] = useState(true);
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    const hiddenref = useRef(null);

    const sendMessageMutation = useMutation({
        mutationFn: async (prompt) => {
            setLoading(true);
            const res = await axios.post("/api/chat", {
                model: "openai/gpt-oss-20b",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    ...message,
                    { role: "user", content: prompt },
                ],
            });
            return res.data.choices[0].message.content;
        },
        onSuccess: (reply) => {
            setMessage((prev) => [...prev, { role: "assistant", content: reply }]);
            setLoading(false);
        },
        onError: (err) => {
            console.error("Chat error:", err);
            setLoading(false);

            const errorMsg =
      
                "⚠️ Connection error. Please check your internet connection or enable your VPN, then try again.";
            setMessage((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: `❌ ${errorMsg}`,
                },
            ]);
        },
    });

    const handleSend = (input) => {
        if (!input.trim()) return;

        setMessage([...message, { role: "user", content: input }]);

        const isEasterEgg = input.toLowerCase().includes("easter egg");

        if (isEasterEgg) {
            setMessage((prev) => [
                ...prev,
                { role: "assistant", content: easterEggReply.heroText },
            ]);
        } else {
            sendMessageMutation.mutate(input);
        }

        setInput("");
    };

    const toggleChat = () => {
        if (hidden) {
            gsap.to(hiddenref.current, { x: 0, opacity: 1, duration: 0.5 });
        } else {
            gsap.to(hiddenref.current, { x: 550, opacity: 0, duration: 0.4 });
        }
        sethidden(!hidden);
    };

    return (
        <div className="relative">
            <div
                className="fixed bottom-30 right-10 z-[500]
            max-sm:bottom-10 max-sm:right-5"
            >
                <div className="box w-[50px] h-[50px]" />
                <img
                    onClick={toggleChat}
                    className="cursor-pointer absolute top-0 left-0 z-10"
                    src="/svg/messages.svg"
                    alt=""
                />

                <div
                    ref={hiddenref}
                    className="bg-white translate-x-[550px] p-4 h-[350px] overflow-hidden w-[400px] z-[1000] rounded-xl absolute bottom-10 -left-100
                max-sm:-left-70 max-sm:w-[300px] max-sm:h-[400px] max-sm:bottom-12"
                >
                    <div className="h-[270px] overflow-auto max-sm:h-[330px]">
                        {message.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex w-fit gap-3 mb-2 rounded-2xl ${msg.role === "assistant"
                                    ? "justify-start bg-gray-100 text-black p-2 items-start"
                                    : "justify-end bg-[#8fc1e2] px-1 text-white items-end ml-auto"
                                    }`}
                            >
                                {msg.role === "assistant" && (
                                    <img className="w-[35px]" src="/svg/robot.svg" alt="robot" />
                                )}
                                <p className="p-2  whitespace-pre-line">{msg.content}</p>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex items-center gap-3">
                                <img className="w-[35px]" src="/svg/robot.svg" alt="robot" />
                                <div className="lds-ellipsis top-2">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full bg-gray-100 flex items-center gap-3 rounded-xl">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            className="grow outline-0 text-black p-3"
                        />
                        <button onClick={() => handleSend(input)}>
                            <img className="px-3" src="/svg/send.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
