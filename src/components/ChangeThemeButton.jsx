import { useState, useEffect } from 'react'

const ChangeThemeButton = () => {
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <label htmlFor='theme' className='theme'>
      <span className='theme__toggle-wrap'>
        <input
          id='theme'
          className='theme__toggle'
          type='checkbox'
          role='switch'
          name='theme'
          defaultValue='dark'
          onChange={handleThemeChange}
          checked={theme === 'dark'}
        />
        <span className='theme__fill' />
        <span className='theme__icon'>
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
          <span className='theme__icon-part' />
        </span>
      </span>
    </label>
  )
}

export default ChangeThemeButton
