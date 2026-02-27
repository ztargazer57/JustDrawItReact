import { Link } from "react-router-dom"
import { PenTool, House, Clock9, Image, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <ul className="flex flex-col gap-6 bg-jdbrown items-center h-screen w-13 fixed py-3 z-50">

      <li className="text-3xl mb-5">
        <PenTool className="text-jdwhite h-7 w-7" />
      </li>

      <li className="mb-2">
        <Link to="/" className="rounded-xl" data-tip="Home">
          <House className="w-6 h-6 text-jdwhite" />
        </Link>
      </li>

      <li className="mb-2">
        <Link to="/challenge" className="rounded-xl" data-tip="Challenge">
          <Clock9 className="w-6 h-6 text-jdwhite" />
        </Link>
      </li>

      <li className="mb-2">
        <Link to="/gallery" className="rounded-xl" data-tip="Gallery">
          <Image className="w-6 h-6 text-jdwhite" />
        </Link>
      </li>

      <li className="mt-auto">
        <Link to="/settings" className="rounded-xl" data-tip="Settings">
          <Settings className="w-6 h-6 text-jdwhite" />
        </Link>
      </li>

    </ul>
  )
}