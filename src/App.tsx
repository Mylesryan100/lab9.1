//import { log } from 'console';
import Section from './components/Section'
import { useState } from "react";
import { AlertBox } from "./components/AlertBox";
import  UserProfileCard  from "./components/UserProfileCard";
import Button from './components/Button';


function App() {
  const [showAlert, setShowAlert] = useState(true);

  const user = {
    id: "1",
    name: "Myles Feliciano",
    email: "felicianomyles005@gmail.com",
    role: " Full Stack Developer",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  };

  
const handleEdit = (userId: string) => {
    alert(`Edit user with ID: ${userId}`);
  };

  <UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={handleEdit} 
></UserProfileCard>




  return (
    <main className='bg-stone-900 text-white'>
      <h1 className='text-4'>Component Library</h1>

      {showAlert && (
        <AlertBox
          type="error"
          message="Something went wrong! Try again later."
          onClose={() => setShowAlert(false)}
        >

      <Section title='Section 1'>
        <p></p>

      </Section>

      <Section title='Section 2'>
        <h3>Subheader</h3>
        <p></p>
      </Section>
    
      <Section title="Buttons">
        <div className='grid grid-cols-3'>
        <Button text='Click me!' />
        <Button text='Submit' type='submit' onClick={() => console.log('Submit')}/>
        <Button text='Reset' type='reset' disabled={true} onClick={() => console.log('Reset')}/>
        <Button text='Disabled' type='reset' disabled={true} onClick={() => console.log('Disabled')}/>
          
        </div>
      </Section>

      <button
            className="mt-2 bg-red-600 text-white px-3 py-1 rounded"
            onClick={() => alert("Retry action")}
          >
            Retry
          </button>
        </AlertBox>
      )}



<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => alert(`Editing user ${userId}`)}
></UserProfileCard>

    </main>

    //<button className="text-sm text-blue-600 hover:underline">
     //     View Profile
      //  </button>
    //  </UserProfileCard>
  );
}


export default App;