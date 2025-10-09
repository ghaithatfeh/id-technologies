import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import { Link, useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const Login = () => {
    const { post, setData, errors, processing } = useForm<{
        email: string;
        password: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("v1.web.public.login"));
    };

    return (
        <PageCard>
            <div className="my-5 flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="text-brand text-3xl font-semibold">
                        Welcome Back
                    </h1>
                </div>
                <div className="flex items-center justify-center dark:text-white">
                    <p>Please Login To Your Account</p>
                </div>
            </div>
            <Form
                onSubmit={onSubmit}
                processing={processing}
                buttonText="Login"
                backButton={false}
            >
                <div className="my-5 flex w-full flex-col gap-5">
                    <Input
                        name="email"
                        onChange={(e) => setData("email", e.target.value)}
                        label="Email"
                        required={true}
                        type="email"
                    />

                    <Input
                        name="password"
                        onChange={(e) => setData("password", e.target.value)}
                        label="Password"
                        required={true}
                        type="password"
                    />
                </div>
                <p className="text-lg dark:text-white">
                    Forgot Your Password ?{" "}
                    <span>
                        <Link
                            href={route(
                                "v1.web.public.request.reset.password.page",
                            )}
                            className="hover:text-primary text-blue-700"
                        >
                            Reset Your Password
                        </Link>
                    </span>
                </p>
            </Form>
        </PageCard>
    );
};

export default Login;
