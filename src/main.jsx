import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router-dom';
import Random from './pages/Random.jsx';
import { RouterProvider } from 'react-router-dom';
import Leaner from './pages/Leaner.jsx';
import Color from './pages/Color.jsx';
import ColorDetails from './pages/ColorDetails.jsx';
import ColorVisualize from './pages/ColorVisualize/ColorVisualize.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Random />,
			},
			{
				path: '/color',
				element: <Color />,
			},
			{
				path: '/leaner',
				element: <Leaner />,
			},
			{
				path: '/color-visualize',
				element: <ColorVisualize />,
			},
			{
				path: '/color-det/:color',
				element: <ColorDetails />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
