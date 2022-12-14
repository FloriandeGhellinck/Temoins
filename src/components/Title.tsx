const AboutmeTitle = (props: any) => {
  return (
    <div className='flex items-center my-1 '>
      <div className='bg-gradient-to-r from-embie-yellow-500 to-embie-orange-600 w-fit my-5 -skew-y-3  '>
        {' '}
        <span className='mx-3 text-5xl text-white content-center'>
          {' '}
          {props.title}
        </span>
      </div>
    </div>
  );
};
export default AboutmeTitle;
