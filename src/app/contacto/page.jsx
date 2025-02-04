import Image from "next/image";
import Banner from "../../../public/contacto/banner_contacto.png";
import Sobre from "../../../public/background/sobre.png";
import MDQ from "../../../public/background/mdq.png";
import Avion from "../../../public/background/avion.png";
import './contact.css'

import { Box, Container } from "@mui/material";
import { FormContainer } from "./form/formContainer";


export default function ContactoPage() {

  return (
    <main >
      <div className='max-h-[500px] overflow-hidden relative'>
          <h1 className='font-josefin absolute text-white drop-shadow-[3px_5px_5px_rgba(0,0,0)] left-1/2 top-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl xl:text-8xl'>
            Contactanos
          </h1>
          <Image src={Banner} alt='Banner Medialuas' width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }} className=''/>
      </div>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ mx:'auto', my:'40px'}} className="contactBox">
          <div className="contactDiv">
            <FormContainer />

          </div>
          <Image
            src={Sobre}
            width={243}
            height={245}
            alt="Sobre"
            className="sobreImg"
          />
          <Image
            src={MDQ}
            width={239}
            height={239}
            alt="logo MDQ"
            className="mdqImg"
          />
          <Image
            src={Avion}
            width={401}
            height={198}
            alt="Avioncito"
            className="avionImg"
          />
        </Box>
      </Container>
    </main>
  )
}
  