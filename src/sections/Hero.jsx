import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            🇪🇺 Оригінальні товари з Європи
          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">
            Європейські товари
            <br />
            для всієї родини
          </h1>

          <p className="mt-6 text-xl text-red-100">
            Солодощі, кава, напої,
            побутова хімія та товари для дому.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/catalog"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold inline-block transition"
            >
              Переглянути асортимент
            </Link>

            <a
              href="https://www.tiktok.com/@eurokoshyk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-6 py-3 font-bold hover:bg-white hover:text-red-600 transition"
            >
              TikTok
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}