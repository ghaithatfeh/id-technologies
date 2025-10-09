import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const ResetPassword = () => {
    const { post, setData, errors, processing } = useForm<{
        reset_password_code: string;
        password: string;
        password_confirmation: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.public.reset.password"));
    };
    return (
        <PageCard>
            <div className="my-5 flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="text-brand text-3xl font-semibold">
                        You Have 1 Step Left
                    </h1>
                </div>
                <div className="flex items-center justify-center dark:text-white">
                    <p>Please enter your new password and your reset code</p>
                </div>
            </div>
            <Form
                onSubmit={onSubmit}
                processing={processing}
                backButton={false}
            >
                <div className="flex flex-col gap-5">
                    <Input
                        label="Password Reset Code"
                        name="reset_password_code"
                        type="text"
                        onChange={(e) => {
                            setData("reset_password_code", e.target.value);
                        }}
                        required={true}
                    />

                    <Input
                        label="New Password"
                        name="password"
                        type="password"
                        onChange={(e) => {
                            setData("password", e.target.value);
                        }}
                        required={true}
                    />

                    <Input
                        label="Confirm Password"
                        name="password_confirmation"
                        type="password"
                        onChange={(e) => {
                            setData("password_confirmation", e.target.value);
                        }}
                        required={true}
                    />
                </div>
            </Form>
        </PageCard>
    );
};

export default ResetPassword;
