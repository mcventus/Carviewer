# Project Overview

# CarViewer
CarViewer: Project II

**Project description:** 

Using can viwer you can search for the car you are interested in and view the cars specifications together with other extra relevant details.

## Trello
   https://trello.com/invite/b/b2lv92Wu/ATTI7f904cde7e0fd585c3f8d56ca902df64E0CF6E4C/carviewer

## Figma

- https://www.figma.com/file/jpBmuEO7viY9hAyoyWGUR1/Untitled?node-id=1%3A8&t=zMmkK0MbNUVF7fST-1

## Components

- Major project components:
  - Data responsible for for processing API calls
  - Header to contain title and Nav component 
  - Home to serve as landing page
  - Main responsible for routing 
  - Nav as navigation bar for components 
  - Footer to contain copyright information 

### MVP

- The landing page will give general information on how to use the react app
- when user views the landing page there must be a search bar avaliable to view images
- once the user write int the search bar to look for vehcile information, the react app must display all primary data 
- if the user clicks on one of the listed vehicle data then the user must be able to view detailed information about the vehicle or car 
- All the above happens on the main component and when user wants to go to listing component, there must be a button to click to go back 

## Additional Requirements

- there will be a register and login components available for the user
- when user login and search for car data his search history could be saved to be available when user login another time
- background music must play to make the game interesting

## Wireframe: Priority Matrix
   
   https://wireframe.cc/QF9UtU


## Project Schedule

|  Day | Activities | Done
|---|---| ---|
|Feb 24| Brainstorming / Writing Pseudocodes / Identifying All Constraints | Yes
|Feb 24-25| Setting up project components/ Testing if each components are functioning with out error | Yes
|Feb 26-27| Implementing major functions and use react cross-component communicators or built in functions to save application data states and control life cycle of project components  | yes
|Feb 28| Finising up the application, testing and deploying  | No



## Additional Libraries Plugins and APIs

- Axios which is used to communicate with the backend and it also supports the Promise API that is native to JS ES6. It is a library which is used to make requests to an API, return data from the API, and then do things with that data in our React application.
- Google font API - used for styling fonts 



## Problems and Solutions 

- Difficult to find good car API that provides both text and image data 

## Code Snippet

Smooth implementation of functions and calling them at runtime


```
  const datanum = useContext(CarDataContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const setOptionsParam = () => {
    Object.entries(datanum.options).map(([key, value]) => {
      if (key === "params") {
        Object.entries(datanum.options.params).map(([key, value]) => {
          // API works only with make to get data so no search option is
          // was possible however it could have been done this way
          switch (key) {
            case "make":
              value = searchText;
              datanum.options.params.make = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "model":
              value = searchText;
              datanum.options.params.model = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "type":
              value = searchText;
              datanum.options.params.type = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "id":
              value = searchText;
              datanum.options.params.id = value;
              datanum.setOptions({ ...datanum.options });
              break;
            case "year":
              value = searchText;
              datanum.options.params.year = value;
              datanum.setOptions({ ...datanum.options });
          }
        });
      }
    });
  };

```

## Surge Deployment Link

- Major components such as Home, About, Login, Logout and other aplication specific components added.


## Change Log
- ... no changes yet ...

## NOTICE 
- External Libraries, APIS, and other resources used to complete this react project.

## Report Format Example
- Taken from the Teacher's repository. 
- All REFERENCES and RESOURCES will be found in "references.json" file.