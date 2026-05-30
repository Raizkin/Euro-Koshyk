import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-20 px-4 md:px-6 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Euro Koshyk"
            className="h-12 w-12 rounded-full object-cover border"
          />

          <div>
            <h1 className="text-lg md:text-xl font-black text-red-600">
              Euro Koshyk
            </h1>

            <p className="text-xs text-zinc-500 hidden sm:block">
              Товари з Європи
            </p>
          </div>
        </Link>

        {/* ПК версия */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-zinc-600">
          <Link
            to="/"
            className="hover:text-red-600 transition"
          >
            Головна
          </Link>

          <Link
            to="/catalog"
            className="hover:text-red-600 transition"
          >
            Каталог
          </Link>

          <a
            href="#footer"
            className="hover:text-red-600 transition"
          >
            Контакти
          </a>
        </nav>

        <a
          href="https://www.tiktok.com/@eurokoshyk"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-bold transition"
        >
          TikTok
        </a>

        {/* Бургер */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-zinc-700"
        >
          ☰
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <nav className="flex flex-col p-4 gap-4 font-semibold">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600"
            >
              Головна
            </Link>

            <Link
              to="/catalog"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600"
            >
              Каталог
            </Link>

            <a
              href="#footer"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-600"
            >
              Контакти
            </a>

            <a
              href="https://www.tiktok.com/@eurokoshyk"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white px-4 py-3 rounded-xl text-center font-bold"
            >
              TikTok
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}