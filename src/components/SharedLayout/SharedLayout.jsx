import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export default function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-centre" reverseOrder={false} />
    </div>
  );
}
