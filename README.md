# Spotifly - Top Tracks Microservice

This project consisted of scaling and optimizing the back-end an existing Music Player web application using a microservices-oriented architecture. Using tools such as Node.js, Postgres, Redis, AWS RDS (Relational Database Service), AWS ElastiCache (for our hosted Redis cluster), New Relic, our team was able to opimize lookup times by 400% and serve over 1,000 requests per second with over 10 million database entries. 

This microservice consisted of the serving Top Tracks associated with an individual artist.

![User Reviews Screenshot](screenshots/reviews.png)

## Table of Contents

- [Spotifly - Top Tracks Microservice](#spotifly---top-tracks-microservice)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Running the tests](#running-the-tests)
    - [End to end testing](#end-to-end-testing)
    - [Coding style](#coding-style)
  - [Deployment](#deployment)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Related Projects](#related-projects)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Installing

In order to install project dependencies, please run the following from the root directory.

```
npm install
```


## Running the tests

To run individual test with Jest:
```
npm run test
```

To run continuous test with Jest:
```
npm run test:watch
```

To run code coverage tests with Jest:
```
npm run test:coverage
```

### Coding style

Our codebase utilized ESLint along with the AirBnB style guide to make sure our coding conformed to the rigorous style standards industry code. Our code remained fully up-to-date with the A11y accessibility requirements in order to provide all users with a positive experience on our page.

## Deployment

Our deployment process consisted of using Docker to containerize our web application, which we uploaded to Amazon's ECR registry service. We used our Docker images to spin up four instances of our application using AWS's EC2/ECS horizontal scaling architecture.

## Built With

* [Node.js](https://nodejs.org/en/) - Server-side language
* [Express.js](https://expressjs.com/) - Server-side framework used
* [PostgreSQL](https://www.postgresql.org/) - Relational data store
* [AWS RDS](https://aws.amazon.com/rds/) - Database hosting solution
* [Redis](https://redis.io/) - In-memory caching solution
* [AWS ElastiCache](https://aws.amazon.com/elasticache/) - Hosting solution for Redis cluster
* [AWS EC2](https://aws.amazon.com/ec2/) - Cloud scaling solution
* [AWS ECS](https://aws.amazon.com/ecs/) - Container orchestration service
* [New Relic](https://newrelic.com/) - API performance monitoring solution
* [Artillery.io](https://artillery.io/) - Load testing solution
* [React.js](https://reactjs.org) - Front-end framework used
* [SCSS](https://sass-lang.com/) - CSS preprocessor

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Related Projects

  - https://github.com/gaborszekely/Spotifly---Proxy-Server
  - https://github.com/teamthriller/ian-header-component
  - https://github.com/teamthriller/related-artists-client
  - https://github.com/teamthriller/Pete_SDC
  - https://github.com/teamthriller/Rick-SDC

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Gabor Szekely** - *Project lead* - [gaborszekely](https://github.com/gaborszekely)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
