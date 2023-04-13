import RadioBoxStyle from '../../../styles/RadioBox.module.css'
import { camelize } from '../../../util/camelize'

const RadioBox = ({ name, value, state, stateSetter }) => {

  return (
    <div className={state === value ? RadioBoxStyle.containerSelected : RadioBoxStyle.container}>
      <input type="radio" id={value} name={name} value={value} onChange={e=> stateSetter(e.target.value)} />
      <label for={value}>{camelize(value)}</label>
    </div>
  )
}

export default RadioBox