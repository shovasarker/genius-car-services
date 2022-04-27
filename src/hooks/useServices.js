import { useEffect, useState } from 'react'

const useServices = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const res = await fetch('https://gcs-server.herokuapp.com/services')
      const data = await res.json()
      setServices(data)
    }

    getServices()
  }, [])

  return [services, setServices]
}

export default useServices
