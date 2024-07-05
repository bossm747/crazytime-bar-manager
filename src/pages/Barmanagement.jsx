import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Barmanagement = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Bar Management App</CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            id="JotFormIFrame-241865508577469"
            title="Bar Management App"
            allow="geolocation; microphone; camera"
            src="https://www.jotform.com/app/241865508577469?appEmbedded=1"
            style={{ height: "600px", width: "100%", border: 0 }}
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
};

export default Barmanagement;