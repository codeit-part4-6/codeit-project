import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    required?: boolean;
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    isMoney?: boolean;
}

const INPUT_STYLES = {
    base: 'w-full px-4 py-2 border rounded-md text-lg focus:outline-none',
    focus: 'focus:ring-2 focus:ring-blue-500',
    placeholder: 'placeholder-gray-500',
    state: {
        enabled: 'hover:opacity-80',
        disabled: 'opacity-50 cursor-not-allowed',
    },
    error: 'border-red-500',
    label: 'block text-sm font-semibold mb-2',
    errorMessage: 'text-red-500 text-xs mt-1',
};

const Input: React.FC<InputProps> = ({
    label,
    error,
    required = false,
    value,
    onChange,
    className = '',
    isMoney = false,  // 금액 처리 여부
    type = 'text',
    ...props
}: InputProps) => {

    // 금액 포맷 함수 (콤마 추가)
    const formatMoney = (val: string | number): string => {
        const num = Number(val);
        if (isNaN(num)) return '';
        return num.toLocaleString(); // 천 단위 콤마 추가
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/,/g, '').replace(/[^\d]/g, ''); // 숫자만
        if (onChange) onChange({ ...e, target: { ...e.target, value } });
    };

    // inputClassNames에 조건 추가
    const inputClassNames = `
        ${INPUT_STYLES.base}
        ${error ? INPUT_STYLES.error : ''}
        ${INPUT_STYLES.focus}
        ${INPUT_STYLES.placeholder}
        ${className || ''} 
        ${props.disabled ? INPUT_STYLES.state.disabled : INPUT_STYLES.state.enabled}
        ${isMoney ? 'pr-12' : ''}  // 오른쪽 padding 추가 (원 기호 공간 확보)
    `;

    return (
        <div className="mb-4">
            {/* Label (Optional) */}
            {label && (
                <label htmlFor={props.name} className={INPUT_STYLES.label}>
                    {label}
                </label>
            )}
            {/* Input */}
            <div className="relative">
                <input
                    {...props}
                    required={required}
                    value={isMoney ? formatMoney(value) : value} // 금액 포맷
                    onChange={handleChange}
                    type={type}
                    className={inputClassNames}
                />
            </div>
            {/* Error message */}
            {error && <span className={INPUT_STYLES.errorMessage}>{error}</span>}
        </div>
    );
};

export default Input;
