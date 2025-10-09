import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const ForgetPassword = () => {
    const { post, setData, errors, processing } = useForm<{
        email: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.public.request.reset.password"));
    };
    return (
        <PageCard>
            <div className="my-5 flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="text-brand text-3xl font-semibold">
                        Forget Your Password ?
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className="mt-1 text-center dark:text-white">
                        Enter Your Email So We Can Send You A Reset Password
                        Code
                    </p>
                </div>
            </div>
            <Form
                onSubmit={onSubmit}
                processing={processing}
                backButton={false}
                buttonText="Send Code"
            >
                <Input
                    name={"email"}
                    onChange={(e) => setData("email", e.target.value)}
                    label="Email"
                    required={true}
                    type="email"
                />
            </Form>
        </PageCard>
    );
};

export default ForgetPassword;
