import { gql } from "@apollo/client";

const CARD_FRAGMENT = gql`
    fragment CardFields on Card {
        instrument {
        url
        }
        name
        description
        arrow {
        url
        }
    }
`;

const GET_HOME_DATA = gql`
    query Home {
        home(where: { slug: "home" }) {
            logo
            navigations {
                name
            }
            title {
                text
            }
            description
            orchestra {
                url
            }
            cards {
                ...CardFields
            }
            typeOfSchool
        }
    }
    ${CARD_FRAGMENT}
`;

export default GET_HOME_DATA;
