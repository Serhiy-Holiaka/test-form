import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { NumericFormat } from 'react-number-format';

const InputCurrency = forwardRef(({ label, ...rest }, ref) => {
  return (
    <NumericFormat
      type='text'
      label={label}
      decimalScale='2'
      thousandSeparator=','
      decimalSeparator='.'
      fixedDecimalScale
      fullWidth
      customInput={TextField}
      variant='standard'
      inputRef={ref}
      {...rest}
    />
  );
});

InputCurrency.displayName = 'InputCurrency';

InputCurrency.propTypes = {
  label: PropTypes.string,
};

export default memo(InputCurrency);
