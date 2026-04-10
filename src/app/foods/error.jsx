'use client'
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white px-4">

            <div className="text-center">

                {/* Floating Emoji */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-8xl mb-6"
                >
                    🚀
                </motion.div>

                {/* 404 Text */}
                <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Oops! Page Not Found
                </h2>

                <p className="text-gray-300 mt-3 max-w-md mx-auto">
                    The page you are looking for might have been removed,
                    had its name changed or is temporarily unavailable.
                </p>

                
                <div className="mt-8 flex gap-4 justify-center">

                    <Link href="/foods">
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-400 text-black font-semibold shadow-lg hover:scale-110 transition">
                            Go Back Foods
                        </button>
                    </Link>

                    <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-white hover:text-black transition">
                        Contact Support
                    </button>

                </div>

            </div>
        </div>
    );
}