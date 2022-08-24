
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
// import Contact from './Contact'

const Home = ({ data, setData }) => {
  console.log(data);

  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <ContactForm data={data} setData={setData} />
        <ContactFilter data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Home;
