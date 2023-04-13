import RadioFormStyle from '../../../styles/RadioForm.module.css'
import RadioBox from './RadioBox'


const RadioForm = ({radioName, state, stateSetter, selections}) => {

  return (
    <div className={RadioFormStyle.rootContainer}>
        {Object.keys(selections).map((selection) => {
            return <RadioBox name={radioName} value={selection} state={state} stateSetter={stateSetter}/>
        })}
    </div>
  )
}

export default RadioForm