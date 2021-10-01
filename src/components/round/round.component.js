// import React, { useEffect, useState } from 'react';
// import Category from '../category/category.component';
// import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { store } from '../../store/index';
// import addNewRound from '../../store/reducers/index'
// import { addRound } from '../../store/actions/index';
// // The application will track the users total score for this round

// const Round = ({ currentRound, setCurrentRound }) => {
//   const dispatch = useDispatch()

//   const [currentCategory, setCurrentCategory] = useState();
  
//   const createRound = () => {
//     const newRound = {
//       correctAnswers: [],
//       currentQuestion: {},
//       incorrectAnswers: [],
//       isComplete: false,
//       previousCategories: [],
//       }
//     dispatch(addRound(newRound, addNewRound))
//     }
    
//     useEffect(() => {
//       if () {
        
//       }
//       createRound();
//     }, [])
    
//     return (
//       <div>
//        <Category currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} /> 
//       </div>
//     )
//   };
 
// const mapStateToProps = () => {
//   return store.getState()
// }

// export default connect(mapStateToProps)(Round);