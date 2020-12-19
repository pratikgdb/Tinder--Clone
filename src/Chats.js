import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
              name="Heidi" 
              message="Hey! how are you"
              timestamp="35 seconds ago"
              profilePic="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F8d178254-47a4-11e7-a901-fbc155c10c07.jpg?crop=800%2C1000%2C350%2C0"
            />
            <Chat 
              name="Alesha" 
              message="Whats up!"
              timestamp="55 seconds ago"
              profilePic="https://i2-prod.manchestereveningnews.co.uk/incoming/article17042817.ece/ALTERNATES/s1200c/0_The-BRIT-Awards-2018-Red-Carpet-Arrivals.jpg"
            />
            <Chat 
              name="Sofia" 
              message="Ola!"
              timestamp="3 days ago"
              profilePic="https://media.allure.com/photos/5ba26c76135b333b10dff06d/master/pass/sofia-vergara-plastic-surgery-rumors.jpg"
            />
            <Chat 
              name="Julianne" 
              message="Oops there is she is..."
              timestamp="1 week ago"
              profilePic="https://pyxis.nymag.com/v1/imgs/275/bd3/6c4d9986a2a70563c49ce822f85c0a1847-24-julianne-hough.rvertical.w1200.jpg"
            />
        </div>
    );
}

export default Chats;
