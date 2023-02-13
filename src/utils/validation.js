import * as Yup from 'yup';
import { convertDecimal } from './utils';

const FIELD_REQUIRED = 'This field is required.';
const WHOLESALE_PRICE = 'The Wholesale Price should be more than the Sticker Price.';

export const priceSchema = Yup.object().shape({
  sticker_price: Yup.string().required(FIELD_REQUIRED),
  online_price: Yup.string().required(FIELD_REQUIRED),
  wholesale_price: Yup.string().when('sticker_price', ([sticker_price], schema) => {
    return schema.test({
      test: wholesale_price => sticker_price !== '' && +convertDecimal(wholesale_price) >= +convertDecimal(sticker_price),
      message: WHOLESALE_PRICE
    })
  }).required(FIELD_REQUIRED),
  required_down: Yup.string().required(FIELD_REQUIRED),
});
