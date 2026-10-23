# Perlaplay – redesign (anteprima statica)

Sito statico (HTML/CSS/JS, nessuna build) che ripropone perlaplay.it con un layout ispirato a bet365:
colonna sinistra con gli sport A–Z, contenuto centrale, schedina a destra.

## Avvio
Apri `index.html` nel browser, oppure servi la cartella:

    python3 -m http.server 8080

e visita http://localhost:8080

## Pagine
- `index.html` – home (hero, live ora, in evidenza, top 10 slot, Perla Live, game show, quote maggiorate)
- `sport.html` – scommesse prematch (tab In evidenza / Live / Prossimi / Quote maggiorate; `#calcio`, `#tennis`… filtrano per sport)
- `live.html` – scommesse live con tracker e quote che si aggiornano
- `casino.html` – lobby slot con categorie, ricerca e filtro provider (`?q=`, `?provider=`)
- `livecasino.html` – casinò live (Perla Live, roulette, baccarat, blackjack, game show, Sala della Fortuna)
- `promo.html` – promozioni e Privilege Club

## Note
- Immagini originali scaricate da perlaplay.it (loghi, banner, thumbnail giochi, icone, provider) in `assets/img/`.
- Eventi sportivi, quote, vincite e giocate in `assets/js/data-sport.js` sono **dati dimostrativi**: vanno sostituiti con il feed reale.
- La schedina è funzionante lato client (singola/multipla, bonus multipla, vincita potenziale) e salva le selezioni in `localStorage`.
- Login/registrazione sono solo grafici.
