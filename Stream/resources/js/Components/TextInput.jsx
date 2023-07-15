import { forwardRef, useEffect, useRef } from 'react';
import '../../css/input.css';
export default forwardRef(function TextInput({
    type = 'text',
    className = '',
    name,
    value,
    isFocused = false,
    defaultValue,
    variant = "primary",
    placeholder,
    isError,
    autoComplete,
    required,
    onChange,
    ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={onChange} // Menggunakan onChange langsung sebagai properti
                placeholder={placeholder}
            />
        </div>
    );
});
