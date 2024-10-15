import FancyText from './components/FancyText';
import InspirationGenerator from './components/InspirationGenerator';
import Copyright from './components/Copyright';


export default function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2024} />
      </InspirationGenerator>
    </>
  );
}










// import StyledBox from './components/simpleStyle';
// import Car from './components/Car';

      {/* <StyledBox>
        <p>Styled components can style static text</p>
        <p>or information passed into components  </p>
      </StyledBox> */}
