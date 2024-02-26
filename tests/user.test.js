const request = require('supertest');
const app = require('../App');
const { firestoreApp, db } = require('../firebase-config');


beforeAll(async () => {
      // Runs before all tests
      // firestoreApp.firestore().collection('users').delete();
      console.log('beforeAll');
   }
);

afterAll((done) => {
   // Runs after all tests
   console.log('afterAll');
   done();
});

describe('Users CRUD operations ', () => {
   test("User get", async () => {
      const res = await request(app).get('/users');
      expect(res.statusCode).toBe(200);
   });
   
   test("User post", async () => {
      const res = await request(app).post('/users')
           .send(users[0]);
      expect(res.statusCode).toBe(201);
   });
   
   test("User put", async () => {
      const res = await request(app).put('/users' + users[0].id)
           .send({name: 'New Name'});
      expect(res.statusCode).toBe(200);
      const updated = await findById(users[0].id);
      expect(updated.name).toBe('New Name');
   });
   
   test("User get by id", async () => {
      const res = await request(app).get('/users/1');
      expect(res.statusCode).toBe(200);
   });
   
   test("User delete", async () => {
      const res = await request(app).delete('/users/' + users[0].id);
      expect(res.statusCode).toBe(200);
   });
});






// const request = require('supertest');
// const { db } = require('../firebase-config');
// const { getDocs, collection, addDoc, updateDoc, deleteDoc } = require('firebase/firestore');
// const app = require('../App');
// const express = require('express');
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

// beforeAll(async () => {
//     // Runs before all tests
//    initializeApp({
//       credential: applicationDefault(),
//    });
   
//    const data = getFirestore(); 
//    console.log('beforeAll');

// });

// afterAll((done) => {
//     // Runs after all tests
//     console.log('afterAll');
//     done();
// });


// describe('Users CRUD operations ', () => {
//  test("User get", async () => {
//     const res = await request(app).get('/users');
//     expect(res.statusCode).toBe(200);
//  });
 
//  test("User post", async () => {
//     const res = await request(app).post('/users')
//          .send(users[0]);
//     expect(res.statusCode).toBe(201);

//  });



//  test("User put", async () => {
//    const res = await request(app).put('/users' + users[0].id)
//          .send({name: 'New Name'});
//    expect(res.statusCode).toBe(200);
//    const updated = await findById(users[0].id);
//    expect(updated.name).toBe('New Name');
//  });




//  test("User get by id", async () => {
//     const res = await request(app).get('/users/1');
//     expect(res.statusCode).toBe(200);
//  });


//  test("User delete", async () => {
//     const res = await request(app).delete('/users/6');
//     expect(res.statusCode).toBe(200);
//  });

// });


const users = [
   {
      id: '1', 
      name: 'Shoham',
      email: 's@g.com',
      password: '1234',
      age: 26
   },
   {
      id: '2', 
      name: 'Shoham1',
      email: 's2@g.com',
      password: '1233',
      age: 27
   }
]



