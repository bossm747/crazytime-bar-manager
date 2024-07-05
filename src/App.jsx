import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Box, ClipboardList, Users, BarChart, Settings } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change layout to sidebar
import Dashboard from "./pages/Dashboard.jsx";
import Inventory from "./pages/Inventory.jsx";
import Orders from "./pages/Orders.jsx";
import Staff from "./pages/Staff.jsx";
import Reports from "./pages/Reports.jsx";
import SettingsPage from "./pages/Settings.jsx";
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Inventory",
    to: "/inventory",
    icon: <Box className="h-4 w-4" />,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <ClipboardList className="h-4 w-4" />,
  },
  {
    title: "Staff",
    to: "/staff",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <BarChart className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Home className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="orders" element={<Orders />} />
              <Route path="staff" element={<Staff />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
