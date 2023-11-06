## Esercizio

**Consegna:**
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- Wayne Barnett: **Founder & CEO**	        "wayne-barnett-founder-ceo.jpg"
- Angela Caroll:	**Chief Editor**	        "angela-caroll-chief-editor.jpg"
- Walter Gordon:	**Office Manager**	        "walter-gordon-office-manager.jpg"
- Angela Lopez:	**Social Media Manager**	"angela-lopez-social-media-manager.jpg"
- Scott Estrada:	**Developer** "scott-estrada-developer.jpg"
- Barbara Ramos:	**Graphic Designer**	    "barbara-ramos-graphic-designer.jpg"

**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sottoforma di stringhe

**Procedimento:**
1. Creiamo il nostro array per ogni dipendente. Ognuno deve contenere le seguenti informazioni:
- Nome
- Impiego
- Stringa dell'indirizzo dell'immagine
2. Associamo ad una nostra variabile il collegamento per la classe in cui vogliamo aggiungere le nostre card dei dipendenti.
3. Creiamo un ciclo for in modo da poter riempire una nostra variabile da supporto con tutti i dati, scritti esattamente come se fossero su html.
4. Al collegamento creato in precedenza andiamo a scrivere al suo interno grazie a "innerHTML", dandogli come valore la nostra variabile da supporto.