import React from 'react'

export const renderField = ({
    input,
    label,
    type,
    meta: {touched, error, warning}
})=>(
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type = {type}/>
            {touched && 
                ((error && <span>{error}</span>)||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)
export const renderSelectField = ({ 
    input,
    label,
    type,
    meta: { touched, error }, children
 }) => (
    <div>
      <label>{label}</label>
      <div>
        <select {...input}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )