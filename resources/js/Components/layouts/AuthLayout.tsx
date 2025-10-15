import { asset } from "@/helper";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="my-20 grid grid-cols-3">
            <div className="col-start-2 col-end-3">
                <div className="flex flex-col items-center">
                    <div className="my-2 flex items-center gap-1">
                        <img
                            src={asset("images/02-Logo.svg")}
                            width={"50px"}
                        />
                        <h1 className="text-brand text-4xl font-bold">
                            ID Technologies
                        </h1>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
