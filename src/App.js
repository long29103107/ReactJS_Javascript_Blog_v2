import React, { Suspense } from 'react';
import Loader from 'components/client/Loader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutClient from 'features/client/Layout';
import LayoutAdmin from 'features/admin/LayoutAdmin';
import { SidebarProvider } from "contexts/SidebarContext";

const Home = React.lazy(() => import('./features/client/Home'));
const BlogDetail = React.lazy(() => import('./features/client/BlogDetail'));
const Dashboard = React.lazy(() => import('./features/admin/Dashboard'));
const BlogAdmin = React.lazy(() => import('./features/admin/Blog'));
const CategoryAdmin = React.lazy(() => import('./features/admin/Category'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='*' element={<LayoutClient />}>
              <Route path='/*' element={<Home />} />
              <Route path='blog/:id/*' element={<BlogDetail />} />
            </Route>

            
              <Route path='admin' element={<LayoutAdmin />}>
                <Route path='dashboard/*' element={<Dashboard />} />
                <Route path='blog/*' element={<BlogAdmin />} />
                <Route path='category/*' element={<CategoryAdmin />} />
              </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
