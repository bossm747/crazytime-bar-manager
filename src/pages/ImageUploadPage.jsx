import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ImageUploadPage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    if (!selectedImage) {
      toast.error("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setImages([...images, data.imagePath]);
          toast.success("Image uploaded successfully!");
        } else {
          toast.error("Failed to upload image.");
        }
      })
      .catch(() => {
        toast.error("An error occurred while uploading the image.");
      });
  };

  const handleImageDelete = (imagePath) => {
    fetch(`/api/delete?imagePath=${encodeURIComponent(imagePath)}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setImages(images.filter(image => image !== imagePath));
          toast.success("Image deleted successfully!");
        } else {
          toast.error("Failed to delete image.");
        }
      })
      .catch(() => {
        toast.error("An error occurred while deleting the image.");
      });
  };

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Image Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="image">Select Image</Label>
            <Input type="file" id="image" onChange={handleImageChange} />
          </div>
          <Button onClick={handleImageUpload}>Upload Image</Button>
        </CardContent>
      </Card>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index}>
            <CardContent>
              <img src={image} alt={`Uploaded ${index}`} className="w-full h-auto mb-2" />
              <Button variant="destructive" onClick={() => handleImageDelete(image)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadPage;