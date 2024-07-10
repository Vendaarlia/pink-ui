type UseSubheroProps = {
    title: string;
    subtitle: string;
    description: string;
  };
  
  const useSubhero = ({ title, subtitle, description }: UseSubheroProps) => {
    const getTitleContent = () => title;
    const getSubtitleContent = () => subtitle;
    const getDescriptionContent = () => description;
  
    return {
      getTitleContent,
      getSubtitleContent,
      getDescriptionContent,
    };
  };
  
  export default useSubhero;
  