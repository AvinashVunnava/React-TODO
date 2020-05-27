import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Typography as T } from '@material-ui/core'

import useStyles from './styles'

export default function TODO(props) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  function handleChange(e) {
    setValue(e.target.value)
  }

  function handleSubmit() {
    if (!!value) {
      const newTodos = todos.concat(value)
      setTodos(newTodos)
      setValue('')
    }
  }

  return (
    <div className={classes.container}>
      <T variant={'h2'}>todos</T>
      <TextField
        value={value}
        label={'What do you want to do ?'}
        variant={'outlined'}
        onChange={handleChange}
        className={classes.inputContainer}
        type={'input'}
      />
      <div className={classes.btnContainer}>
        <Button size={'medium'} variant={'outline'} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      {todos && todos.map((i) => <div>-&nbsp;{i}</div>)}
    </div>
  )
}
