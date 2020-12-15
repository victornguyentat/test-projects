import React from 'react';
import {Image,Form, FormField, TextInput , Button,  Box} from 'grommet';
import { useHistory } from "react-router-dom";


function AddConfluencePage(props) {

    const [value, setValue] = React.useState({});

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

                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => { history.push("/")}}
                    >
                    <FormField name="name" htmlfor="text-input-id" label="Confluence URL">
                        <TextInput id="text-input-id" name="name" />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button color="#199CD8" type="submit" primary label="Submit" />
                        <Button color="#199CD8" type="reset" label="Reset" />
                    </Box>
                </Form>
                
            </Box>
        </Box>
    </>
    );

}

export default AddConfluencePage;