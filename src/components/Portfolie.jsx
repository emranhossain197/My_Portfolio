import '../assets/css/Portfolie.css'
import { Data } from '../assets/Data';
import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai'

const Portfolie = () => {
    const [action, setAction] = useState(1)
    const ProductArr = []

    for (let i = 0; i < Data.length; i++) {
        if (i === 6) break;
        ProductArr.push(Data[i])
    }
    const [product, setProduct] = useState(ProductArr)
    const filterItem = (cateItem, event) => {
        setAction(event)

        if (cateItem === 'All') {
            setProduct(ProductArr)
        } else {

            const fillterProduct = Data.filter(item => item.categorie === cateItem)
            setProduct(fillterProduct)
        }

    }
   

    return (
        <div id='portfolie' className="Portfolie_contant">
            <h1 className='contant_title'>Creative <span>Portfolio</span></h1>
            <p>Check out my latest creative works. I have done a lot of work for my local and international clients. Here is a shortlist of my newly designed websites.</p>
            <div className="fillter_button ">
                <ul>
                    <li className={action === 1 ? 'categorie-active-button' : null} onClick={() => filterItem('All', 1)}>All</li>
                    <li className={action === 2 ? 'categorie-active-button' : null} onClick={() => filterItem('e-commerce', 2)}>E-commerce</li>
                    <li className={action === 3 ? 'categorie-active-button' : null} onClick={() => filterItem('PSD', 3)}>PSD to HTML</li>
                </ul>
            </div>
            <div className="portfolie_container">
                {product.map(item => (
                    <div className='is-animation '>
                        <div className='portfolie_item'>
                            <img className='.image-scroll' src={item.Image} alt={item.categorie} />
                        </div>
                        <div className='product_link'> <span>{item.name}</span> <a target='_black' href={item.links}><AiOutlineLink /></a></div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Portfolie;