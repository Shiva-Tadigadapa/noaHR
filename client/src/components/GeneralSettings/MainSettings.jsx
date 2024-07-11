import React, { lazy, Suspense, useState } from 'react';

// Lazy loading components
const General = lazy(() => import('./Options/General/General'));
const Profile = lazy(() => import('./Options/Profile/ProfilePage'));
const CareerPage = lazy(() => import('./Options/CareerPage/CareerPage'));
const Company = lazy(() => import('./Options/Company/CompanyDetails'));
const EmailTemplates = lazy(() => import('./Options/EmailTemplates/EmailTemplates'));
const Integrations = lazy(() => import('./Options/Integrations/IntegrationPage'));

const components = {
  General: General,
  Profile: Profile,
  CareerPage: CareerPage,
  Company: Company,
  EmailTemplates: EmailTemplates,
  Integrations: Integrations
};

const options = [
  { key: 'General', label: 'General' },
  { key: 'Profile', label: 'Profile' },
  { key: 'CareerPage', label: 'Career Page' },
  { key: 'Company', label: 'Company' },
  { key: 'EmailTemplates', label: 'Email Templates' },
  { key: 'Integrations', label: 'Integrations' }
];

const MainSettings = () => {
  const [selected, setSelected] = useState('General');
  const Component = components[selected];

  const handleSelect = (key) => {
    setSelected(key);
  };

  return (
    <div className="flex w-full py-8 items-start">
      <div className="w-1/4 sticky top-7 border rounded-2xl border-gray-300">
        <div className="p-4">
          <h1 className="text-xl font-semibold">Settings</h1>
          <ul className="mt-4">
            {options.map((option) => (
              <li
                key={option.key}
                onClick={() => handleSelect(option.key)}
                className={`cursor-pointer my-1 py-2 ${selected === option.key ? 'text-black shadow border border-black/20 px-3 bg-white rounded-lg' : 'hover:bg-zinc-700 rounded-lg transition-all hover:text-white px-3'}`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-3/4 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </div>
    </div>
  );
};

export default MainSettings;
