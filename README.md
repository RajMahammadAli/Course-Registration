<h1>Top 3 features of my project:</h1><br/>
<ul>
  <li><b>Course Selection:</b> Users can browse and select from a variety of courses displayed in cards. The selected courses are added to the cart, where users can review their choices.</li>
  <li><b>Real-time Validation:</b> The application provides real-time validation to ensure that the total duration of the selected courses does not exceed 20 units. If the limit is reached, users receive feedback, preventing them from adding more courses.</li>
  <li><b>Duplicate Course Detection:</b> To prevent redundancy, the app checks if a course has already been added to the cart. If a user attempts to add a course that is already in the cart, a notification is displayed, ensuring that courses are not duplicated.</li>
</ul>
<h1>How I managed State</h1>
<p>In this project, I efficiently managed application state using React's built-in state management capabilities. The primary state management techniques employed are as follows:</p>
<ul>
  <li><b>useState Hook:</b>I utilized the useState hook to create and manage local state variables within our functional components. For instance, we used it to maintain state for the selected course titles, the total duration of selected courses, and the course array in the cart.</li>
  <li><b>Conditional Rendering:</b> Conditional rendering is employed to update the UI based on the state. I dynamically display or hide components, such as the course cards and cart, based on the user's interactions and the current state of the application.</li>
  <li><b>State Updates:</b>I ensured that state updates are performed immutably to maintain data integrity. When adding a course to the cart or updating the selected titles and total duration, we created new arrays or objects based on the existing state, thus preserving the previous state and preventing unexpected side effects.</li>
  <li><b>Feedback Mechanisms: </b>State management also plays a crucial role in providing user feedback. For instance, I trigger toast notifications using the react-toastify library when certain conditions are met, such as attempting to add a duplicate course or exceeding the total duration limit.</li>
</ul>
