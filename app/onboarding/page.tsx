import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "../components/SubmitButtons";

export default function Onboarding() {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center">
            <Card className="max-w-sm mx-auto">
                <CardHeader>
                    <CardTitle className="text-xl">
                        You are almost finished !
                    </CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="flex flex-col gap-2">
                                <Label>First Name</Label>
                                <Input type="text" placeholder="John" />
                            </div>
                            <div className="grid gap-2">
                                <Label>Last Name</Label>
                                <Input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label>Adress</Label>
                            <Input type="text" placeholder="1234 Main St" />
                        </div>


                        <SubmitButton text="Finish onboarding!" />
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}