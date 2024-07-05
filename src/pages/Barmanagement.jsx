import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Barmanagement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Bar Management App</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <p>Bar Management App content goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Barmanagement;