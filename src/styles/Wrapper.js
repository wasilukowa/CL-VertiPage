import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 730px){
    padding: 50px;
  }
  @media (min-width: 980px){
    padding: 5px;
    width: 960px;
  }
  @media (min-width: 1280px){
    width: 1200px;
  }
`;

export default Wrapper;