import Badge from 'react-bootstrap/Badge';

const GenreBadge = ({someInfo}) => {
    return (
        <span>
            <Badge bg="success">{someInfo}</Badge>
        </span>
    )
}

export {
    GenreBadge
}