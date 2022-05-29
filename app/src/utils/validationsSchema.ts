import * as yup from 'yup';

export const validationsSchemaReg = yup.object().shape({
    email: yup.string().typeError('Position to be a string').required('Necessarily')
        .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
    password: yup.string().typeError('Position to be a string').required('Necessarily')
        .matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long'),
    repeat_password: yup.string().typeError('Position to be a string').required('Necessarily').matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long').when('password', {
        is: (val: string | any[]) => (val && val.length > 0),
        then: yup.string().oneOf(
            [yup.ref('password')],
            'Both password need to be the same'
        )
    })
});

export const validationsSchemaLog = yup.object().shape({
    email: yup.string().typeError('Position to be a string').required('Necessarily')
        .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
    password: yup.string().typeError('Position to be a string').required('Necessarily')
        .matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long')
});

