import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {QuestionsInterface} from "../components/home-content/home-content.component";

// Simulation d'un XHR
@Injectable({providedIn: "root"})
export class QuestionsService {
  public GetXhrQuestions(): Observable<QuestionsInterface[]> {
    return of( [
       {
        _id: "615305b42be87b3f6ac67997",
        question: "Quel est le meilleur moyen de conserver ses mots de passe",
        reponses: {
          ["Le noter sur un post-it"]: false,
          ["Le  noter dans un fichier texte sur le bureau"]: false,
          ["Utiliser un gestionnaire de mot de passes sécurisé"]: true,
          ["Le donner à un ami/collègue qui a une bonne mémoire"]: false
        }
      },
      {
        _id: "615305b46fc1fccb61140291",
        question: "Laisser ma session ouverte lorsque je quitte mon poste n'est pas un risque",
        reponses: {
          ["Faux"]: true,
          ["Vrai"]: false
        }
      },
      {
        _id: "615305b4c654d8deeacca159",
        question: "Lorsque je trouve une clé usb, quelle est la meilleure attitude à adopter ? ",
        reponses: {
          ["La transmettre à un responsable informatique"]: true,
          ["La brancher sur l'ordinateur de mon collègue"]: false,
          ["Ouvrir les documents qu'elle contient"]: false
        }
      },
      {
        _id: "615305b4f6e948c778b74f0d",
        question: "Un mail me demande mes coordonées bancaires :",
        reponses: {
          ["Je supprime le mail"]: false,
          ["Je renseigne mes coordonnées pour gagner cet Iphone 28 d'une valeur de 4 894 €"]: false,
          ["Je signale le mail et préviens un responsable informatique"]: true
        }
      },
      {
        _id: "615305b4a22fba776d6d488e",
        question: "123456 est-il un mot de passe acceptable ? ",
        reponses: {
          ["Vrai"]: false,
          ["Faux"]: true
        }
      },
      {
        _id: "485925b4a22fba776d6d488e",
        question: "'GE2HRb]t(f4A' est-il un mot de passe acceptable ? ",
        reponses: {
          ["Faux"]: false,
          ["Vrai"]: true
        }
      },
      {
        _id: "6153d58r422fba776d6d488e",
        question: "Je viens de me rendre compte qu'un virus agit sur mon ordinateur : ",
        reponses: {
          ["Je ne dis rien et supprime le fichier"]: false,
          ["j'essaye de supprimer le virus avec l'antivirus"]: false,
          ["Je débranche mon ordinateur du réseau et préviens un responsable"]: true
        }
      }
  ]) as Observable<QuestionsInterface[]>;
  }
}
