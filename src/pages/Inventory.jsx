import { Button } from "@/components/ui/button";

const Inventory = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Inventory</h1>
      <Button variant="primary" className="mb-4">Add New Item</Button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Item Name</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Placeholder Item</td>
            <td className="py-2 px-4 border-b">10</td>
            <td className="py-2 px-4 border-b">In Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;