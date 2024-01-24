const Framework = ({ img, href, name, description }) => {
  return (
    <article>
      <img src={img} alt={`${name} image`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={href} className='codepen-button' rel='noreferrer' target='_blank'><span>View</span></a>
    </article>
  )
}

export default Framework
