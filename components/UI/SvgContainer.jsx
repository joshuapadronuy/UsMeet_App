import SvgStyles from "../../styles/SvgContainer.module.css";


const SvgContainer = ({ children, isClickable }) => {
  return (
    <div className={isClickable ? SvgStyles.clickable : SvgStyles.container}>{children}</div>
  )
}

export default SvgContainer