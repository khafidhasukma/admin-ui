import "./App.css";

function App() {
  return (
    <div className="p-6 space-y-8">
      {/* LATIHAN 1 - NAVBAR */}
      LATIHAN 1
      <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Kiri - Logo */}
        <div className="font-bold text-lg mb-2">MyLogo</div>

        {/* Kanan - Menu */}
        <ul className="flex max-md:flex-col gap-4 md:items-center">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      {/* LATIHAN 2 - GRID GALERI */}
      LATIHAN 2
      <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
        <img src="https://www.placehold.co/200x200" alt="Gambar Galeri" className="h-full md:h-48" />
      </div>
      <hr />
      {/* LATIHAN 3 - PRICING TABLE */}
      LATIHAN 3
      <div className="p-4 text-center grid md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-6 rounded">
          Basic
          <br />
          Rp 50.000
        </div>

        <div className="bg-blue-200 p-6 rounded transform scale-105 shadow-md">
          Pro
          <br />
          Rp 100.000
        </div>

        <div className="bg-gray-200 p-6 rounded">
          Premium
          <br />
          Rp 200.000
        </div>
      </div>
      <hr />
      {/* LATIHAN 4 - DASHBOARD LAYOUT */}
      LATIHAN 4
      <div className="min-h-screen grid grid-cols-12 gap-2">
        <header className="bg-gray-300 p-4 col-span-12">Header</header>
        <aside className="bg-gray-200 p-4 col-span-12 md:col-span-3">Sidebar</aside>
        <main className="bg-white p-4 border col-span-12 md:col-span-9">Content</main>
        <footer className="bg-gray-300 p-4 col-span-12">Footer</footer>
      </div>
      <hr />
      {/* LATIHAN 5 - CARD PRODUCT */}
      LATIHAN 5
      <div className="p-4 border flex flex-col max-md:text-center md:flex-row items-center gap-4">
        <img src="https://www.placehold.co/80x80" alt="Gambar Produk" className="h-20 w-20" />
        <div>
          <h3 className="font-bold">Nama Produk</h3>
          <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
        </div>
      </div>
    </div>
  );
}

export default App;
