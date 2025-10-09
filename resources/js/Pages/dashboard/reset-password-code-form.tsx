import Form from "@/Components/form/Form";
import Input from "@/Components/form/fields/Input";
import PageCard from "@/Components/ui/PageCard";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";

const ResetPasswordCodeForm = () => {
    const { post, setData, errors, processing } = useForm<{
        reset_password_code: string;
    }>();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("v1.web.public.validate.reset.password.code"));
    };
    return (
        <PageCard>
            <div className="my-5 flex flex-col">
                <div className="flex items-center justify-center">
                    <h1 className="text-brand text-center text-2xl font-semibold">
                        Please Check Your Email For An Email From Us !
                    </h1>
                </div>
                <div className="flex items-center justify-center">
                    <p className={"dark:text-white"}>
                        Enter the reset code sent within the email below
                    </p>
                </div>
            </div>
            <Form
                backButton={false}
                buttonText="Submit Code"
                onSubmit={onSubmit}
                processing={processing}
            >
                <Input
                    label="Password Reset Code"
                    name={"reset_password_code"}
                    required={true}
                    onChange={(e) => {
                        setData("reset_password_code", e.target.value);
                    }}
                    type="text"
                />
            </Form>
        </PageCard>
    );
};

export default ResetPasswordCodeForm;
