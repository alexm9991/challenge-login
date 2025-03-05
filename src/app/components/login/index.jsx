// Utils
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/schemas/login-schema";

// Components
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@ui/card";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/app/ui/form";

// Icons
import { UserPlus } from "lucide-react";

export const LoginView = () => {
  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { control, handleSubmit, formState } = form;
  const { isLoading } = formState;

  const onSubmit = (data) => {};

  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="max-w-sm mx-8">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Portal Lucasian</CardTitle>
          <CardDescription className="my-1">
            Ingresa tu correo electrónico y tu contraseña para acceder a tu
            cuenta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="login-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                className="space-y-2"
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="usuario@dominio.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                className="space-y-2"
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                form="login-form"
                type="submit"
                className="w-full"
              >
                Iniciar Sesión
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Button asChild variant="secondary" className="w-full">
            <Link href="/create-account">
              <UserPlus /> Crear cuenta nueva
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
