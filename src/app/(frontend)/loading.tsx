import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader className="animate-spin size-9" />
    </div>
  )
}

export default Loading
