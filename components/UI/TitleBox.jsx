import TitleBoxStyle from '../../styles/TitleBox.module.css'

const TitleBox = ({ children }) => {
  return (
    <div className={TitleBoxStyle.container}>
        <div className={TitleBoxStyle.title}>
            <h1>{children}</h1>
        </div>
        <hr className={TitleBoxStyle.line} />
    </div>
  )
}

export default TitleBox