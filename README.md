# salary-demo
- A simple demo for calculate monthly wave

# Assumptions
- All names are in english characters
- Using Austrailian number format.
- Using local json file to install for demo ( or firebase)

# tech stack:
- frontend: react
- backend: hapijs

## Reason 
- It's easier to maintain and develop features on frontend and backend with same lanuage,
- React is based on reusable component and lite library. Also have a active community support.
- Hapijs is a config-based framework and the core is nodejs. It's scalable, stable and flexible.

# Setup steps
## client
- `cd client`
- `nvm use v9.3.0` or use any node version > v9.3.0
- `yarn install` or `npm install`
- `yarn start` or `npm run start`

## server
- `cd server`
- `nvm use v9.3.0` or use any node version > v9.3.0
- `yarn install` or `npm install`
- `yarn start` or `npm run start`

# documents
- put backend at port 3006 / frontend at port 3000 for dev

# file stucture
## client
- redux: event triggers
- sagas: handle logics or flows
- apis: all API or services
- components: all components
- containers: all pages 
- public: all public assets

## server
- routing: routing / validation
- controllers: business logic 
- models: middleware before database or ORM

# TODOs
- list test case (business logic)
- E2E testing
