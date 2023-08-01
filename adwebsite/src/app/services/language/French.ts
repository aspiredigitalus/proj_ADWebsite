import { LanguageInterface } from "./language-interface";

export class French implements LanguageInterface {
    languagePairs: Map<string, string>;

    constructor() {
        this.languagePairs = new Map([

            ////////////////////////////////////////////////////
            ////********* Language KEY:VALUE pairs ********/////
            ////////////////////////////////////////////////////
            ['firstTag', 'First Tag'],

            /******* Culture Component *******/
            ['culture-banner-message', 'Aspire fait cohabiter vie et travail. Rejoins notre équipe!'],
            ['schedule', 'Calendrier'],
            ['schedule-message', 'Nous soutenons un environnement de travail à distance familial avec des horaires de travail flexibles'],
            ['timeoff', 'Temps libre'],
            ['timeoff-message', 'Nous comprenons que la vie arrive et nous vous offrons des congés payés et des congés de maladie'],
            ['profitsharing', 'Partage des profits'],
            ['profitsharing-message', 'Nous croyons que si vous générez plus d\'argent, vous devriez gagner plus d\'argent avec des augmentations de salaire basées sur la performance'],
            ['learning', 'Apprentissage'],
            ['learning-message', 'Nous encourageons notre personnel à améliorer ses compétences grâce à la certification et à l\'apprentissage de l\'industrie payés par l\'entreprise'],
            ['apprenticeships', 'Apprentissages'],
            ['apprenticeships-message', 'Nous offrons des emplois à temps plein qui vous permettent de gagner de l\'argent tout en apprenant'],
            ['events', 'Événements'],
            ['events-message', 'Nous proposons des conventions d\'entreprise, des conférences, des rencontres et plus encore ! Apprenez à connaître vos collègues en dehors de l\'horloge, mais à nos frais'],
            ['healthcare', 'Soins de santé'],
            ['healthcare-message', 'Nous proposons plusieurs options de couverture médicale complète, y compris les soins dentaires et la vision'],
            ['401k', '401K'],
            ['401k-message', "Nous voulons nous assurer que nos employés ne sont pas seulement pris en charge aujourd'hui, mais aussi à l'avenir."],

        ]);
    }
    public getLanguagePairs(): Map<string, string> {
        return this.languagePairs;
    }

}