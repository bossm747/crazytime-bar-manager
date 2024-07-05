import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ImageUploadPage = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      toast.error("Please select a file to upload.");
      return;
    }

    const newImage = URL.createObjectURL(selectedFile);
    setImages([...images, newImage]);
    setSelectedFile(null);
    toast.success("Image uploaded successfully!");
  };

  const handleDelete = (image) => {
    setImages(images.filter(img => img !== image));
    toast.success("Image deleted successfully!");
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Image Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="file-upload">Upload Image</Label>
            <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="mb-2"
            />
            <Button onClick={handleUpload}>Upload</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Uploaded ${index}`} className="w-full h-auto rounded-md" />
                <Button
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={() => handleDelete(image)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageUploadPage;