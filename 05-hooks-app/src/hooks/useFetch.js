import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
  
  const isMounted = useRef(true)
  const [state, setstate] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [isMounted])

  useEffect(() => {
    setstate({ data: null, loading: true, error: null })
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (isMounted.current) {
          setTimeout(() => {          
            setstate({
              loading: false,
              error: null,
              data
            })
          }, 2000);
        }
      })
  }, [ url ])

  return state
}
