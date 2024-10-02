import React from 'react';



const Presentation : React.FC = () => {
  return (
    <>
        <div className='relative flex w-full h-full border border-solid border-gray-400 border-opacity-30 backdrop-blur-[5px] rounded-xl  bg-white/5'>
            <div className='w-1/2 h-full  p-6 flex justify-start items-center'>
                <div className='flex justify-start flex-col gap-6'>
                    <p className='text-darkGray kanit text-5xl'>Votre passerelle</p>
                    <p className='text-darkGray kanit text-5xl font-thin'>Vers une carrière réussie</p>
                    <p className='text-darkGray kanit text-5xl'>En Suisse</p>
                </div>
            </div>
            <div className='w-1/2 h-full border border-solid border-green-200 p-6 flex justify-center flex-wrap'>
                <div className='flex p-12 '>
                    <div className='flex justify-center items-center w-[420px] h-[130px] border border-solid border-red-500 rounded-xl'>
                        <p className='text-2xl poppins font-light'>Je souhaite devenir frontalier</p>
                    </div>
                </div>

                <div className='flex p-12 '>
                <div className='flex justify-center items-center w-[420px] h-[130px] border border-solid border-red-500 rounded-xl'>
                        <p className='text-2xl poppins font-light'>Je suis déjà frontalier</p>
                    </div>
                </div>

            </div>
        </div>
    </>
  );
};

export default Presentation;
