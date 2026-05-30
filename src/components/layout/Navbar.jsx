import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.jpg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Euro Koshyk"
            className="h-14 w-auto border rounded-full object-cover"
          />

          <div>
            <h1 className="text-xl font-black text-red-600">
              Euro Koshyk
            </h1>

            <p className="text-xs text-zinc-500">
              Товари з Європи
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-8 font-semibold text-zinc-600">
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
  onClick={() => {
    document.getElementById("footer")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="cursor-pointer hover:text-red-600 transition"
>
  Контакти
</a>
        </nav>

        <a
          href="https://www.tiktok.com/@eurokoshyk"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-red-600 px-5 py-2 font-bold text-white hover:bg-red-700 transition"
        >
          TikTok
        </a>

      </div>
    </header>
  );
}