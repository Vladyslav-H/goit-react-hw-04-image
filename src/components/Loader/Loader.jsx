import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#FFD100"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle={{
        position: 'absolute',
        justifyContent: 'center',
        transform: 'translate(-50%,-50%)',
        top: '50vh',
        left: '50%'
      }}
      visible={true}
    />
  );
};

export default Loader;
