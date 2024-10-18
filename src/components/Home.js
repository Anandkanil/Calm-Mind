import React from 'react'

export default function Home() {
    return (
        <div>
            <header className='w-full h-[4.5rem] bg-white flex flex-col items-center justify-center'>
                <div className='max-w-[1380px] w-10/12 h-full mx-auto flex justify-around '>
                    <div className='flex space-x-4'>
                        <button className='hover:text-brand-btnColor1 font-semibold'>Home</button>
                        <button className='hover:text-brand-btnColor1 font-semibold'>About Us</button>
                    </div>
                    <div className='flex space-x-4'>
                        <button className='hover:text-brand-btnColor1 font-semibold'>Join Us</button>
                        <button className='hover:text-brand-btnColor1 font-semibold'>Contact Us</button>
                    </div>
                </div>
            </header>

            <section className='w-full h-[95vh] text-white bg-brand-bgGreen flex flex-col justify-center'>
                <h1 className='text-[3.75rem]'>Welcome to CalmMind</h1>
                <p className='text-center text-[1.125rem] mt-[1.254rem] text-[rgb(209,213,219)] font-semibold w-xl'>Experience tranquility and professional guidance with our personalized therapy sessions designed to nurture your mental well-being.</p>
                <div className='mt-[3rem] flex space-x-8 justify-center'>
                    <button className='bg-brand-btnColor1 py-4 px-2 rounded-md font-bold hover:bg-[#a8e3d5] transition-all duration-200'>Explore our Services</button>
                    <button className='px-3 rounded-md hover:border border-brand-btnColor1 hover:text-brand-btnColor1 transition-all duration-200'>Meet Our Therapists</button>
                </div>

            </section>

            <section>
                <div className="relative mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-4xl">
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-slate-250 shadow-xl shadow-sky-600/10 ring-1 ring-sky-50 dark:ring-slate-200 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center "></div>

                    <figure className="p-5 max-w-[90%] mx-auto grid rounded-xl shadow-[rgba(0,0,0,0.35)_0px_5px_35px] sm:p-5 lg:p-0 bg-white grid-cols-1 items-start gap-x-6 gap-y-8 lg:gap-x-10">
                        <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
                            <blockquote className="text-xl font-semibold leading-8 text-gray-900">
                                <div className="text-start">
                                    CalmMind has transformed my life. The serene environment and personalized care have been instrumental in my journey to mental well-being.
                                </div>
                            </blockquote>
                        </div>

                        <div className="col-end-1 rounded-xl w-16 lg:row-span-4 lg:w-72">
                            <img
                                className="rounded-xl bg-sky-50 dark:bg-slate-700 lg:rounded-3xl w-full aspect-square object-cover"
                                alt="Alex Johnson"
                                src="/images/alex.jpeg"
                            />
                        </div>

                        <figcaption className="text-base lg:col-start-1 lg:row-start-3">
                            <div className="font-semibold text-gray-900 text-start">
                                <div>Alex Johnson</div>
                            </div>
                            <div className="mt-1 text-start text-gray-500">
                                <div>Client</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>

            </section>
        </div>
    )
}
