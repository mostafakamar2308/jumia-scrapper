# Jumia Scrapper

Webscrapper of Jumia products from the official jumia website. it can scrape groceries, computers, phones and furniture from the site. each product contains title, description, image and link to it. It is created by Mostafa Kamar.

## Product Features

- Scrape title, description, image and link to products of Jumia
- Store the scrapped data locally in the data folder
- It can scrape four lists
  - Groceries
  - Computers
  - Phones
  - Furniture
- it navigate all pages of each list so you don't have to run the scrapper many times

## How to benefit from Jumia Scrapper

The scrapper gets the products and stores them locally, you can use it after that in your own side-project like your own e-commerce site. or you can store it in a database and then you can study how to control your DB to get better knowledge of how it works

## How to install

- Fork the project and star it :smile: :wink:
- clone the project to your local machine
- run `npm install` to install all the dependencies needed
- then:
  - if you don't intend to edit the project, run `npm start` to use the scrapper
  - if you are intending to edit the project, run `npm run dev` to open it using nodemon
- When you see `app listening on port 5000`, You are good to go :wink: :heart:

## How to use:

- run `npm start`
- After running the application open postman or your browser
- go to `localhost:5000` it will give you all Links to available lists if you got stuck
- for each list simply go to `localhost:5000/api/v1/"InsertListName"`
- to get specific page add the query `?page="page number"` to the end of the link
- you will find the scrapped data in the data folder in the directory of the project
- Enjoy :smile:

### I hope you enjoy it :smile: , Don't forget to star if you liked it :heart:

### I am not responsiple for any misuse of the data, the project is done only for learning purposes.
