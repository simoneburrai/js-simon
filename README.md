# Simon Says

## Info
Nell'esercizio di oggi, salvato come Progetto N.26, andiamo a creare un programma che genera 5 numeri casuali e li stampa nel broswer, seguito da un conto alla rovescia che parte da 10.
Verrà richiesto all'utente di memorizzare più numeri possibili.
Allo scadere del tempo verranno visualizzati 5 elementi di input e l'utente dovrà inserire quanti più numeri ricorda. Bisogna limitare i dati inseriti dall'utente, non permettendo ad esempio di inserire due numeri uguali.

## Passaggi

Per la realizzazione di questo esercizio è necessario conoscere come andare a prendere gli elementi dal **DOM** e utilizzarli in Javascript e inserire valori da Javascript all'interno del DOM.

1. Generazione numero casuale.

        Bisogna generare 5 numeri casuali (minimo 1 e massimo 50). Bisogna inserire un controllo che permetta di non inserire due numeri identici.

2. setInterval

        Bisogna creare un intervallo di tempo che scrive un numero in console ogni secondo, corrispondente appunto al secondo attuale, partendo alla rovescia da 10.
        L'intervallo verrà cancellato quando il conto arriverà a 0.
    
    3. 
    
        I numeri inseriti dall'utente verranno inseriti all'interno di un array, ma prima avverrà un controllo per verificare che non ci siano numeri uguali.

    4. 
    
        Se ci sono numeri uguali, la lunghezza dell'array non sarà più 5, ma minore di 5. 
        Questo causerà un messaggio di errore nel broswer spiegando all'utente di non inserire numeri uguali.

    5.
        
        Viene creata una funzione che controlla due array, se all'interno del primo array ci sono dei valori che sono presenti anche nel secondo array allora questi valori verranno inseriti in un nuovo array.

    6.
    
         Richiamo la funzione del passaggio *5* e inserisco come argomenti l'array contenente i numeri inseriti dall'utente e l'array contenente i numeri generati casualmente.

    7. 
    
        Il ritorno della funzione verrà inserito in una variabile che successivamente verrà stampata nel broswer, per mostrare all'utente quali sono i valori che ha indovinato.

    8. 
    
        Se viene stampato un messaggio di errore o se i numeri indovinati sono 0 allora il colore del messaggio sarà rosso, altrimenti sarà verde.


*Per maggiori informazioni riguardanti la consegna dell'esercizio vedere il file info.txt*