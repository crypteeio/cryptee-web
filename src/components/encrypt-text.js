import React from 'react'
import { Header } from 'semantic-ui-react';
import { Field, reduxForm, change } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react';
import SemanticFormField from './common/semantic-ui-form';
import { required, maxLength255 } from '../helpers/validation';
import { encryptText } from 'cryptee-core';

const FormName = 'encryptTextForm';

class EncryptText extends React.Component {
    onEncryptText = async (values, dispatch) => {
        const result = await encryptText(values.originalText, values.key);
        dispatch(change(FormName, 'encryptedText', result))
    }
    render() {
        const { submitting, pristine, handleSubmit } = this.props;
        return <Segment raised>
            <Header as='h1'>Encrypt text</Header>
            <Form onSubmit={handleSubmit(this.onEncryptText)} autoComplete="off">
                <Field name="key" component={SemanticFormField} as={Form.Input} type="password" label="Key" validate={[required, maxLength255]} />
                <Field name="confirmKey" component={SemanticFormField} as={Form.Input} type="password" label="Confirm key" validate={[required, maxLength255]} />
                <Field name="originalText" component={SemanticFormField} as={Form.TextArea} type="text" label="Text" validate={required} />
                <Field name="encryptedText" component={SemanticFormField} as={Form.TextArea} type="text" label="Encrypted text" readOnly />
                <Button primary loading={submitting} disabled={pristine || submitting}>Encrypt</Button>
            </Form>
        </Segment>
    }
}

const validate = values => {
    const errors = {}
    if (values.key !== values.confirmKey) {
        errors.confirmKey = `Keys doesn't match`
    }
    return errors
}


export default reduxForm({
    form: FormName,
    validate,
    enableReinitialize: true
})(EncryptText);