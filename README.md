# Note app

## requirements
Create a React application that shows a list of notes with note details that are
stored in the local storage

## Build
React App was created using vite and uses Typescript

## Project features

- Notes are stored in the browser localStorage
- Add new note button
- Search notes input
- Edit and Delete functionality on the individual note items

## Project Structure

- **assets** - svg files used in the project
- **components** 
- **context** - Notes and Modal contexts
- **data** - file containing initial dummy data
- **hooks** - custom hooks
- **styles** - global styles and mixins

### Components

Components are organized in folders and use a structure like:

- **Component.tsx** component code
- **Component.type.ts** component types
- **Component.style.ts** component styles using styled-components

### Typescript
Features used:
- Interfaces and Types
- baseUrl and paths to define constants for paths (ex. @components, @hooks...)

### Styling components

- styled-components
- TailwindCSS

