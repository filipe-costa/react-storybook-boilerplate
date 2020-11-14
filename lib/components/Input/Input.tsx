import React, {useState, FC, ChangeEvent} from 'react'

export interface IInputProps {
  label: string
}

export const Input: FC<IInputProps> = ({label}) => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <label>
      {label}
      <input data-testid="input-testid" value={value} onChange={handleChange} />
    </label>
  )
}