import Image from 'next/image';
import {IoMdArrowBack} from 'react-icons/io';

const JobDetail = () => {
  return (
    <section>
      <button className='flex items-center p-3 rounded-xl backbtn'>
        <IoMdArrowBack />
        back
      </button>
{/* // detailcontainer */}
      <div className='mt-5 flex flex-col relative jobdetailbg p-10 items-center'>
        <div>
          <Image
            src="/assets/images/jobdetailb.jpg"
            className='rounded-t-lg border-slate-50 h-40'
            alt="hi moiz"
            width={700}
            height={100}
          />
          </div>
       <div className="flex  flex-col justify-center absolute  left-12 top-36 items-end mt-8 ">
<img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80" className="h-14 w-16 border-4 border-white-500  mr-3"alt="" srcset="" />
</div>
    <div className='flex  mt-12  justify-between  w-full items-center'>
      <div className="flex flex-col  ml-2">
      <span className='font-bold'>React  dev </span>
      <span className='text-gray-500'>Moiz Sheraz Posted: 1 day ago</span>
      </div>
      <div className='mr-4'> 
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Apply Now</button>
      </div>
    </div>
      
        <div className='flex employyinfo mt-5 justify-around w-full p-5'>
           <div>
            Experience<br/><span className='font-semibold'>2 Years</span>
           </div>
           <div>
           Work Level<br/><span className='font-semibold'>Senoir Level</span>
           </div>
           <div>
           Employy Type<br/><span className='font-semibold'>Part Time</span>
           </div>
           <div>
           Offer Salary<br/><span className='font-semibold'>TBD</span>
           </div>
        </div>
        <div className='mt-7'>
            <span className='font-semibold mb-4' >About the Job</span><br/><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem libero rem, eligendi animi reiciendis dolorem vel similique quae nostrum quos id! Nostrum necessitatibus id, deserunt alias placeat eius commodi. Vitae, unde alias. Non fugit commodi id similique, neque reiciendis sapiente sed unde cupiditate voluptates, dolore, perferendis velit magnam! Ducimus quo reprehenderit vero corporis. Commodi recusandae iusto molestias debitis fuga vero consequatur, magni enim ea alias repudiandae architecto maxime hic autem laboriosam! Necessitatibus porro voluptatibus est labore obcaecati, commodi quo laboriosam? Voluptates odit quod omnis veritatis, esse molestias sit similique impedit quos. Eius et nesciunt possimus temporibus eligendi voluptatibus harum dolorem cupiditate, voluptates non officiis, error deleniti pariatur maxime. Expedita laboriosam, et totam repellendus quaerat sunt minima veritatis fugit aliquid suscipit assumenda ipsum fugiat commodi nihil exercitationem sed est fuga labore, laudantium excepturi quas harum libero vel. Soluta nulla dolorum iusto, unde deserunt atque dolore sit cumque porro nobis veniam tenetur quidem debitis officia officiis? Quasi magnam, aspernatur odio consequuntur dolore ut sapiente porro repellendus voluptas corporis non esse id reprehenderit nostrum, fuga aliquid, similique facere nisi maxime officiis itaque optio illo! In explicabo, accusamus officia cum sint deleniti dolorum officiis similique ab dolor odio exercitationem eos culpa repudiandae eius modi porro quibusdam alias sed commodi. Voluptates autem atque asperiores porro dolores. Doloremque, corrupti consequatur. Iste tempore provident eos eum! Dolor possimus eum quis, dicta tenetur itaque! Quisquam hic quasi veritatis doloremque consequuntur possimus voluptates! Eligendi soluta maiores unde totam cum porro eum aliquid non sed alias? Tempore voluptasporis dolorem sapiente rerum. Ipsum harum nemo voluptas eum delectlias veritatis eveniet similique minima, necessitatibus quas eaque at voluptatibus deleniti nostrum?</span>
        </div>
        <div className='w-full mt-6'>
           <span className='font-semibold mb-7 '>Responsibilities</span><br/><ul className='list-style-type'>
            <li > Lorem ipsum dolor sit.</li>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Volu</li>
            <li> Lorem ipsum dolor sit amet consectetur.</li>
           </ul>
        </div>
        <div className='w-full mt-6'>
           <span className='font-semibold mb-7 '>Qualifications</span><br/><ul className='list-style-type'>
            <li > Lorem ipsum dolor sit.</li>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Volu</li>
            <li> Lorem ipsum dolor sit amet consectetur.</li>
            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Volu</li>
            <li> Lorem ipsum dolor sit amet consectetur.</li>
           </ul>
        </div>
    
        </div>
    </section>
  );
};

export default JobDetail;
