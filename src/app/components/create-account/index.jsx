// Utils
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UserCreateSchema,
  defaultValues,
} from "@/lib/schemas/user-register-schema";

// Hooks
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useRegisterUser from "@hooks/requests/useRegisterUser";

// Components
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@ui/card";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/app/ui/form";

// Icons
import { UserPlus } from "lucide-react";

export const CreateAccountView = () => {
  const { fetch, loading } = useRegisterUser();
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: yupResolver(UserCreateSchema),
    defaultValues,
  });

  const { control, handleSubmit, formState } = form;
  const { isValid, isDirty, isLoading } = formState;

  const onSubmit = async (data) => {
    try {
      const isUserCreated = await fetch(data);

      if (isUserCreated) {
        toast.success("Usuario creado!", {
          description: "Redirigiendo al login en 3 segundos ...",
        });

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        toast.error("Error creando el usuario");
      }
    } catch (error) {
      toast.error("Error creando el usuario");
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="max-w-sm mx-8">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Crear cuenta</CardTitle>
          <CardDescription className="my-1">
            Crea tu cuenta ingresando un correo electrónico y una contraseña
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              id="create-account-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Email Field */}
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

              {/* Password Field */}
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

              {/* Confirm Password Field */}
              <FormField
                className="space-y-2"
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmar contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <Button
            disabled={!isDirty || !isValid || isLoading || loading}
            form="create-account-form"
            type="submit"
            className="w-full"
          >
            <UserPlus /> Crear cuenta nueva
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
