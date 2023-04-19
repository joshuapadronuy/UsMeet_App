import TitleBoxStyle from "../../styles/TitleBox.module.css";

interface IProps {
  children: string;
}

const TitleBox = ({ children }: IProps) => {
  return (
    <div className={TitleBoxStyle.container}>
      <div className={TitleBoxStyle.title}>
        <h1>{children}</h1>
      </div>
      <hr className={TitleBoxStyle.line} />
    </div>
  );
};

export default TitleBox;
