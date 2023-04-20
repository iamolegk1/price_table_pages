import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PricePage } from './pages/price-page';
import { UsersPage } from './pages/users-page';

import { Layout } from './components/layout';

import { ROUTES } from './constants';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.price} element={<PricePage />} />
          <Route path={ROUTES.users} element={<UsersPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
