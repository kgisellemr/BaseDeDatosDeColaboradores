import Alert from 'react-bootstrap/Alert';

const AppAlert = (props) => {
    return (
        <div className='alert-container'>
            <Alert variant={props.type}>
                {props.message}
            </Alert>
        </div>
    )
}

export default AppAlert;