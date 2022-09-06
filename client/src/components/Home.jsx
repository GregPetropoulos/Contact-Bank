import Pagination from './Pagination';
import ContactFilter from './ContactFilter';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='container  mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <ContactFilter />
        <Pagination />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
