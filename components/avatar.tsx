import { AUTHOR } from "../lib/constants"

const Avatar = () => {
  return (
    <div className="flex items-center">
      <img src={AUTHOR.picture} className="w-12 h-12 rounded-full mr-4" alt={AUTHOR.name} />
      <div className="text-xl font-bold">{AUTHOR.name}</div>
    </div>
  )
}

export default Avatar
