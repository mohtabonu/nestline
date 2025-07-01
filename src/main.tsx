import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import SellerPage from './seller';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<SellerPage />
	</StrictMode>
);
