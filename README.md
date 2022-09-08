<h1 align="center">Weather Dashboard</h1>

<div align="center">

![Github Action Pipeline Status](https://github.com/vanthonglee/weather-app/actions/workflows/node.js.yml/badge.svg)

</div>

<div align="center">

![ts](https://img.shields.io/badge/TypeScript%20-%23F7DF1E.svg?logo=typescript&logoColor=white&color=3178C6)
![react](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)
![redux-saga](https://img.shields.io/badge/Redux%20Saga-86D46B?logo=redux%20saga&logoColor=white&color=74C417)
![mui](https://img.shields.io/badge/Material%20UI-007FFF?logo=mui&logoColor=white)
![storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)
![jest](https://img.shields.io/badge/Jest%20-%23F7DF1E.svg?logo=jest&logoColor=white&color=74C417)
![cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white)
![license](https://img.shields.io/github/license/rbiedrawa/kafka-monitoring)

</div>

********

## Table of Content

<!-- toc -->

- [About](#about)
    * [Features](#features)
    * [Project Structure](#project-structure)
- [How To Run This Project](#how-to-run-this-project)
- [Design Patterns](#design-patterns)
- [Todos In Future](#todo-in-future)


<!-- tocstop -->

## About

<div align="center">

![nab-weather](https://user-images.githubusercontent.com/5722599/189049202-2ef13946-b1eb-4373-8f0d-d4bf7e492c18.gif)

</div>    

### Features

1. [React.js](https://reactjs.org/) Using Create-React-App
2. [Typescript](https://www.typescriptlang.org/) for type safety
3. Core libraries
    * [Redux](https://redux.js.org/)
    * [Redux Toolkit](https://redux-toolkit.js.org/)
    * [Redux Saga](https://redux-saga.js.org/)
    * [Redux First History](https://github.com/salvoravida/redux-first-history)
    * [Redux Logger](https://github.com/LogRocket/redux-logger)
    * [React Router](https://reactrouter.com/)
    * [React Hook Form](https://react-hook-form.com/)
    * [Axios](https://github.com/axios/axios)
    * [React-i18next](https://react.i18next.com/)
    * [MUI - Material UI](https://mui.com/)
    * [Styled Components](https://styled-components.com/)
4. Test libraries
    * [Jest](https://jestjs.io/)
    * [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
    * [Redux Saga Test Plan](https://github.com/jfairbank/redux-saga-test-plan)
    * [Cypress](https://www.cypress.io/)
5. Other tools/libraries
    * [StoryBook](https://storybook.js.org/)
    * [Mock Service Worker](https://mswjs.io/)
    * [ESLint](https://eslint.org/), [Prettier](https://eslint.org/)
      , [Lint-staged](https://github.com/okonet/lint-staged), [Pretty Quick](https://github.com/azz/pretty-quick)
    * [Husky](https://typicode.github.io/husky/#/)
    * [Commitlint](https://commitlint.js.org/#/)
    * [Semantic Release](https://github.com/semantic-release/semantic-release)
6. Opinionated folder structure
7. Internationalization for react app using [React-i18next](https://react.i18next.com/)
8. Material UI Dark Mode support

### Project Structure

```shell
./src
├── App.tsx # Application entrypoint
├── assets # assets folder contains all the static files (images, fonts, etc).
├── components # shared components
├── config # global configuration, env variables etc.
│   ├── Env.ts
│   └── i18n
├── features
│   ├── feature # 'feature'
│   │   ├── api # API folder contains http service calls
│   │   ├── assets # 'feature' assets folder
│   │   ├── components # 'feature' components
│   │   ├── hooks # 'feature' hooks
│   │   ├── index.ts # entry point for 'feature' public API
│   │   ├── store # 'feature' state stores contains slices, sagas, etc.
│   │   └── types # 'feature' typescript types
│   └── another_feature # 'another_feature'
├── hooks # shared hooks
├── libs # libraries imported or exported that can be used in different projects
│   ├── core
│   └── ui
├── pages  # contains all application pages
├── routes # routes configuration
├── store # root store and store settings
└── test/ # contains test utilities and Mock Service Worker setup
    └── msw
```
## How To Run This Project

1. Fork/clone this repo to your local machine
   
2. Use yarn to install dependencies
   
   `yarn install`
   
3. Start the development server

   `yarn start`

## Design Patterns

My project try to follow these design patterns:

1. Flux 

2. Container-View Pattern 

3. Atomic design

## Todos In Future

- [ ] Improve Test Coverage > 80%
- [ ] Apply Security Best Practices
- [ ] Benchmark Web Performance and Improve Performance
- [ ] Improve CI/CD pipelines