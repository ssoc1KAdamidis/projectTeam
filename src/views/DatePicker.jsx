import React, { useState } from 'react';
import { useForm }  from 'react-hook-form'
import CustomDatepicker from './CustomDatePicker'; 
import './styles.css';


export default function App() {
  const defaultValues = {
  };
  const [data, setData] = useState(defaultValues);
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors, isValid, isDirty }
  } = useForm({ defaultValues, mode: 'all' });

  const onSubmit = value => {
    setData(value);
    console.log('submit triggered', defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label> </label>
          <CustomDatepicker
            name="dob"
            control={control}
            rules={{
              required: {
                value: true,
                message: ''
              }
            }}
            render={({ field: { ref, ...rest } }) => (
              <input type="date" {...rest} />
            )}
            isClearable
            onClear={() =>
              setValue('dob', '', {
                shouldValidate: true,
                shouldDirty: true
              })
            }
          />
          <div>{errors.dob?.message}</div>
        </section>
        <br />
      
        <div className="row">
          
          <button
            type="reset"
            onClick={() => {
              reset({
                ...defaultValues
              });
            }}
          >
            Reset
          </button>
          <br />
          <br />
        </div>
      </form>
     {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </>
  );
}