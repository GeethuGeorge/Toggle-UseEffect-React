import { useEffect } from "react";

const Title = ({ user }) => {
    //useEffect
    useEffect(() => {
        let interval = setInterval(() => {
            console.log("Mounting");
        }, 2000);
        return () => {
            console.log("Unmounting");
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="Title">
         <h3>Welcome {user}</h3>   
        </div>
    );
};

export default Title;
