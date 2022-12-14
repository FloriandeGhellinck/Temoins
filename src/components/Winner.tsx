import AboutmeTitle from './Title';
import Image from 'next/image';

const Winner = () => {
  return (
    <>
      <div className='h-screen w-screen bg-gray-100 flex flex-col font-poppins items-center pb-10 '>
        <div className='h-fit'>
          <AboutmeTitle title='WINNER' />
        </div>
        <div className='absolute mx-10 mb-40 mt-32'>
          <Image src='/temoinsPix.jpg' alt='image' width={500} height={300} />
        </div>
        <div className='relative flex flex-col w-full items-center h-4/6'>
          <div className='text-justify w-10/12 h-fit text-balck p-4 rounded-lg mt-7 align-middle '>
            <p className='text-3xl text-center'>Félicitations ! </p>
            {/* <p className='text-center'>Tu es mon frère 🤪</p> <br />
            <p className='text-center text-3xl'>Veux-tu être mon témoin ?</p> */}
          </div>
        </div>
        <div className='relative text-black font-bold mt-72 text-2xl flex flex-col text-center'>
          <span> Veux-tu être mon témoin ? </span>
        </div>
      </div>
    </>
  );
};

export default Winner;
