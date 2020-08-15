class Covek {
    constructor(ime,prezime,godinaRodjenja){
        this.ime = ime
        this.prezime = prezime
        this.godinaRodjenja = godinaRodjenja
    }
}

let covek = new Covek('Marko', 'Petrovic', 1960)
console.log(covek)

class Student extends Covek {
    constructor(ime,prezime,godinaRodjenja, godinaStudija, prosek){
        super(ime,prezime, godinaRodjenja)
        this.godinaStudija = godinaStudija
        this.prosek = prosek
    }
}

let student = new Student('Milan', 'Mladenovic', 1999, 2, 8.78)
console.log(student)

class StudentOS extends Student {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek, smerOsnovnihStudija){
        super(ime,prezime,godinaRodjenja, godinaStudija, prosek)
        this.smerOsnovnihStudija = smerOsnovnihStudija
    }
}

let studentOS = new StudentOS('Ivana', 'Simic', 1996, 4, 9.80, 'Operacioni menadzment')
console.log(studentOS)


class StudentMS extends Student {
    constructor(ime, prezime, godinaRodjenja, godinaStudija, prosek, smerMasterStudija){
        super(ime, prezime, godinaRodjenja, godinaStudija, prosek)
        this.smerMasterStudija = smerMasterStudija
    }
}

let studentMS = new StudentMS('Milica', 'Pavlovic', 1980, 1, 9.41, 'Ekoloski menadzment')
console.log(studentMS)

class Zaposleni extends Covek {
    constructor(ime,prezime,godinaRodjenja, godinaZaposlenja, plata){
        super(ime,prezime, godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

let zaposleni = new Zaposleni('Darko', 'Mitic', 1965, 2002, 45000)
console.log(zaposleni)

class Nastavnik extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta){
        super(ime,prezime,godinaRodjenja, godinaZaposlenja, plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.listaPredmeta = listaPredmeta
    }
}

let nastavnik = new Nastavnik('Stefan', 'Radovanovic', 1975, 2000, 45000, 'Filozofija', ['Filozofija', 'Logika'])
console.log(nastavnik)

class Profesor extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.titula = titula
    }
}

let profesor = new Profesor('Mladen', 'Ristic', 1981, 2008, 70000, 'Osnove teorije igara', ['Operaciona istrazivanja 1', 'Operaciona istrazivanja 2', 'Analiza pouzdanosti i rizika', 'Osnove teorije igara', 'Matematicko programiranje'], 'redovni')
console.log(profesor)

class Asistent extends Nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDoktorskihStudija){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, listaPredmeta)
        this.smerDoktorskihStudija = smerDoktorskihStudija
    }
}

let asistent = new Asistent('Milena', 'Petrovic', 1990, 2016, 50000, 'Inzenjering kvaliteta', [ 'Standardizacija', 'Inzenjering kvaliteta', 'Menadzment totalnog kvaliteta'], 'Menadzment')
console.log(asistent)

class Sluzbenik extends Zaposleni {
    constructor(ime,prezime,godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime,prezime,godinaRodjenja, godinaZaposlenja, plata)
        this.odsek = odsek
    }
}

let sluzbenik = new Sluzbenik('Petar', 'Markovic', 1973, 1996, 60000, 'Racunovodstvo')
console.log(sluzbenik)