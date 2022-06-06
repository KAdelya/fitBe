import { animated, easings, useSpring } from 'react-spring';

const Skeleton = () => {
    const { background } = useSpring({
        from: {
            background: 'linear-gradient(146deg, #7a7a7a 10%, #fff 90%, #fafafa 100%)'
        },
        to: {
            background: 'linear-gradient(146deg, #fff 10%, #d9d9d9 55%, #8f8f8f 100%)'
        },
        config: {
            duration: 300,
            easing: easings.easeInOutQuart,
        },
        loop: { reverse: true },
    });
    return (
        <><animated.div style={{ background, width: 352, height: 352, borderRadius: 1000, }} /></>
    );
};

export default Skeleton;