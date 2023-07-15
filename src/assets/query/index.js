import { gql } from "@apollo/client";

const GET_HOME_DTA = gql`
query Home {
    home(where: {slug: "home"}) {
        logo
            navigations {
                name
        }
        title {
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
        arrowCurve {
            url
        }
        typeOfSchool
    }
}
`;

export default GET_HOME_DTA;