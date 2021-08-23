## How to run the application

- clone the repository
- to run the project you need to have NodeJS and NPM installed on your computer

 In the project directory, you can run:

- `npm install`
- `npm start`

or you can use yarn

- `yarn install`
- `yarn start`



## Description

In README.md I added instructions how to start the application.
There are 2 fields in the application
 - 1 has "Search Input" and "Search Phrase" button, thanks to them you can search phrase in Wikipedia API
 - 2 has "Replace With Input" and buttons "Replace" and "Replace With", thanks to them you can change given phrase in list to phrase from "Replace With Input"
The application has loaders and "no results found" if there is no such result in the Wikipedia API.

As for the Wikipedia API data, I didn't use any "sanitize" and dangerouslySetInnerHTML, I just listed the text itself from the snippet.
I used Context API due to the fact that I have little time to complete the task, it would also be convenient to use Redux.

## Technologies

SASS - for styling
react-highlight-words - to highlight searched words
react-debounce-input - to make function wait until getting fired ( set the time between last function calls )
