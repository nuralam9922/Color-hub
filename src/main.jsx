import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Random from './pages/Random';
import Leaner from './pages/Leaner';
import Color from './pages/Color';
import ColorDetails from './pages/ColorDetails';
import ColorVisualize from './pages/ColorVisualize/ColorVisualize';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Random />} />
						<Route path="/color" element={<Color />} />
						<Route path="/leaner" element={<Leaner />} />
						<Route path="/color-visualize" element={<ColorVisualize />} />
						<Route path="/color-det/:color" element={<ColorDetails />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
