
![](./frontend/src/assets/logo.svg)

# Be The Hero

This project is a web application developed for learning ReactJS and Node technologies. 

- [About](#about)
- [Front-End](#front-end)
- [Back-End](#back-end)
	- [API](#api)
		- [Authentication](#authentication)
		- [List Organizations](#list-organizations)
		- [Incidents](#incidents)



# About

The website allows the user to sign up an Organization. Once an organization is signed up, it gets a secret id. The organization can login, post 'incidents' and list own incidents.

# Front-End
To run it:
```
	cd frontend/
	npm install
	npm start
```

The default port is 3000.

# Back-End
Back-End is a REST API built using Node with ExpressJS. Database communication is made using the knex library. The database itself is SQLite3. To run it,

```
	cd backend/
	npm install
	npm start
```

The default port is 3333.
## API
### Authentication
The authentication is made through a secret ID created at an Organization sign up.

To sign up and create an ID,

```
	POST 'host_url':3333/ongs
```

The body must be a JSON object:

```
	{
		"name": "name of organization",
		"email": "email of organization",
		"whatsapp": "whatsapp of organization",
		"city": "city of organization",
		"uf": "uf of organization"
	}
```

This request returns a JSON with ```id``` field. The user must save this id for later authentications.

To login using your ID,
```
	POST 'host_url':3333/login
```

It only allows you to verify if you have a valid ID. For further requests, your authentication is done through this same ID, at the "Authorization" header.


### List Organizations
```
	GET 'host_url':3333/ongs
```

### Incidents
If authenticated, the user can create/delete/list 'incidents', which are posts with a title, description and value. Each incident is owned by its creator.

To create an 'incident':
```
	POST 'host_url':3333/incidents
```

The body must be a JSON object:

To delete an 'incident':
```
	DELETE 'host_url':3333/incidents/:incident_id
```

To list all 'incidents' of your organization:
```
	GET 'host_url':3333/profile
```

To list a page of at most 5 incidents:

```
	GET 'host_url':3333/incidents?page=
```