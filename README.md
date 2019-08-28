# I-Love-Me Post Service

A microservice for management of Posts in the I Love Me Book

## Running

Requires docker. `docker-compose build dev`, `docker-compose run --rm dev npm run migrate` and `docker-compose up dev` should get you up and running.

## Testing

None at the moment... there is no business logic. Resolvers simply point directly to sequelize methods.
