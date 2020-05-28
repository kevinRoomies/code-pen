import React, {Component} from "react";
import CompanyPageContainer from "./StyledCompanyPage";
import Box from "../components/Box";
import news from "../assets/placeholders/news.png";
import projects from "../assets/placeholders/project.png";
import this_week from "../assets/placeholders/this_week_company.png";
import employees_posts from "../assets/placeholders/employees_posts.png";

class CompanyPage extends Component {
    render() {
        return (
            <CompanyPageContainer>
                <Box direction={"column"} flex={"4"}>
                    <Box direction={"column"} justify={"center"} align={"center"} flex={"2"}>
                        <p>{"Hi {user}!"}</p>
                        <p>{"Check out {company}'s today's news!"}</p>
                    </Box>
                    {/* Replace the box below with company's news component */}
                    <Box justify={"center"} align={"center"} flex={"4"}>
                        <img src={news} alt={""}/>
                    </Box>
                    <Box direction={"row"} flex={"4"}>
                        {/* Replace the box below with company's projects component */}
                        <Box flex={"1"}>
                            <img src={projects} alt={""}/>
                        </Box>
                        {/* Replace the box below with toolbox component */}
                        <Box justify={"center"} flex={"1"}>
                            <img src={this_week} alt={""} style={{marginTop: "0.5rem"}}/>
                        </Box>
                    </Box>
                </Box>
                {/* Replace the box below with employee's posts component */}
                <Box direction={"column"} align={"center"} flex={"1"}>
                    <img src={employees_posts} alt={""}/>
                </Box>
            </CompanyPageContainer>
        );
    }
}

export default CompanyPage;