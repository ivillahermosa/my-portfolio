import DOMPurify from "isomorphic-dompurify";

export function sanitizeInput(value: string): string {
    return DOMPurify.sanitize(value);
}