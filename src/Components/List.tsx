import React from 'react'

const List = ({ children }: React.PropsWithChildren) => {
  return (
    <ol>
      {children}
    </ol>
  )
}

export default List
