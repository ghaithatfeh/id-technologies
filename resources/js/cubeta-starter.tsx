import AuthLayout from "@/Components/layouts/AuthLayout";
import DashboardLayout from "@/Components/layouts/Layout";
import ErrorBoundary from "@/Handlers/ErrorBoundry";
import FatalErrorPage from "@/Handlers/FatalError";
import { createInertiaApp } from "@inertiajs/react";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "../css/cubeta-starter.css";
import "./bootstrap";

const appName = import.meta.env.APP_NAME || "Laravel";

const authPages = [
    "dashboard/login",
    "dashboard/forget-password",
    "dashboard/reset-password-code-form",
    "dashboard/reset-password",
];

type PageWithLayout = React.ComponentType & {
    layout?: (page: React.ReactNode) => React.ReactNode;
};

createInertiaApp({
    title: () => `${appName} Dashboard`,
    resolve: async (name: any) => {
        const pages = import.meta.glob<{
            default: PageWithLayout;
        }>("./Pages/**/*.tsx", { eager: true });
        let page = pages[`./Pages/${name}.tsx`];

        if (!page) {
            throw new Error(`Page "${name}" not found`);
        }

        page.default.layout =
            !authPages.includes(name) && name.includes("dashboard")
                ? (page) => <DashboardLayout>{page}</DashboardLayout>
                : authPages.includes(name)
                  ? (page) => <AuthLayout>{page}</AuthLayout>
                  : (page) => page;

        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <App {...props} />
                </Suspense>
            </ErrorBoundary>,
        );
    },
    progress: {
        color: "#4B5563",
    },
}).catch((error) => {
    const el =
        document.getElementById("app") ||
        document.body.appendChild(document.createElement("div"));
    const root = createRoot(el);
    root.render(<FatalErrorPage error={error} />);
});

const dark =
    "dark" == window.localStorage.getItem("theme_mode") ? "dark" : "light";
const htmlTag = document.querySelector("html");
if (dark) {
    htmlTag?.classList.add("dark");
    htmlTag?.classList.remove("light");
} else {
    htmlTag?.classList.add("light");
    htmlTag?.classList.remove("dark");
}
