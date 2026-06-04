import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// Wrapper for testing individual pages
export function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <div className="p-8 bg-gray-100 min-h-screen">
          {children}
        </div>
      </I18nextProvider>
    </BrowserRouter>
  );
}