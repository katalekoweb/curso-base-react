import React from 'react'
import PageLayout from '../shared/page-layout/PageLayout'
import { useParams, useSearchParams } from 'react-router'

const Detail = () => {

    const { id } = useParams() // route params
    const [searchParams] = useSearchParams()
    // query params

  return (
    <PageLayout title='Detalhes'>
      Detalhes {id} { searchParams.get('label') }
    </PageLayout>
  )
}

export default Detail
