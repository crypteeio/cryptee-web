import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components'

const ErrorMessageContainer = styled.small`
  color: #9F3A38;
`

export default class SemanticFormField extends React.Component {
  handleChange = (e, { value }) => this.props.input.onChange(value)

  render() {
    const { input, type, label, placeholder, meta: { touched, error }, as: As = Input, ...props } = this.props;
    const errorMessage = <ErrorMessageContainer>
      <Icon name="warning" />
      {error}
    </ErrorMessageContainer>;

    const isError = touched && error && error.length > 0

    return (
      <Form.Field error={isError}>
        <As {...props} {...input} value={type !== "file" ? input.value : undefined} type={type} label={label} placeholder={type !== "file" ? placeholder : ""} onChange={this.handleChange} />
        {isError && errorMessage}
      </Form.Field>
    );
  }
}

SemanticFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.object
};