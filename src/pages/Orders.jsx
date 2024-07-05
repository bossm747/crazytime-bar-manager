import { Button } from "@/components/ui/button";

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <Button variant="primary" className="mb-4">Create New Order</Button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Items</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">12345</td>
            <td className="py-2 px-4 border-b">2023-10-01</td>
            <td className="py-2 px-4 border-b">Item 1, Item 2</td>
            <td className="py-2 px-4 border-b">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;