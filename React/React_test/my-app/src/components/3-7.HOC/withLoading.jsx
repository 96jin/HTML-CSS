import React from 'react'

export default function withLoading(Component) {
  const WithLoadingComponent = (props) => { 
    const [loading, setLoading] = React.useState(true)
  
    React.useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000)
      return () => clearTimeout(timer)
    },[])
  
    return (
      loading ? <p>Loading....</p> : <Component {...props}/>
    )
  }

  return WithLoadingComponent
}
