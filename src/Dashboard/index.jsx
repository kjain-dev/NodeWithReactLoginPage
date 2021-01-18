import React from 'react';
 
function Dashboard(props) {
    const user = localStorage.getItem('username')
  return (
    <div>
      <h3>Welcome !! {user}</h3>
    </div>
  );
}
 
export default Dashboard;
