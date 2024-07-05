import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Barmanagement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Bar Management App</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-0">
          <iframe
            id="JotFormIFrame-241865508577469"
            title="Bar Management App"
            allow="geolocation; microphone; camera"
            src="https://www.jotform.com/app/241865508577469?appEmbedded=1"
            className="w-full h-full"
            style={{ border: 0, margin: 0, padding: 0 }}
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
};

export default Barmanagement;