import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const initialInventory = [
  { id: 1, name: 'SYRUP GRAPE', quantity: 2.5, openingStock: '150 ml', closingStock: '1000 ml', total: '1150 ml' },
  { id: 2, name: 'ELDERFLOWER', quantity: 3, openingStock: '3', closingStock: '2100 ml', total: '2103 ml' },
  // Add more initial data here based on the provided images
];

const InventoryManagement = () => {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', quantity: '', openingStock: '', closingStock: '', total: '' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddItem = () => {
    setInventory([...inventory, { ...formData, id: inventory.length + 1 }]);
    setFormData({ name: '', quantity: '', openingStock: '', closingStock: '', total: '' });
    setIsDialogOpen(false);
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Inventory Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <Input
              placeholder="Search items..."
              value={searchTerm}
              onChange={handleSearch}
              className="max-w-xs"
            />
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="primary">Add New Item</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Inventory Item</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddItem}>
                  <div className="mb-4">
                    <Label htmlFor="name">Item Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="openingStock">Opening Stock</Label>
                    <Input
                      id="openingStock"
                      value={formData.openingStock}
                      onChange={(e) => setFormData({ ...formData, openingStock: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="closingStock">Closing Stock</Label>
                    <Input
                      id="closingStock"
                      value={formData.closingStock}
                      onChange={(e) => setFormData({ ...formData, closingStock: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="total">Total</Label>
                    <Input
                      id="total"
                      value={formData.total}
                      onChange={(e) => setFormData({ ...formData, total: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" variant="primary">Add Item</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Opening Stock</TableHead>
                <TableHead>Closing Stock</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map(item => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.openingStock}</TableCell>
                  <TableCell>{item.closingStock}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InventoryManagement;