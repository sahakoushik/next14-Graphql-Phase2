import React from 'react'
import client from '@/app/graphQL/apolloClient'
import { GET_CONFERENCE_BY_ID } from '@/app/graphQL/queries'
import ConferenceWrapper from '@/app/components/ConferenceWrapper';
interface Props {
    params: {
        id: String
    }; 
}

const ConferenceID: React.FC<Props> = async ({ params }) => {
    
    try {
        const { data,errors } = await client.query({
            query: GET_CONFERENCE_BY_ID,
            variables: { id: params.id },
        });
        if (data) {
            return (
                
                <div className='-mt-24 py-48 px-6 md:px-32 bg-white'>
                    {
                        data.conference ?
                        <ConferenceWrapper conferenceDetails={data.conference}/>
                        :
                        <div>Loading</div>
                    }
                    
                </div>
            );
        }
        if(errors){
            console.error('GraphQL errors:', errors);
            console.log('errors:', errors);
        }
        console.log("data", data);
    } catch (error) {
        console.error('Error fetching conference data:', error);
    }
}

export default ConferenceID