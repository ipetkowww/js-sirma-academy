function universityAdmissions(score, extracurriculars) {
  if (score >= 90) {
    console.log("Admitted");
  } else if (score >= 80 && score <= 89) {
    if (extracurriculars >= 2) {
      console.log("Admitted");
    } else {
      console.log("Not admitted");
    }
  } else {
    console.log("Not admitted");
  }
}

universityAdmissions(85, 3);
universityAdmissions(88, 1);
universityAdmissions(91, 0);
universityAdmissions(75, 12);
