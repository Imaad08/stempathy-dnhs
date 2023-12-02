import React from 'react'
import Navbar from '@/components/Navbar'
// import ContactForm from '../components/ContactForm'
import SocialIcons from '@/components/SocialIcons'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'

const page = () => {
    return (
        <div className='text-black bg-customGreen flex flex-col text-center'>
            <Navbar />
            <h1 className=' text-2xl font-serif mt-40 italic '>Contact Us</h1>
            <br>
            </br>
            <h2 className='text-5xl font-serif'>Let us know what you'd like to see!</h2>
            <br>
            </br>
            <p className='flex flex-col justify-center items-center text-xl font-serif max-w-6xl mx-auto'>If you have opportunities for the team let us know through an email, we're always available to the advancement of equitable STEM education. </p>
            {/* <ContactUs /> */}
            <br>
            </br>
            <ul className='flex flex-col justify-center items-center font-serif text-2xl italic'>
                <li className='py-6'>Location: San Diego, CA 92127</li>
                <li className='py-6'>Email: clubstempathy@gmail.com</li>
                <li className='py-6'>Instagram: @dnhs_stempathy</li>
            </ul>
            <div className='w-screen h-26 bg-gray-200 border-black'>
                <Footer />
            </div>

        </div>
    )
}

export default page