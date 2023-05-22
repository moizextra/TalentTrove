import Image from 'next/image';
import {IoMdArrowBack} from 'react-icons/io';

const JobDetail = () => {
  return (
    <section>
      <button className='flex items-center p-3 rounded-xl backbtn'>
        <IoMdArrowBack />
        back
      </button>

      <div className='mt-5 flex flex-col jobdetailbg p-4 items-center'>
        <div>
          <Image
            src="/assets/images/jobdetailbg.jpg"
            className='rounded-t-lg border-slate-50 h-40'
            alt="hi moiz"
            width={700}
            height={100}
          /></div>
       <div className='flex justify-between'>
       <div className="flex items-center justify-between mt-8">
<img src={"https://fintech.maharashtra.gov.in/cdn/about/Fintech-mumbai-og.png"} className="h-14 w-16 border-4 border-white-500  mr-3"alt="" srcset="" />
    <div className='flex flex-col '>
      <span className='font-bold'>React  dev </span>
      <span className='text-gray-500'>Moiz Sheraz Posted: 1 day ago</span>
    </div>
</div>
    </div>
      
        <div>
            {/* Boxes */}
        </div>
        <div>
            {/* description */}
        </div>
        <div>
            {/* Responsibilties */}
        </div>
        <div>
            {/* QUALIFICATION */}
        </div>
        </div>
    </section>
  );
};

export default JobDetail;
