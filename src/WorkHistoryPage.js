import React, { Component } from 'react';
import NavSite from './NavSite'
import WorkHistoryItem from './WorkHistoryItem'
class WorkHistoryPage extends Component {

    render() {
        return (
            <div>

                <header>
                    <NavSite />
                    <h1>Josh's Work History</h1>
                </header>

                <section>

                    <WorkHistoryItem company="SoFi" position="Communications Escalations Specialist" dates=" 2017-2018"
                        responsibility1="Answer Phones"
                        responsibility2="Field Email Correspondence"
                        responsibility3="Calm Angry Customers" />
                </section>
                <section>
                    <WorkHistoryItem company="Comcast" position="Communications Escalations Specialist" dates=" 2017-2018"
                        responsibility1="Outbound Calls"
                        responsibility2="Explain bills"
                        responsibility3="Collect dollas" />
                </section>
                <section>
                    <WorkHistoryItem company="StoneRiver" position="Communications Escalations Specialist" dates=" 2017-2018"
                        responsibility1="Outbound Calls"
                        responsibility2="Mentor Peers"
                        responsibility3="Collect dollas" />
                </section>


            </div>
        )

    }
}
export default WorkHistoryPage;