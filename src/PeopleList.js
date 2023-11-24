import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

const GET_PEOPLE = gql`
  query {
    people {
      id
      firstName
      lastName
    }
  }
`;
const DELETE_PERSON = gql`
  mutation DeletePerson($id: ID!) {
    deletePeople(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

const PeopleList = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE);

  const [deletePerson] = useMutation(DELETE_PERSON);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleDeletePerson = async (id) => {
    try {
      const { data } = await deletePerson({
        variables: { id },
      });
      console.log('Deleted person:', data.deletePeople);
    } catch (error) {
      console.error('Error deleting person:', error.message);
    }
  };

  return (
    <div>
      <h2>People List</h2>
      <ul>
        {data.people.map(person => (
          <li key={person.id} onClick={()=>{handleDeletePerson(person.id)}}>
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;