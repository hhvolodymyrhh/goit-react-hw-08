import { useDispatch, useSelector } from 'react-redux';


const HomePage  = () => {

  return (
     <div style={styles.container}>
        <h1 style={styles.title}>
          Phone manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
  );
};

export default HomePage ;