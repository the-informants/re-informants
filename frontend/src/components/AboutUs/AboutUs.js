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
                    Smart employers would never hire a person without calling her or his references. Yet the same thing happens in real estate despite home buying being perhaps the biggest purchase a person will make. Why is it then that so many buyers transact without calling neighborhood references? Well, it isn't easy or efficient to find neighbors to a target home. But, we think there is a better way to organize neighborhood experts into a searchable network. Plus a growing body of social research has proven the 'strengths of weak ties' is highly effective. That theory suggests that strangers will provide honest, insightful and forthcoming advice to another with whom they have no prior relationship.</p>
                <p>
                    Our early pilots are confirming these behaviors to be true. Try the system and see for yourself. If you are not satisfied with your results, we will refund your money. So there is no risk to try out the service to confirm your next home buying or renting decision. 
                </p>
                <h3 class="mar-top">Founders</h3>               
                <p>
                    {/* <img src={pic1} class="float-left img-fluid mar-right30" /> */}
                    Chris has spent more than a decade building five other people's high tech startups while incubating his own across nearly 30 years. Chris has a BA in Marketing Communications, an MBA and a number of years studying real estate. He is a product, content and demand generation marketer with a keen eye for user experience design.
                </p>
                <p>
                    Lin is a SQL datawarehouse and business intelligence genius having spent nearly a decade in BI, analytics and data warehousing. Lin speaks SQL as fluently as English and Mandarin. Lin is a data analyst, architect and BI visualizatiion developer. Lin has a BS in finance. Lin is also a landlord owning several investment properties. 
                </p>
                <p>
                    Shane is perhaps the smartest guy in whichever circle he finds himself though he won't confirm this truth. With honors, he graduated with a BS in Mechanical Engineering. Shane is a math whiz with a unique knack for solving the most grueling logic problems in no time flat. Shane has expertise using apis to ingest external data. 
                </p>
                <p>
                    The three founders met in a local bootcamp and united around the rebands mission and vison. Each are home owners and have unique, but similar perspective about the challenging of information dissonance when it comes to making good real estate decisions. 
                </p>
            </div>
        )
    }
}
