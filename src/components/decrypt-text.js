import React from 'react'
import { Field, reduxForm, change } from 'redux-form';
import { Header, Button, Form, Segment } from 'semantic-ui-react';

import SemanticFormField from './common/semantic-ui-form';
import { required, maxLength255 } from '../helpers/validation';
import { decodeText, decryptText } from 'cryptee-core';

const FormName = 'decryptTextForm';

class DecryptText extends React.Component {
    onDecryptText = async (values, dispatch) => {
        const decoded = decodeText(values.encryptedText)
        const result = await decryptText(decoded, values.key);
        dispatch(change(FormName, 'originalText', result))
    }
    render() {
        const { submitting, pristine, handleSubmit } = this.props;
        
        return <Segment raised>
            <Header as='h1'>Decrypt text</Header>
            <Form onSubmit={handleSubmit(this.onDecryptText)} autoComplete="off">
                <Field name="key" component={SemanticFormField} as={Form.Input} type="password" label="Key" validate={[required, maxLength255]} />
                <Field name="confirmKey" component={SemanticFormField} as={Form.Input} type="password" label="Confirm key" validate={[required, maxLength255]} />
                <Field name="encryptedText" component={SemanticFormField} as={Form.TextArea} type="text" label="Encrypted text" validate={required} />
                <Field name="originalText" component={SemanticFormField} as={Form.TextArea} type="text" label="Original text" readOnly />
                <Button primary loading={submitting} disabled={pristine || submitting}>Decrypt</Button>
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
    enableReinitialize: true,
    validate
})(DecryptText);