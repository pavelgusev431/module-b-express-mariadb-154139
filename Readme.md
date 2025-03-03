# Node.js + Express + MongoDB Docker Template

Šis šablonas skirtas konkursui, kuriame dalyviai gali forkuoti projektą ir sukurti savo aplikaciją.

## 🚀 Kaip paleisti projektą?

### 1️⃣ Reikalavimai
Prieš pradedant įsitikinkite, kad turite įdiegtus:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2️⃣ Projekto klonavimas

Fork ir clone rpo:
```sh
git clone https://github.com/KITM-WEB-dev-challange/tavo_vardas/node-docker-template.git
cd node-docker-template
cp .env-example .env
```

### 3️⃣ Paleidimas su Docker

Paleiskite komandą:
```sh
docker-compose up --build
```
Tai paleis tiek aplikaciją, tiek MongoDB konteineryje.

Savo kompiuteryje naudokit:
```sh
npm i
npm start
```

### 5️⃣ API testavimas

Aplikacija veiks adresu: `http://localhost:3000/`
Galite patikrinti per naršyklę arba `curl`:
```sh
curl http://localhost:3000/
```

### 6️⃣ Plėskite savo aplikaciją
Galite pridėti savo modelius, maršrutus ir funkcionalumą aplankuose `models/`, `routes/`, `config/`.

---

## 🛠 Naudotos technologijos
- **Node.js** + **Express**
- **MoriaDB** + **Typeorm**
- **Docker** + **Docker Compose**


Sėkmės konkurse! 🚀
