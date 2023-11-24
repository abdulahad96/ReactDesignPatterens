import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_PERSON = gql`
  mutation CreatePerson($firstName: String, $lastName: String) {
    people(firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;


const CreatePerson =()=>{
//     const NEW_PERSON = gql`
//     mutation Create($firstName:String!,$lastName:String!){
//         # deletePeople(id:"65546f2988ee8f663ef035b9") {
//         #   firstName
//         #   lastName
//         #   id
//         # }
        
//         people(firstName:$firstName,lastName:$lastName){
//           firstName,
//           lastName
//         }
//       }
//   `;
// //     const DELETE_PERSON = gql`
// //     mutation Create{
// //          deletePeople(id:${(id)=>}) {
// //            firstName
// //            lastName
// //            id
// //          }
        
       
// //       }
// //   `;
const [createPerson] = useMutation(CREATE_PERSON);
const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const handleCreatePerson = async () => {
    console.log(firstName,lastName)
    try {
      const { data } = await createPerson({
        variables: { firstName: firstName, lastName: lastName},
      });
      console.log('Created person:', data.people);
    } catch (error) {
      console.error('Error creating person:', error.message);
    }
  };


    return (<>
   {/* <form onSubmit={handleCreatePerson}> */}
        <input
          className="input"
          type="text"
          onChange={(e)=>{setFirstName(e.target.value)}}
          placeholder="first name"
          required
          />
        <input
          className="input"
          type="text"
          onChange={(e)=>{setLastName(e.target.value)}}
          placeholder="Last name"
          required
        />
        <button onClick={handleCreatePerson}>
          add
        </button>
      {/* </form> */}
    </>)
}
export default CreatePerson;