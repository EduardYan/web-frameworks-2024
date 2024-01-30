import ChangeThemeButton from './ChangeThemeButton'

const Intro = () => {
  return (
    <header className='intro'>
      <div>
        <h1>Web frameworks 👨‍💻</h1>

        <ChangeThemeButton />

        <a
          href='https://github.com/EduardYan/web-frameworks-2024'
          rel='noreferrer'
          target='_blank'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={40}
            height={40}
            viewBox='0 0 16 16'
          >
            <path
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              d='M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1'
            />
          </svg>
        </a>

      </div>
      <p>
        Discover the <strong>web frameworks</strong> with the most trend and employability of 2024 📈
      </p>

    </header>
  )
}

export default Intro
