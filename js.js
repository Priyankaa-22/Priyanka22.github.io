


let downloadResume=()=> {
   
    var resumeUrl = "./Priyankagaidhane_CV.pdf";
    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = "./Priyankagaidhane_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

