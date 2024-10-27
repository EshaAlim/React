import React from 'react'
import { useState, useEffect } from 'react'

export default function Github() {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch('https://api.github.com/users/eshaalim')
        const data1 = await response.json()
        setData(data1)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  }, [])
  return (
    <div className="bg-[#19534e] text-[#fff] min-h- p-7">

      <div>{data.bio}</div>
      <div>{data.login}</div>
      <div>{data.name}</div>
      <div>{data.blog}</div>
      <div>{data.company}</div>
      <div>{data.location}</div>
      <div>{data.user_view_type}</div>
      <div>{data.followers_url}</div>
      <div>{data.repos_url}</div>

    </div>

  )
}
export const fetchdata = async () => {
  try {
    const response = await fetch('https://api.github.com/users/eshaalim')
    const data1 = await response.json()
    return (data1)
  } catch (error) {
    console.log('error')
  }
  fetchdata()
}




