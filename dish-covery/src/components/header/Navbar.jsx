// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
      <h1 className="text-xl font-bold text-orange-500">RecipeFinder</h1>
      <ul className="flex gap-6 text-gray-700">
        <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">About</li>
        <li className="hover:text-orange-500 cursor-pointer">My-Recipe</li>
        <li className="hover:text-orange-500 cursor-pointer">Testimonials</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
