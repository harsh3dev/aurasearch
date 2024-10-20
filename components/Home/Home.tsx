import LogoutButton from "@/components/LogoutButton";
import { auth } from "@/auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"


export default async function HomeComponent () {
    const session = await auth();

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardContent className="flex flex-col items-center pt-6">
                {
                    session?.user ?
                <Avatar className="w-24 h-24">
                    <AvatarImage src={session.user.image || ""} alt={session.user.name || "img"} />
                    <AvatarFallback>{session.user.name ?? "IMG".split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                </Avatar>
                    : null
                }
                <h2 className="mt-4">
                    {
                    session?.user ? `Welcome, ${session.user.name}` : 'Welcome'
                    }
                </h2>
                <p className="text-sm text-muted-foreground">{ session?.user ? `Email: ${session.user.email}` : 'Please sign in' }</p>
            </CardContent>
            <CardFooter>
            {
            session?.user ? <LogoutButton/> : 
            <Link href="/signin">
                <Button variant="outline" className="w-full">
                    Sign In
                </Button>
            </Link>
            }
            </CardFooter>
        </Card>
    )
}