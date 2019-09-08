//ok. Second iteration of this project

//re-structure all content from html as info in arrays, with three different classes and for sorting; projects, bio, and tehcnologies

//in


const projects = [
    {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/jacob-bw/personal-bio-site", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/jacob-bw"
    },
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const createProjectCards = (projectsArray) => {
    let domString = ''
  for (let i = 0; i < projectsArray.length; i++) {
      const project = projectsArray[i]
      domString += `
      <div class="card">
          <h2>${project.title}</h2>
          <img src=${project.screenshot} alt='Screenshot from ${project.title}' />
          <p>${project.description}</p>
          <h4>${project.technologiesUsed}</h4>
          <h3>${project.url}</h3>
          <h4>${project.githubUrl}<h4>
      </div>
      `
  }
  printToDom(domString, 'projectsPage')
}

const buttonClick = (e) => {
  const available = e.target.id
  const selectedprojects = []
  for (let i = 0; i < projects.length; i ++) {
      const project = projects[i]
      if (project.available === available) {
          selectedprojects.push(project)
      }
  }

  if (available === 'all') {
      createProjectCards(projects);
    } else {
      createProjectCards(selectedprojects);
    }
}

createProjectCards(projects);