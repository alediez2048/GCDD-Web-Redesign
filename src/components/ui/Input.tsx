import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, className = '', ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label className="block text-caption text-basalt/60 uppercase">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full bg-basalt/5 border-none p-4 outline-none focus:ring-1 focus:ring-bronze transition-all ${className}`}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, className = '', rows = 4, ...props }, ref) => {
        return (
            <div className="space-y-2">
                {label && (
                    <label className="block text-caption text-basalt/60 uppercase">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    rows={rows}
                    className={`w-full bg-basalt/5 border-none p-4 outline-none focus:ring-1 focus:ring-bronze transition-all resize-none ${className}`}
                    {...props}
                />
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
