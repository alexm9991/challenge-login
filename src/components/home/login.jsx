
// Components
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// Icons
import { UserPlus } from "lucide-react"

export const LoginView = () => {
    return (
        <section className="flex items-center justify-center h-screen">
            <Card className="max-w-sm mx-8">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Portal Lucasian</CardTitle>
                    <CardDescription className="my-1">Ingresa tu correo electrónico y tu contraseña para acceder a tu cuenta</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input id="email" type="email" placeholder="usuario@dominio.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Iniciar sesión
                        </Button>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button variant='secondary' className="w-full">
                        <UserPlus /> Crear cuenta nueva
                    </Button>
                </CardFooter>
            </Card>
        </section>
    )
}
