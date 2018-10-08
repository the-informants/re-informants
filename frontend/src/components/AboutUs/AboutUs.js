import React, {Component} from 'react';
import '../../App.css';
import pic1 from '../Shared/images/keller.jpg'
import pic2 from '../Shared/images/architecture-buildings-colorful-164338-small.jpg'

export default class AboutUs extends Component {
    render (){
        return(
            <div className="container">
                <div className="PageTitle">
                    <h1>About Us</h1>
                </div>
                <p class="mar-top">
                    Rebands is a mission-driven organization helping home buyers, sellers, renters and landlords to confirm their transactions after talking with real people who live in their target neighborhoods. The three founders of Rebands come together with a unique blend of engineering, sales, marketing and operational experience. 
                </p>
                <h3 class="mar-top">Origin Story</h3>
                <div>
                    <p>
                        The idea behind Rebands began in 2005 when Chris, bought his first home. At that time, homes were selling days or hours after being listed and buyers had to act quick or risk losing the home to another. Within 1.5 days of arriving in his target city, Chris and his wife had searched through 50 home listing printouts, looked at 16 homes and had made an offer that was accepted. Wow! Prior to that moment, the most expensive thing Chris had ever purchased was his BA degree, a quarter of the home price. The sticker shock was painful and left Chris hoping they made the right decision. He knew no more about his new neighborhood than what he saw in that brief visit.
                    </p>
                    <p>
                    <div>
                        <img src={pic2} class="float-right img-fluid mar-left30"/>
                    </div>
                        The next time Chris moved, he rented first to give him time to know the neighborhood. Subsequent home searches included lots of door knocking and feet-on-the-street efforts to know the church groups, the home association and the actual neighbors of the target homes. But that isn't feasible for most buyers and Chris settled on a better way. 
                    </p>
                    <p>
                        Fast forward to 2018, Chris, Shane and Lin are developing a network platform for buyers and renters to find local home owners who can provide neighborhood references to quickly validate and confirm what you can only find from local people living in your target neighborhood,namely the feel of the community.
                    </p>
                    <p>
                        Smart employers would never hire a person without calling his references. Home buying is perhaps the biggest purchase a person will make. Why is it then that so many buyers transact without calling neighborhood references? We think there is a better way. Plus a growing body of social research suggests that the 'kindness of strangers' leads unknown people to provide honest, insightful and forthcoming advice to another with whom they have no prior relationship. Try the system, satisfaction guaranteed, and we will show you just how valuable another's experience is for your home buying or renting decision. 
                    </p>
                    </div>
                    <h3 class="mar-top">Founders</h3>
                                 
                    <p>
                        {/* <img src={pic1} class="float-left img-fluid mar-right30" /> */}
                        Chris has spent an 18-year marketing career building five other people's high tech startups while incubating his own across nearly 30 years. His skills are especially strong in project management, and product development.
                    </p>
            
                <p>
                    Lin is a SQL datawarehouse and business intelligence genius having spent nearly a decade in BI, analytics and data warehousing. His education is in finance. Shane rounds out the founders as perhaps the smartest guy in the circle. He won't confirm this truth, but so far it has been our experience.
                </p>
                <p>
                    Shane is a math whiz, a software engineer with a mechanical engineering degree. He has a unique knack for solving the most grueling logic problems in no time flat. The three found each other in a local bootcamp and united around the mission and vison of solving big problems using software. Each are home owners and have unique, but similar perspective about the challenging of information dissonance when it comes to making good real estate decisions. 
                </p>
            </div>
        )
    }
}
