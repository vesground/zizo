import {FormEvent} from 'react'
import {useMutation} from '@tanstack/react-query'

import {calculateWordsTypes, ICalculateWordsTypesData} from '../api/calculateWordsTypes'

import '../styles/Home.css'

function Home() {
  const { data, isLoading, mutate } = useMutation({mutationFn: calculateWordsTypes})

  const submitHandler = async function(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData)

    mutate(data as unknown as ICalculateWordsTypesData)
  }

  return (
    <form className="card" onSubmit={submitHandler}>
      <p>Input Text</p>
      <textarea name="text" rows={6} disabled={isLoading} />
      <p>Results</p>
      <textarea name='statistic' rows={6} disabled={true} value={isLoading ? 'loading...' : (data || '')} />
      <input type="submit" disabled={isLoading} />
    </form>
  )
}

export default Home
