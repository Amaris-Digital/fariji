import Header from '../components/header'
import useHeader from '../hooks/useHeader'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/config'

const Home = (): JSX.Element => {
  const navigate = useNavigate()
  if (!getToken()) navigate('/login')
  const { header, setHeader } = useHeader()
  useEffect(() => {
    setHeader('Home Page Header')
  }, [setHeader])

  return (
    <div>
      <Header id={1} name={header ?? 'This is the home page!'} />
    </div>
  )
}

export default Home
