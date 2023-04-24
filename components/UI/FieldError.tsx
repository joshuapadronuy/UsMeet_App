import FieldErrorStyles from "../../styles/FieldErrorStyles.module.css";

interface IProps {
  children: JSX.Element;
  message: string;
  hasError: boolean;
}

const FieldError = ({ children, message, hasError }: IProps) => {
  if (!hasError) {
    return <>{children}</>;
  }

  return (
    <div>
      {children}
      <div className={FieldErrorStyles.error}>{message}</div>
    </div>
  );
};

export default FieldError;
