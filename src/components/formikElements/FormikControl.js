import React from 'react';
import Input from './input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';
import Checkbox from './Checkbox';

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props} />
        case 'textarea':
            return <TextArea {...props} />
        case 'select':
            return <Select {...props} />
        case 'radio':
            return <Radio {...props} />
        case 'checkbox':
            return <Checkbox {...props} />
        default:
            break;
    }
}

export default FormikControl;
