import { ArrowUp, Code2 } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-8 md:px-20 py-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row
        items-center justify-between gap-5">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3
            text-white font-bold text-lg"
          >
            <div className="w-9 h-9 rounded-lg
            bg-blue-500/10 border border-blue-400/20
            flex items-center justify-center">
              <span className="text-blue-400">N</span>
            </div>

            Nadhif
          </a>


          {/* COPYRIGHT */}
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Nadhif. Built with React & Tailwind CSS.
          </p>


          {/* BACK TO TOP */}
          <a
            href="#home"
            className="flex items-center gap-2
            text-gray-400 hover:text-blue-400
            text-sm transition"
          >
            Back to top
            <div className="w-9 h-9 rounded-lg
            border border-white/10
            flex items-center justify-center">
              <ArrowUp size={17} />
            </div>
          </a>

        </div>


        {/* BOTTOM LINE */}
        <div className="mt-7 pt-5 border-t border-white/5
        flex items-center justify-center gap-2">

          <Code2 size={15} className="text-blue-400" />

          <p className="text-gray-600 text-xs">
            Designed & developed with curiosity.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;