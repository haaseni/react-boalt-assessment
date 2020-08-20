import * as React from 'react'

const TextBox = (props) => {
    const [type] = React.useState(props.type)
    const [id] = React.useState(props.id)
    const [label] = React.useState(props.label)
    const [name] = React.useState(props.name)
    const [placeholder] = React.useState(props.placeholder)
    const [value, setValue] = React.useState('')
    const [maxlength] = React.useState(props.maxLength)

    const handleChange = (event) => {
        setValue(event.target.value)
        if(props.onChange) {
            props.onChange(event.target.value)
        }
    }

    return (
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} 
            placeholder={placeholder}
            value={value}
            onChange={handleChange} 
            maxLength={maxlength}
            required />
        </>
    )
}

export default TextBox