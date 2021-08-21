// import { Container, Table } from 'react-bootstrap';
import Paragraph from '../../Atom/Paragraph';
import Title from '../../Atom/Title';

let Content = (props) => {
    return (
        <div className="content">
            <Title text={props.title}></Title>
            <Paragraph text={props.text}></Paragraph>
        </div>
    )
}

export default Content;