import React from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import MaintenanceForm from './components/MaintenanceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="py-10">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Dashboard />
          <div className="mt-8">
            <MaintenanceForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;