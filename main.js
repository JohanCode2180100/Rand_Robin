// faire un tableau avec manipulation du DOM

const student = [
  {
    studentName: "Johan",
  },
  {
    studentName: "Théo",
  },
  {
    studentName: "Léa",
  },
  {
    studentName: "Bob",
  },
  {
    studentName: "Julie",
  },
  {
    studentName: "Robert",
  },
];

const week = 5;

function generateGroupOfWork() {
  for (let i = 0; i < week; i++) {
    document.write("<h1>" + "Semaine " + (i + 1) + "</h1>");

    for (let s = 0; s < student.length / 2; s++) {
      document.write("<p>" + student[s].studentName +" - " + student[student.length - 1 - s].studentName +"</p>"
      );
    }

    student.splice(1, 0, student[week]); // index 1 - student [nbSemaine]
    student.pop(); // on modifie la longueur du tableau sinon 4 et 5 groupes
  }
}

// Faire un button qui genere la fonction > ok
// Amelioration possible sur JS avec les litteraux de gabarits
// Amelioration avec string interpolation, à continuer sur Angular
