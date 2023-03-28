# Trochus back

## Prerequisite
- Node : [https://nodejs.org/en](https://nodejs.org/en)
- PostgreSQL : [https://www.postgresql.org/](https://www.postgresql.org/)
## Installation
### Project
- Clone this repository
```
git clone git@github.com:simon-pelletier/trochus-back.git
```
- Install dependencies with NPM
```
npm i
```
- Copy .env.example as .env and fill it.

### Database
/!\ NOTE : sequelize-cli is a local dependancy but depending on your environment you will need to install it globally.

- Create Database
```
sequelize db:create
```
- Run migrations
```
sequelize db:migrate
```
- Seed the database
```
sequelize db:seed:all
```

/!\ If need to reset the database (DROP)
```
npm run resetdb
```

## Run the server
```
npm start
```