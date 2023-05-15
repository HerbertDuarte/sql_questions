"use client"
import { useParams } from 'next/navigation'
import api from '@/api'

export default function Page() {

  const params = useParams()
  const id = params.id

  // states
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  // get api with id
  useEffect(() => {
    api
      .get("/" +  {id})
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, []);

  return (
  <main className="min-h-container flex flex-col items-center justify-center pt-16 px-4">
    <h1>Olá</h1>
    <p>id: {id}</p>
  </main>
)}