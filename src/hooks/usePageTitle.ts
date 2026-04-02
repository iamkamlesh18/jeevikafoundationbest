import { useEffect } from 'react'

export const usePageTitle = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
    
    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [title, description])
}
