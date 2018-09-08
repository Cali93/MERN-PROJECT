import React from 'react'
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FormHelperText } from '@material-ui/core';

export const Switcher = ({
  id,
  name,
  checked,
  label,
  error,
  info,
  type,
  onChange,
  helperText,
  disabled
}) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel style={{ marginTop:'15px', textAlign:'center'}}
          control={
            <Switch
              name={name}
              checked={checked}
              onChange={onChange}
            />
          }
          label={label}
          />
          <FormHelperText style={{marginTop:'-10px'}}>{helperText}</FormHelperText>
      </FormGroup>
    </div>
  )
}

Switch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  error: PropTypes.object,
  helperText: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
}
