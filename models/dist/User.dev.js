"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id:{
      type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return User;
}; // async function createUser(firstName,lastName,email){
//     try{
//         const user= await User.create({
//             firstName:firstName,
//             lastName:lastName,
//             email:email
//          });
//          console.log('User Created',user.toJSON());
//     }
//     catch(error){
//         console.error('Error while Creating User', error);
//     }
// }
// createUser('Shantanu','Badgujar','shantanu.23@outlook.com');
// async function getUser(){
//     try{
//         const users=await User.findAll();
//         console.log('all users :', Users.map(user=>user.toJSON()));
//     }
//     catch(error) {
//         console.error("Error getting the users", error);
//     }
// }
// getUser();
// async function updateUser(id, newData) {
//     try {
//       const user = await User.findByPk(id);
//       if (!user) {
//         console.log('User not found');
//         return;
//       }
//       await user.update(newData);
//       console.log('User updated successfully:', user.toJSON());
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   }
//   updateUser(1, { firstName: 'Shanzo', lastName:'B' });