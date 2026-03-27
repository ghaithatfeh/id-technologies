import { usePage } from "@inertiajs/react";
import { createContext, ReactNode, useState } from "react";

export const LocaleContext = createContext<string>("en");

const TranslatableInputsContext = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState(
        usePage().props.currentLocale as string,
    );

    const availableLocales = usePage().props.availableLocales as string[];

    return (
        <LocaleContext.Provider value={locale}>
            <div className="lang-btn-holder my-4 flex items-center justify-end">
                {availableLocales.map((lang, index) => (
                    <label
                        className="has-[:checked]:border-primar borderbg-primary lang-btn flex cursor-pointer items-center justify-center rounded-md border border-primary bg-white px-3 py-2 text-gray-900 has-[:checked]:bg-primary has-[:checked]:text-white dark:bg-dark-secondary dark:text-white"
                        key={index}
                    >
                        <input
                            type="radio"
                            className="sr-only border-primary"
                            value={lang}
                            checked={lang == locale}
                            onChange={() => {
                                setLocale(lang);
                            }}
                        />
                        <p className="text-sm font-medium">
                            {lang.toUpperCase()}
                        </p>
                    </label>
                ))}
            </div>
            {children}
        </LocaleContext.Provider>
    );
};

export default TranslatableInputsContext;
