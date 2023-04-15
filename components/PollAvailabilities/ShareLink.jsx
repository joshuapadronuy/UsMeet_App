import { useState } from "react";
import ShareLinkStyles from "../../styles/ShareLink.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Clipboard from "../../public/svgs/Clipboard";
import SvgContainer from "../UI/SvgContainer";

const ShareLink = ({ link }) => {
  const [hasCopied, setHasCopied] = useState(false)

  return (
    <div className={ShareLinkStyles.rootContainer}>
        <div className={ShareLinkStyles.content}>
          <p>Copy the link here and share so that people can join in the poll</p>
          <div className={ShareLinkStyles.linkContainer}>
            <p className={hasCopied ? ShareLinkStyles.copied : ShareLinkStyles.link}>{link}</p>
            <CopyToClipboard text={link} onCopy={() => setHasCopied(true)} >
              <div>
                <SvgContainer isClickable={true}>
                  <Clipboard />  
                </SvgContainer> 
              </div>
            </CopyToClipboard>
            {hasCopied ? <p>Copied</p> : <div />}
          </div>
        </div>
    </div>
  )
}

export default ShareLink