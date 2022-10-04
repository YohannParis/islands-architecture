import React from 'react'

export default function Header () {
  React.useEffect(() => {
    console.log(`Header.jsx loaded`)
  })

  return (
    <>
        This <strong>Header</strong> is a seperate React app 
    </>
  )
}
