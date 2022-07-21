import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Partners = () => {

  return (
    <div className="container">
      <div className="partners">
      <div className="row">
          <div className="col-12">
            <h1 className="partners__h2">
              <Carousel autoPlay autoFocus infiniteLoop interval={2500} showArrows={false} showStatus={false} showIndicators={false} showThumbs={true} thumbWidth={230} width={1000} centerMode centerSlidePercentage={80}>
                <div>
                    <img src={"/assets/images/partners/avngers-logo-01.png"} alt="/assets/images/partners/avngers-logo-01.png" />
                    <p className="legend">Every bottle is quality tested to the Nth degree.</p>
                </div>
                <div>
                    <img src={"/assets/images/partners/byrdie-logo-01.png"} alt="/assets/images/partners/byrdie-logo-01.png" />
                    <p className="legend">One of the most effective at calming my anxiety.</p>
                </div>
                <div>
                    <img src={"/assets/images/partners/planksoft-logo-01.png"} alt="/assets/images/partners/planksoft-logo-01.png" />
                    <p className="legend">Designed to take the guesswork out of dosage.</p>
                </div>
                <div>
                    <img src={"/assets/images/partners/verge-logo-01.png"} alt="/assets/images/partners/verge-logo-01.png" />
                    <p className="legend">This stuff definitely works.</p>
                </div>
              </Carousel>
            </h1>
          </div>  
      </div>
      </div>
    </div>

  )
}

export default Partners;