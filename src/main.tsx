import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { LanguageProvider } from './seller/auth/language-context';
import { MyRouter } from './seller/routes';
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LanguageProvider>
			<MyRouter />
		</LanguageProvider>

	</StrictMode>
);
