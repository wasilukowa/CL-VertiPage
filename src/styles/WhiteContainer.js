import styled from "styled-components";

const WhiteContainer = styled.div`
    background-color: white;
    border-radius: 6px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    text-align: center;
    box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.05);
    @media (min-width: 730px) {
        padding: 40px;
    };
    @media (min-width: 980px) {
        /* max-width: 960px; */
        /* margin: 0 auto; */
    }

    @media (min-width: 980px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 66px;
        text-align: left;
    };
`;

export default WhiteContainer;