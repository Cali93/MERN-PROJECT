import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const SelectList = ({
  id,
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  options,
  helperText
}) => {
  const selectOptions = options.map(option => (
    <MenuItem key={option.label} value={option.value}>{option.label}</MenuItem>
  ))
  return (
      <div className="form-group">
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Select
            id={id}
            label={label}
            // inputProps={{
            //   placeholder: {placeholder},
            //   id: {id},
            // }}
            placeholder={placeholder}
            helperText={helperText}
            fullWidth
            type={type}
            className={classnames('validate', {
              'invalid': error
            })}
            name={name}
            value={value}
            onChange={onChange}
          >
            {selectOptions}
            {/* <MenuItem value={10}>Ten</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        {/* <Select
        id={id}
        label={label}
        multiline
        // InputLabelProps={{
        //   shrink: true,
        // }}
        placeholder={placeholder}
        // helperText="Full width!"
        fullWidth
        margin="normal"
        type={type}
        className={classnames('validate', {
          'invalid': error
        })}
        name={name}
        value={value}
        onChange={onChange}
      /> */}
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  // type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};
 
// SelectList.defaultProps = {
//   options: this.props.options[0]
// };

export default SelectList;
