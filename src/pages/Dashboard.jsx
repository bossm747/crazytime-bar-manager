const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to the CrazyTime RestoBar management dashboard!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Sales Summary</h2>
          <p>Placeholder for sales summary widget.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Inventory Status</h2>
          <p>Placeholder for inventory status widget.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Other Metrics</h2>
          <p>Placeholder for other metrics widget.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;