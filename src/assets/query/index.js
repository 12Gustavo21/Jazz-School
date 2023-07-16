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
        typeOfSchool
    }
}
`;

export default GET_HOME_DTA;