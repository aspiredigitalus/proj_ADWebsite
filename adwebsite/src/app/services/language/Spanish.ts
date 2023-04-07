import { LanguageInterface } from "./language-interface";

export class Spanish implements LanguageInterface {
    languagePairs: Map<string, string>;
    
    constructor(){
        this.languagePairs = new Map([

            ////////////////////////////////////////////////////
            ////********* Language KEY:VALUE pairs ********/////
            ////////////////////////////////////////////////////
            ['firstTag', 'First Tag'],

            /******* Culture Component *******/
            ['culture-banner-message', 'Aspire hace que la vida y el trabajo encajen juntos. ¡Unete a nuestro equipo!'],
            ['schedule', 'Cronograma'],
            ['schedule-message', 'Apoyamos un entorno de trabajo remoto amigable para la familia con horarios de trabajo flexibles'],
            ['timeoff', 'Tiempo Libre'],
            ['timeoff-message', 'Entendemos que la vida sucede y lo tenemos cubierto con vacaciones pagadas y licencia por enfermedad'],
            ['profitsharing', 'Reparto de Utilidades'],
            ['profitsharing-message', 'Creemos que si generas más dinero, deberías ganar más dinero con aumentos salariales basados ​​en el desempeño.'],
            ['learning', 'Aprendiendo'],
            ['learning-message', 'Alentamos a nuestro personal a mejorar sus habilidades con la certificación y el aprendizaje de la industria pagados por la empresa.'],
            ['apprenticeships', 'Aprendizajes'],
            ['apprenticeships-message', 'Ofrecemos trabajos de tiempo completo que te permiten ganar mientras aprendes'],
            ['events', 'Eventos'],
            ['events-message', '¡Ofrecemos Convenciones de empresa, Conferencias, Meetups y más! Conozca a sus compañeros de trabajo fuera del reloj, pero con nuestro centavo'],
            

        ]);
    }
    public getLanguagePairs():Map<string, string> {
        return this.languagePairs; 
    }

}