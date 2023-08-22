import { BsLinkedin, BsGithub } from 'react-icons/bs';

export const Hero = () => {
    return(
        <section className="flex py-44 container max-w-[1000px] mx-auto items-center">
            <div className="max-w-lg relative">
                <h1 className="font-bold text-5xl text-slate-800 leading-snug">Front-End React Developer</h1>
                <img className="h-14 absolute top-[65px] left-[250px]" src="/waving.png" alt="" />
                <p className="mt-3 text-gray-600 text-lg">Hi, I'm Stefan Topalovic. A passionate Front-end React Developer based in Belgrade, Serbia. 📍</p>
                
                <div className='flex gap-4 mt-5'>
                    <BsLinkedin size={28} color={'#2d2e32'} /> 
                    <BsGithub size={28} color="#2d2e32" />
                </div>
            </div>
            <div>
                <div className='h-96 w-96 hero-img'></div>
            </div>
        </section>
    );
}