import { Button } from "@/components/ui/button";

const Staff = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Staff</h1>
      <Button variant="primary" className="mb-4">Add New Staff Member</Button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Staff Name</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">Manager</td>
            <td className="py-2 px-4 border-b">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Staff;