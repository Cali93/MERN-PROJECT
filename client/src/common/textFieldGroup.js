import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const TextFieldGroup = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  info,
  type,
  helperText,
  disabled
}) => {
  return (
    <div className="form-group">
        <TextField
        id={id}
        label={label}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        placeholder={placeholder}
        helperText={helperText}
        fullWidth
        margin="normal"
        type={type}
        className={classnames('validate', {
          'invalid': error
        })}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <FormHelperText style={{marginTop:'-7px',color:'red'}}>{error}</FormHelperText>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};
 
TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
