import { Parallax } from 'react-parallax';


const Cover = ({menuImg, title}) => {
  return (
    <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={menuImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Dining out is convenient, particularly if you live near a variety of restaurants. While it may be less expensive to cook your own meals, dining out occasionally is a welcome treat. It might also inspire recipe ideas you can try at home.</p>

                    </div>
                </div>
            </div>
        </Parallax>
  );
};

export default Cover;
