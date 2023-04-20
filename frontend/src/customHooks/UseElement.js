import { Element } from "react-scroll";

const UseElement = ({nameOfTheComponent, component}) => {

    return(
        <Element name={nameOfTheComponent}>
            {component}
        </Element>
    );
}

export default UseElement;