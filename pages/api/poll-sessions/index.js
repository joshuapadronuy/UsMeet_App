import clientPromise from "../../../lib/mongodb";

export const getPollSessions = async () => {
    const mongoClient = await clientPromise
    const pollSessions = await mongoClient.db().collection('PollSessions').find().toArray()
    return pollSessions
}

const handler = async (req, res) => {
    const pollSessions = await getPollSessions()
    res.status(200).json({ pollSessions })
}
  
export default handler