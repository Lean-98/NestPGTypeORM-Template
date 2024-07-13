<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This project brings together everything needed to work with PostgreSQL using TypeORM and at the same time an authentication with JWT and roles loaded.

## Used Packages

`@nestjs/common`
`@nestjs/config`
`@nestjs/core`
`@nestjs/mapped-types`
`@nestjs/passport`
`@nestjs/platform-express`
`@nestjs/swagger`
`@nestjs/typeorm`
`bcrypt`
`class-transformer`
`class-validator`
`joi`
`passport`
`pg`
`reflect-metadata`
`rxjs`
`typeorm`
`uuid`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Clone the project

1. git clone (URL SSH)
2. Run `npm i`
3. Clone the `.env.template` file and rename it to `.env`
4. Update the environment variables
5. Download the Docker image (this is done only once)
   `docker pull postgres:15.3`
6. Start the database:
   `docker compose up -d`
