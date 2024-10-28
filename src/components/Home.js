import React from 'react'
import emily from '../assets/emily.jpeg'
import john from '../assets/John.jpeg'
import sarah from '../assets/Sarah.jpeg'
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
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

            <section className='w-full h-screen text-white bg-brand-bgGreen flex flex-col justify-center'>
                <h1 className='text-3xl lg:text-[3.75rem]'>Welcome to CalmMind</h1>
                <p className='text-center text-[1rem] lg:text-[1.125rem] mt-[1.254rem] text-[rgb(209,213,219)] font-semibold w-xl'>Experience tranquility and professional guidance with our personalized therapy sessions designed to nurture your mental well-being.</p>
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

            {/* section No :2 */}
            <section className='mt-9 py-5'>
                <div className='w-10/12 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-3 py-7'>
                    {/* left part */}
                    <div className='flex flex-col gap-7'>
                        <h2 className='font-bold text-4xl'>Meet Our Dedicated Therapists</h2>
                        <p className='text-[#334155] font-semibold font-sans'>Our team of experienced therapists is committed to guiding you towards a balanced and fulfilling life.</p>
                    </div>
                    {/* right part  */}
                    <div className='flex flex-col gap-y-12'>
                        <div className='flex flex-col items-baseline lg:items-start lg:flex-row border-b-[1px] border-[#363b3d40] py-4 lg:h-[260px]'>
                            <img src={emily} width={208} min-height={260} className='rounded-md' alt='Dr. Emily Carter' />
                            <div className='flex flex-col ml-5 gap-4 text-[#334155]'>
                                <p className='text-start mt-4'>Clinical Psychologist</p>
                                <p className='text-start font-light'>Dr. Carter specializes in cognitive behavioral therapy and has over 15 years of experience in mental health.</p>
                                {/* Social Icons */}
                                <div className='flex mt-8 gap-x-4'>
                                    <button><FaLinkedin /></button>
                                    <button><BsInstagram /></button>

                                </div>
                            </div>

                        </div>



                        <div className='flex flex-col items-baseline lg:items-start lg:flex-row border-b-[1px] border-[#363b3d40] py-4 lg:h-[260px]'>
                            <img src={john} width={208} min-height={260} className='rounded-md' alt='Dr. Emily Carter' />
                            <div className='flex flex-col ml-5 gap-4 text-[#334155]'>
                                <p className='text-start'>Clinical Psychologist</p>
                                <p className='text-start font-light'>Dr. Carter specializes in cognitive behavioral therapy and has over 15 years of experience in mental health.</p>
                                {/* Social Icons */}
                                <div className='flex mt-8 gap-x-4'>
                                    <button><FaLinkedin /></button>
                                    <button><BsInstagram /></button>

                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col items-baseline lg:items-start lg:flex-row border-b-[1px] border-[#363b3d40] py-4 lg:h-[260px]'>
                            <img src={sarah} width={208} min-height={260} className='rounded-md' alt='Dr. Emily Carter' />
                            <div className='flex flex-col ml-5 gap-4 text-[#334155]'>
                                <p className='text-start'>Clinical Psychologist</p>
                                <p className='text-start font-light'>Dr. Carter specializes in cognitive behavioral therapy and has over 15 years of experience in mental health.</p>
                                {/* Social Icons */}
                                <div className='flex mt-8 gap-x-4'>
                                    <button><FaLinkedin /></button>
                                    <button><BsInstagram /></button>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>

            {/* Get in Touch Section  */}
            <section className='mt-9 py-5 w-full mx-auto'>
                <div className='w-10/12 max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-3 py-7'>
                    {/* left Part*/}
                    <div className='flex flex-col sm:flex sm:justify-center sm:items-center gap-7 max-w-[700px]'>
                        <h2 className='font-bold text-4xl'>Get in Touch with CalmMind</h2>
                        <p className='text-[#334155] font-semibold font-sans'>Reach out to us to schedule a therapy session or inquire about our services. We are here to support your path to well-being.</p>
                    </div>
                    {/* Right Part */}
                    <div className='flex justify-center lg:justify-start flex-wrap gap-y-12 gap-x-5'>
                        {/* card 1*/}
                        <div className='py-8 px-12 text-white bg-[#004132] rounded-md text-start flex flex-col gap-y-4'>
                            <h3 className='text-xl'>Therapy Inquiries</h3>
                            <div className=' flex flex-col gap-y-2'>
                                <p className='text-[#6abaab] cursor:pointer'>therapy@calmmind.com</p>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        {/* card 1*/}
                        <div className='py-8 px-12 text-white bg-[#004132] rounded-md text-start flex flex-col gap-y-4'>
                            <h3 className='text-xl'>Therapy Inquiries</h3>
                            <div className=' flex flex-col gap-y-2'>
                                <p className='text-[#6abaab] cursor:pointer'>therapy@calmmind.com</p>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                        {/* card 1*/}
                        <div className='py-8 px-12 text-white bg-[#004132] rounded-md text-start flex flex-col gap-y-4'>
                            <h3 className='text-xl'>Therapy Inquiries</h3>
                            <div className=' flex flex-col gap-y-2'>
                                <p className='text-[#6abaab] cursor:pointer'>therapy@calmmind.com</p>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='py-10 bg-[#e8fff8] text-slate-800'>
                <div className='px-4 mx-auto max-w-7xl py-10 flex flex-col gap-20'>
                    <div className='opacity: 1; transform: none;'> <h1 className='TITLE-PRIMARY text-4xl font-semibold text-center text-slate-900 '>CalmMind FAQs</h1></div>
                    <div className='max-w-5xl mx-auto flex flex-col gap-14'>
                        <div class="border-b border-black/10 ">
                            <p class="text-2xl font-semibold text-slate-900 block mx-auto text-start">01. What types of therapy does CalmMind offer?</p>
                            <p class="DESC my-8 text-base font-normal text-slate-600 text-start">We offer a range of therapies including cognitive behavioral therapy, mindfulness-based therapy, and more, tailored to individual needs.</p>
                        </div>

                        <div class="border-b border-black/10 ">
                            <p class="text-2xl font-semibold text-slate-900 block mx-auto text-start">02. How do I book a session at CalmMind?</p>
                            <p class="DESC my-8 text-base font-normal text-slate-600 text-start">To book a session, contact us via email or phone, and our team will assist you in scheduling an appointment.</p>
                        </div>

                        <div class="border-b border-black/10 ">
                            <p class="text-2xl font-semibold text-slate-900 block mx-auto text-start">03. What should I expect during my first therapy session?</p>
                            <p class="DESC my-8 text-base font-normal text-slate-600 text-start">Your first session will be an opportunity to discuss your goals and concerns with your therapist, setting the foundation for your personalized therapy plan.</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className='w-full bg-white mx-auto'>
                <div className='max-w-7xl mx-auto py-10 px-4'>
                    <div className='relative isolate overflow-hidden bg-[#0a6261] px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16'>
                        <h2 className='mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white/90 sm:text-4xl'>Begin Your Journey to Wellness</h2>
                        <p class="DESC mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300/90">Take the first step towards a balanced life. Schedule a consultation with our expert therapists today.</p>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <button className='flex items-center justify-center text-white bg-[#5abaab] font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-[#e8fff8] hover:text-gray-500 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500'>Schedule Now</button>
                            <button className='text-sm group flex items-center gap-1 font-semibold leading-6 text-white'>Learn About Our Approach</button>
                        </div>
                    </div>

                </div>
            </section>

            <footer className='mx-auto px-4 max-w-7xl py-10 flex flex-col items-center gap-12'>
                <p className='_editable_jwu41_1 DESC ml-2 mt-1.5 text-sm text-slate-600 dark:text-slate-400'>© 2023 CalmMind. All rights reserved.</p>
                <div className='flex flex-col gap-8 items-center md:flex-row'>
                    <ul class="flex flex-col items-center gap-8 sm:flex-row">
                        <li><button class="text-sm text-slate-900 hover:text-sky-500 focus:text-sky-500">About Us</button></li>
                        <li><button class="text-sm text-slate-900 hover:text-sky-500 focus:text-sky-500">Our Services</button></li>
                        <li><button class="text-sm text-slate-900 hover:text-sky-500 focus:text-sky-500">Privacy Policy</button></li>
                        <li><button class="text-sm text-slate-900 hover:text-sky-500 focus:text-sky-500">Terms & Conditions</button></li>
                        <li><button class="text-sm text-slate-900 hover:text-sky-500 focus:text-sky-500">Contact Us</button></li>
                    </ul>
                    <div className='w-full h-px bg-black/10 md:w-px md:h-6'></div>
                    <ul className='flex items-center gap-8'>
                        <li><button className='text-slate-900  dark:text-slate-50'><BsTwitterX color="black" /></button></li>
                        <li><button className='text-slate-900  dark:text-slate-50'><BsInstagram color="black"/></button></li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}
