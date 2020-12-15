import React from 'react';
import {Image, Button,  Box} from 'grommet';
import { useHistory } from "react-router-dom";


function FrontPage(props) {

    const history = useHistory();

    return(
    <>
        <Box fill gap="xsmall" background="url(/Background.png)">
            <Box fill gap="xsmall" align="center" justify="center" animation="fadeIn">
                <Box>
                    <Image
                        src="PEICA_logo.png"
                        fit="contain"
                    />
                </Box>
                <Button color="#199CD8" alignSelf="center" primary label="Add Confluence Page" onClick={() => history.push('/addConfluencePage')}></Button>
                <Button color="#199CD8" alignSelf="center" primary label="Go To ChatBot" onClick={() => history.push('/chatbot')}></Button>
            </Box>
        </Box>
    </>
    );

}

export default FrontPage;