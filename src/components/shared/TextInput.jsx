import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export const TextInput = ({ input, meta, name, required = true, ...rest }) => {
  return (
    <TextField
      type="text"
      {...input}
      autoComplete="off"
      label={name}
      required={required}
      error={meta.error && meta.touched}
      helperText={meta.touched && meta.error}
      size="small"
      fullWidth
      margin="normal"
      {...rest}
    />
  );
};

TextInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};
