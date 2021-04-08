import React from 'react'
// import { View, Text } from 'react-native'
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage'
import AppTextInput from './AppTextInput'


const AppFormField = ({name,...otherProps}) => {

    const {  setFieldTouched, handleChange,touched,errors} = useFormikContext();
    return (
        <>
        <AppTextInput
        onBlur={()=>setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
  <ErrorMessage   visible={touched[name]} error={errors[name]}/>
  </>
    )
}

export default AppFormField
