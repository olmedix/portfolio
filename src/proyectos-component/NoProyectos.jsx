import { useNavigate } from 'react-router-dom';

export default function NoProyectos() {
    const navigate = useNavigate();

    const styles = {
        container: {
            textAlign: 'center',
            color: 'white',
            padding: '50px',
        },
        heading: {
            fontSize: '2rem',
            marginBottom: '20px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            color: 'white',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>No hay proyectos </h2>
            <button
                style={styles.button}
                onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                onClick={() => navigate('/')}
            >
                Volver
            </button>
        </div>
    );
}