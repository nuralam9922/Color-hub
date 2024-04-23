import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Route } from 'react-router-dom';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const queryClient = new QueryClient();

const App = React.lazy(() => import('./App'));
const Random = React.lazy(() => import('./pages/Random'));
const Leaner = React.lazy(() => import('./pages/Leaner'));
const Color = React.lazy(() => import('./pages/Color'));
const ColorDetails = React.lazy(() => import('./pages/ColorDetails'));
const ColorVisualize = React.lazy(() => import('./pages/ColorVisualize/ColorVisualize'));

const routes = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{ path: 'random', element: <Random /> },
				{ index: true, element: <Color /> },
				{ path: 'leaner', element: <Leaner /> },
				{ path: 'color-visualize', element: <ColorVisualize /> },
				{ path: 'color-det/:color', element: <ColorDetails /> },
			],
		},
	],

	{
		basename: '/color-hub-six/', // Replace with your actual base URL
	}
);

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={routes} />
		</QueryClientProvider>
	</React.StrictMode>
);
