import React, { ReactElement } from "react"
import { SectionCard } from "./components/Card"
import { UnderlineContainer } from "../../../../components/UnderlineContainer"
import { motion } from "framer-motion"
import { ImageContainer } from "./components/ImageContainer"
import { Cube3D } from "./components/Cube3D"
import { Canvas } from "react-three-fiber"

export function HomeSections() {

    return(
        <div className="flex flex-col mx-auto max-w-screen-lg p-4 gap-y-4 font-MONTSERRAT_montserrat_regular">
            <SectionCard>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-5">Mejoré la <UnderlineContainer>automatización un 95%</UnderlineContainer>  en la gestión de reservas para una peluquería</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-center"> {/* Aquí cambiamos a flex-row en pantallas grandes */}
                        <div className="flex flex-col">
                            <p>
                            La PeluqueríaEgo situado en (Inca) Mallorca, España. Le proporcione un servicio completo desde la configuración del servidor hasta la automatización compleja del software para ser lista para usarse.
                            Las app’s de reserva consisten en la gestión de forma automática y automatizada en tiempo real. 
                            </p>
                            <p>
                            Todas las reservas que se hagan se manejaran dentro del ordenador, si por algún motivo haya un evento no esperado como arreglos para una boda se le puede enviar por privado la exclusiva reserva y finalmente el dueño se encarga cerrar en un horario especifico para que no se hagan reservas.
                            </p>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:border-l-2 md:pl-3 border-primary-text min-w-80">
                            <ImageContainer>
                                <img src="/img/booking.jpg" alt="" />
                            </ImageContainer>
                            
                        </div>
                    </div>
                </div>
            </SectionCard>
            <SectionCard>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-5">Uso avanzado con objetos en 3D</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-center"> {/* Aquí cambiamos a flex-row en pantallas grandes */}
                        <div className="mt-4 md:mt-0 md:border-r-2 md:pr-3 border-primary-text min-h-20">
                            
                            <Cube3D/>
                            
                            {/*<img src="/img/threed.jpg" alt="" />*/}
                        </div>
                        <div className="flex flex-col">
                            <p>
                            Con el uso de una tecnología avanzada, puedo hacer posible la <UnderlineContainer>implementación rápida de modelos en 3D</UnderlineContainer>. Y poder hacer animaciones o interacciones increíblemente divertidas y interactivas. Aún así sigo aprendiendo y con mucha curiosidad voy avanzado con el tiempo con nuevas funcionalidades considerándome mi corta edad.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionCard>
            <SectionCard>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-5">Priorización de monitoreo y escalabilidad de software</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-center"> {/* Aquí cambiamos a flex-row en pantallas grandes */}
                        <div className="flex flex-col">
                            <p>
                            Tengo el lema de no hacer chapuzas a la hora de manejar programas. Todo lo que creo <UnderlineContainer>están creados desde la escalabilidad y el manejo rápido de errores</UnderlineContainer>. Por parte monitoreo para encontrar errores en tiempo real a la hora si tuvieras en marcha una aplicación web y poder arreglarlo sin tener cerrar el programa o la misma web.
                            </p>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:border-l-2 md:pl-3 border-primary-text min-w-80">
                            <ImageContainer>
                                <img src="/img/graphic.jpg" className="" alt="" />
                            </ImageContainer>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </div>
    )
}
