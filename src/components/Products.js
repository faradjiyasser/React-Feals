import ProductsCards from './ProductsCards'
import ProductsData from '../data/ProductsData'
const Products = () => {

  return (
    <div className="products">
        <div className="container">
            <div className="row">
                    <div className="landing__span col-12">
                            <h2>our products</h2>
                        </div>
                    <div className="col-12 justify">
                        <div className="products__h1 animate">
                            <h1>Something for everyone.</h1>
                        </div>
                    </div>
                    <div className="col-12 justify">
                        <div className="products__paragraph animate">
                            <p>Leveraging the power of cannabinoids to help you find relief and feel your best.</p>
                        </div>
                    </div>
                    
                {ProductsData.map((data)=>(
                    <ProductsCards image={data.image} icon={data.icon} title={data.title} paragraph={data.paragraph} link={data.link} rate={data.rate} review={data.reviews} price={data.price} key={data.id} />
                ))}

            </div>
        </div>
    </div>
  )
}

export default Products