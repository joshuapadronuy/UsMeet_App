const ShareLink = ({ link }) => {

    const date = new Date()
    console.log(date.toISOString());

  return (
    <div>
        <p>Copy the link here and share so that people can join in the poll.</p>
        <p>{link}</p>
        <p>{date.toISOString}</p>
    </div>
  )
}

export default ShareLink