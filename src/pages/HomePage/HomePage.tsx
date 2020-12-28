import { Heading } from '@chakra-ui/react';
import React from 'react';
import constants from '../../utils/constants';

function Home() {
    return (
        <Heading>{constants.greeting}</Heading>
    );
}

export default Home;
