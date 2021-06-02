import { useState } from 'react'

import TextField from '@material-ui/core/TextField'

function TodoForm({ onSave }) {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSave(value)
        setValue('')
      }}
    >
      <TextField
        label="Add todo"
        margin="normal"
        variant="filled"
        fullWidth={true}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </form>
  )
}

export default TodoForm;