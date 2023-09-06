import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contacto =() => {
    return <section  id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 lg:py-16'>
        <div><h5 className='text-xl font-bold text-white my-2 grid grid-cols-1 sm:grid-cols-12'>Contácto</h5>
        <p className='text-[#ADB7BE]'>
            {" "}
            Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre
            abierto. Si tienes alguna pregunta o simplemente quieres saludar, te ayudaré
            ¡Hago todo lo posible para comunicarme contigo!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com/siendodev"/>
                    <Image src={GithubIcon} alt="Github Icon"/>
                    <Link href="(linkedin).com"/>
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="flex flex-col gap-4">
                <Link
              href="https://wa.link/p7fvss"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Contactar por WS
              </span>
            </Link>
                </div>
            </div>
            </div>

    </section>
    
};

export default Contacto;