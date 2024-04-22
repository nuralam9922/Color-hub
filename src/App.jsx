import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<main className="container px-5 lg:px-14 bg-[#f3f3f3] min-h-screen mx-auto">
			<Navbar />
			<Outlet />
		</main>
	);
}

export default App;
