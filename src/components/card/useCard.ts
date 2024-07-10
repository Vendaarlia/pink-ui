type UseCardProps = {
    title: string;
    textOne: string;
    textTwo: string;
    imageSrc: string;
};

const useCard = ({ title, textOne, textTwo, imageSrc }: UseCardProps) => {
    const getTitle = () => title;
    const getTextOne = () => textOne;
    const getTextTwo = () => textTwo;

    return {
        getTitle,
        getTextOne,
        getTextTwo,
    };
};

export default useCard;
