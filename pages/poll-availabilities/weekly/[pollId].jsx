import { useRouter } from "next/router"
import ShareLink from "../../../components/PollAvailabilities/ShareLink"

const PollAvailability = () => {
  const router = useRouter()
  const { pollId } = router.query

  const linkToShare = `http://localhost:3000/poll-availabilities/weekly/${pollId}`

  return (
    <div>
      <p>PollAvailability {pollId}</p>
      <ShareLink link={linkToShare} />
    </div>
  )
}

export default PollAvailability