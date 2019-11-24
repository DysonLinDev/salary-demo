# salary-demo

- A simple demo for calculate monthly wave

# Assumptions

- All names are in english characters
- Using Austrailian number format.
- Using remote mySQL.

# tech stack:

- frontend: react
- backend: hapijs

## Reason

- It's easier to maintain and develop features on frontend and backend with same lanuage,
- React is based on reusable component and lite library. Also have a active community support.
- Hapijs is a config-based framework and the core is nodejs. It's scalable, stable and flexible.
- Use remote mySQL which is good for develop and demo.

# Setup steps

## client

- `cd client`
- `nvm use v9.3.0` or use any node version > v9.3.0
- `yarn install`
- `yarn start`

## server

- `cd server`
- `nvm use v9.3.0` or use any node version > v9.3.0
- `yarn install`
- `yarn start`

### test

- `yarn test`

# documents

- put backend at port 3006 / frontend at port 3000 for dev

# file stucture

## client

- reducers: event triggers
- sagas: handle logics or flows
- apis: all API or services
- components: all components
- containers: all pages
- public: all public assets

## server

- routes: routing / validation
- controllers: business logic
- models: middleware before database or ORM
- test: all test case.

# TODOs

- list test case (business logic)
