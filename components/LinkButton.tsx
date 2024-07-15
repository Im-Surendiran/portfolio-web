const LinkButton = ({ href:any, text:any }) => {
    return (
      <a
        href={href}
        className="bg-white border-2 border-black-600 text-black font-bold py-2 px-4 rounded-full inline-block transition duration-300 transform hover:scale-110"
        download
      >
        {text}
      </a>
    );
  };
  
  export default LinkButton;
  