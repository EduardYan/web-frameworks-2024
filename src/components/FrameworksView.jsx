import Framework from './Framework.jsx'

const FrameworksView = () => {
  return (
    <section className='frameworks'>
      <Framework img='/img/astro.webp' name='Astro' description="Astro powers the world's fastest websites, client-side web apps, dynamic API endpoints, and everything in-between." href='https://astro.build/' />

      <Framework img='/img/nextjs.webp' name='Next Js' description="Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds." href='https://nextjs.org/' />

      <Framework img='/img/react.webp' name='React' description='React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.' href='https://react.dev/' />

      <Framework img='/img/angular.webp' name='Angular' description='Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.' href='https://angular.io/' />
    </section>
  )
}

export default FrameworksView
