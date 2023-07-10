import { gql } from "@apollo/client";

const GET_HOME_DTA = gql`
query Home {
    home(where: {slug: "home"}) {
        logo
        navigations {
            name
        }
        tittle {
            text
        }
        dashes {
            url
        }
        description
        orchestra {
            url
        }
        cards {
            instrument {
            url
            }
            name
            description
            arrow {
            url
            }
        }
        }
    }
`;

export default GET_HOME_DTA;