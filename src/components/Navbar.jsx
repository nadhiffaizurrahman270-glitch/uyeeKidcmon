import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        "Home",
        "About",
        "projects",
        "skills",
        "contact",
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 
            w-[90%] max-w-5xl px-6 py-4 
            rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-xl"
            >
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <a href="#home" className="text-xl font-bold tracking-wider">
                        N<span className="text-blue-500">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-blue-400 transition"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-white hover:text-blue-400 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-4 pt-5">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-300 hover:text-blue-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </motion.nav>
    );
}
export default Navbar;