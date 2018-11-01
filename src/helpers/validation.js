export const required = value => (value ? undefined : 'Input value is required');
export const maxLength = max => value => value && (value.length <= max) ? undefined : `Input value must have less than ${max + 1} characters`
export const maxLength255 = maxLength(255);