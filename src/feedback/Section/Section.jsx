import { SectionVar, MainTitle } from "./Section.styled";
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    const section =
        <SectionVar>
            {title && <MainTitle>{title}</MainTitle>}
            {children}
        </SectionVar>;
    return section;
}

Section.propType = {
    title: PropTypes.string,
    children: PropTypes.node,
}