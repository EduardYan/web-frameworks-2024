import { useState, useEffect } from 'react'

const ChangeThemeButton = () => {
  // eslint-disable-next-line no-undef
  const storedTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(storedTheme || 'light')

  useEffect(() => {
    document.body.className = theme
    // eslint-disable-next-line no-undef
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleClick = () => {
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
          defaultValue='light'
          onChange={handleClick}
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
