import data from '../../../public/assets/data/c.json'
import Category from '../Category/Category';

const Categories = () => {


     
            
        
        
    
    return (
        <>
        <div className='text-center mt-32 '>
            <h2 className='font-bold text-5xl mb-8'>Job Category List</h2>
            <p className='text-[#757575] font-medium text-[18px] '>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className='grid grid-cols-4 mt-10 mb-48 '>
        {
            
            data.map(data => <Category key={data.index} data={data}></Category> )
            
        }
        </div>
        </>
    );
};

export default Categories;