import React from 'react'

export const renderField = (field
//     {
//     input,
//     label,
//     placeholder,
//     type,
//     meta: {touched, error, warning}
// }
)=>(
    <div className="form-group">
        <label>
        {field.label}
        </label>
        <div>
           
            <input {...field.input} placeholder={field.placeholder} type = {field.type} className="form-control"/>
            {/* {field.touched && ((error && <span>{field.error}</span>) || 
            (warning && <span>{field.warning}</span>))} */}
        </div>
    </div>)

export const renderSelectField = ({ 
    input,
    label,
    type,
    meta: { touched, error }, children
 }) => (
    <div>
      <label>
      {label}
      </label>
      <div>
        <select {...input}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )