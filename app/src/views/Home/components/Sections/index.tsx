import React, { ReactElement } from "react"
import { SectionCard } from "./components/Card"

export function HomeSections() {

    return(
        <div className="flex flex-col mx-auto max-w-screen-lg p-4 gap-y-4 font-MONTSERRAT_montserrat_regular">
            <SectionCard>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-5">Mejoré la automatización un 95% en la gestión de reservas para una peluquería</h2>
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
                            <img src="/img/booking.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </SectionCard>
            <SectionCard>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-5">Uso avanzado con objetos en 3D</h2>
                    <div className="flex flex-col md:flex-row gap-4 items-center"> {/* Aquí cambiamos a flex-row en pantallas grandes */}
                        <div className="mt-4 md:mt-0 md:border-r-2 md:pr-3 border-primary-text min-h-20">
                            <img src="/img/threed.jpg" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <p>
                            Con el uso de una tecnología avanzada, puedo hacer posible la implementación rápida de modelos en 3D. Y poder hacer animaciones o interacciones increíblemente divertidas y interactivas. Aún así sigo aprendiendo y con mucha curiosidad voy avanzado con el tiempo con nuevas funcionalidades considerándome mi corta edad.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionCard>
        </div>
    )
}
