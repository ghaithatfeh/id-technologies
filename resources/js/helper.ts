import { MiddlewareProps } from "@/types";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const asset = (path: string) => {
    if (path.startsWith("/")) {
        path = path.replace("/", "");
    }

    return `${usePage<MiddlewareProps>().props.asset}${path}`;
};

export function getNestedPropertyValue(object: any, path: string): any {
    const properties = path.split(".");
    let value = object;
    for (const property of properties) {
        if (value?.hasOwnProperty(property)) {
            value = value[`${property}`];
        } else {
            return undefined;
        }
    }
    return value;
}

export const swal = withReactContent(Swal);

export const getLocale = (): string => {
    const { currentLocale } = usePage<MiddlewareProps>().props;
    return currentLocale ?? "en";
};

export function arrayUnique<T>(array: T[], key: keyof T): T[] {
    const map = new Map<T[keyof T], T>();

    for (const item of array) {
        const propertyValue = item[key];
        if (!map.has(propertyValue)) {
            map.set(propertyValue, item);
        }
    }
    return Array.from(map.values());
}
