const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    email: String
    bookcount: INT
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    addUser(username: String, password: String, email: String): Auth
    login(email: String, password: String): Auth
    saveBook(bookData: BookInput): User
    removeBook(bookId: ID): User
  }
`;

module.exports = typeDefs;
// QUERIES - GETS
