import { motion } from "framer-motion";
import { UnderlineContainer } from "../../../components/UnderlineContainer";
import { SectionCard } from "./components/Card";
import { ImageContainer } from "./components/ImageContainer";

export function Sections(): JSX.Element {

    return(
        <div className="flex flex-col mx-auto max-w-screen-lg p-4 gap-y-4 font-MONTSERRAT_montserrat_regular">
            <SectionCard>
                
                <div className="flex lg:flex-row flex-col-reverse w-full h-full gap-x-4 items-center">
                    <div className="w-[100%] h-full">
                        <ImageContainer caption="Adrian">
                            <img className="" src="/img/about.jpg" alt="" />
                        </ImageContainer>                    
                    </div>
                    <div className="flex flex-col gap-y-3 lg:mt-0 mt-4">
                        <p className="text-4xl font-bold">
                            <span>Hola, soy Adrian!</span> 
                            <motion.div
                            className="px-2 inline-block"
                            initial={{
                                rotate: 0
                            }}
                            animate={{
                                rotate: [0, 25, 0],
                                
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 1
                            }}
                            >👋</motion.div>
                            
                        </p>
                        
                        <p>Hola, soy Adrian! Comenze a mis 11 años curioseando de comenzar hacer un juego con Godot Engine, nada mas de la realidad copie simple codigo en videoturiales de YouTube hasta poder llegar a hacer algo.</p>
                        <p>Seguidamente a mis <UnderlineContainer>13 años me tome la programación informática mas enserio</UnderlineContainer>. No sabía y deje de ilusionarme por crear de hacer mi código en proyectos de software desde zero.</p>
                        <p>No fué nada fácil, comnece sin experiencia en manejo de redes ni conceptos de estruturas o formas de trabajo en la programación informatica. Con la simple curiosidad de seguir implementando en prácticas todo tipo de coceptos que iba aprendiendo.</p>
                        <p></p>
                    </div>
                    
                </div>
            </SectionCard>
            <SectionCard>
                
                <div className="flex lg:flex-row flex-col w-full h-full gap-x-4 items-center">
                    
                    <div className="flex flex-col gap-y-3">
                        <p className="text-2xl font-bold">Aprendizaje intenso de inglés al extranjero con nativos Irlandeses</p>
                        <p className="">Primera vez que viajo solo a Irlanda en el 2023 a finales de Agosto, fué realmente estresante al principio sin duda, pero <UnderlineContainer>nunca me he rendido y con las ganas rapidamente me adapte</UnderlineContainer> a la familia, y con la beca de Erasmus+ puede hacer un curso intensivo de Ingles en EF Campus durante 2 semanas en la capital.</p>
                        
                    </div>

                    <div className="w-[100%] h-full">
                        <ImageContainer caption="Pub en Irlanda">
                            <img className="" src="/img/pub.jpg" alt="" />
                        </ImageContainer>
                        
                    </div>
                    
                </div>
            </SectionCard>
        </div>
    )
}