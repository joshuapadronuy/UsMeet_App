import ShareLinkStyles from "../../styles/ShareLink.module.css";

const ShareLink = ({ link }) => {


  return (
    <div className={ShareLinkStyles.rootContainer}>
        <div className={ShareLinkStyles.content}>
          <p>Copy the link here and share so that people can join in the poll</p>
          <p className={ShareLinkStyles.link}>{link}</p>
        </div>
    </div>
  )
}

export default ShareLink