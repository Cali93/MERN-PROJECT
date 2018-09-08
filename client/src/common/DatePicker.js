import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const DatePicker = ({
  id,
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  helperText,
  disabled
}) => {
  return (
    <div className="form-group">
        <TextField
        id={id}
        label={label}
        InputLabelProps={{
          shrink: true,
        }}
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
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <FormHelperText style={{marginTop:'-7px',color:'red'}}>{error}</FormHelperText>}
    </div>
  );
};

DatePicker.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
 
DatePicker.defaultProps = {
  type: 'date'
};

export default DatePicker;