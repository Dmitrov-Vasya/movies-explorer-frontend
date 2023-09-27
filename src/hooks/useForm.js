import {useCallback, useState} from 'react';
import isEmail from 'validator/es/lib/isEmail';

//хук управления формой и валидации формы
export function useForm(initialValues = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = useCallback((event) => {
        const target = event.target;
        const {name, value} = target;

        if (name === 'name' && target.validity.patternMismatch) {
            target.setCustomValidity('Имя должно состоять из латиницы, кириллицы, пробела или дефиса');
        } else if (name === 'email' && !isEmail(value)) {
            target.setCustomValidity('Неправильный формат email');
        } else {
            target.setCustomValidity('');
        }

        setValues((prev) => ({...prev, [name]: value}));
        setErrors((prev) => ({...prev, [name]: target.validationMessage}));
        setIsFormValid(target.closest('form').checkValidity());
    }, []);

    const resetForm = useCallback(
        (newValues = initialValues, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsFormValid(newIsValid);
        },
        [initialValues],
    );

    return {values, handleChange, errors, isFormValid, resetForm};
}
