import {useParams} from 'react-router-dom';

const ProductDetailsPage = () =>
{
    const {id} = useParams();
    console.log('id is ===='+id);
    return <p>This is Product Details Page</p>
}

export default ProductDetailsPage;