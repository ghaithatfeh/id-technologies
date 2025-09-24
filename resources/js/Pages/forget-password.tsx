import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import { asset } from "@/helper";
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
            <div className="flex flex-col my-5">
                <div className="flex justify-center items-center">
                    <h1 className="font-semibold text-3xl text-brand">
                        Forget Your Password ?
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-center mt-1 dark:text-white">
                        Enter Your Email So We Can Send You A Reset
                        Password Code
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
                    onChange={(e) =>
                        setData("email", e.target.value)
                    }
                    label="Email"
                    required={true}
                    type="email"
                />
            </Form>
        </PageCard>
    );
};

export default ForgetPassword;
