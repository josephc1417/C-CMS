import heroImage from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
            <div className="hero-title">
                  <h1>Contentful CMS</h1>
                  <p>
                        Pinterest lumbersexual af, +1 pork belly whatever solarpunk. IPhone shoreditch pinterest keffiyeh chartreuse drinking vinegar polaroid, pabst neutral milk hotel before they sold out tacos wolf. Vexillologist 8-bit scenester, pok pok enamel pin narwhal butcher hammock locavore forage celiac blackbird spyplane fixiefreegan. Sustainable XOXO pitchfork quinoa 
                  </p>
            </div>
            <div>
                  <img src={heroImage} alt="Hero Image" className="img"/>
            </div>
      </div> 
    </section>
  )
}

export default Hero
