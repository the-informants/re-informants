import React from 'react'

export const renderField = (
    {
    input,
    label,
    placeholder,
    type,
    meta: {touched, error, warning}
}
)=>(
    <div className="form-group">
        <label>
        {label}
        </label>
        <div>
           
            <input {...input} placeholder={placeholder} type = {type} className="form-control"/>
            {touched && ((error && <span>{error}</span>) || 
            (warning && <span>{warning}</span>))}
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