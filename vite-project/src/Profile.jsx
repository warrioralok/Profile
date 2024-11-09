import { ProfileCard } from "./component/Profilecard";
function Profile(){
    return (
        <>
            <ProfileCard
                name="alok" 
                age={25}
                greeting={
                <div>
                    <strong>Hello Alok, Please work harder</strong>
                </div>
                }>
                <p>Hobboies: Coding</p>
                <button>ContactUS</button>
                
            </ProfileCard>
        </>
    )
}

export default Profile;