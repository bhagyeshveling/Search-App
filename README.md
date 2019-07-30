# search-app
A webapp that gives the list of repositories of a user by typing a userid
   Instructions :- 
1. for ionic application, npm is required. So npm needs to be installed.
2. ionic is installed using cli (Command Line Interface). The command is -
       npm install -g ionic
3. to create project, you need to be inside the project directory. 
4. then the project is created using the command as -
       ionic start project_name
5. to run the ionic application type the following command- 
       ionic serve 
   (this command opens the server and the port is 8000.)
   Working of the application - 
a. on entering github user id on a search bar, it fetches all the public repositories of that particular user id.
b. if the user id is not valid, it throws error and the message is displayed as  - 
     "Please enter a valid user id"
c. if user id exists but none of the repositories are found of that user id, error message is thrown as -
     "No repository for this user id"
  
