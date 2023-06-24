import React ,{useState, useEffect} from 'react'
import PeriShowcase from '../../components/PeriShowcase/PeriShowcase'
import { useParams } from 'react-router-dom'
import { products } from '../../lib/ProductList/ProductList'

function ProductDetails() {
    const {id} = useParams()

    const [term, setTerm] = useState([]);
    const [loading ,setLoading] = useState(true)
  const [newImage, SetNewImage] = useState("");

  //console.log(mySelectedColor

  useEffect(() => {
    setTerm(products.find((item) => item._id === id));
    setLoading(false);
  }, [
    id,
     products, 
   //  setMySelectedColor, 
    // setTerm
    ]);


    console.log(term);
    if(loading){
        return(
            <>
            <h1>Loading</h1>
            </>
        )
    }else{
      return (
    <div>

    <PeriShowcase
    title={term.title}
    name={term.title}
    />

    <div className="container">
    <div className="row">
    <div className="col l6">
    <div>
    <img className='responsive-img' src={term.src} alt="" />
    </div>
    </div>
    <div className="col l6">
    <div>
    <h5>{term.title}</h5>
    </div>
    </div>
    </div>
    </div>
    
    </div>
  )   
    }
 
}

export default ProductDetails
