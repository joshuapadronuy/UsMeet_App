import SvgStyles from "../../styles/SvgContainer.module.css";


const SvgContainer = ({ children }) => {
  return (
    <div className={SvgStyles.container}>{children}</div>
  )
}

export default SvgContainer