//terminal commands

//help command //want the user to be able to type "help" with and without an argument. If the user types the "help" command wihout and argument, the terminal will output the function of "help". If the user types the "help" command with an argument the terminal will output the use case and function of the command provided as the argument"
const help = {
    desc: `help --->             The 'help' command takes another command as it's argument and displays the use case and function of that command. Here is an example of how you would use the 'help' command: \nhelp exit \n`,
    helpCmd: function(helpCmd) {
        //return helpCmd.desc;
        console.log(helpCmd.desc);
    },
};

//exit command //exits the CLI to the GUI
const exit = {
    desc: `exit --->             The 'exit' command exits the command line interface to the graphical user interface. Here is an example of how you would use the 'exit' command: \nexit \n`,
    exitError: `Error                 Looks like you've incorrecly used the 'exit' command. For help type "help -exit". \n                      If you belive this is a bug type "contact". You will be redirected to my contact page where you can report a possible bug. \n`,
    exitCmd: function(arg) {
        if (arg == "") {
        window.location.href = `https://jonportfolio.com/home/gui`;
        } else {
            return this.exitError;
        }

        console.log("testing");
    },
};

//cmds //provides a list of available commands //accepts two diferent arguments
const cmds = {
    desc: `cdms --->             The 'cmds' command displays a list of the available commands for my terminal. There are a few arguments that it takes: \n1. -s                 Displays a short list of commands (the most important ones) \n2. -v                 v for 'verbose' displays all of the available commands. \n3. *NO ARGUMENT*      By default, if an argument is not provided the 'cmds' command will only display a short list. \n\nBellow is an example of how one would use the 'cmds' command: \ncmds -s\n`,
    cmdsError: `Error                 Looks like you've incorrecly used the 'cmds' command. For help type "help -cmds". \n                      If you belive this is a bug type "contact". You will be redirected to my contact page where you can report a possible bug. \n`,
    cmdsCmd: function(arg) {
        if (arg == "-s") {
            return shortCmds; //need to make an array called "shortCmds"
        } else if (arg == "-v") {
            return verboseCmds; //need to make an array called "verboseCmds"
        } else if (arg == "") {
            return shortCmds;
        } else {
            return cmdsError;
        };
    },
}

//projects command
const projects = {
    desc: `projects --->         The 'projects' command displays a list of the projects included in this portfolio. To open a project type "cd /PROJECT". \n                      For more information on the 'cd' command, type "help cd".`,
    projectsError: `Error                 Looks like you've incorrecly used the 'projects' command. For help type "help -projects". \n                      If you belive this is a bug type "contact". You will be redirected to my contact page where you can report a possible bug. \n`,
    projectsArray: ["Nothing here yet..."],
    cmdProjects: function() {
        return console.log(projects.projectsArray.join("\n"));
    }
}
