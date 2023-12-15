
//COMPONENTE CONTENEDOR
class MyContainer extends HTMLElement {
    constructor() {
        super();

        //CREACION SHADOW DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <div>
                <slot name="header"></slot>
                <slot name="content"></slot>
                <slot name="footer"></slot>

            </div>`;

    }
}

// Registrar el componente contenedor
customElements.define('my-container', MyContainer);

//COMPONENTE ENCABEZADO

class MyHeader extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de encabezado con estilos y animaciones
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background-color: #800080; /* Cambié el color de azul (#007bff) a morado (#800080) */
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                    border-bottom: 2px solid #4b0082; /* Ajusté el color del borde inferior a un tono de morado más oscuro (#4b0082) */
                    animation: slideAndColorChange 1s ease-in-out infinite alternate;
                }

                h1 {
                    margin: 0;
                    font-size: 2em;
                    transition: color 0.3s ease-in-out;
                }

                @keyframes slideAndColorChange {
                    0% {
                        transform: translateY(0);
                        background-color: #800080; /* Cambié el color de azul (#007bff) a morado (#800080) */
                    }
                    100% {
                        transform: translateY(10px);
                        background-color: #4b0082; /* Ajusté el color final a un tono de morado más oscuro (#4b0082) */
                    }
                }
            </style>
            <header>
                <h1>SLOTS</h1>
            </header>
        `;
    }
}

// Registrar el componente de encabezado
customElements.define('my-header', MyHeader);
//Componente del contenido 
// Componente de Contenido
// Componente de Contenido
class MyContent extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de contenido con el texto proporcionado
        this.shadowRoot.innerHTML = `
    <style>
        section {
            font-family: 'Arial', sans-serif;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
        }

        h2 {
            color: #800080;
            text-align: center;
        }

        div {
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        p {
            font-size: 1.2em;
            color: #333;
        }

        li {
            margin-bottom: 10px;
        }

        ol {
            margin-left: 20px;
        }
    </style>

    <section>
        <h2>Contenido Principal</h2>
        <div>
            <p style="font-weight: bold;">Objetivo:</p>
            <p>Aplicar el concepto de composición y el uso de slots para construir un componente reutilizable y flexible.</p>
             <ol>
                
            <!-- Modificación -->
        <h1>Slots cargados</h1>
        <p>Los slots funcionan correctamente</p>
    </section>
`;

    }
}

// Registrar el componente de contenido
customElements.define('my-content', MyContent);


// Componente de Pie de Página
// Componente de Pie de Página Mejorado
class MyFooter extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de pie de página mejorado con estilos y funcionalidad
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.2);
                }

                p {
                    margin: 0;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                    margin: 0 10px;
                    transition: color 0.3s ease-in-out;
                }

                a:hover {
                    color: #007bff;
                }

                i {
                    margin-right: 5px;
                }
            </style>
            <footer>
                <p>
                    © 2023 Jonathan Toapanta | 
                    <a href="#home">Inicio</a> |
                    <a href="#about">Acerca de nosotros</a> |
                    <a href="#contact">Contacto</a> |
                    <a href="mailto:info@miempresa.com"><i class="far fa-envelope"></i> info@miempresa.com</a> |
                    <a href="tel:+123456789"><i class="fas fa-phone"></i> +123 456 789</a>
                </p>
            </footer>
        `;
    }F
}

// Registrar el componente de pie de página mejorado
customElements.define('my-footer', MyFooter);


