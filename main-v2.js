//set up all three sections as arrays

//set up function to print cards based on array selected info.

//"overview" button to print array[0] card, then clicking topics should/will open full cards 

//const projects
//  title: "Cool Project", 
//  screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
//  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
//  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
//  available: true,
//  url: "https://github.com/jacob-bw/personal-bio-site", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//  githubUrl: "https://github.com/jacob-bw"

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

//const bio
//    highlight: 'first sentence goes here',
//    moreDetail: 'expand on timeframe',
//    time: ['early', 'recent', 'present', 'future']

const bio = [
    {
        highlight: 'I grew up just outside of Nashville in Cheatham County.',
        moreDetail: 'I am the oldest of five, and was homeschooled k-12',
        time: 'early',
    },
    {
        highlight: 'I worked in restaurants for almost 10 years as a cook, including serving as sous chef for multiple restaurants',
        moreDetail: 'When my wife and I had our first child, we realized that restaurants were not a sustainable career path for the life that we wanted.',
        time: 'recent',
    },
    {
        highlight: 'I have been working at Eventbrite since October 2017 in Customer Experience.',
        moreDetail: 'Since April of 2019, I have been working with our External Developer Support team, assisting outside users who are creating third party integrations through our API.',
        time: 'present',
    },
    {
        highlight: 'I have loved learning to code because I enjoy all the different ways there are to correctly solve the same problem.',
        moreDetail: 'Coding is just cyberpunk legos. I would love to transition into a career where I can build tools and solve problems for a living. Getting to exercise creativity in problem solving is my absolute shit and I *clap* want *clap* to *clap* do that shit for real *clap clap clap clap clap*',
        time: 'future',
    },
];


//const technologies
//    name: '',
//    logo: '',
//    type: 'language', 'tool', 'je-ne-sais-quoi'

const technologies = [
    {
        name: 'CSS',
        logo: '',
        type: 'language'
    },
    {
        name: 'HTML',
        logo: '',
        type: 'language'
    },
    {
        name: 'JavaScript',
        logo: '',
        type: 'language'
    },
    {
        name: 'Visual Studio Code',
        logo: '',
        type: 'tool',
    },
    {
        name: 'Flexbox',
        logo: '',
        type: 'tool',
    },
    {
        name: 'Bootstrap',
        logo: '',
        type: 'tool',
    },
    {
        name: 'Github',
        logo: '',
        type: 'tool',
    }
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const contactCard =
<div class="card">
  <div class="card-header">
    Contact
  </div>
  <div class="card-body">
    <h5 class="card-title">Contact Info</h5>
    <p class="card-text"><a href="mailto: wittenberg.jacob@gmail.com">Email: wittenberg.jacob@gmail.com</a></p>
    <p class="card-text"><a href="https://github.com/jacob-bw">github</a></p>
    <p class="card-text"><a href="not-yet">linkdin</a></p>
  </div>
</div>
