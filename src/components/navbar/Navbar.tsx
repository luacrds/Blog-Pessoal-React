import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          Blog Pessoal
        </Link>

        <div className="space-x-4">
          <Link to="/home" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/cadastro" className="hover:text-gray-300 transition-colors">
            Cadastro
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
