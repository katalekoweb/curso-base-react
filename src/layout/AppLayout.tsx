import React from 'react'
import './AppLayout.css'

interface IAppLayout {
    children: React.ReactNode
}

const AppLayout = (props: IAppLayout) => {
  return (
    <div className='layout-base'>
      <div className='layout-header'>
        <a href="#">Pagina Inicial</a>
        <a href="#">Usuario</a>
      </div>
      <hr className='layout-divider' />
      <div className='layout-content'>
        {props.children}
      </div>
    </div>
  )
}

export default AppLayout
