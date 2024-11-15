
type Props = {

    className?: string;
    children: JSX.Element;
}

export function SectionCard({ className, children }: Props) {

    return(
        <div>
            <div className={`bg-white shadow-md rounded-lg p-6 md:p-8 lg:p-10 ${className}`}>
                {children}
            </div>
        </div>
    )
}
/*
<h2 className="text-2xl md:text-4xl font-bold mb-4">Título de la sección</h2>
                <p className="text-base md:text-lg">
                    Este es un contenedor responsivo similar al de Bootstrap. Se ajusta automáticamente al
                    tamaño de la pantalla, maximizando el espacio de visualización disponible.
                </p>
                <div className="mt-4">
                </div>*/