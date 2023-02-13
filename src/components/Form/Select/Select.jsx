import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import classes from './Select.module.css';

const Select = forwardRef(({ optionsList, label, ...rest }, ref) => {
    return (
        <TextField
          id="standard-select-currency"
          select
          label={label}
          variant="standard"
          fullWidth
          inputRef={ref}
          className={classes.select}
          {...rest}
        >
          {optionsList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    );
});

Select.displayName = 'Select';

Select.propTypes = {
  label: PropTypes.string,
  optionsList: PropTypes.arrayOf(PropTypes.object)
};

export default memo(Select);
