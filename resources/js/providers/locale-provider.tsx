import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export const LOCALE_STORAGE_KEY = "locale";
const LocalizationProvider = ({ children }: { children: ReactNode }) => {
    const {
        i18n: { changeLanguage },
    } = useTranslation();
    useEffect(() => {
        let locale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
        if (!locale) {
            locale = "en";
        }

        changeLanguage(locale);
        window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }, []);

    useEffect(() => {
        const locale = window.localStorage.getItem(LOCALE_STORAGE_KEY) ?? "en";
        const el = document.querySelector("html");
        if (!el) {
            return;
        }
        el.setAttribute("lang", locale);
        el.setAttribute("dir", locale == "ar" ? "rtl" : "ltr");
    });
    return <>{children}</>;
};

export default LocalizationProvider;
