//Compile and insert the handlebars template for previous meetups
const meetupSource = document.getElementById('previous-meetups').innerHTML;
const meetupFunc = Handlebars.compile(meetupSource);
//TODO make a good list of previous topics and meetups right now it only shows upcoming ones
const meetupContext = {meetup: [{title: "Sass and Less",
    date: "02.09.2021",
    description: "This week we\'ll be discussing and practicing using Sass and Less in your projects."},
    {title: "CSS Frameworks",
    date: "09.09.2021",
    description: "This week\'s topic is introducing different CSS frameworks. We\'ll do some basic work with bootstrap"},
    {title: "Bootstrap",
    date: "16.09.2021",
    description: "This week\'s topic is continuing with bootstrap and exploring other alternative frameworks, with their pros and cons."},
    {title: "Package Managers",
    date: "23.09.2021",
    description: "This week\'s topic: bring your laptops, we\'ll be talking about package managers and how they can help you in your workflow."},
    {title: "MEAN",
    date: "30.09.2021",
    description: "This week\'s topic is an introduction to MEAN stack. If you came last week for the discussion of package managers, we can use those to show you how quickly you can get a new development environments set up."},
    {title: "LAMP",
    date: "07.10.2021",
    description: "Last week we talked about MEAN stack. This week we\'ll be talking about the other major option, LAMP stack."}]
};
const meetupHtml = meetupFunc(meetupContext);
const meetupsList = document.getElementById('meetups-list');
meetupsList.innerHTML = meetupHtml;