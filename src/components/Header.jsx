import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Jbw Comercio de Alimentos - Pizza A Bessa</h1>
        <span className="ml-4 text-sm">CNPJ: 05.258.526/0001-90</span>
      </div>
      <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">LOGIN</a>
    </header>
  );
};

export default Header;

