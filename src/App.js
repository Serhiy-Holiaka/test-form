import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputCurrency from './components/Form/InputCurrency';
import Select from './components/Form/Select';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { priceSchema } from './utils/validation';
import { AUTO_MARKUP_OPTIONS } from './constants/constants';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      auto_markup: 'no',
      sticker_price: '',
      online_price: '',
      wholesale_price: '',
      required_down: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(priceSchema),
  });

  useMemo(() => {
    const subscription = watch((_, { name, type }) => {
        if (name === 'sticker_price' && type === 'change') {
            setValue('wholesale_price', '')
        }
    });

    return () => subscription.unsubscribe();
}, [watch, setValue]);

  const onSubmitForm = (data) => {
    console.log(data);
  };

  return (
    <section className='app'>
      <header className='app-header'>
        <img src={logo} className='app-logo' alt='logo' />
        <p>The Best Form ever. 😉</p>
      </header>
      <div className='app-form'>
        <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
          <div className='form-group'>
            <Controller
              name='auto_markup'
              control={control}
              defaultValue='no'
              render={({ field }) => {
                return (
                  <Select
                    label='Auto Markup?'
                    name='auto_markup'
                    optionsList={AUTO_MARKUP_OPTIONS}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='form-group'>
            <Controller
              name='sticker_price'
              control={control}
              defaultValue=''
              render={({ field }) => {
                return (
                  <InputCurrency
                    label='Sticker Price'
                    name='sticker_price'
                    required
                    error={Boolean(errors.sticker_price?.message)}
                    helperText={errors.sticker_price?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='form-group'>
            <Controller
              name='online_price'
              control={control}
              defaultValue=''
              render={({ field }) => {
                return (
                  <InputCurrency
                    label='Online Price'
                    name='online_price'
                    required
                    error={Boolean(errors.online_price?.message)}
                    helperText={errors.online_price?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='form-group'>
            <Controller
              name='wholesale_price'
              control={control}
              defaultValue=''
              render={({ field }) => {
                return (
                  <InputCurrency
                    label='Wholesale Price'
                    name='wholesale_price'
                    required
                    error={Boolean(errors.wholesale_price?.message)}
                    helperText={errors.wholesale_price?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='form-group'>
            <Controller
              name='required_down'
              control={control}
              defaultValue=''
              render={({ field }) => {
                return (
                  <InputCurrency
                    label='Required Down'
                    name='required_down'
                    required
                    error={Boolean(errors.required_down?.message)}
                    helperText={errors.required_down?.message}
                    {...field}
                  />
                );
              }}
            />
          </div>
          <div className='form-action'>
            <Button
              type='submit'
              variant='contained'
              disabled={!isValid}
            >
              Save & Close
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default App;
