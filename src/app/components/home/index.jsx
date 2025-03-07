// Components
import { Button } from "@/app/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@ui/card";

// Icons
import { HomeIcon, LogOutIcon } from "lucide-react";

const handleLogout = () => {};

export const HomeView = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="max-w-sm px-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold flex  items-center justify-center gap-2">
            <HomeIcon />
            Bienvenido !
          </CardTitle>
          <CardDescription className="my-1 mx-auto">
            Hola, nombre@lucasian.com
          </CardDescription>
        </CardHeader>
        <CardContent className="m-auto">
          <Button onClick={handleLogout} variant="destructive">
            <LogOutIcon /> Cerrar sesión
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
